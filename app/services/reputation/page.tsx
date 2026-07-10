import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { IconArrowRight } from "@/components/shared/icons";
import { RepFaq } from "./RepFaq";
import "./reputation.css";

export const metadata: Metadata = {
  title:
    "Reputation Management Cape Coral FL — Google Review Service SWFL",
  description:
    "Done-for-you reputation management for local service businesses. Review requests, unified inbox, and customer engagement on a managed Go High Level platform.",
};

const includedItems = [
  {
    no: "01",
    title: "Dedicated Platform Account",
    body: "Your own Go High Level sub-account, white-labeled to your business. We provision it, configure it, and manage it. You get login access — never a $400/mo SaaS bill or a setup learning curve.",
  },
  {
    no: "02",
    title: "Review Request Workflows",
    body: "Automated text and email requests that go out after a job, sale, or appointment — written in your voice, sent under your business name. The workflow lifts review velocity without sounding like a robot.",
  },
  {
    no: "03",
    title: "Customer Engagement Automation",
    body: "Sentiment routing sends happy customers to public Google reviews, unhappy ones to a private feedback form. You get a chance to fix things before a one-star review hits the internet.",
  },
  {
    no: "04",
    title: "Unified Inbox",
    body: "Texts, emails, Facebook messages, and Google Business chat in one inbox. Stop juggling six apps, missing replies in three of them, and forgetting which thread is which.",
  },
  {
    no: "05",
    title: "CRM & Contact Management",
    body: "Every customer who has ever called, emailed, or filled out a form ends up in one organized contact list — searchable, taggable, and ready for whatever comes next.",
  },
  {
    no: "06",
    title: "Multi-Platform Monitoring",
    body: "Google, Facebook, and Yelp watched continuously. We get notified when a new review lands so you can respond fast — and we draft the response if you want us to.",
  },
];

const processSteps = [
  {
    no: "01",
    title: "Discovery & Account Setup",
    body: "30-minute call to learn the business and your current review presence. We provision your Go High Level sub-account, connect your Google Business Profile, and import your customer list.",
  },
  {
    no: "02",
    title: "Workflow Configuration",
    body: "We write the review request templates in your voice, set up sentiment routing, configure the unified inbox, and wire up notifications — all behind the scenes, no work on your end.",
  },
  {
    no: "03",
    title: "Launch & Train",
    body: "We go live and walk you through the platform in a 30-minute session. You learn where reviews show up, how to use the inbox, and how to find any contact in 5 seconds.",
  },
  {
    no: "04",
    title: "Manage & Expand",
    body: "We run the workflows, monitor the reviews, and keep things tuned. Once everything's humming, you can layer on SMS campaigns, email blasts, or loyalty programs from the same platform.",
  },
];

const stats = [
  { value: "14", label: "Days to first batch of new reviews", unit: "days" },
  { value: "1", label: "Inbox replacing 5+ scattered tools", unit: "" },
  { value: "24/7", label: "Multi-platform review monitoring", unit: "" },
  { value: "$0", label: "Long-term lock-in. Month-to-month.", unit: "" },
];

const upsells = [
  {
    no: "01",
    title: "SMS Marketing Campaigns",
    body: "Targeted text campaigns to your contact list — promotions, seasonal offers, win-back flows. The platform's already wired up, the deliverability is real.",
  },
  {
    no: "02",
    title: "Email Marketing Campaigns",
    body: "Newsletter, drip sequences, and one-off blasts run from the same CRM. No separate Mailchimp account, no contact list duplication, no extra invoice.",
  },
  {
    no: "03",
    title: "Rewards & Loyalty Systems",
    body: "Build a simple points or referral program that runs automatically against your customer list — the kind that keeps repeat customers coming back without staff time.",
  },
  {
    no: "04",
    title: "Marketing & Workflow Automations",
    body: "Custom automations: lead routing, appointment reminders, no-show recovery, post-job follow-ups, internal Slack pings. Anything repeatable can get automated.",
  },
  {
    no: "05",
    title: "Chatbots & Conversational AI",
    body: "AI chatbot on your site or a voice agent on a dedicated line. Trained on your services and FAQ, escalates real leads to your calendar — works at 11pm on a Tuesday.",
  },
  {
    no: "06",
    title: "Custom Workflow Builds",
    body: "Got a process that's eating your time? We design and build a custom automation around it — quoted per scope, transparently, no surprise platform fees.",
  },
];

