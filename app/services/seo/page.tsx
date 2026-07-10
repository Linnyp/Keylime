import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { IconArrowRight } from "@/components/shared/icons";
import { SeoFaq } from "./SeoFaq";
import { IncludedSelector } from "./IncludedSelector";
import "./seo.css";

export const metadata: Metadata = {
  title: "Local SEO Cape Coral FL — Google Business Profile Optimization",
  description:
    "Local SEO for service businesses in Southwest Florida. Keyword research, citations, GBP optimization, and content that ranks — month-to-month.",
};

const includedItems = [
  {
    no: "01",
    title: "Keyword Research & Mapping",
    body: "We pull the actual terms your customers search in Lee, Collier, and Charlotte — not generic templates. Each keyword gets mapped to the page on your site that should rank for it.",
    icon: "/icons/keywordseoLogo.png",
  },
  {
    no: "02",
    title: "Local Citations & NAP",
    body: "Your name, address, and phone number cleaned up and unified across every local directory that matters. Inconsistent NAP is one of the most common reasons local businesses don't rank.",
    icon: "/icons/citationseoLogo.png",
  },
  {
    no: "03",
    title: "Google Business Profile",
    body: "Full GBP setup and optimization — categories, services, photos, posts, Q&A. The map pack drives more local calls than the blue links most weeks.",
    icon: "/icons/gmbseo.png",
  },
  {
    no: "04",
    title: "Foundation Backlinks",
    body: "1–2 high-domain-authority backlinks at setup, plus strategic monthly link building from real local and industry sources. No PBNs, no garbage, no penalty risk.",
    icon: "/icons/backlinklogo.png",
  },
  {
    no: "05",
    title: "Content That Ranks",
    body: "Four blog posts a month written around keywords your customers actually search — and structured to convert visitors into calls, not just traffic.",
    icon: "/icons/seocontentlogo.png",
  },
  {
    no: "06",
    title: "Plain-English Reporting",
    body: "Monthly report in language a human can read. Rankings, traffic, and what we shipped — no jargon dumps, no vanity metrics, no 40-tab spreadsheets.",
    icon: "/icons/analyzeseoIcon.png",
  },
];

const processSteps = [
  {
    no: "01",
    title: "Audit & Keyword Map",
    body: "We start with a full audit — your current rankings, competitors, technical health, and GBP. Then we map the keywords worth ranking for, ranked by what would actually drive booked calls.",
  },
  {
    no: "02",
    title: "Foundation Setup",
    body: "Citations cleaned, GBP optimized, on-page fixes shipped, foundation backlinks placed, press release where applicable. The floor every local business needs before ongoing work pays off.",
  },
  {
    no: "03",
    title: "Content & Backlinks",
    body: "Every month: four blog posts, GBP posts, strategic backlinks, ongoing on-page tuning. The compounding work that moves rankings — slowly, then all at once.",
  },
  {
    no: "04",
    title: "Track & Refine",
    body: "We watch what's ranking, what's converting, and what's stuck. We double down on the keywords gaining traction and quietly drop the ones that won't move. You get a plain-English report every month.",
  },
];

const stats = [
  { value: "3 – 6", label: "Months to meaningful ranking gains", unit: "mo" },
  { value: "4", label: "Blog posts shipped per month", unit: "/mo" },
  { value: "1 – 2", label: "High-DA backlinks at foundation", unit: "" },
  { value: "$0", label: "Long-term lock-in. Month-to-month.", unit: "" },
];

