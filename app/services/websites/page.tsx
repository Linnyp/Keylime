import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { IconArrowRight } from "@/components/shared/icons";
import { WebsitesFaq } from "./WebsitesFaq";
import { HeroAnimation } from "./HeroAnimation";
import { IncludedSelector } from "./IncludedSelector";
import "./websites.css";

export const metadata: Metadata = {
  title: "Website Design Cape Coral FL — Small Business Websites",
  description:
    "Custom Next.js websites for local service businesses in Southwest Florida. Fast, mobile-first, built to convert — flat fee or monthly plan.",
};

const includedItems = [
  {
    no: "01",
    title: "Custom Design",
    body: "Every page drawn around your business — your services, your customers, your market. No drag-and-drop templates that look like the four shops down the road.",
    icon: "/logos/webdesignlogo.png",
    bullets: ["Brand Voice", "Local Imagery", "Service Pages"],
  },
  {
    no: "02",
    title: "Modern Build",
    body: "Built on Next.js and React. Fast on a phone, fast on a slow connection, fast on a search engine's crawl. The same stack the big national sites run on.",
    icon: "/logos/webdevlogo.png",
    bullets: ["Next.js & React", "Mobile-First", "Sub-Second Loads"],
  },
  {
    no: "03",
    title: "Hosting & Email",
    body: "Domain email, SSL, daily backups, and hosting that doesn't go down on a Saturday. Subscription clients get this baked in.",
    icon: "/logos/hostingemailLogo.png",
    bullets: ["Domain Email", "SSL & Backups", "Uptime Monitoring"],
  },
  {
    no: "04",
    title: "Local Search Setup",
    body: "Schema markup, sitemaps, page speed, and on-page SEO done right at launch — so the site starts ranking without a rebuild six months in.",
    icon: "/logos/formsLogo.png",
    iconTranslateClass: "translate-y-[55%]",
    bullets: ["Schema Markup", "Sitemaps", "Page Speed"],
  },
  {
    no: "05",
    title: "Analytics That Make Sense",
    body: "Google Analytics 4 and call tracking installed and configured. We tell you which pages actually book calls — in plain English, every month.",
    icon: "/logos/anayzeLogo.png",
    bullets: ["GA4 Setup", "Call Tracking", "Monthly Reports"],
  },
  {
    no: "06",
    title: "Edits & Support",
    body: "Need a new service page? A price update? A photo swapped? Text us. Subscription clients get unlimited edits, usually same day.",
    icon: "/logos/editsupportLogo.png",
    bullets: ["Same-Day Fixes", "Unlimited Edits", "Direct Text Line"],
  },
];

const processSteps = [
  {
    no: "01",
    title: "Discovery & Audit",
    body: "30-minute call. We learn the business, the market, and the competition. Then we audit what you have today so the new site doesn't repeat old mistakes.",
  },
  {
    no: "02",
    title: "Design & Approve",
    body: "We mock up the homepage and one service page first. You react in real time. No 40-page brand guide to wade through. Once it feels right, we build the rest.",
  },
  {
    no: "03",
    title: "Build & Launch",
    body: "We build, you review, we ship. Domain, hosting, analytics, and search console all wired up at launch — not on a follow-up invoice three weeks later.",
  },
  {
    no: "04",
    title: "Edit & Optimize",
    body: "The site keeps earning. We watch what pages convert, what's getting traffic, what isn't. Edits go in. The site gets sharper every month.",
  },
];

const stats = [
  { value: "4 – 6", label: "Weeks until you're online", unit: "wks" },
  {
    value: "90%",
    label: "Page speed scores for lightning fast websites",
    unit: "+",
  },
  { value: "5", label: "Pages in a standard build", unit: "pgs" },
  { value: "$0", label: "Upfront cost on the subscription plan", unit: "" },
];