export default function ReputationPage() {
  return (
    <main>
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section
        aria-label="Reputation Management hero"
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

        <div className="relative z-10 mx-auto w-full max-w-brand px-6">
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
            <span className="text-sand-950">Reputation Management</span>
          </nav>

          <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-[8fr_4fr] lg:gap-16">
            <div>
              <div className="mb-6 flex flex-wrap items-center gap-3 font-brand text-[11px] font-bold uppercase tracking-[0.15em]">
                <span className="text-clay-500">04 / Service</span>
                <span className="inline-block h-0.5 w-12 bg-clay-500" />
                <span className="text-sand-950">Reputation Management</span>
                <span className="bg-clay-500 px-2.5 py-1 text-sand-50">
                  Flagship
                </span>
              </div>

              <h1 className="rep-hero-title m-0 font-brand font-black uppercase leading-[0.95] tracking-[-0.04em] text-sand-950">
                Your Reviews,
                <br />
                Your Inbox,
                <br />
                <span className="text-clay-500">Your Follow-Ups.</span>
                <br />
                Handled.
              </h1>

              <p className="mt-8 max-w-[560px] font-brand text-[15px] leading-[1.7] text-sand-700 md:text-[16px]">
                We run the platform that turns happy customers into five-star
                reviews — and pulls every text, email, and message from every
                channel into one inbox you actually check. Done for you.
                Powered by an enterprise platform you don&apos;t have to learn.
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
                ["Format", "Done-for-you · managed"],
                ["Platform", "Go High Level (white-label)"],
                ["Pricing", "$195/mo flat"],
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
        <div className="mx-auto w-full max-w-brand px-6">
          <div className="mb-16 grid grid-cols-1 items-end gap-6 lg:grid-cols-[5fr_7fr]">
            <div>
              <SectionLabel text="02 / Included" />
              <h2
                id="included-heading"
                className="rep-section-heading m-0 font-brand font-black uppercase text-sand-950"
              >
                One Platform.
                <br />
                <span className="text-clay-500">One Inbox.</span>
                <br />
                One Bill.
              </h2>
            </div>
            <p className="m-0 font-brand text-[15px] leading-[1.7] text-sand-700">
              Reputation Management isn&apos;t just review requests. It&apos;s
              the operations platform underneath your customer relationships
              — set up, run, and monitored by us. Below is what&apos;s in the
              box.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {includedItems.map((item, i) => (
              <article
                key={item.no}
                className={`group flex h-full cursor-default flex-col gap-4 border-2 border-sand-950 bg-sand-50 p-9 transition-colors duration-150 hover:bg-sand-950 ${
                  i % 3 !== 0 ? "lg:-ml-0.5" : ""
                } ${i % 2 !== 0 ? "sm:-ml-0.5 lg:ml-0" : ""} ${
                  i >= 3 ? "lg:-mt-0.5" : ""
                } ${i >= 2 ? "sm:-mt-0.5 lg:mt-0" : ""}`}
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-brand text-[11px] font-bold uppercase tracking-[0.18em] text-clay-500 transition-colors duration-150 group-hover:text-clay-300">
                    {item.no}
                  </span>
                  <span className="block h-0.5 w-10 bg-sand-950 transition-colors duration-150 group-hover:bg-clay-500" />
                </div>
                <h3 className="m-0 font-brand text-[20px] font-extrabold uppercase leading-[1.2] tracking-[-0.01em] text-sand-950 transition-colors duration-150 group-hover:text-sand-50">
                  {item.title}
                </h3>
                <p className="m-0 font-brand text-[14px] leading-[1.7] text-sand-600 transition-colors duration-150 group-hover:text-sand-50/80">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────────── */}
      <section
        id="pricing"
        aria-labelledby="pricing-heading"
        className="border-b-4 border-sand-950 bg-sand-50 bg-grid-pattern py-24"
      >
        <div className="mx-auto w-full max-w-brand px-6">
          <div className="mb-16 grid grid-cols-1 items-end gap-6 lg:grid-cols-[7fr_5fr]">
            <div>
              <SectionLabel text="03 / Pricing" />
              <h2
                id="pricing-heading"
                className="rep-section-heading m-0 font-brand font-black uppercase text-sand-950"
              >
                One Flat Fee.
                <br />
                <span className="text-clay-500">No Setup Cost.</span>
                <br />
                No Lock-In.
              </h2>
            </div>
            <p className="m-0 font-brand text-[15px] leading-[1.7] text-sand-700">
              Everything below for one monthly price. Cancel anytime — though
              most clients stay because the inbox alone is worth more than the
              fee. Onboarding to Reputation Management also unlocks every
              platform add-on listed further down.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Reputation subscription — featured (dark) */}
            <article className="group relative flex h-full flex-col gap-7 border-4 border-sand-900 bg-sand-900 p-10">
              <span className="absolute -top-[18px] left-10 bg-clay-500 px-3.5 py-[5px] font-brand text-[10px] font-bold uppercase tracking-[0.12em] text-sand-50">
                Most Popular
              </span>

              <div className="flex items-baseline justify-between">
                <h3 className="m-0 font-brand text-[26px] font-black uppercase tracking-[-0.03em] text-sand-50">
                  Reputation
                </h3>
                <span className="font-brand text-[11px] font-bold uppercase tracking-[0.15em] text-sand-50/60">
                  Month-to-month
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-brand text-[11px] font-medium uppercase tracking-[0.06em] text-sand-50/60">
                  Flat monthly
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="font-brand text-[56px] font-black leading-none tracking-[-0.04em] text-sand-50">
                    $195
                  </span>
                  <span className="font-brand text-[16px] font-semibold text-sand-50/60">
                    /mo
                  </span>
                </div>
              </div>

              <p
                className="m-0 border-t pt-5 font-brand text-[13px] leading-[1.65] text-sand-50/75"
                style={{ borderColor: "rgba(251,248,243,0.15)" }}
              >
                The full done-for-you reputation system, the platform sub-account,
                the unified inbox, and the CRM. Setup is included — no separate
                onboarding invoice, no surprise fees.
              </p>

              <ul className="m-0 flex flex-1 list-none flex-col gap-3 p-0">
                {[
                  "Dedicated Go High Level sub-account",
                  "Review request workflows configured + run",
                  "Sentiment routing + customer engagement",
                  "CRM + unified inbox access",
                  "Multi-platform review monitoring",
                  "Setup included · no long-term contract",
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
                Start Reputation Management
              </a>
            </article>

            {/* Risk reversal / what's-not-included card */}
            <article className="group relative flex h-full flex-col gap-7 border-2 border-sand-950 bg-sand-50 p-10 transition-colors duration-150 hover:bg-sand-100 lg:-ml-0.5">
              <div className="flex items-baseline justify-between">
                <h3 className="m-0 font-brand text-[26px] font-black uppercase tracking-[-0.03em] text-sand-950">
                  What You Don&apos;t Pay For
                </h3>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-brand text-[11px] font-medium uppercase tracking-[0.06em] text-sand-600">
                  The fine print
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="font-brand text-[56px] font-black leading-none tracking-[-0.04em] text-sand-950">
                    $0
                  </span>
                  <span className="font-brand text-[14px] font-semibold text-sand-600">
                    setup · platform · cancel
                  </span>
                </div>
              </div>

              <p className="m-0 border-t border-sand-200 pt-5 font-brand text-[13px] leading-[1.65] text-sand-600">
                A standalone Go High Level subscription is $97–497/mo before
                you set anything up. Most agencies tack a setup fee on top of
                their monthly. We don&apos;t. Onboarding, training, and
                cancellation are all $0.
              </p>

              <ul className="m-0 flex flex-1 list-none flex-col gap-3 p-0">
                {[
                  "No setup or onboarding fee",
                  "No separate platform subscription",
                  "No long-term contract — cancel anytime",
                  "No per-message or per-contact charges",
                  "No data lock-in — your contact list is yours",
                  "Free Digital Presence Audit included up front",
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
                Get the Free Audit
              </a>
            </article>
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t-2 border-sand-950 pt-6 sm:flex-row sm:items-center">
            <p className="m-0 max-w-[560px] font-brand text-[13px] leading-[1.6] text-sand-600">
              Onboarding to Reputation unlocks the full platform — SMS, email,
              loyalty, automations, chatbots, and custom workflows are
              available as à la carte add-ons quoted per scope.
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
        <div className="mx-auto w-full max-w-brand px-6">
          <div className="mb-16 grid grid-cols-1 items-end gap-6 lg:grid-cols-[5fr_7fr]">
            <div className="lg:order-2 lg:text-right">
              <div className="lg:flex lg:justify-end">
                <SectionLabel text="04 / By the Numbers" />
              </div>
              <h2
                id="results-heading"
                className="rep-section-heading m-0 font-brand font-black uppercase text-sand-950"
              >
                More Reviews.
                <br />
                Fewer <span className="text-clay-500">Missed Replies.</span>
              </h2>
            </div>
            <p className="m-0 font-brand text-[15px] leading-[1.7] text-sand-700 lg:order-1">
              Local search ranking is half-decided by your review presence and
              your responsiveness. We work both sides — quietly, every day —
              while you handle the actual customers walking through the door.
            </p>
          </div>

          {/* Stat row — collapsing borders for crisp Swiss feel */}
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
                  <span className=" font-brand text-[44px] font-black leading-none tracking-[-0.04em] text-sand-950 md:text-[56px]">
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

          <div className="mt-10 grid grid-cols-1 items-center gap-8 border-4 border-sand-950 bg-sand-900 bg-dots-pattern p-10 lg:grid-cols-[8fr_4fr] lg:p-12">
            <div>
              <span className="mb-3 inline-block font-brand text-[11px] font-bold uppercase tracking-[0.18em] text-clay-500">
                Case study
              </span>
              <p className="m-0 max-w-[640px] font-brand text-[20px] font-semibold leading-[1.4] text-sand-50 md:text-[24px]">
                &ldquo;We went from 12 Google reviews in three years to 38 in
                three months. The new ones are the ones people read. My
                Mondays look different now.&rdquo;
              </p>
              <p className="mt-3 font-brand text-[12px] uppercase tracking-[0.12em] text-sand-50/60">
                Four Leaf Charters · Cape Coral
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
        <div className="mx-auto w-full max-w-brand px-6">
          <div className="mb-16 text-right">
            <div className="flex justify-end">
              <SectionLabel text="05 / Process" />
            </div>
            <h2
              id="process-heading"
              className="rep-section-heading m-0 font-brand font-black uppercase text-sand-950"
            >
              From Onboarding
              <br />
              To <span className="text-clay-500">Auto-Pilot.</span>
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
                    Step
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

      {/* ── PLATFORM UPSELLS ─────────────────────────────────────────── */}
      <section
        id="upsells"
        aria-labelledby="upsells-heading"
        className="border-b-4 border-sand-950 bg-sand-100 bg-grid-pattern py-24"
      >
        <div className="mx-auto w-full max-w-brand px-6">
          <div className="mb-16 grid grid-cols-1 items-end gap-6 lg:grid-cols-[5fr_7fr]">
            <div>
              <SectionLabel text="06 / Add-Ons" />
              <h2
                id="upsells-heading"
                className="rep-section-heading m-0 font-brand font-black uppercase text-sand-950"
              >
                What Unlocks
                <br />
                Once <span className="text-clay-500">You&apos;re On.</span>
              </h2>
            </div>
            <p className="m-0 font-brand text-[15px] leading-[1.7] text-sand-700">
              Every Reputation Management client is already on the platform.
              That makes everything below faster and cheaper to add than
              starting from scratch — quoted per scope, transparently, with no
              hidden platform fees.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {upsells.map((item, i) => (
              <article
                key={item.no}
                className={`group flex h-full cursor-default flex-col gap-4 border-2 border-sand-950 bg-sand-50 p-9 transition-colors duration-150 hover:bg-clay-500 ${
                  i % 3 !== 0 ? "lg:-ml-0.5" : ""
                } ${i % 2 !== 0 ? "sm:-ml-0.5 lg:ml-0" : ""} ${
                  i >= 3 ? "lg:-mt-0.5" : ""
                } ${i >= 2 ? "sm:-mt-0.5 lg:mt-0" : ""}`}
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-brand text-[11px] font-bold uppercase tracking-[0.18em] text-clay-500 transition-colors duration-150 group-hover:text-sand-50">
                    {item.no}
                  </span>
                  <span className="block h-0.5 w-10 bg-sand-950 transition-colors duration-150 group-hover:bg-sand-50" />
                </div>
                <h3 className="m-0 font-brand text-[18px] font-extrabold uppercase leading-[1.2] tracking-[-0.01em] text-sand-950 transition-colors duration-150 group-hover:text-sand-50">
                  {item.title}
                </h3>
                <p className="m-0 font-brand text-[14px] leading-[1.7] text-sand-600 transition-colors duration-150 group-hover:text-sand-50/90">
                  {item.body}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-10 max-w-[640px] font-brand text-[13px] italic leading-[1.6] text-sand-600">
            Add-ons are available only to active Reputation Management
            clients. We don&apos;t sell platform access alone — the platform
            without the work isn&apos;t the product.
          </p>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section
        id="faq"
        aria-labelledby="faq-heading"
        className="border-b-4 border-sand-950 bg-sand-50 bg-grid-pattern py-24"
      >
        <div className="mx-auto w-full max-w-brand px-6">
          <div className="mb-12 grid grid-cols-1 items-end gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <SectionLabel text="07 / Questions" />
              <h2
                id="faq-heading"
                className="rep-faq-heading m-0 mb-4 font-brand font-black uppercase text-sand-950"
              >
                Honest Answers
                <br />
                About <span className="text-clay-500">Your Reviews.</span>
              </h2>
              <p className="m-0 max-w-[560px] font-brand text-[14px] leading-[1.65] text-sand-600">
                The questions every business owner asks before paying for a
                managed reputation service — answered the way I&apos;d answer
                them on a call.
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
            <RepFaq />
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────── */}
      <section
        id="contact"
        aria-labelledby="cta-heading"
        className="relative overflow-hidden bg-sand-900 py-24"
      >
        <div className="mx-auto grid w-full max-w-brand grid-cols-1 items-end gap-16 px-6 lg:grid-cols-[7fr_5fr]">
          <div>
            <div className="mb-6 flex items-center gap-3 font-brand text-[11px] font-bold uppercase tracking-[0.15em] text-clay-500">
              <span className="inline-block h-0.5 w-6 bg-clay-500" />
              08 / What&apos;s Next
            </div>

            <h2
              id="cta-heading"
              className="rep-cta-heading m-0 mb-8 font-brand font-black uppercase text-sand-50"
            >
              Stop Watching
              <br />
              Reviews Trickle In
              <br />
              <span className="text-clay-500">From Last Year.</span>
            </h2>

            <p className="m-0 mb-10 max-w-[480px] border-l-4 border-clay-500 pl-5 font-brand text-[16px] leading-[1.65] text-sand-50/75">
              30-minute discovery call. We&apos;ll pull your current review
              presence, audit your inbox setup, and tell you straight what a
              managed reputation system would do for your business — and what
              it wouldn&apos;t.
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
                Get a free reputation audit instead
              </Link>
            </div>
          </div>

          <aside aria-label="Pair with" className="flex flex-col gap-0">
            <p className="mb-4 font-brand text-[11px] font-bold uppercase tracking-[0.18em] text-sand-50/60">
              Pairs well with
            </p>
            {[
              {
                label: "Local SEO",
                copy: "Reviews and local SEO compound. Reviews lift rankings, rankings lift more reviews.",
                href: "/services/seo",
              },
              {
                label: "Websites",
                copy: "A modern, fast site is the destination every five-star review sends customers to.",
                href: "/services/websites",
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