export default function SeoPage() {
  return (
    <main>
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section
        aria-label="Local SEO hero"
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
            <span className="text-sand-950">Local SEO</span>
          </nav>

          <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-[8fr_4fr] lg:gap-16">
            <div>
              <h1 className="seo-hero-title m-0 font-brand font-black uppercase leading-[0.95] tracking-[-0.04em] text-sand-950">
                Show Up When
                <br />
                <span className="text-clay-500">Your Customers</span>
                <br />
                Already Search.
              </h1>

              <p className="mt-8 max-w-[560px] font-brand text-[15px] leading-[1.7] text-sand-700 md:text-[16px]">
                Most local searches end with a call to one of the top three
                results. We do the work that gets you there — keyword research,
                citations, Google Business Profile, content, and backlinks —
                month over month, until you&apos;re the obvious pick.
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
                ["Format", "Foundation + Ongoing"],
                ["Coverage", "Lee · Collier · Charlotte · Dade · Broward"],
                ["Pricing", "$600 setup · or $300/mo"],
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
                className="seo-section-heading m-0 font-brand font-black uppercase text-sand-950"
              >
                The Whole Stack.
                <br />
                <span className="text-clay-500">Not Just Tags</span>
                <br />
                And Backlinks.
              </h2>
            </div>
            <p className="m-0 font-brand text-[15px] leading-[1.7] text-sand-700">
              Local SEO is a stack — keyword research, on-page, citations, GBP,
              backlinks, content. Pull one piece out and the whole thing
              underperforms. Foundation builds the floor. Ongoing keeps it
              compounding.
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
                className="seo-section-heading m-0 font-brand font-black uppercase text-sand-950"
              >
                Foundation, Then
                <br />
                <span className="text-clay-500">Compounding</span> Work.
              </h2>
            </div>
            <p className="m-0 font-brand text-[15px] leading-[1.7] text-sand-700">
              Pay once for the floor, then a flat monthly for the work that
              builds rankings on top of it. No long-term contract on the ongoing
              side — month-to-month, cancel anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Foundation (one-time) */}
            <article className="group relative flex h-full flex-col gap-7 border-2 border-sand-950 bg-sand-50 p-10 transition-colors duration-150 hover:bg-sand-100">
              <div className="flex items-baseline justify-between">
                <h3 className="m-0 font-brand text-[26px] font-black uppercase tracking-[-0.03em] text-sand-950">
                  SEO Foundation
                </h3>
                <span className="font-brand text-[11px] font-bold uppercase tracking-[0.15em] text-sand-600">
                  One-time
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-brand text-[11px] font-medium uppercase tracking-[0.06em] text-sand-600">
                  Setup fee
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="font-brand text-[56px] font-black leading-none tracking-[-0.04em] text-sand-950">
                    $600
                  </span>
                  <span className="font-brand text-[14px] font-semibold text-sand-600">
                    flat
                  </span>
                </div>
              </div>

              <p className="m-0 border-t border-sand-200 pt-5 font-brand text-[13px] leading-[1.65] text-sand-600">
                The floor every local business needs. Best as a one-shot setup
                if you&apos;re not ready for monthly content yet — or as the
                kickoff for ongoing work.
              </p>

              <ul className="m-0 flex flex-1 list-none flex-col gap-3 p-0">
                {[
                  "Keyword research + mapping",
                  "Local citation building (unified NAP)",
                  "1–2 high-DA foundation backlinks",
                  "Press release (where applicable)",
                  "GBP setup + optimization",
                  "Handoff documentation",
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
                Start with Foundation
              </a>
            </article>

            {/* Ongoing — featured (dark) */}
            <article className="group relative flex h-full flex-col gap-7 border-4 border-sand-900 bg-sand-900 p-10 lg:-ml-0.5">
              <span className="absolute -top-[18px] left-10 bg-clay-500 px-3.5 py-[5px] font-brand text-[10px] font-bold uppercase tracking-[0.12em] text-sand-50">
                Most Popular
              </span>

              <div className="flex items-baseline justify-between">
                <h3 className="m-0 font-brand text-[26px] font-black uppercase tracking-[-0.03em] text-sand-50">
                  Ongoing SEO
                </h3>
                <span className="font-brand text-[11px] font-bold uppercase tracking-[0.15em] text-sand-50/60">
                  Month-to-month
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-brand text-[11px] font-medium uppercase tracking-[0.06em] text-sand-50/60">
                  Starting at
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="font-brand text-[56px] font-black leading-none tracking-[-0.04em] text-sand-50">
                    $300
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
                The compounding work that moves rankings. Content, backlinks,
                GBP activity, and on-page tuning every month. Best if you want
                steady ranking growth without a long-term contract.
              </p>

              <ul className="m-0 flex flex-1 list-none flex-col gap-3 p-0">
                {[
                  "Content strategy",
                  "4 blog posts per month",
                  "GBP posts + ongoing optimization",
                  "Strategic backlink building",
                  "Press releases (where applicable)",
                  "No long-term lock-in",
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
                Start Ongoing SEO
              </a>
            </article>
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t-2 border-sand-950 pt-6 sm:flex-row sm:items-center">
            <p className="m-0 max-w-[560px] font-brand text-[13px] leading-[1.6] text-sand-600">
              Most clients start with Foundation, then roll into Ongoing once
              the floor is set. Research is bundled into the monthly fee — no
              separate audit invoice.
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
                className="seo-section-heading m-0 font-brand font-black uppercase text-sand-950"
              >
                Slow At First.
                <br />
                Then <span className="text-clay-500">All At Once.</span>
              </h2>
            </div>
            <p className="m-0 font-brand text-[15px] leading-[1.7] text-sand-700 lg:order-1">
              SEO doesn&apos;t spike. It compounds. The work you pay for in
              month one keeps paying in month twelve — and the rankings get
              harder for competitors to take back the longer you stay
              consistent.
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
                &ldquo;Six months in, we&apos;re ranking in the map pack for
                three of our top services. The phone rings on Mondays now — that
                didn&apos;t happen before.&rdquo;
              </p>
              <p className="mt-3 font-brand text-[12px] uppercase tracking-[0.12em] text-sand-50/60">
                Virtue Sod · Lee County
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
              className="ml-10 seo-section-heading m-0 font-brand font-black uppercase text-sand-950"
            >
              From Audit To Compounding <br />
              <span className="text-clay-500">Rankings.</span>
            </h2>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-[140px] left-0 z-20 w-[220px] select-none sm:-top-[180px] sm:w-[280px] md:-top-[230px] md:w-[360px] lg:-top-[270px] lg:w-[420px] xl:-top-[284px] xl:left-2 xl:w-[440px]"
            >
              <img
                src="/climbingIllustration.png"
                alt=""
                className="h-auto w-full"
              />
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
                className="seo-faq-heading m-0 mb-4 font-brand font-black uppercase text-sand-950"
              >
                Honest Answers
                <br />
                About <span className="text-clay-500">Ranking.</span>
              </h2>
              <p className="m-0 max-w-[560px] font-brand text-[14px] leading-[1.65] text-sand-600">
                The questions every business owner asks before paying for SEO —
                answered the way I&apos;d answer them on a call.
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
            <SeoFaq />
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
              className="seo-cta-heading m-0 mb-8 font-brand font-black uppercase text-sand-50"
            >
              Be The Top Result
              <br />
              When Your Town
              <br />
              <span className="text-clay-500">Searches You.</span>
            </h2>

            <p className="m-0 mb-10 max-w-[480px] border-l-4 border-clay-500 pl-5 font-brand text-[16px] leading-[1.65] text-sand-50/75">
              30-minute discovery call. We&apos;ll pull your current rankings,
              audit your GBP, and tell you straight whether SEO would actually
              move the needle for your business — or whether ads would get there
              faster.
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
                Get a free SEO audit instead
              </Link>
            </div>
          </div>

          <aside aria-label="Pair with" className="flex flex-col gap-0">
            <p className="mb-4 font-brand text-[11px] font-bold uppercase tracking-[0.18em] text-sand-50/60">
              Pairs well with
            </p>
            {[
              {
                label: "Google & Meta Ads",
                copy: "Accelerate with paid ads while SEO compounds in the background.",
                href: "/services/ads",
              },
              {
                label: "Websites",
                copy: "A modern, fast site is the foundation SEO ranks on. Pair the two.",
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