export default function WebsitesPage() {
  return (
    <main>
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section
        aria-label="Websites hero"
        className="relative overflow-x-clip border-b-4 border-sand-950 bg-sand-50 pt-44 pb-20 md:pt-48 md:pb-24"
      >
        {/* Subtle radial warmth — pulled from styleguide §2.5 */}
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
            <span className="text-sand-950">Websites</span>
          </nav>

          {/* Asymmetric grid: numbered label + headline | meta column */}
          <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-[8fr_4fr] lg:gap-16">
            <div className="flex flex-col">
              <h1 className="websites-hero-title m-0 font-brand font-black uppercase leading-[0.95] tracking-[-0.04em] text-sand-950">
                A Site Built
                <br />
                To Work Hard.
                <br />
                <span className="text-clay-500">Not To Look Pretty</span>
                <br />
                On A Pitch Deck.
              </h1>

              <p className="mt-8 max-w-[560px] font-brand text-[15px] leading-[1.7] text-sand-700 md:text-[16px]">
                A custom site, built from scratch on the same modern stack the
                big national sites run on. Fast on a phone. Easy to update.
                Designed around one job: turning a search into a booked call.
              </p>

              <div className="mt-auto flex flex-col gap-3 pt-10 sm:flex-row sm:items-stretch">
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

            {/* Right column — animation on top, meta facts pinned below */}
            <div className="relative flex flex-col gap-8">
              <div className="relative aspect-4/3 lg:aspect-10/9 overflow-hidden">
                <HeroAnimation />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-sand-50/65 lg:hidden"
                />
              </div>

              <aside
                aria-label="At a glance"
                className="absolute inset-0 z-10 flex flex-col justify-center lg:relative lg:inset-auto lg:z-auto lg:justify-start lg:border-l-2 lg:border-sand-950"
              >
                {[
                  ["Format", "Custom · Static · 5-page "],
                  ["Stack", "Next.js · TypeScript · TailwindCSS"],
                  ["Pricing", "$3,000 lump · or $180/mo"],
                  ["Launch", "2–4 weeks"],
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
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ──────────────────────────────────────────── */}
      <section
        id="whats-included"
        aria-labelledby="included-heading"
        className="border-b-4 border-sand-950 bg-sand-100 py-24"
      >
        <div className="mx-auto w-full max-w-[1200px] px-6">
          <div className="mb-16 grid grid-cols-1 items-start gap-6 lg:grid-cols-[7fr_5fr]">
            <div>
              <SectionLabel text="02 / Included" />
              <h2
                id="included-heading"
                className="websites-section-heading m-0 font-brand font-black uppercase text-sand-950"
              >
                Sites That Earn Back The{" "}
                <span className="text-clay-500">Build.</span>
              </h2>
            </div>
            <p className="m-0 font-brand text-[15px] leading-[1.7] text-sand-700 lg:pt-[37px]">
              We don&apos;t ship slow sites and we don&apos;t ship sites that
              sit there. Here&apos;s what a Linax build looks like by the
              numbers — and what to expect after launch.
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
                className="websites-section-heading m-0 font-brand font-black uppercase text-sand-950"
              >
                Two Ways To Pay.
                <br />
                <span className="text-clay-500">Same Site</span> Either Way.
              </h2>
            </div>
            <p className="m-0 font-brand text-[15px] leading-[1.7] text-sand-700">
              Pay once and own the build, or spread it across a flat monthly fee
              that bundles hosting, edits, and support. Same custom site — two
              ways to fit the budget.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Lump sum */}
            <article className="group relative flex h-full flex-col gap-7 border-2 border-sand-950 bg-sand-50 p-10 transition-colors duration-150 hover:bg-sand-100">
              <div className="flex items-baseline justify-between">
                <h3 className="m-0 font-brand text-[26px] font-black uppercase tracking-[-0.03em] text-sand-950">
                  Lump Sum
                </h3>
                <span className="font-brand text-[11px] font-bold uppercase tracking-[0.15em] text-sand-600">
                  One-time
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-brand text-[11px] font-medium uppercase tracking-[0.06em] text-sand-600">
                  Project fee
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="font-brand text-[56px] font-black leading-none tracking-[-0.04em] text-sand-950">
                    $3,000
                  </span>
                  <span className="font-brand text-[14px] font-semibold text-sand-600">
                    + $25/mo hosting
                  </span>
                </div>
              </div>

              <p className="m-0 border-t border-sand-200 pt-5 font-brand text-[13px] leading-[1.65] text-sand-600">
                You own the code, the design files, and the domain. Pay once,
                walk away with the asset. Best if you have the upfront budget
                and want full ownership on day one.
              </p>

              <ul className="m-0 flex flex-1 list-none flex-col gap-3 p-0">
                {[
                  "5-page custom design + development",
                  "Full ownership of code & files",
                  "Hosting billed at $25/mo separately",
                  "Content edits available at $25/mo",
                  "Additional pages at $150 each",
                  "Blog system + chatbot as add-ons",
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
                Start a Lump-Sum Build
              </a>
            </article>

            {/* Subscription — featured (dark) */}
            <article className="group relative flex h-full flex-col gap-7 border-4 border-sand-900 bg-sand-900 p-10 lg:-ml-0.5">
              <span className="absolute -top-[18px] left-10 bg-clay-500 px-3.5 py-[5px] font-brand text-[10px] font-bold uppercase tracking-[0.12em] text-sand-50">
                Most Popular
              </span>

              <div className="flex items-baseline justify-between">
                <h3 className="m-0 font-brand text-[26px] font-black uppercase tracking-[-0.03em] text-sand-50">
                  Subscription
                </h3>
                <span className="font-brand text-[11px] font-bold uppercase tracking-[0.15em] text-sand-50/60">
                  12-mo min
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-brand text-[11px] font-medium uppercase tracking-[0.06em] text-sand-50/60">
                  Starting at
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="font-brand text-[56px] font-black leading-none tracking-[-0.04em] text-sand-50">
                    $180
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
                Website-as-a-service. No upfront build cost. Hosting, email,
                edits, and support roll into one flat monthly fee. Best if you
                want a modern site without writing a $3,000 check on day one.
              </p>

              <ul className="m-0 flex flex-1 list-none flex-col gap-3 p-0">
                {[
                  "Custom design + development",
                  "Hosting, SSL & domain email",
                  "Unlimited content edits",
                  "Analytics + call tracking setup",
                  "Full ongoing support",
                  "Zero upfront build cost",
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
                Start a Subscription Build
              </a>
            </article>
          </div>

          <div className="mt-10 border-t-2 border-sand-950 pt-7">
            <div className="flex flex-col gap-x-8 gap-y-3 sm:flex-row sm:flex-wrap sm:items-center">
              <span className="font-brand text-[13px] font-bold uppercase tracking-[0.12em] text-sand-950">
                Add-Ons Include:
              </span>
              {[
                { label: "Blog System", price: "$250" },
                { label: "Chatbot Subscription", price: "" },
                { label: "Additional pages", price: "$150/per page" },
              ].map((a) => (
                <span
                  key={a.label}
                  className="inline-flex items-center gap-2 font-brand text-[13px]"
                >
                  <span
                    aria-hidden
                    className="block h-2.5 w-2.5 shrink-0 bg-clay-500"
                  />
                  <span className="font-semibold text-sand-950">{a.label}</span>
                  {a.price && <span className="text-sand-600">{a.price}</span>}
                </span>
              ))}
            </div>
            <div className="mt-5 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
              <p className="m-0 font-brand text-[12px] leading-[1.6] text-sand-600">
                All add-ons rates and prices are quoted clearly up front. No
                hidden fees.
              </p>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-1.5 font-brand text-[12px] font-bold uppercase tracking-[0.12em] text-clay-500 underline underline-offset-4 hover:text-clay-700"
              >
                See full pricing for every service <IconArrowRight />
              </Link>
            </div>
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
          {/* Desktop: 2×2 stat grid on the left, heading + copy on the right.
              Mobile: heading first, then 2×2 stats below. */}
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Heading + copy — mobile first, desktop right */}
            <div className="lg:order-2">
              <SectionLabel text="04 / By the Numbers" />
              <h2
                id="results-heading"
                className="websites-section-heading m-0 font-brand font-black uppercase text-sand-950"
              >
                Sites That Earn
                <br />
                Back The <span className="text-clay-500">Build.</span>
              </h2>
              <p className="mt-6 m-0 max-w-[440px] font-brand text-[15px] leading-[1.7] text-sand-700">
                We don&apos;t ship slow sites and we don&apos;t ship sites that
                sit there. Here&apos;s what a Linax build looks like by the
                numbers — and what to expect after launch.
              </p>
            </div>

            {/* Stat grid — always 2 columns, collapsing borders for crisp Swiss feel */}
            <div className="grid grid-cols-2 lg:order-1">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`flex flex-col gap-3 border-2 border-sand-950 bg-sand-50 p-8 lg:p-10 ${
                    i % 2 !== 0 ? "-ml-0.5" : ""
                  } ${i >= 2 ? "-mt-0.5" : ""}`}
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
          </div>

          {/* Mini case study teaser — dark callout */}
          <div className="mt-10 grid grid-cols-1 items-center gap-8 border-4 border-sand-950 bg-sand-900 bg-dots-pattern p-10 lg:grid-cols-[8fr_4fr] lg:p-12">
            <div>
              <span className="mb-3 inline-block font-brand text-[11px] font-bold uppercase tracking-[0.18em] text-clay-500">
                Case study
              </span>
              <p className="m-0 max-w-[640px] font-brand text-[20px] font-semibold leading-[1.4] text-sand-50 md:text-[24px]">
                &ldquo;The new site loads in under a second on my phone.
                I&apos;m getting calls from people who said they found us on
                Google for the first time.&rdquo;
              </p>
              <p className="mt-3 font-brand text-[12px] uppercase tracking-[0.12em] text-sand-50/60">
                Verona Cabinets · Cape Coral
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
              className="websites-section-heading m-0 font-brand font-black uppercase text-sand-950"
            >
              From Kickoff
              <br />
              To Launch In <span className="text-clay-500">3–4 Weeks.</span>
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

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section
        id="faq"
        aria-labelledby="faq-heading"
        className="border-b-4 border-sand-950 bg-sand-100 py-24"
      >
        <div className="mx-auto w-full max-w-brand px-6">
          <div className="mb-12 grid grid-cols-1 items-end gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <SectionLabel text="06 / Questions" />
              <h2
                id="faq-heading"
                className="websites-faq-heading m-0 mb-4 font-brand font-black uppercase text-sand-950"
              >
                Honest Answers
                <br />
                About <span className="text-clay-500">Your Site.</span>
              </h2>
              <p className="m-0 max-w-[560px] font-brand text-[14px] leading-[1.65] text-sand-600">
                The questions every business owner asks before they sign —
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
            <WebsitesFaq />
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
              className="websites-cta-heading m-0 mb-8 font-brand font-black uppercase text-sand-50"
            >
              Stop Losing Leads
              <br />
              To A Site That
              <br />
              <span className="text-clay-500">Loads Like 2014.</span>
            </h2>

            <p className="m-0 mb-10 max-w-[480px] border-l-4 border-clay-500 pl-5 font-brand text-[16px] leading-[1.65] text-sand-50/75">
              30-minute discovery call. No pitch deck, no upsell. Just an honest
              read on whether a new site would actually move the needle for your
              business — and what it would cost.
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
                Get a free site audit instead
              </Link>
            </div>
          </div>

          {/* Cross-sell column */}
          <aside aria-label="Pair with" className="flex flex-col gap-0">
            <p className="mb-4 font-brand text-[11px] font-bold uppercase tracking-[0.18em] text-sand-50/60">
              Pairs well with
            </p>
            {[
              {
                label: "Local SEO",
                copy: "Pair your new site with local SEO so it ranks the moment it ships.",
                href: "/services/seo",
              },
              {
                label: "Reputation Mgmt",
                copy: "Keep the leads coming. Reviews on autopilot, all in one inbox.",
                href: "/services/reputation",
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
