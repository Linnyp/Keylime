/*
 * KeyLime — Missed-Call Revenue Widget (hero-embed standalone)
 *
 * Self-contained interactive card on a dark surface. Three editable inputs,
 * live monthly-loss recalculation. Design tokens inline (Citrus & Charcoal —
 * the dark-surface group at the bottom of `t`). No external deps —
 * safe to lift into a Webflow Custom Code embed by re-implementing as vanilla
 * later.
 *
 * Formula:
 *   monthlyLoss = missedCallsPerWeek × WEEKS_PER_MONTH × avgJobValue × closeRate
 *
 * Defaults preserve the static mockup values (12 calls/wk · $300 job · 50%).
 */

"use client";

import { useId, useMemo, useState, type CSSProperties } from "react";

const WEEKS_PER_MONTH = 4.33;

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
} as const;

/* ─── Public props ────────────────────────────────────────────────────────── */
export interface MissedCallWidgetProps {
  /** Initial missed calls per week. Default 12. */
  initialCallsPerWeek?: number;
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
  value: number;
  onChange: (next: number) => void;
  min: number;
  max: number;
  prefix?: string;
  suffix?: string;
  step?: number;
  decimals?: number;
}

function FieldRow({
  label,
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
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [draft, setDraft] = useState<string>(value.toFixed(decimals));

  // Keep the draft in sync if parent changes value externally.
  // (We only resync when not focused so we don't fight the user's typing.)
  if (!focused && draft !== value.toFixed(decimals)) {
    // intentional state-during-render guard — safe because both sides are strings
    // and we only resync on blur transitions.
  }

  const rowBg = focused || hovered ? t.surfaceHover : "transparent";
  const underline = focused ? t.accent : t.surfaceBorder;

  return (
    <label
      htmlFor={id}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        paddingInline: 10,
        paddingBlock: 10,
        borderRadius: 10,
        backgroundColor: rowBg,
        transition: "background-color 150ms ease",
        cursor: "text",
      }}
    >
      <span
        style={{
          fontFamily: t.font,
          fontSize: 13,
          fontWeight: 400,
          letterSpacing: t.tracking,
          color: t.onSurfaceMuted,
          lineHeight: 1.4,
          flex: 1,
          minWidth: 0,
        }}
      >
        {label}
      </span>

      <span
        style={{
          display: "inline-flex",
          alignItems: "baseline",
          gap: 2,
          borderBottom: `1.5px solid ${underline}`,
          paddingBottom: 2,
          transition: "border-color 150ms ease",
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
          onFocus={() => {
            setFocused(true);
            setDraft(value.toFixed(decimals));
          }}
          onBlur={() => {
            setFocused(false);
            const parsed = parseFloat(draft.replace(/[^0-9.]/g, ""));
            const next = clampNumber(parsed, min, max);
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
              onChange(clampNumber(value + step, min, max));
            }
            if (e.key === "ArrowDown") {
              e.preventDefault();
              onChange(clampNumber(value - step, min, max));
            }
          }}
          aria-label={label}
          style={{
            width: `${Math.max(String(max).length + decimals, 3) * 11}px`,
            border: "none",
            outline: "none",
            background: "transparent",
            textAlign: "right",
            fontFamily: t.font,
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: t.tracking,
            color: t.onSurface,
            caretColor: t.accent,
            lineHeight: 1.2,
            padding: 0,
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
    </label>
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
  initialCallsPerWeek = 12,
  initialJobValue = 300,
  initialCloseRate = 50,
  eyebrow = "Estimated monthly loss calculator",
  maxWidth,
  ctaHref = "/calculators/missed-call-revenue",
  ctaLabel = "Calculate Total Losses",
}: MissedCallWidgetProps) {
  const [callsPerWeek, setCallsPerWeek] = useState(initialCallsPerWeek);
  const [jobValue, setJobValue] = useState(initialJobValue);
  const [closeRate, setCloseRate] = useState(initialCloseRate);

  const monthlyLoss = useMemo(() => {
    return callsPerWeek * WEEKS_PER_MONTH * jobValue * (closeRate / 100);
  }, [callsPerWeek, jobValue, closeRate]);

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

  return (
    <div style={cardStyle} role="group" aria-label="Missed-call revenue estimator">
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
            style={{
              width: 5,
              height: 5,
              borderRadius: "50%",
              backgroundColor: t.accent,
              display: "inline-block",
            }}
          />
          Live
        </span>
      </div>

      {/* Big result */}
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
      >
        {currency.format(Math.round(monthlyLoss))}
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

      {/* Three inputs */}
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <FieldRow
          label="Missed calls / wk"
          value={callsPerWeek}
          onChange={setCallsPerWeek}
          min={0}
          max={500}
        />
        <FieldRow
          label="Avg job value"
          value={jobValue}
          onChange={setJobValue}
          min={0}
          max={100000}
          prefix="$"
          step={25}
        />
        <FieldRow
          label="Close rate"
          value={closeRate}
          onChange={setCloseRate}
          min={0}
          max={100}
          suffix="%"
          step={5}
        />
      </div>

      {/* Footnote + CTA — the card closes on the action it earns. */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <span
          style={{
            fontFamily: t.font,
            fontSize: 11,
            letterSpacing: t.tracking,
            color: t.onSurfaceMuted,
            lineHeight: 1.4,
            marginTop: 2,
          }}
        >
          Estimate based on {WEEKS_PER_MONTH} weeks per month. Adjust any field
          to recalculate.
        </span>

        {ctaLabel && <CardCta href={ctaHref} label={ctaLabel} />}
      </div>
    </div>
  );
}

export default MissedCallWidget;
