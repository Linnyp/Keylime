# Revenue Loss Calculator

Interactive lead-gen tool that quantifies the monthly and annual revenue a local service business is losing across three vectors that KeyLime services address. Built as a `/test-calculator` demo for the linax-digital app, scoped to the KeyLime brand palette.

- **Route:** `[app/test-calculator/page.tsx](../../app/test-calculator/page.tsx)`
- **Palette scope:** `[app/test-calculator/test-palette.css](../../app/test-calculator/test-palette.css)` (mirrors `/test`'s `key-lime-theme`)
- **Component:** `[RevenueCalculator.tsx](./RevenueCalculator.tsx)`

---

## What it does

A visitor picks their industry (home services or beauty), then fills out three input modules. Each module computes a monthly revenue loss for one specific business problem. A sticky running total adds up as fields are filled, and a final results panel compares the total leak against KeyLime's Growth-tier monthly cost.

The form itself is the sales argument — each field maps to a concept the prospect needs to understand to buy the Growth tier (missed-call text-back, reputation management, speed-to-lead automation).

---

## The three modules

### Module 01 — Missed phone calls (voice channel)

**Maps to KeyLime service:** Missed-Call Text-Back (part of Speed-to-Lead bundle)

**Inputs:**

- Daily missed calls during business hours
- Close rate on inbound leads (10% increments, dropdown)
- Average job/ticket value (industry-dependent default)

**Formula:**

```
monthly_missed     = daily_missed × 22 working days
recoverable_jobs   = monthly_missed × 0.22 × (close_rate / 100)
monthly_loss       = recoverable_jobs × avg_value
```

**The 22% recovery rate** is a conservative blend of public missed-call text-back industry data:

- ~35–50% of recipients engage with the automated text
- ~50–70% of those engagements convert to a booked job
- Midpoint ≈ 22% blended recovery

This intentionally reports the **recoverable** loss, not the gross missed-call loss. The remaining ~78% of missed calls would still go to a competitor even with text-back running, so claiming the full amount would overstate KeyLime's recovery and erode credibility with sharp prospects.p;lo[

---

### Module 02 — Google reputation gap (pre-inquiry visibility)

**Maps to KeyLime service:** Reputation Management

**Inputs:**

- Current Google rating (1.0–5.0, 0.1 increments)
- Current number of Google reviews
- Monthly revenue
- Target rating (user-adjustable, default 4.7)
- Target review count (**auto-derived** from current review count)

**Sources:**

Michael Luca, *Reviews, Reputation, and Revenue: The Case of Yelp.com* (Harvard Business School, working paper 12-016, revised 2016). Core findings:

1. **One full star of rating lifts revenue 5–9%**, with the size of the effect depending on how many reviews back the rating.
2. **Review-count bucket scaling** (Table 9 of the paper, all-restaurants column):

  | Reviews | % revenue lift per full star |
  | ------- | ---------------------------- |
  | <10     | 5.3%                         |
  | 11–20   | 6.3%                         |
  | 21–30   | 6.8%                         |
  | 31–40   | 7.0%                         |
  | 41–50   | 7.1%                         |
  | 50+     | 8.0%                         |

3. **Within-restaurant causal estimate (~20% increase in rating-sensitivity from <10 to 50+ reviews)** rules out the obvious confound that rating-sensitive restaurants just happen to collect more reviews.
4. **Findings strongest for independent operators** — chains carry brand-name reputation, so consumer reviews matter less. KeyLime's audience (independent local service businesses) maps to the strongest-effect subgroup.

**Two-lever formula:**

```
current_bucket   = reviewBucketPct(current_reviews)
target_bucket    = reviewBucketPct(target_reviews)

# Lever 1: raise the rating, evaluated at current review bucket
rating_delta     = max(0, target_rating - current_rating)
rating_impact    = rating_delta × current_bucket × monthly_revenue

# Lever 2: raise the review volume, evaluated at current rating
#   normalized "above 3-star" scale to keep volume lever conservative
above_baseline   = max(0, current_rating - 3) / 2     # 3.0→0, 5.0→1
volume_impact    = (target_bucket - current_bucket) × monthly_revenue × above_baseline

reputation_loss  = rating_impact + volume_impact
```

The two impacts are reported separately in the methodology expander so prospects can see which lever drives more revenue for their specific situation.

**Why volume lever is dampened by `above_baseline`:**
A business at 3.0 stars doesn't benefit from more reviews because the rating itself isn't pulling revenue. A business at 4.8 stars benefits enormously — more reviews amplify a rating the market already responds to. The `(current_rating - 3) / 2` factor encodes this: the lever weight scales from 0 (at 3 stars) to 1 (at 5 stars).

**Target review count is auto-computed** (see "Tuning knobs" below) from a growth curve that:

- Leapfrogs very low review counts into the strong-effect zone (<10 → 60)
- Adds ~75 reviews in the typical 6–12 month range
- Dampens at high counts (review fatigue + diminishing acquisition rate)

---

### Module 03 — Slow response to digital inquiries (digital channels)

**Maps to KeyLime service:** Speed-to-Lead automation (form auto-response, SMS bot, after-hours capture)

**Inputs:**

- Daily digital inquiries (form fills, SMS, DMs, email)
- Average response time (6-bucket dropdown)
- Close rate and avg value (read-only, reused from Module 01)

**Sources:**

- **Oldroyd, James (MIT)** — *The Short Life of Online Sales Leads* / Lead Response Management Study: odds of qualifying a lead drop ~21× when response time slips from 5 minutes to 30 minutes.
- **Harvard Business Review** — *The Short Life of Online Sales Leads*: odds of contacting a lead drop ~10× after the first hour.
- **InsideSales / Velocify follow-up research** — first responder captures ~50% of the business.

**Formula:**

```
monthly_inquiries  = daily_inquiries × 30 days        # digital channels = always-on
potential_revenue  = monthly_inquiries × (close_rate / 100) × avg_value
conversion_factor  = responseConversionFactor(response_minutes)
revenue_loss       = potential_revenue × (1 - conversion_factor)
```

**Conservative conversion-factor curve** (qualification drop in the source data is 21×; we dampen to ~6× to stay defensible):


| Response time | Conversion factor | Effective conversion vs. <5 min |
| ------------- | ----------------- | ------------------------------- |
| <5 min        | 1.00              | baseline                        |
| 5–30 min      | 0.70              | 70% of baseline                 |
| 30–60 min     | 0.50              | 50%                             |
| 1–4 hr        | 0.35              | 35%                             |
| 4–24 hr       | 0.20              | 20%                             |
| >24 hr        | 0.10              | 10%                             |


---

## Channel separation — why there's no double-counting


| Module             | Channel     | What's counted                                                                       |
| ------------------ | ----------- | ------------------------------------------------------------------------------------ |
| 01 — Missed calls  | Voice       | Inbound phone calls that ring during business hours                                  |
| 02 — Reputation    | Pre-inquiry | Search-visibility / click-through impact (people who never inquire because of stars) |
| 03 — Speed-to-Lead | Digital     | Form fills, SMS, DMs, email — anything *not* a voice call                            |


A missed phone call only counts in Module 01. A slow form-response only counts in Module 03. A bad-reviews-cost-me-search-traffic effect only counts in Module 02. Summing the three modules gives a defensible total without inflated overlap.

---

## State & data flow

All state lives in `RevenueCalculator.tsx` as React `useState` hooks:


| State variable                                                      | Module(s)               | Source                                                           |
| ------------------------------------------------------------------- | ----------------------- | ---------------------------------------------------------------- |
| `industry`                                                          | All (vocabulary)        | User selection                                                   |
| `dailyMissed`, `closingRate`, `avgValue`                            | 01 (writes), 03 (reads) | User input                                                       |
| `currentRating`, `currentReviews`, `monthlyRevenue`, `targetRating` | 02                      | User input                                                       |
| `targetReviews`                                                     | 02                      | **Derived** from `currentReviews` via `realisticTargetReviews()` |
| `dailyInquiries`, `responseMinutes`                                 | 03                      | User input                                                       |


`closingRate` and `avgValue` are intentionally **single-source** — entered in Module 01, displayed as read-only in Module 03. Asking the same question twice would erode trust and signal a poorly thought-out tool.

Subtotals are computed via `useMemo` and the running total flows into:

- The sticky right-rail summary card
- The final results panel (with KeyLime cost comparison and net-savings calc)

---

## Component anatomy

```
RevenueCalculator (default export, "use client")
├── Hero block (heading, sub, industry toggle)
├── Two-column grid
│   ├── Modules column
│   │   ├── Module 01 (missed calls)
│   │   ├── Module 02 (reputation)
│   │   ├── Module 03 (speed-to-lead)
│   │   └── Final results panel (dark, 3-column)
│   └── Aside: sticky running total card
│
├── Module                (collapsible container with subtotal + methodology)
├── NumberField           (labeled numeric input with prefix/suffix slots)
├── PercentDropdownField  (10–100% in 10% steps)
├── ResponseTimeField     (6-bucket dropdown for Module 03)
├── ReadonlyField         (locked display field with optional help text)
├── RunningRow            (single line in sticky aside)
└── ResultBlock           (single column in dark results panel)
```

---

## Tuning knobs

All conservative multipliers and curves are colocated at the top of the file for easy adjustment.


| Constant / function          | Location         | Purpose                            | Current value                      |
| ---------------------------- | ---------------- | ---------------------------------- | ---------------------------------- |
| `WORKING_DAYS_PER_MONTH`     | top of file      | Voice-channel monthly multiplier   | 22                                 |
| `DIGITAL_DAYS_PER_MONTH`     | top of file      | Digital-channel monthly multiplier | 30                                 |
| `TEXT_BACK_RECOVERY_RATE`    | top of file      | Blended text-back recovery         | 0.22                               |
| `reviewBucketPct()`          | top of file      | Luca bucket scaling                | 5.3%–8.0% per star                 |
| `responseConversionFactor()` | top of file      | Speed-to-lead conversion curve     | 1.0 / 0.7 / 0.5 / 0.35 / 0.2 / 0.1 |
| `realisticTargetReviews()`   | top of file      | Auto-derived 6–12 month target     | additive +50 to +75                |
| `keyLimeMonthly`             | inside component | Growth-tier monthly cost           | $195                               |


**To swap to a different tier** (e.g., Foundation $99 or Expansion $495) for the results-panel comparison, change `keyLimeMonthly`.

**To tighten the volume lever** in Module 02 (e.g., adopt the Luca within-restaurant causal cap), modify the `reputationLoss()` function's `volume_impact` calculation.

**Default field values** are set inline at `useState` initialization. Industry-specific placeholder values live in the `industryConfig` map (e.g., `valuePlaceholder: 350` for home services vs `120` for beauty).

---

## Styling

The component uses the same Tailwind v4 utility tokens as the rest of the linax-digital site (`bg-sand-50`, `text-sand-950`, `bg-clay-500`, `font-brand`, etc.). Those tokens resolve to CSS variables declared in `[globals.css](../../app/globals.css)`.

The `/test-calculator` route overrides those variables with the KeyLime palette via `[test-palette.css](../../app/test-calculator/test-palette.css)`, scoped to `body:has(.key-lime-theme)`. The `<main>` in `page.tsx` carries the `key-lime-theme` class, so all descendants — including the `Navbar` and `Footer` rendered by the root layout — retint automatically.

No additional CSS files are needed for the calculator itself.

---

## Known limitations / things to revisit

1. **Volume-lever formula is a heuristic, not a direct Luca specification.** The `(current_rating - 3) / 2` dampener keeps the lever conservative but is not derived from a published coefficient. Acceptable for a marketing calculator; not acceptable as a published research claim.
2. **Speed-to-lead conversion curve is dampened from source.** Oldroyd's 21× qualification drop is modeled as a ~6× conversion drop. If a sharp prospect inspects this, the methodology expander makes the dampening explicit — but if numbers start feeling overstated in practice, the curve can be tightened further.
3. **Close rate is shared across voice and digital.** In reality these can differ — phone leads close higher than form leads, typically. Single-source kept for UX simplicity; could split with a more advanced layout.
4. **Target rating is user-input, not auto-derived.** Unlike target review count (which is now auto-computed), target rating defaults to 4.7 but remains adjustable. Could be auto-capped based on current rating if it starts producing unrealistic deltas in testing.
5. **No lead capture wired up.** The "Email me the full breakdown →" CTA in the results panel is a placeholder `href="#book"` — needs to be wired to a HighLevel form or similar before this leaves `/test-calculator`.
6. **No analytics.** Field-level engagement, module completion rate, and abandonment points should be instrumented before this goes to a production route — they're how you'll tune the multipliers above.
7. **Mobile sticky behavior** drops the right-rail running-total card to flow position on screens below `lg`. If mobile users need a persistent total visible, a slim fixed-bottom variant could be added.

---

## How to extend

**Add a fourth module** (e.g., no-shows, after-hours voice capture):

1. Add a new section in the top-of-file calculation helpers, modeled on `missedCallLoss` / `reputationLoss` / `speedToLeadLoss`
2. Add state hooks for its inputs in `RevenueCalculator()`
3. Wrap the new inputs in a `<Module>` block with a methodology expander
4. Include its subtotal in `monthlyTotal`
5. Add a new `<RunningRow>` to the sticky aside

**Mirror for a different industry** (e.g., professional services, legal, restaurants):

1. Add a new key to the `Industry` type and `industryConfig` map
2. Add a button to the industry selector
3. Tune the `valuePlaceholder` and field copy for that vertical
4. Verify the calculation helpers still apply — they may need vertical-specific multipliers (e.g., legal close rates are very different from home-services close rates)

**Move from `/test-calculator` to a production route:**

1. Wire up real lead capture on the results-panel CTAs
2. Add analytics instrumentation
3. Decide whether the route lives under `/tools/revenue-calculator` or replaces the existing audit form
4. Add SEO metadata (already partially set via the `Metadata` export in `page.tsx`)
5. Run the QA pass described under "Known limitations"

