/*
 * KeyLime — Missed-Call Revenue Widget (hero-embed standalone)
 *
 * Self-contained interactive card on a dark surface. Three editable inputs,
 * live monthly-loss recalculation. Design tokens inline (Citrus & Charcoal —
 * the dark-surface group at the bottom of `t`). No external deps —
 * safe to lift into a Webflow Custom Code embed by re-implementing as vanilla
 * later.
 *
 * Formula: shared with the full calculator's module 01 (see
 * data/estimatorHandoff.ts), in the same per-working-day units:
 *   recovered = dailyMissed × WORKING_DAYS × TEXT_BACK_RECOVERY × close × value
 * This is the amount missed-call text-back would recover, not the gross leak.
 *
 * Defaults match the calculator's own missed-call field (4 calls/day).
 */

"use client";

import { useId, useMemo, useState, type CSSProperties } from "react";

// Shared with the full calculator so the CTA handoff can't drift on units or
// param names. Plain constants/pure functions — nothing that would block a
// vanilla lift.
import {
  DAILY_MISSED_MAX,
  JOB_VALUE_MAX,
  missedCallLoss,
  snapClosingRate,
  withEstimatorParams,
} from "@/data/estimatorHandoff";

/* ─── Citrus & Charcoal tokens (mirrors styleguide.md §14) ─────────────────
 * Dark surface — the card runs inverted (dark bg, light text) so it reads as a
 * distinct object against the sand hero and the lime backdrop. Accent is the
 * brand lime #A4D639; the deep green #436C0E reads as mud on dark and is
 * deliberately absent here.
 */
const t = {
  font: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  tracking: "-0.03em",
  surface: "#1C1E1A",
  surfaceHover: "#292B26",
  surfaceBorder: "#3A3D36",
  onSurface: "#FFFFFF",
  onSurfaceMuted: "#A9ACA4",
  accent: "#A4D639",
  accentSoft: "rgba(164, 214, 57, 0.14)",
  shadowDark: "0 12px 26px 0 rgba(0, 0, 0, 0.32)",
  /* Input-field group — the editable chips read as recessed wells against the
     card surface so they're legible as form controls before any interaction. */
  fieldBg: "#141613",
  fieldBgHover: "#1F221D",
  fieldBorder: "#43473E",
  fieldBorderHover: "#6A7360",
  focusRing: "0 0 0 3px rgba(164, 214, 57, 0.22)",
} as const;

/* Keyframes + focus-visible rules. Kept in a single injected <style> so the
   component stays a self-contained lift (no globals.css dependency). */
const WIDGET_CSS = `
@keyframes kl-live-pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.45; transform: scale(0.8); }
}
@keyframes kl-result-bump {
  0% { color: ${t.accent}; }
  100% { color: ${t.onSurface}; }
}
@media (prefers-reduced-motion: reduce) {
  .kl-live-dot, .kl-result { animation: none !important; }
}
`;

/* ─── Public props ────────────────────────────────────────────────────────── */
export interface MissedCallWidgetProps {
  /** Initial missed calls per working day. Default 4. */
  initialDailyMissed?: number;
  /** Initial average job/appointment value (USD). Default 300. */
  initialJobValue?: number;
  /** Initial closing rate as a percentage 0–100. Default 50. */
  initialCloseRate?: number;
  /** Optional small label above the result. */
  eyebrow?: string;
  /** Optional max-width cap (px). Unset = fill the parent. */
  maxWidth?: number;
  /** Destination for the in-card CTA at the bottom. */
  ctaHref?: string;
  /** Label for the in-card CTA. Pass `null` to render the card without one. */
  ctaLabel?: string | null;
}

/* ─── Helpers ─────────────────────────────────────────────────────────────── */
const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

function clampNumber(v: number, min: number, max: number) {
  if (Number.isNaN(v)) return min;
  return Math.min(Math.max(v, min), max);
}

/* ─── Input row ───────────────────────────────────────────────────────────── */
interface FieldRowProps {
  label: string;
  /** One-line plain-English gloss shown under the row. Wired to the input via
      aria-describedby, so screen readers announce it after the label. */
  hint?: string;
  /** Settles a committed value onto an allowed one (steppers, arrows, blur).
      Left off during free typing so the live total tracks what's on screen. */
  snap?: (value: number) => number;
  value: number;
  onChange: (next: number) => void;
  min: number;
  max: number;
  prefix?: string;
  suffix?: string;
  step?: number;
  decimals?: number;
}

