/*
 * Hero estimator → full calculator handoff.
 *
 * The hero widget and the full calculator ask for the same three numbers in
 * the same units — missed calls per *working day* on both sides — so the
 * handoff is a straight pass-through. This module owns the query-param
 * contract, the closing-rate option list, the shared formula, and the field
 * bounds, so the producer (the hero widget's CTA) and the consumer (the
 * calculator page) can't drift apart.
 *
 * Plain constants and pure functions only — no React, no "use client", so both
 * a client component and a server page can import it.
 */

/** Working days per month — the voice-channel multiplier on both surfaces. */
export const WORKING_DAYS_PER_MONTH = 22;

// Conservative blended recovery rate for missed-call text-back.
// Industry data: ~35–50% engage with the text, ~50–70% of engaged convert.
// Blended midpoint ≈ 22%.
export const TEXT_BACK_RECOVERY_RATE = 0.22;

/**
 * Monthly revenue recoverable via missed-call text-back. The single definition
 * of this number: the hero widget and the calculator's module 01 both call it,
 * so the figure a visitor sees in the hero is the one they land on.
 */
export function missedCallLoss(
  dailyMissed: number,
  closingRatePct: number,
  avgValue: number,
): number {
  const monthlyMissed = dailyMissed * WORKING_DAYS_PER_MONTH;
  const recoverableJobs =
    monthlyMissed * TEXT_BACK_RECOVERY_RATE * (closingRatePct / 100);
  return recoverableJobs * avgValue;
}

/** Closing-rate values the calculator's dropdown offers. A seeded rate has to
    snap to one of these or the <select> would render with nothing chosen. */
export const CLOSING_RATE_OPTIONS = [
  10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
] as const;

/** Field bounds, mirroring the calculator's own inputs. Exported so the hero
    widget constrains its fields to the same range it will hand off. */
export const DAILY_MISSED_MAX = 50;
export const JOB_VALUE_MAX = 100_000;

/** Query-param names carried on the widget's CTA. Named in the shared units so
    the URL is self-describing: `?dailyMissed=4` is unambiguous. */
export const ESTIMATOR_PARAMS = {
  dailyMissed: "dailyMissed",
  jobValue: "jobValue",
  closeRate: "closeRate",
} as const;

/** The widget's three inputs — same units as the calculator's. */
export interface EstimatorHandoff {
  /** Missed calls per working day. */
  dailyMissed: number;
  /** Average job value, USD. */
  jobValue: number;
  /** Closing rate, 0–100. */
  closeRate: number;
}

/** The calculator's three inputs, in the calculator's units. */
export interface CalculatorSeed {
  /** Missed calls per working day. */
  dailyMissed?: number;
  /** Closing rate, snapped to CLOSING_RATE_OPTIONS. */
  closingRate?: number;
  /** Average job value, USD. */
  avgValue?: number;
}

/** Appends the widget's current numbers to its CTA href. */
export function withEstimatorParams(
  href: string,
  values: EstimatorHandoff,
): string {
  const [path, existing = ""] = href.split("?");
  const query = new URLSearchParams(existing);
  query.set(ESTIMATOR_PARAMS.dailyMissed, String(values.dailyMissed));
  query.set(ESTIMATOR_PARAMS.jobValue, String(values.jobValue));
  query.set(ESTIMATOR_PARAMS.closeRate, String(values.closeRate));
  return `${path}?${query.toString()}`;
}

function clamp(v: number, min: number, max: number) {
  return Math.min(Math.max(v, min), max);
}

/** Reads one search param, tolerating absence, repeats, and junk. */
function readNumber(
  raw: string | string[] | undefined,
): number | undefined {
  const first = Array.isArray(raw) ? raw[0] : raw;
  if (first == null || first.trim() === "") return undefined;
  const parsed = Number(first);
  return Number.isFinite(parsed) ? parsed : undefined;
}

/** Nearest allowed closing rate. Ties resolve to the lower option. */
export function snapClosingRate(value: number): number {
  return CLOSING_RATE_OPTIONS.reduce((best, option) =>
    Math.abs(option - value) < Math.abs(best - value) ? option : best,
  );
}

/**
 * Builds the calculator's initial state from a URL's search params. Every field
 * is independent: a missing or malformed param leaves that input on its own
 * default rather than discarding the whole handoff.
 */
export function seedFromSearchParams(
  params: Record<string, string | string[] | undefined>,
): CalculatorSeed {
  const dailyMissed = readNumber(params[ESTIMATOR_PARAMS.dailyMissed]);
  const jobValue = readNumber(params[ESTIMATOR_PARAMS.jobValue]);
  const closeRate = readNumber(params[ESTIMATOR_PARAMS.closeRate]);

  return {
    // Same unit on both sides, so this is a clamp rather than a conversion.
    // Kept to one decimal to tolerate a hand-edited URL.
    dailyMissed:
      dailyMissed === undefined
        ? undefined
        : clamp(Math.round(dailyMissed * 10) / 10, 0, DAILY_MISSED_MAX),
    avgValue:
      jobValue === undefined
        ? undefined
        : clamp(Math.round(jobValue), 0, JOB_VALUE_MAX),
    closingRate:
      closeRate === undefined ? undefined : snapClosingRate(closeRate),
  };
}
