"use client";

import { useMemo, useState, type ReactNode } from "react";

/* ─────────────────────────────────────────────────────────────────────────────
 * Revenue Loss Calculator — KeyLime demo
 *
 * Three loss vectors that each map to a KeyLime service:
 *   1) Missed Calls          → Missed-Call Text-Back (Speed-to-Lead)
 *   2) Reputation            → Reputation Management
 *   3) Digital response time → Speed-to-Lead (form / SMS / DM auto-response)
 *
 * Channel separation prevents double-counting. Each module shows its math
 * in a "How we calculate this" expander so the burned-by-agencies prospect
 * can audit the numbers themselves.
 * ──────────────────────────────────────────────────────────────────────────── */

type Industry = "homeServices" | "beauty";

const industryConfig: Record<
  Industry,
  {
    label: string;
    callsLabel: string;
    callsHelp: string;
    valueLabel: string;
    valueHelp: string;
    valuePlaceholder: number;
    inquiriesLabel: string;
    inquiriesHelp: string;
    closingLabel: string;
    closingHelp: string;
    monthlyRevenueHelp: string;
  }
> = {
  homeServices: {
    label: "Home services",
    callsLabel: "Daily missed service calls",
    callsHelp:
      "Calls that ring through during business hours and nobody picks up.",
    valueLabel: "Average job value",
    valueHelp: "Typical revenue from one completed job.",
    valuePlaceholder: 350,
    inquiriesLabel: "Daily form / SMS / email inquiries",
    inquiriesHelp:
      "Digital lead volume — web form fills, text messages, email inquiries.",
    closingLabel: "Closing rate on inbound leads",
    closingHelp: "Of the leads you actually reach, how many become jobs.",
    monthlyRevenueHelp:
      "Your typical monthly revenue. Used for the reputation calculation only.",
  },
  beauty: {
    label: "Beauty & personal services",
    callsLabel: "Daily missed booking calls",
    callsHelp:
      "Booking calls that ring during business hours and go unanswered.",
    valueLabel: "Average ticket value",
    valueHelp: "Typical revenue from one client appointment.",
    valuePlaceholder: 120,
    inquiriesLabel: "Daily DM / form / SMS inquiries",
    inquiriesHelp:
      "Digital lead volume — Instagram DMs, web form fills, text messages.",
    closingLabel: "Booking rate on inbound leads",
    closingHelp:
      "Of the leads you actually reach, how many book an appointment.",
    monthlyRevenueHelp:
      "Your typical monthly revenue. Used for the reputation calculation only.",
  },
};

/* ── Calculation helpers ──────────────────────────────────────────────────── */

const WORKING_DAYS_PER_MONTH = 22; // voice channel — business hours
const DIGITAL_DAYS_PER_MONTH = 30; // digital channels — always-on

// Conservative blended recovery rate for missed-call text-back.
// Industry data: ~35–50% engage with the text, ~50–70% of engaged convert.
// Blended midpoint ≈ 22%.
const TEXT_BACK_RECOVERY_RATE = 0.22;

function missedCallLoss(
  dailyMissed: number,
  closingRatePct: number,
  avgValue: number,
): number {
  const monthlyMissed = dailyMissed * WORKING_DAYS_PER_MONTH;
  const recoverableJobs =
    monthlyMissed * TEXT_BACK_RECOVERY_RATE * (closingRatePct / 100);
  return recoverableJobs * avgValue;
}

// Luca (Harvard Business School, 2016) review-count buckets.
// % revenue lift per full star, by current review volume.
function reviewBucketPct(reviewCount: number): number {
  if (reviewCount < 11) return 0.053;
  if (reviewCount < 21) return 0.063;
  if (reviewCount < 31) return 0.068;
  if (reviewCount < 41) return 0.07;
  if (reviewCount < 51) return 0.071;
  return 0.08;
}