/* Stepper button — the clearest "this number is yours to change" signal on
   touch, where hover states never fire. Always visible, not hover-revealed. */
function Stepper({
  dir,
  onClick,
  disabled,
  label,
}: {
  dir: "up" | "down";
  onClick: () => void;
  disabled: boolean;
  label: string;
}) {
  const [hovered, setHovered] = useState(false);
  const active = hovered && !disabled;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      tabIndex={-1}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 22,
        height: 22,
        flexShrink: 0,
        padding: 0,
        borderRadius: 6,
        border: "none",
        backgroundColor: active ? t.accent : "rgba(255, 255, 255, 0.06)",
        color: active ? t.surface : t.onSurfaceMuted,
        opacity: disabled ? 0.3 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "background-color 120ms ease, color 120ms ease",
        lineHeight: 0,
      }}
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        aria-hidden
      >
        <path d="M5 12h14" />
        {dir === "up" && <path d="M12 5v14" />}
      </svg>
    </button>
  );
}

function FieldRow({
  label,
  hint,
  snap,
  value,
  onChange,
  min,
  max,
  prefix,
  suffix,
  step = 1,
  decimals = 0,
}: FieldRowProps) {
  const id = useId();
  const hintId = `${id}-hint`;

  /* Clamp, then settle onto an allowed value. Used everywhere a value is
     committed so the field and its parent can never disagree. */
  const commit = (next: number) => {
    const clamped = clampNumber(next, min, max);
    return snap ? snap(clamped) : clamped;
  };
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [draft, setDraft] = useState<string>(value.toFixed(decimals));

  const chipBorder = focused
    ? t.accent
    : hovered
      ? t.fieldBorderHover
      : t.fieldBorder;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        paddingInline: 8,
        paddingBlock: 6,
        borderRadius: 10,
        backgroundColor: focused || hovered ? t.surfaceHover : "transparent",
        transition: "background-color 150ms ease",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <label
          htmlFor={id}
          style={{
            fontFamily: t.font,
            fontSize: 13,
            fontWeight: 400,
            letterSpacing: t.tracking,
            color: focused ? t.onSurface : t.onSurfaceMuted,
            lineHeight: 1.4,
            flex: 1,
            minWidth: 0,
            cursor: "text",
            transition: "color 150ms ease",
          }}
        >
          {label}
        </label>

        {/* Editable well — bordered, filled, and stepper-flanked so it reads as
            a control at rest rather than as static text. */}
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
            paddingInline: 5,
            paddingBlock: 4,
            borderRadius: 9,
            border: `1px solid ${chipBorder}`,
            backgroundColor: focused || hovered ? t.fieldBgHover : t.fieldBg,
            boxShadow: focused ? t.focusRing : "none",
            transition:
              "border-color 150ms ease, background-color 150ms ease, box-shadow 150ms ease",
          }}
        >
          <Stepper
            dir="down"
            label={`Decrease ${label}`}
            disabled={value <= min}
            onClick={() => onChange(commit(value - step))}
          />

          <span
            style={{
              display: "inline-flex",
              alignItems: "baseline",
              justifyContent: "flex-end",
              gap: 1,
              paddingInline: 2,
              cursor: "text",
            }}
          >
            {prefix && (
              <span
                aria-hidden
                style={{
                  fontFamily: t.font,
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: t.tracking,
                  color: t.onSurface,
                  lineHeight: 1.2,
                }}
              >
                {prefix}
              </span>
            )}
            <input
              id={id}
              type="text"
              inputMode={decimals > 0 ? "decimal" : "numeric"}
              value={focused ? draft : value.toFixed(decimals)}
              onFocus={(e) => {
                setFocused(true);
                setDraft(value.toFixed(decimals));
                // Select-all on focus: one tap replaces the number instead of
                // landing a caret mid-digits.
                requestAnimationFrame(() => e.target.select());
              }}
              onBlur={() => {
                setFocused(false);
                const parsed = parseFloat(draft.replace(/[^0-9.]/g, ""));
                const next = commit(parsed);
                onChange(next);
                setDraft(next.toFixed(decimals));
              }}
              onChange={(e) => {
                const raw = e.target.value;
                // Allow free typing including empty; sanitize on blur.
                setDraft(raw);
                const parsed = parseFloat(raw.replace(/[^0-9.]/g, ""));
                if (!Number.isNaN(parsed)) {
                  onChange(clampNumber(parsed, min, max));
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  (e.target as HTMLInputElement).blur();
                }
                if (e.key === "ArrowUp") {
                  e.preventDefault();
                  const next = commit(value + step);
                  onChange(next);
                  setDraft(next.toFixed(decimals));
                }
                if (e.key === "ArrowDown") {
                  e.preventDefault();
                  const next = commit(value - step);
                  onChange(next);
                  setDraft(next.toFixed(decimals));
                }
              }}
              aria-label={label}
              aria-describedby={hint ? hintId : undefined}
              role="spinbutton"
              aria-valuemin={min}
              aria-valuemax={max}
              aria-valuenow={value}
              style={{
                width: `${Math.max(String(max).length + decimals, 2)}ch`,
                border: "none",
                outline: "none",
                background: "transparent",
                textAlign: "right",
                fontFamily: t.font,
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: t.tracking,
                color: t.onSurface,
                caretColor: t.accent,
                lineHeight: 1.2,
                padding: 0,
                cursor: "text",
              }}
            />
            {suffix && (
              <span
                aria-hidden
                style={{
                  fontFamily: t.font,
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: t.tracking,
                  color: t.onSurface,
                  lineHeight: 1.2,
                }}
              >
                {suffix}
              </span>
            )}
          </span>

          <Stepper
            dir="up"
            label={`Increase ${label}`}
            disabled={value >= max}
            onClick={() => onChange(commit(value + step))}
          />
        </span>
      </div>

      {/* Gloss under the row — sits full-width beneath both the label and the
          input well, so it reads as describing the pair rather than either one. */}
      {hint && (
        <span
          id={hintId}
          style={{
            fontFamily: t.font,
            fontSize: 11,
            fontWeight: 400,
            letterSpacing: t.tracking,
            color: t.onSurfaceMuted,
            lineHeight: 1.35,
            opacity: 0.85,
          }}
        >
          {hint}
        </span>
      )}
    </div>
  );
}

