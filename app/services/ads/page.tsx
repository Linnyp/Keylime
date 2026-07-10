import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { IconArrowRight } from "@/components/shared/icons";
import { AdsFaq } from "./AdsFaq";
import { IncludedSelector } from "./IncludedSelector";
import "./ads.css";

export const metadata: Metadata = {
  title: "Google & Meta Ads Cape Coral FL — PPC Management SWFL",
  description:
    "Google Ads and Meta Ads management for local service businesses in Southwest Florida. Transparent pricing, 2:1 ROAS guarantee, no long-term lock-in.",
};

const includedItems = [
  {
    no: "01",
    title: "Google Search Ads",
    body: "The high-intent stuff. People searching 'roof repair Cape Coral' at 2pm on a Tuesday are ready to buy — we put your business at the top before they scroll to your competitor.",
    icon: "/adIcons/googleSearch.png",
  },
  {
    no: "02",
    title: "Performance Max",
    body: "Google's automated multi-channel campaigns — Search, Display, YouTube, Maps, Gmail — running in one. Best for businesses ready to scale beyond pure search.",
    icon: "/adIcons/googleMax.png",
  },
  {
    no: "03",
    title: "Local Services Ads",
    body: "Pay-per-lead, not pay-per-click. Google-verified, sits above the regular search ads, and only charges when a real customer actually contacts you. Ideal for home services.",
    icon: "/adIcons/localService.png",
  },
  {
    no: "04",
    title: "Meta (FB & IG) Ads",
    body: "Audience-driven campaigns on Facebook and Instagram for awareness, retargeting, and visual sells. Useful when your customers are scrolling, not searching.",
    icon: "/adIcons/metaFb.png",
  },
  {
    no: "05",
    title: "Ad Copy & Creative",
    body: "Headlines, descriptions, and assets written for your business and tested against each other every week. We rotate the winners up and the losers out — not once a quarter, every week.",
    icon: "/adIcons/copy.png",
  },
  {
    no: "06",
    title: "Tracking & Reporting",
    body: "Conversion tracking, call tracking, and a monthly report in plain English. Cost per lead, ROAS, what's working, what we changed — no 40-tab dashboard you'll never open.",
    icon: "/adIcons/reporting.png",
  },
];

const processSteps = [
  {
    no: "01",
    title: "Audit & Strategy",
    body: "We pull your current ad accounts (or your competitors', if you don't run any yet), map the keywords and audiences worth chasing, and tell you which channel hits hardest first. No campaigns get built until we agree on the plan.",
  },
  {
    no: "02",
    title: "Account Setup",
    body: "We get the plumbing right before we spend a dollar — proper conversion tracking, call tracking, GTM, and clean account structure in your name. Most agencies skip this and wonder why their reporting is garbage. We don't.",
  },
  {
    no: "03",
    title: "Build & Launch",
    body: "Campaigns built, copy written, audiences segmented, budgets set. We launch lean and deliberate. The first 30 days are the learning window — Google and Meta need data to optimize, and we let them work.",
  },
  {
    no: "04",
    title: "Optimize & Report",
    body: "Weekly tuning: pause losing keywords, scale winners, rotate creative, refine audiences. Monthly report shows cost per lead, ROAS, and what we shipped — in language you can read on your phone between jobs.",
  },
];

const stats = [
  { value: "2:1", label: "Minimum ROAS — or you don't pay our fee", unit: "" },
  { value: "$2K", label: "Hard cap on monthly management fees", unit: "/mo" },
  { value: "30", label: "Days to first campaign launch", unit: "days" },
  { value: "$0", label: "Long-term lock-in. Month-to-month.", unit: "" },
];