function reputationLoss(
  currentRating: number,
  currentReviews: number,
  monthlyRevenue: number,
  targetRating: number,
  targetReviews: number,
): { rating: number; volume: number; total: number } {
  const currentBucket = reviewBucketPct(currentReviews);
  const targetBucket = reviewBucketPct(targetReviews);

  // Lever 1: lift from raising the rating, using current review bucket
  const ratingDelta = Math.max(0, targetRating - currentRating);
  const ratingImpact = ratingDelta * currentBucket * monthlyRevenue;

  // Lever 2: lift from raising review volume.
  // Luca's within-restaurant finding: same restaurant becomes more
  // rating-sensitive as it accumulates reviews. We apply the bucket-pct
  // delta to a normalized "above-3-star" scale to keep the lever
  // conservative and diminishing past 50 reviews.
  const aboveBaseline = Math.max(0, currentRating - 3) / 2; // 3→0, 5→1
  const volumeImpact =
    Math.max(0, targetBucket - currentBucket) * monthlyRevenue * aboveBaseline;

  return {
    rating: ratingImpact,
    volume: volumeImpact,
    total: ratingImpact + volumeImpact,
  };
}

// Response-time → conversion-factor curve, derived from Oldroyd (MIT) and
// the Harvard "Short Life of Online Sales Leads" study.
// Conservative dampening applied — qualification drops ~21× from 5 min to
// 30 min in the source data; we model conversion drops as ~6× to keep the
// number defensible.
function responseConversionFactor(minutes: number): number {
  if (minutes <= 5) return 1.0;
  if (minutes <= 30) return 0.7;
  if (minutes <= 60) return 0.5;
  if (minutes <= 240) return 0.35;
  if (minutes <= 1440) return 0.2;
  return 0.1;
}

function speedToLeadLoss(
  dailyInquiries: number,
  closingRatePct: number,
  avgValue: number,
  responseMinutes: number,
): number {
  const monthlyInquiries = dailyInquiries * DIGITAL_DAYS_PER_MONTH;
  const potential = monthlyInquiries * (closingRatePct / 100) * avgValue;
  const factor = responseConversionFactor(responseMinutes);
  return potential * (1 - factor);
}

// Realistic 6–12 month review-count target with automated post-job/appointment
// review requests. Additive growth dampens at both extremes:
//   - Very low review counts get a leapfrog floor (escape the weakest Luca bucket)
//   - High review counts grow more slowly (diminishing achievable lift)
function realisticTargetReviews(current: number): number {
  if (current < 10) return 60;
  if (current < 30) return current + 60;
  if (current < 100) return current + 75;
  if (current < 250) return current + 70;
  return current + 50;
}

/* ── Formatters ───────────────────────────────────────────────────────────── */

const fmtMoney = (n: number) =>
  n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

/* ── Component ────────────────────────────────────────────────────────────── */