/* ─── In-card CTA ─────────────────────────────────────────────────────────── */
/* Plain anchor with inline styles, like the rest of this file, so the card
   stays a self-contained lift. Sized shorter than the global `.wf-btn` pill —
   the card is a narrow column in the hero and a 52px button crowds it. */
function CardCta({ href, label }: { href: string; label: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        minHeight: 44,
        paddingInline: 18,
        borderRadius: 80,
        backgroundColor: hovered ? "#8FC22B" : t.accent,
        color: t.surface,
        fontFamily: t.font,
        fontSize: 13,
        fontWeight: 700,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        textDecoration: "none",
        textAlign: "center",
        lineHeight: 1.25,
        boxShadow: hovered
          ? "0 4px 14px 0 rgba(164, 214, 57, 0.28)"
          : "0 1px 4px 0 rgba(164, 214, 57, 0.2)",
        transition:
          "background-color 150ms ease, box-shadow 150ms ease, transform 300ms ease",
        transform: hovered ? "translateY(-2px)" : "none",
      }}
    >
      {label}
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
        style={{ flexShrink: 0 }}
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </a>
  );
}

/* ─── Widget ──────────────────────────────────────────────────────────────── */
export function MissedCallWidget({
  initialDailyMissed = 4,
  initialJobValue = 300,
  initialCloseRate = 50,
  eyebrow = "Estimated monthly loss calculator",
  maxWidth,
  ctaHref = "/calculators/missed-call-revenue",
  ctaLabel = "Calculate Total Losses",
}: MissedCallWidgetProps) {
  const [dailyMissed, setDailyMissed] = useState(initialDailyMissed);
  const [jobValue, setJobValue] = useState(initialJobValue);
  const [closeRate, setCloseRate] = useState(initialCloseRate);

  /* The shared formula, on the shared units — so the number here is exactly the
     one the calculator's module 01 will show. */
  const monthlyLoss = useMemo(
    () => missedCallLoss(dailyMissed, closeRate, jobValue),
    [dailyMissed, jobValue, closeRate],
  );

  const ctaTarget = useMemo(
    () => withEstimatorParams(ctaHref, { dailyMissed, jobValue, closeRate }),
    [ctaHref, dailyMissed, jobValue, closeRate],
  );

  const cardStyle: CSSProperties = {
    width: "100%",
    maxWidth: maxWidth ?? "none",
    height: "100%",
    backgroundColor: t.surface,
    borderRadius: 20,
    padding: 24,
    boxShadow: t.shadowDark,
    border: `1px solid ${t.surfaceBorder}`,
    display: "flex",
    flexDirection: "column",
    // gap is the floor; when the parent stretches the card taller (hero
    // desktop column), space-between absorbs the extra height evenly.
    justifyContent: "space-between",
    gap: 14,
    fontFamily: t.font,
    boxSizing: "border-box",
  };

  const roundedLoss = Math.round(monthlyLoss);

  return (
    <div style={cardStyle} role="group" aria-label="Missed-call revenue estimator">
      <style dangerouslySetInnerHTML={{ __html: WIDGET_CSS }} />

      {/* Eyebrow */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 8,
        }}
      >
        <span
          style={{
            fontFamily: t.font,
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: t.tracking,
            color: t.accent,
            textTransform: "uppercase",
            lineHeight: 1,
          }}
        >
          {eyebrow}
        </span>
        <span
          aria-hidden
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            paddingInline: 8,
            paddingBlock: 4,
            backgroundColor: t.accentSoft,
            borderRadius: 80,
            fontFamily: t.font,
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            color: t.accent,
            lineHeight: 1,
          }}
        >
          <span
            className="kl-live-dot"
            style={{
              width: 5,
              height: 5,
              borderRadius: "50%",
              backgroundColor: t.accent,
              display: "inline-block",
              animation: "kl-live-pulse 2s ease-in-out infinite",
            }}
          />
          Live
        </span>
      </div>

      {/* Big result — remounts on every new total so the accent bump fires,
          confirming the card actually responded to the edit. */}
      <div
        style={{
          fontFamily: t.font,
          fontSize: 40,
          fontWeight: 700,
          letterSpacing: t.tracking,
          color: t.onSurface,
          lineHeight: 1,
          display: "flex",
          alignItems: "baseline",
          gap: 4,
        }}
        aria-live="polite"
      >
        <span
          key={roundedLoss}
          className="kl-result"
          style={{ animation: "kl-result-bump 600ms ease-out" }}
        >
          {currency.format(roundedLoss)}
        </span>
        <span
          style={{
            fontSize: 18,
            color: t.onSurfaceMuted,
            fontWeight: 500,
            letterSpacing: t.tracking,
          }}
        >
          /mo
        </span>
      </div>

      {/* Divider */}
      <div
        style={{
          height: 1,
          backgroundColor: t.surfaceBorder,
          marginBlock: 2,
        }}
        aria-hidden
      />

      {/* Three inputs — headed so the group is unmistakably the editable part
          of the card, not a static breakdown of the number above. */}
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            paddingInline: 8,
            marginBottom: 4,
            fontFamily: t.font,
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: t.onSurfaceMuted,
            lineHeight: 1,
          }}
        >
          <svg
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
            style={{ flexShrink: 0, color: t.accent }}
          >
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
          </svg>
          Your numbers — edit any field
        </div>

        {/* Bounds come from the shared module so a value entered here is always
            one the calculator's own field would accept. */}
        <FieldRow
          label="Missed calls / day"
          hint="Calls that ring out, hit voicemail, or come in after hours."
          value={dailyMissed}
          onChange={setDailyMissed}
          min={0}
          max={DAILY_MISSED_MAX}
        />
        <FieldRow
          label="Avg job value"
          hint="What one typical booked job is worth to you."
          value={jobValue}
          onChange={setJobValue}
          min={0}
          max={JOB_VALUE_MAX}
          prefix="$"
          step={25}
        />
        {/* Snapped to the full calculator's dropdown options: an in-between
            rate here would be rounded on arrival and the two totals would
            disagree. */}
        <FieldRow
          label="Close rate"
          hint="Share of answered calls that become paying work."
          value={closeRate}
          onChange={setCloseRate}
          snap={snapClosingRate}
          min={0}
          max={100}
          suffix="%"
          step={10}
        />
      </div>

      {/* CTA — the card closes on the action it earns. The current three
          numbers ride along as query params so the full calculator opens
          pre-filled instead of asking for them a second time. */}
      {ctaLabel && <CardCta href={ctaTarget} label={ctaLabel} />}
    </div>
  );
}

export default MissedCallWidget;