export default function AdsPage() {
  return (
    <main>
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section
        aria-label="Google & Meta Ads hero"
        className="relative overflow-x-clip border-b-4 border-sand-950 bg-sand-50 pt-44 pb-20 md:pt-48 md:pb-24"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(194, 85, 45, 0.05) 0%, transparent 60%)",
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-10 font-brand text-[11px] font-bold uppercase tracking-[0.15em] text-sand-700"
          >
            <Link href="/" className="hover:text-clay-500">
              Home
            </Link>
            <span className="mx-2 text-sand-600">/</span>
            <Link href="/services" className="hover:text-clay-500">
              Services
            </Link>
            <span className="mx-2 text-sand-600">/</span>
            <span className="text-sand-950">Google &amp; Meta Ads</span>
          </nav>

          <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-[8fr_4fr] lg:gap-16">
            <div>
              <div className="mb-6 flex items-center gap-3 font-brand text-[11px] font-bold uppercase tracking-[0.15em]">
                <span className="text-clay-500">03 / Service</span>
                <span className="inline-block h-0.5 w-12 bg-clay-500" />
                <span className="text-sand-950">Google &amp; Meta Ads</span>
              </div>

              <h1 className="ads-hero-title m-0 font-brand font-black uppercase leading-[0.95] tracking-[-0.04em] text-sand-950">
                Get In Front Of
                <br />
                <span className="text-clay-500">Customers</span>
                <br />
                Already Looking.
              </h1>

              <p className="mt-8 max-w-[560px] font-brand text-[15px] leading-[1.7] text-sand-700 md:text-[16px]">
                Google and Meta ads built and managed for local service
                businesses in Southwest Florida. We run the campaigns in your
                account, in your name. If we don&apos;t hit a 2:1 ROAS,
                you don&apos;t pay management fees that month. Simple as that.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-stretch">
                <a
                  href="#contact"
                  className="inline-flex min-h-[52px] items-center gap-2.5 border-2 border-clay-500 bg-clay-500 px-8 py-4 font-brand text-[13px] font-bold uppercase tracking-[0.08em] text-sand-50 no-underline transition-colors duration-150 hover:border-clay-700 hover:bg-clay-700"
                >
                  Book a Free Discovery Call <IconArrowRight />
                </a>
                <a
                  href="#whats-included"
                  className="inline-flex min-h-[52px] items-center gap-2 border-2 border-sand-950 bg-transparent px-8 py-4 font-brand text-[13px] font-bold uppercase tracking-[0.08em] text-sand-950 no-underline transition-colors duration-150 hover:bg-sand-100"
                >
                  See What&apos;s Included
                </a>
              </div>
            </div>

            <aside
              aria-label="At a glance"
              className="flex flex-col gap-0 border-l-2 border-sand-950 lg:gap-0"
            >
              {[
                ["Format", "Active Management"],
                ["Channels", "Google · Meta · LSA · PMax"],
                ["Pricing", "$300/mo or 10% of spend"],
                ["Lock-in", "None · month-to-month"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-baseline justify-between gap-6 border-b-2 border-sand-950 px-5 py-4 last:border-b-0"
                >
                  <span className="font-brand text-[10px] font-bold uppercase tracking-[0.18em] text-sand-600">
                    {k}
                  </span>
                  <span className="text-right font-brand text-[14px] font-bold uppercase tracking-[-0.01em] text-sand-950">
                    {v}
                  </span>
                </div>
              ))}
            </aside>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ──────────────────────────────────────────── */}
      <section
        id="whats-included"
        aria-labelledby="included-heading"
        className="border-b-4 border-sand-950 bg-sand-100 bg-grid-pattern py-24"
      >
        <div className="mx-auto w-full max-w-[1200px] px-6">
          <div className="mb-16 grid grid-cols-1 items-end gap-6 lg:grid-cols-[5fr_7fr]">
            <div>
              <SectionLabel text="02 / Included" />
              <h2
                id="included-heading"
                className="ads-section-heading m-0 font-brand font-black uppercase text-sand-950"
              >
                Every Channel
                <br />
                <span className="text-clay-500">That Earns</span>
                <br />
                Its Keep.
              </h2>
            </div>
            <p className="m-0 font-brand text-[15px] leading-[1.7] text-sand-700">
              Search, social, local services, performance max. We pick the mix
              that fits your business — not the one that&apos;s biggest. Every
              dollar is tracked back to a lead, a call, or a booking. If we
              can&apos;t prove the work, we don&apos;t do the work.
            </p>
          </div>

          <IncludedSelector items={includedItems} />
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────────── */}
      <section
        id="pricing"
        aria-labelledby="pricing-heading"
        className="border-b-4 border-sand-950 bg-sand-50 bg-grid-pattern py-24"
      >
        <div className="mx-auto w-full max-w-[1200px] px-6">
          <div className="mb-16 grid grid-cols-1 items-end gap-6 lg:grid-cols-[7fr_5fr]">
            <div>
              <SectionLabel text="03 / Pricing" />
              <h2
                id="pricing-heading"
                className="ads-section-heading m-0 font-brand font-black uppercase text-sand-950"
              >
                A Flat Fee.
                <br />
                A Real <span className="text-clay-500">Guarantee.</span>
              </h2>
            </div>
            <p className="m-0 font-brand text-[15px] leading-[1.7] text-sand-700">
              Management is priced on what you spend, capped where it should be
              capped. Performance is backed by a 2:1 ROAS floor — clear that
              bar or we don&apos;t charge for the work that month.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Management Fee */}
            <article className="group relative flex h-full flex-col gap-7 border-2 border-sand-950 bg-sand-50 p-10 transition-colors duration-150 hover:bg-sand-100">
              <div className="flex items-baseline justify-between">
                <h3 className="m-0 font-brand text-[26px] font-black uppercase tracking-[-0.03em] text-sand-950">
                  Management Fee
                </h3>
                <span className="font-brand text-[11px] font-bold uppercase tracking-[0.15em] text-sand-600">
                  Month-to-month
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-brand text-[11px] font-medium uppercase tracking-[0.06em] text-sand-600">
                  Starting at
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="font-brand text-[56px] font-black leading-none tracking-[-0.04em] text-sand-950">
                    $300
                  </span>
                  <span className="font-brand text-[16px] font-semibold text-sand-600">
                    /mo
                  </span>
                </div>
                <span className="mt-1 font-brand text-[12px] uppercase tracking-[0.08em] text-sand-600">
                  or 10% of ad spend · whichever is greater
                </span>
              </div>

              <p className="m-0 border-t border-sand-200 pt-5 font-brand text-[13px] leading-[1.65] text-sand-600">
                Pay only for the work, not for some package tier you don&apos;t
                need. Spend a little, pay the minimum. Spend a lot, the cap
                stops the fee from running away with your budget.
              </p>

              <ul className="m-0 flex flex-1 list-none flex-col gap-3 p-0">
                {[
                  "$300/mo minimum management fee",
                  "10% of ad spend above the minimum",
                  "Capped at $2,000/mo — no matter how big",
                  "All ad spend billed directly to your card",
                  "Account stays in your name, your data",
                  "Cancel anytime · no long-term contract",
                ].map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 font-brand text-[13px] leading-[1.5] text-sand-600"
                  >
                    <span className="mt-px shrink-0 text-[16px] font-black leading-none text-clay-500">
                      —
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="flex min-h-[48px] items-center justify-center border-2 border-sand-950 bg-transparent px-6 py-3.5 font-brand text-[12px] font-bold uppercase tracking-[0.1em] text-sand-950 no-underline transition-colors duration-150 hover:bg-sand-950 hover:text-sand-50"
              >
                Start a Campaign
              </a>
            </article>

            {/* ROAS Guarantee — featured (dark) */}
            <article className="group relative flex h-full flex-col gap-7 border-4 border-sand-900 bg-sand-900 p-10 lg:-ml-0.5">
              <span className="absolute -top-[18px] left-10 bg-clay-500 px-3.5 py-[5px] font-brand text-[10px] font-bold uppercase tracking-[0.12em] text-sand-50">
                Performance-Backed
              </span>

              <div className="flex items-baseline justify-between">
                <h3 className="m-0 font-brand text-[26px] font-black uppercase tracking-[-0.03em] text-sand-50">
                  ROAS Guarantee
                </h3>
                <span className="font-brand text-[11px] font-bold uppercase tracking-[0.15em] text-sand-50/60">
                  Skin in the game
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-brand text-[11px] font-medium uppercase tracking-[0.06em] text-sand-50/60">
                  Floor performance
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="font-brand text-[56px] font-black leading-none tracking-[-0.04em] text-sand-50">
                    2:1
                  </span>
                  <span className="font-brand text-[16px] font-semibold text-sand-50/60">
                    or no fee
                  </span>
                </div>
                <span className="mt-1 font-brand text-[12px] uppercase tracking-[0.08em] text-sand-50/60">
                  $2 in revenue for every $1 in spend · minimum
                </span>
              </div>

              <p
                className="m-0 border-t pt-5 font-brand text-[13px] leading-[1.65] text-sand-50/75"
                style={{ borderColor: "rgba(251,248,243,0.15)" }}
              >
                If we don&apos;t hit a 2:1 return on ad spend in any month after
                the 60-day learning window, you don&apos;t pay management fees
                that month. Ad spend goes to Google and Meta either way — that
                part isn&apos;t ours to refund — but the work is on us until we
                earn it back.
              </p>

              <ul className="m-0 flex flex-1 list-none flex-col gap-3 p-0">
                {[
                  "2:1 ROAS minimum after the learning window",
                  "Tracked through your actual conversion data",
                  "60-day grace period for new campaigns",
                  "Fee waived in any month we miss the floor",
                  "Reported plainly in your monthly summary",
                  "No fine print, no asterisks, no exit fee",
                ].map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 font-brand text-[13px] leading-[1.5] text-sand-50/75"
                  >
                    <span className="mt-px shrink-0 text-[16px] font-black leading-none text-clay-500">
                      —
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="flex min-h-[48px] items-center justify-center bg-clay-500 px-6 py-3.5 font-brand text-[12px] font-bold uppercase tracking-[0.1em] text-sand-50 no-underline transition-colors duration-150 hover:bg-clay-700"
              >
                See If You Qualify
              </a>
            </article>
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t-2 border-sand-950 pt-6 sm:flex-row sm:items-center">
            <p className="m-0 max-w-[560px] font-brand text-[13px] leading-[1.6] text-sand-600">
              Most clients land between $300 and $1,000/mo in management fees.
              The cap kicks in once monthly ad spend clears $20,000. No setup
              fee, no audit invoice, no contract.
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-1.5 font-brand text-[12px] font-bold uppercase tracking-[0.12em] text-clay-500 underline underline-offset-4 hover:text-clay-700"
            >
              See full pricing for every service <IconArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ── RESULTS ──────────────────────────────────────────────────── */}
      <section
        id="results"
        aria-labelledby="results-heading"
        className="border-b-4 border-sand-950 bg-sand-100 py-24"
      >
        <div className="mx-auto w-full max-w-[1200px] px-6">
          <div className="mb-16 grid grid-cols-1 items-end gap-6 lg:grid-cols-[5fr_7fr]">
            <div className="lg:order-2 lg:text-right">
              <div className="lg:flex lg:justify-end">
                <SectionLabel text="04 / By the Numbers" />
              </div>
              <h2
                id="results-heading"
                className="ads-section-heading m-0 font-brand font-black uppercase text-sand-950"
              >
                Real Spend.
                <br />
                Real <span className="text-clay-500">Returns.</span>
              </h2>
            </div>
            <p className="m-0 font-brand text-[15px] leading-[1.7] text-sand-700 lg:order-1">
              Ads work fast or they don&apos;t work. Unlike SEO, you find out
              inside 60 days. Here&apos;s the floor we hold ourselves to and the
              numbers worth paying attention to before you write the first
              check.
            </p>
          </div>

          {/* Stat row — collapsing borders */}
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col gap-3 border-2 border-sand-950 bg-sand-50 p-8 lg:p-10 ${
                  i % 2 !== 0 ? "-ml-0.5" : ""
                } ${i >= 2 ? "-mt-0.5 lg:mt-0" : ""} ${
                  i >= 1 ? "lg:-ml-0.5" : ""
                }`}
              >
                <div className="m-auto flex items-baseline gap-2">
                  <span className="font-brand text-[44px] font-black leading-none tracking-[-0.04em] text-sand-950 md:text-[56px]">
                    {s.value}
                  </span>
                  {s.unit && (
                    <span className="font-brand text-[18px] font-bold text-clay-500">
                      {s.unit}
                    </span>
                  )}
                </div>
                <p className="m-0 font-brand text-[13px] leading-[1.5] text-sand-600">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* Mini case study teaser */}
          <div className="mt-10 grid grid-cols-1 items-center gap-8 border-4 border-sand-950 bg-sand-900 bg-dots-pattern p-10 lg:grid-cols-[8fr_4fr] lg:p-12">
            <div>
              <span className="mb-3 inline-block font-brand text-[11px] font-bold uppercase tracking-[0.18em] text-clay-500">
                Case study
              </span>
              <p className="m-0 max-w-[640px] font-brand text-[20px] font-semibold leading-[1.4] text-sand-50 md:text-[24px]">
                &ldquo;The phone started ringing the second week. Not random
                tire-kickers either — actual booked jobs. We pulled back our old
                spend by half and still doubled the leads.&rdquo;
              </p>
              <p className="mt-3 font-brand text-[12px] uppercase tracking-[0.12em] text-sand-50/60">
                Four Leaf Charters · Lee County
              </p>
            </div>
            <div className="lg:text-right">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 border-2 border-clay-500 bg-transparent px-6 py-3.5 font-brand text-[12px] font-bold uppercase tracking-[0.1em] text-clay-500 no-underline transition-colors duration-150 hover:bg-clay-500 hover:text-sand-50"
              >
                Read the case study <IconArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────────── */}
      <section
        id="process"
        aria-labelledby="process-heading"
        className="border-b-4 border-sand-950 bg-sand-50 bg-grid-pattern py-24"
      >
        <div className="mx-auto w-full max-w-[1200px] px-6">
          <div className="mb-16 text-right">
            <div className="flex justify-end">
              <SectionLabel text="05 / Process" />
            </div>
            <h2
              id="process-heading"
              className="ads-section-heading m-0 font-brand font-black uppercase text-sand-950"
            >
              From Audit To
              <br />
              <span className="text-clay-500">Booked Calls.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <div
                key={step.no}
                className={`relative flex flex-col gap-5 border-2 border-sand-950 bg-sand-50 p-9 transition-colors duration-150 hover:bg-sand-950 group ${
                  i > 0 ? "lg:-ml-0.5" : ""
                } ${i > 0 ? "-mt-0.5 lg:mt-0" : ""}`}
              >
                <div className="flex items-start justify-between">
                  <span className="font-brand text-[64px] font-black leading-[0.9] tracking-[-0.04em] text-clay-500">
                    {step.no}
                  </span>
                  <span className="mt-3 font-brand text-[11px] font-bold uppercase tracking-[0.18em] text-sand-600 transition-colors duration-150 group-hover:text-sand-50/60">
                    Stage
                  </span>
                </div>
                <h3 className="m-0 font-brand text-[16px] font-extrabold uppercase leading-[1.3] tracking-[0.04em] text-sand-950 transition-colors duration-150 group-hover:text-sand-50">
                  {step.title}
                </h3>
                <p className="m-0 font-brand text-[14px] leading-[1.7] text-sand-600 transition-colors duration-150 group-hover:text-sand-50/80">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section
        id="faq"
        aria-labelledby="faq-heading"
        className="border-b-4 border-sand-950 bg-sand-100 bg-grid-pattern py-24"
      >
        <div className="mx-auto w-full max-w-brand px-6">
          <div className="mb-12 grid grid-cols-1 items-end gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <SectionLabel text="06 / Questions" />
              <h2
                id="faq-heading"
                className="ads-faq-heading m-0 mb-4 font-brand font-black uppercase text-sand-950"
              >
                Honest Answers
                <br />
                About <span className="text-clay-500">Paid Ads.</span>
              </h2>
              <p className="m-0 max-w-[560px] font-brand text-[14px] leading-[1.65] text-sand-600">
                The questions every business owner asks before they hand a card
                over to Google — answered the way I&apos;d answer them on a
                call.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 self-start bg-clay-500 px-5 py-3 font-brand text-[12px] font-bold uppercase tracking-[0.08em] text-sand-50 no-underline transition-colors duration-150 hover:bg-clay-700 lg:self-end"
            >
              Still have questions? <IconArrowRight />
            </a>
          </div>

          <div className="border-2 border-sand-950 bg-sand-50 px-10 py-2">
            <AdsFaq />
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────── */}
      <section
        id="contact"
        aria-labelledby="cta-heading"
        className="relative overflow-hidden bg-sand-900 py-24"
      >
        <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-end gap-16 px-6 lg:grid-cols-[7fr_5fr]">
          <div>
            <div className="mb-6 flex items-center gap-3 font-brand text-[11px] font-bold uppercase tracking-[0.15em] text-clay-500">
              <span className="inline-block h-0.5 w-6 bg-clay-500" />
              07 / What&apos;s Next
            </div>

            <h2
              id="cta-heading"
              className="ads-cta-heading m-0 mb-8 font-brand font-black uppercase text-sand-50"
            >
              Stop Guessing
              <br />
              At Spend. Start
              <br />
              <span className="text-clay-500">Tracking Returns.</span>
            </h2>

            <p className="m-0 mb-10 max-w-[480px] border-l-4 border-clay-500 pl-5 font-brand text-[16px] leading-[1.65] text-sand-50/75">
              30-minute discovery call. We&apos;ll pull your current ad accounts
              (or your competitors&apos;), tell you straight whether ads are the
              right move for your business right now — or whether SEO would get
              you there cheaper in the long run.
            </p>

            <div className="flex flex-wrap items-center gap-0">
              <a
                href="#contact"
                className="inline-flex min-h-[52px] items-center gap-2.5 bg-clay-500 px-8 py-4 font-brand text-[13px] font-bold uppercase tracking-[0.08em] text-sand-50 no-underline transition-colors duration-150 hover:bg-clay-700"
              >
                Book Your Discovery Call <IconArrowRight />
              </a>
              <Link
                href="/audit"
                className="inline-flex min-h-[52px] items-center gap-1.5 px-6 py-4 font-brand text-[13px] font-semibold uppercase tracking-[0.04em] text-sand-50/50 no-underline transition-colors duration-150 hover:text-sand-50"
              >
                Get a free ad-account audit instead
              </Link>
            </div>
          </div>

          <aside aria-label="Pair with" className="flex flex-col gap-0">
            <p className="mb-4 font-brand text-[11px] font-bold uppercase tracking-[0.18em] text-sand-50/60">
              Pairs well with
            </p>
            {[
              {
                label: "Reputation Mgmt",
                copy: "Capture and convert more of the leads your ads bring in. One inbox, faster follow-up.",
                href: "/services/reputation",
              },
              {
                label: "Local SEO",
                copy: "Run ads while SEO compounds in the background. Short-term leads, long-term rankings.",
                href: "/services/seo",
              },
              {
                label: "Full Pricing",
                copy: "See every service and every price on one page. No hidden fees.",
                href: "/pricing",
              },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group flex items-start justify-between gap-4 border-t border-sand-50/15 py-5 last:border-b last:border-sand-50/15"
              >
                <div>
                  <p className="m-0 font-brand text-[15px] font-bold uppercase tracking-[-0.01em] text-sand-50 transition-colors duration-150 group-hover:text-clay-500">
                    {item.label}
                  </p>
                  <p className="mt-1 max-w-[320px] font-brand text-[12px] leading-[1.55] text-sand-50/60">
                    {item.copy}
                  </p>
                </div>
                <span className="mt-1 text-clay-500 transition-transform duration-150 group-hover:translate-x-1">
                  <IconArrowRight />
                </span>
              </Link>
            ))}
          </aside>
        </div>
      </section>
    </main>
  );
}