export function RevenueCalculator() {
  const [industry, setIndustry] = useState<Industry>("homeServices");

  // Module 1 — missed calls
  const [dailyMissed, setDailyMissed] = useState(4);
  const [closingRate, setClosingRate] = useState(40);
  const [avgValue, setAvgValue] = useState(350);

  // Module 2 — reputation
  const [currentRating, setCurrentRating] = useState(4.2);
  const [currentReviews, setCurrentReviews] = useState(35);
  const [monthlyRevenue, setMonthlyRevenue] = useState(50000);
  const [targetRating, setTargetRating] = useState(4.7);
  const targetReviews = realisticTargetReviews(currentReviews);

  // Module 3 — speed to lead
  const [dailyInquiries, setDailyInquiries] = useState(3);
  const [responseMinutes, setResponseMinutes] = useState(240);

  // Sync placeholder default value when industry switches (only if user hasn't customized).
  const cfg = industryConfig[industry];

  const missed = useMemo(
    () => missedCallLoss(dailyMissed, closingRate, avgValue),
    [dailyMissed, closingRate, avgValue],
  );

  const reputation = useMemo(
    () =>
      reputationLoss(
        currentRating,
        currentReviews,
        monthlyRevenue,
        targetRating,
        targetReviews,
      ),
    [
      currentRating,
      currentReviews,
      monthlyRevenue,
      targetRating,
      targetReviews,
    ],
  );

  const speed = useMemo(
    () => speedToLeadLoss(dailyInquiries, closingRate, avgValue, responseMinutes),
    [dailyInquiries, closingRate, avgValue, responseMinutes],
  );

  const monthlyTotal = missed + reputation.total + speed;
  const annualTotal = monthlyTotal * 12;
  const keyLimeMonthly = 195; // Growth tier
  const netMonthly = Math.max(0, monthlyTotal - keyLimeMonthly);
  const netAnnual = netMonthly * 12;

  return (
    <div className="bg-sand-50 pt-24 pb-32">
      <div className="mx-auto w-full max-w-[1200px] px-6">
        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <header className="mb-12 max-w-[820px]">
          <div className="mb-5 flex items-center gap-2.5 font-brand text-[11px] font-bold uppercase tracking-[0.15em] text-sand-700">
            <span className="inline-block h-1.5 w-6 bg-clay-500" />
            Free tool — Revenue leak audit
          </div>
          <h1 className="font-brand text-4xl font-black leading-[1.05] text-sand-950 sm:text-5xl md:text-6xl">
            See what your business is losing each month.
          </h1>
          <p className="mt-6 font-brand text-base leading-[1.65] text-sand-700 sm:text-lg">
            Missed calls. Slow reviews. Slow responses. Most local operators
            leak $20K–$80K a year through three holes they can't see. Punch in
            your numbers — see yours in under three minutes.
          </p>

          {/* Industry selector */}
          <div
            className="mt-8 inline-flex items-center gap-1 rounded-none border-2 border-sand-950 bg-sand-25 p-1"
            role="tablist"
            aria-label="Choose industry"
          >
            {(Object.keys(industryConfig) as Industry[]).map((key) => {
              const active = industry === key;
              return (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => {
                    setIndustry(key);
                    if (!active) {
                      setAvgValue(industryConfig[key].valuePlaceholder);
                    }
                  }}
                  className={`px-5 py-2.5 font-brand text-[12px] font-bold uppercase tracking-[0.08em] transition-colors duration-150 ${
                    active
                      ? "bg-sand-950 text-sand-50"
                      : "bg-transparent text-sand-950 hover:bg-sand-100"
                  }`}
                >
                  {industryConfig[key].label}
                </button>
              );
            })}
          </div>
        </header>

        {/* ── Two-column layout: modules + sticky total ─────────────────── */}
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="flex flex-col gap-8">
            {/* Module 1 — Missed calls */}
            <Module
              num="01"
              title="Missed phone calls"
              tag="Voice channel"
              fix="Fixed by: Missed-Call Text-Back"
              subtotal={missed}
              methodology={
                <>
                  <p>
                    <strong>Formula:</strong> daily missed calls × 22 working
                    days × 22% recovery rate × your close rate × average value.
                  </p>
                  <p>
                    The 22% recovery rate is a conservative blend of public
                    text-back industry data: roughly 35–50% of recipients engage
                    with the automated text, and 50–70% of those engagements
                    convert. Midpoint ≈ 22%.
                  </p>
                  <p>
                    This is what you'd recover with text-back — not the gross
                    leak. The remaining 78% of missed calls would still go to a
                    competitor.
                  </p>
                </>
              }
            >
              <NumberField
                label={cfg.callsLabel}
                help={cfg.callsHelp}
                value={dailyMissed}
                onChange={setDailyMissed}
                min={0}
                max={50}
                suffix="/ day"
              />
              <PercentDropdownField
                label={cfg.closingLabel}
                help={cfg.closingHelp}
                value={closingRate}
                onChange={setClosingRate}
              />
              <NumberField
                label={cfg.valueLabel}
                help={cfg.valueHelp}
                value={avgValue}
                onChange={setAvgValue}
                min={0}
                step={10}
                prefix="$"
              />
            </Module>

            {/* Module 2 — Reputation */}
            <Module
              num="02"
              title="Google reputation gap"
              tag="Pre-inquiry visibility"
              fix="Fixed by: Reputation Management"
              subtotal={reputation.total}
              methodology={
                <>
                  <p>
                    <strong>Source:</strong> Luca,{" "}
                    <em>
                      Reviews, Reputation, and Revenue: The Case of Yelp.com
                    </em>{" "}
                    (Harvard Business School, 2016). One full star of rating
                    lifts revenue 5.3–8.0% — but the size of the effect depends
                    on how many reviews back it up.
                  </p>
                  <p>
                    <strong>Bucket scaling:</strong> &lt;10 reviews → 5.3%,
                    11–20 → 6.3%, 21–30 → 6.8%, 31–40 → 7.0%, 41–50 → 7.1%, 50+
                    → 8.0% per star. Findings were strongest for independent
                    operators — exactly the KeyLime profile.
                  </p>
                  <p>
                    <strong>Two levers shown separately:</strong> raising the
                    rating works inside your current review bucket; raising the
                    review count makes every star you have count for more.
                    Diminishing-returns shape past ~50 reviews.
                  </p>
                  <p className="text-sand-600">
                    Rating impact: {fmtMoney(reputation.rating)} / mo &middot;
                    Volume impact: {fmtMoney(reputation.volume)} / mo
                  </p>
                </>
              }
            >
              <NumberField
                label="Current Google rating"
                help="Your current average star rating, 1.0 to 5.0."
                value={currentRating}
                onChange={setCurrentRating}
                min={1}
                max={5}
                step={0.1}
                suffix="★"
              />
              <NumberField
                label="Current review count"
                help="Total Google reviews on your business profile today."
                value={currentReviews}
                onChange={setCurrentReviews}
                min={0}
                step={1}
              />
              <NumberField
                label="Monthly revenue"
                help={cfg.monthlyRevenueHelp}
                value={monthlyRevenue}
                onChange={setMonthlyRevenue}
                min={0}
                step={1000}
                prefix="$"
              />
              <NumberField
                label="Target rating"
                help="Realistic ceiling once Reputation Management is running. Default 4.7."
                value={targetRating}
                onChange={setTargetRating}
                min={1}
                max={5}
                step={0.1}
                suffix="★"
              />
              <ReadonlyField
                label="Realistic 6–12 month target reviews"
                value={`${targetReviews} reviews`}
                help="Auto-calculated from your current review count. Reflects what automated post-job review requests realistically generate — additive growth that dampens as you scale past 200+ reviews."
              />
            </Module>

            {/* Module 3 — Speed to Lead */}
            <Module
              num="03"
              title="Slow response to digital inquiries"
              tag="Digital channels"
              fix="Fixed by: Speed-to-Lead automation"
              subtotal={speed}
              methodology={
                <>
                  <p>
                    <strong>Sources:</strong> Oldroyd (MIT) — odds of qualifying
                    a lead drop 21× from 5 minutes to 30 minutes. Harvard{" "}
                    <em>Short Life of Online Sales Leads</em> — odds of contact
                    drop ~10× after the first hour.
                  </p>
                  <p>
                    <strong>Conservative dampening:</strong> we model conversion
                    drops as 6× (not 21×) to keep the number defensible.
                    Response-time conversion factors: &lt;5 min = 100%, ≤30 min
                    = 70%, ≤1 hr = 50%, ≤4 hr = 35%, ≤24 hr = 20%, &gt;24 hr =
                    10%.
                  </p>
                  <p>
                    <strong>Channel-only:</strong> this module covers digital
                    inquiries (form, SMS, DM, email). Voice missed calls are
                    counted separately in module 01 to avoid double-counting.
                  </p>
                </>
              }
            >
              <NumberField
                label={cfg.inquiriesLabel}
                help={cfg.inquiriesHelp}
                value={dailyInquiries}
                onChange={setDailyInquiries}
                min={0}
                max={100}
                suffix="/ day"
              />
              <ResponseTimeField
                value={responseMinutes}
                onChange={setResponseMinutes}
              />
              <ReadonlyField
                label="Close rate (from module 01)"
                value={`${closingRate}%`}
              />
              <ReadonlyField
                label={`${cfg.valueLabel} (from module 01)`}
                value={fmtMoney(avgValue)}
              />
            </Module>

            {/* Final results panel */}
            <div className="border-2 border-sand-950 bg-sand-950 p-8 text-sand-50 md:p-10">
              <div className="mb-6 flex items-center gap-2.5 font-brand text-[11px] font-bold uppercase tracking-[0.15em] text-clay-500">
                <span className="inline-block h-1.5 w-6 bg-clay-500" />
                Your revenue leak
              </div>
              <div className="grid gap-8 md:grid-cols-3">
                <ResultBlock
                  label="You're leaking"
                  monthly={monthlyTotal}
                  annual={annualTotal}
                  tone="leak"
                />
                <ResultBlock
                  label="KeyLime Growth tier"
                  monthly={keyLimeMonthly}
                  annual={keyLimeMonthly * 12}
                  tone="neutral"
                />
                <ResultBlock
                  label="What you'd net"
                  monthly={netMonthly}
                  annual={netAnnual}
                  tone="net"
                />
              </div>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#book"
                  className="inline-flex items-center justify-center gap-2.5 border-2 border-clay-500 bg-clay-500 px-7 py-4 font-brand text-[13px] font-bold uppercase tracking-[0.08em] text-sand-950 no-underline transition-colors duration-150 hover:border-clay-700 hover:bg-clay-700"
                >
                  Email me the full breakdown →
                </a>
                <a
                  href="#tiers"
                  className="inline-flex items-center justify-center gap-2.5 border-2 border-sand-50 bg-transparent px-7 py-4 font-brand text-[13px] font-bold uppercase tracking-[0.08em] text-sand-50 no-underline transition-colors duration-150 hover:bg-sand-50 hover:text-sand-950"
                >
                  See which tier fixes this
                </a>
              </div>
              <p className="mt-6 font-brand text-[12px] leading-[1.65] text-sand-200/80">
                All calculations use conservative public-research multipliers.
                Numbers are an estimate, not a guarantee — your actual leak
                depends on your business, market, and the recovery curves you'd
                see in practice.
              </p>
            </div>
          </div>

          {/* ── Sticky running total ─────────────────────────────────── */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="border-2 border-sand-950 bg-sand-25 p-6">
              <div className="mb-4 flex items-center gap-2.5 font-brand text-[11px] font-bold uppercase tracking-[0.15em] text-sand-950">
                <span className="inline-block h-1.5 w-5 bg-clay-500" />
                Running total
              </div>

              <RunningRow
                label="Missed calls"
                value={missed}
                active={missed > 0}
              />
              <RunningRow
                label="Reputation gap"
                value={reputation.total}
                active={reputation.total > 0}
              />
              <RunningRow
                label="Slow responses"
                value={speed}
                active={speed > 0}
              />

              <div className="mt-4 border-t-2 border-sand-950 pt-4">
                <div className="font-brand text-[11px] font-bold uppercase tracking-[0.12em] text-sand-600">
                  Monthly loss
                </div>
                <div className="mt-1 font-brand text-3xl font-black text-sand-950 tabular-nums">
                  {fmtMoney(monthlyTotal)}
                </div>
              </div>

              <div className="mt-4">
                <div className="font-brand text-[11px] font-bold uppercase tracking-[0.12em] text-sand-600">
                  Annual loss
                </div>
                <div className="mt-1 font-brand text-2xl font-black text-clay-500 tabular-nums">
                  {fmtMoney(annualTotal)}
                </div>
              </div>

              <div className="mt-6 border-t border-sand-200 pt-4 font-brand text-[12px] leading-[1.5] text-sand-700">
                KeyLime Growth tier is{" "}
                <strong className="text-sand-950">$195/mo</strong> — about{" "}
                {monthlyTotal > 0
                  ? `${(monthlyTotal / keyLimeMonthly).toFixed(1)}× less`
                  : "less"}{" "}
                than your current leak.
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── */
/* Sub-components                                                              */
/* ─────────────────────────────────────────────────────────────────────────── */

function Module({
  num,
  title,
  tag,
  fix,
  subtotal,
  children,
  methodology,
}: {
  num: string;
  title: string;
  tag: string;
  fix: string;
  subtotal: number;
  children: ReactNode;
  methodology: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <section className="border-2 border-sand-950 bg-sand-25 p-6 md:p-8">
      <div className="mb-6 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <div>
          <div className="font-brand text-[11px] font-bold uppercase tracking-[0.15em] text-sand-600">
            Module {num} &middot; {tag}
          </div>
          <h2 className="mt-1 font-brand text-2xl font-black text-sand-950 sm:text-3xl">
            {title}
          </h2>
          <div className="mt-1 font-brand text-[12px] font-semibold uppercase tracking-[0.06em] text-clay-500">
            {fix}
          </div>
        </div>
        <div className="text-right">
          <div className="font-brand text-[11px] font-bold uppercase tracking-[0.12em] text-sand-600">
            Subtotal
          </div>
          <div className="mt-1 font-brand text-2xl font-black text-sand-950 tabular-nums">
            {fmtMoney(subtotal)}
            <span className="ml-1 text-sm font-bold text-sand-600">/ mo</span>
          </div>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">{children}</div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="mt-6 inline-flex items-center gap-2 font-brand text-[12px] font-bold uppercase tracking-[0.08em] text-sand-700 hover:text-sand-950"
        aria-expanded={open}
      >
        <span>{open ? "▾" : "▸"}</span>
        How we calculate this
      </button>
      {open && (
        <div className="mt-4 space-y-3 border-l-2 border-clay-500 bg-sand-50 p-5 font-brand text-[13px] leading-[1.65] text-sand-700">
          {methodology}
        </div>
      )}
    </section>
  );
}

function NumberField({
  label,
  help,
  value,
  onChange,
  min,
  max,
  step = 1,
  prefix,
  suffix,
}: {
  label: string;
  help?: string;
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
  step?: number;
  prefix?: string;
  suffix?: string;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="font-brand text-[12px] font-bold uppercase tracking-[0.08em] text-sand-950">
        {label}
      </span>
      <div className="flex items-stretch border-2 border-sand-950 bg-sand-50 focus-within:border-clay-500">
        {prefix && (
          <span className="flex items-center bg-sand-100 px-3 font-brand text-sm font-bold text-sand-700">
            {prefix}
          </span>
        )}
        <input
          type="number"
          value={Number.isFinite(value) ? value : ""}
          onChange={(e) => {
            const n = Number(e.target.value);
            onChange(Number.isFinite(n) ? n : 0);
          }}
          min={min}
          max={max}
          step={step}
          className="w-full bg-transparent px-3 py-2.5 font-brand text-base text-sand-950 outline-none tabular-nums"
        />
        {suffix && (
          <span className="flex items-center bg-sand-100 px-3 font-brand text-sm font-bold text-sand-700">
            {suffix}
          </span>
        )}
      </div>
      {help && (
        <span className="font-brand text-[12px] leading-[1.4] text-sand-600">
          {help}
        </span>
      )}
    </label>
  );
}

function PercentDropdownField({
  label,
  help,
  value,
  onChange,
}: {
  label: string;
  help?: string;
  value: number;
  onChange: (v: number) => void;
}) {
  const options = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  return (
    <label className="flex flex-col gap-1.5">
      <span className="font-brand text-[12px] font-bold uppercase tracking-[0.08em] text-sand-950">
        {label}
      </span>
      <div className="border-2 border-sand-950 bg-sand-50 focus-within:border-clay-500">
        <select
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full bg-transparent px-3 py-2.5 font-brand text-base text-sand-950 outline-none"
        >
          {options.map((pct) => (
            <option key={pct} value={pct}>
              {pct}%
            </option>
          ))}
        </select>
      </div>
      {help && (
        <span className="font-brand text-[12px] leading-[1.4] text-sand-600">
          {help}
        </span>
      )}
    </label>
  );
}

function ResponseTimeField({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  const options = [
    { mins: 5, label: "Under 5 minutes" },
    { mins: 30, label: "5–30 minutes" },
    { mins: 60, label: "30–60 minutes" },
    { mins: 240, label: "1–4 hours" },
    { mins: 1440, label: "4–24 hours" },
    { mins: 2880, label: "Over a day" },
  ];
  return (
    <label className="flex flex-col gap-1.5 sm:col-span-2">
      <span className="font-brand text-[12px] font-bold uppercase tracking-[0.08em] text-sand-950">
        Average response time to digital inquiries
      </span>
      <div className="border-2 border-sand-950 bg-sand-50 focus-within:border-clay-500">
        <select
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full bg-transparent px-3 py-2.5 font-brand text-base text-sand-950 outline-none"
        >
          {options.map((o) => (
            <option key={o.mins} value={o.mins}>
              {o.label}
            </option>
          ))}
        </select>
      </div>
      <span className="font-brand text-[12px] leading-[1.4] text-sand-600">
        Honest answer — how long between a form / DM / SMS coming in and someone
        actually replying.
      </span>
    </label>
  );
}

function ReadonlyField({
  label,
  value,
  help,
}: {
  label: string;
  value: string;
  help?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="font-brand text-[12px] font-bold uppercase tracking-[0.08em] text-sand-600">
        {label}
      </span>
      <div className="flex items-center border-2 border-dashed border-sand-200 bg-sand-50 px-3 py-2.5 font-brand text-base text-sand-700 tabular-nums">
        {value}
      </div>
      {help && (
        <span className="font-brand text-[12px] leading-[1.4] text-sand-600">
          {help}
        </span>
      )}
    </div>
  );
}

function RunningRow({
  label,
  value,
  active,
}: {
  label: string;
  value: number;
  active: boolean;
}) {
  return (
    <div className="flex items-center justify-between border-b border-sand-200 py-2.5 last:border-b-0">
      <span
        className={`font-brand text-[13px] ${active ? "text-sand-950" : "text-sand-600"}`}
      >
        {label}
      </span>
      <span
        className={`font-brand text-[14px] font-bold tabular-nums ${active ? "text-sand-950" : "text-sand-600"}`}
      >
        {fmtMoney(value)}
      </span>
    </div>
  );
}

function ResultBlock({
  label,
  monthly,
  annual,
  tone,
}: {
  label: string;
  monthly: number;
  annual: number;
  tone: "leak" | "neutral" | "net";
}) {
  const valueColor =
    tone === "leak"
      ? "text-clay-500"
      : tone === "net"
        ? "text-clay-500"
        : "text-sand-50";
  return (
    <div>
      <div className="font-brand text-[11px] font-bold uppercase tracking-[0.12em] text-sand-200/80">
        {label}
      </div>
      <div
        className={`mt-2 font-brand text-4xl font-black tabular-nums ${valueColor}`}
      >
        {fmtMoney(monthly)}
        <span className="ml-1 font-brand text-base font-bold text-sand-200/80">
          / mo
        </span>
      </div>
      <div className="mt-1 font-brand text-sm font-bold text-sand-200 tabular-nums">
        {fmtMoney(annual)}{" "}
        <span className="text-sand-200/80">/ yr</span>
      </div>
    </div>
  );
}
