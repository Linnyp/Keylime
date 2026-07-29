import type { Metadata } from "next";
import Link from "next/link";
import type { IconType } from "react-icons";
import { HeroGlow } from "@/components/shared/HeroGlow";
import {
  FiArrowRight,
  FiAward,
  FiBarChart2,
  FiBell,
  FiCalendar,
  FiChevronDown,
  FiGift,
  FiGlobe,
  FiInbox,
  FiLayers,
  FiMessageCircle,
  FiMonitor,
  FiPhoneIncoming,
  FiRefreshCw,
  FiSearch,
  FiStar,
  FiUsers,
  FiZap,
} from "react-icons/fi";

export const metadata: Metadata = {
  title: "Services — Every Solution We Run",
  description:
    "Twelve platform solutions and three specialized services, delivered as one managed system. See what each one does, which system includes it, and what it costs.",
};

const CALENDLY_URL = "https://calendly.com/keylime-marketing/discovery-call";

type SystemKey = "foundation" | "growth" | "expansion";

const systemMeta: Record<SystemKey, { label: string; href: string }> = {
  foundation: { label: "Foundation", href: "/systems/foundation" },
  growth: { label: "Growth", href: "/systems/growth" },
  expansion: { label: "Expansion", href: "/systems/expansion" },
};

interface Solution {
  slug: string;
  name: string;
  outcome: string;
  body: string;
  icon: IconType;
  includedIn: SystemKey[];
  /** Pricing posture — add-on availability or custom-scoping note. */
  note: string;
  /** Detail page, where one exists. */
  href?: string;
}

interface Group {
  number: string;
  eyebrow: string;
  title: string;
  intro: string;
  solutions: Solution[];
}

const groups: Group[] = [
  {
    number: "01",
    eyebrow: "Group one",
    title: "Capture every lead.",
    intro:
      "The calls, forms, and messages that come in while you are on a job. This group makes sure none of them go unanswered.",
    solutions: [
      {
        slug: "speed-to-lead",
        name: "Speed-to-Lead",
        outcome: "Never miss another lead while you are on the job.",
        body: "Every missed call fires an instant text back. Form submissions get an automatic reply and route to the right person. Pre-qualification filters and tags leads before they ever reach you, so the ones worth calling are obvious.",
        icon: FiZap,
        includedIn: ["growth", "expansion"],
        note: "Available as an add-on at a published price on Foundation.",
      },
      {
        slug: "booking",
        name: "Booking",
        outcome: "Let customers book themselves, day or night.",
        body: "A branded booking page tied to your calendar and your CRM. Customers pick a slot, reschedule themselves, and get a confirmation without anyone on your team touching it.",
        icon: FiCalendar,
        includedIn: ["growth", "expansion"],
        note: "Keep your existing booking or field-service software — we build around it.",
      },
      {
        slug: "chatbots",
        name: "Chatbots",
        outcome: "Answer the same five questions without answering them.",
        body: "Website and social chat with conversation flows tuned to your trade. It captures the lead, answers the common questions, books the appointment, and hands anything complicated to a human.",
        icon: FiMessageCircle,
        includedIn: ["growth", "expansion"],
        note: "Additional chatbot builds available as an add-on on any system.",
      },
      {
        slug: "voice-agents",
        name: "Voice Agents",
        outcome: "Someone picks up at 8pm on a Saturday.",
        body: "An AI voice agent answers after-hours calls, captures the caller's details, and books straight into the calendar. For operators who lose real money to evening and weekend calls that go to voicemail.",
        icon: FiPhoneIncoming,
        includedIn: [],
        note: "Add-on at a published price on any system.",
      },
    ],
  },
  {
    number: "02",
    eyebrow: "Group two",
    title: "Convert and retain.",
    intro:
      "Captured is not booked, and booked is not repeat. This group moves a lead from first contact to a closed job — and then back again.",
    solutions: [
      {
        slug: "crm",
        name: "Lead Pipeline (CRM)",
        outcome: "A contact list with a memory.",
        body: "Every lead, contact, and customer in one place, with pipeline stages that match how your business actually moves work from inquiry to closed job. No more quotes lost in a text thread on a personal phone.",
        icon: FiUsers,
        includedIn: ["foundation", "growth", "expansion"],
        note: "Included on every system.",
      },
      {
        slug: "lead-nurture",
        name: "Lead Nurture",
        outcome: "The follow-up you meant to send, sent on time.",
        body: "Multi-touch SMS and email sequences for cold leads, quote follow-ups, no-show recovery, and long decision cycles. The jobs that close six weeks later close because something kept talking to them.",
        icon: FiLayers,
        includedIn: ["expansion"],
        note: "Add-on at a published price on Foundation and Growth.",
      },
      {
        slug: "appointment-reminders",
        name: "Appointment Reminders",
        outcome: "Fewer empty slots on the schedule.",
        body: "Confirmation on booking, a reminder the day before, a reminder the morning of, and a follow-up after. Multi-channel, automatic, and tuned to the no-show pattern in your industry.",
        icon: FiBell,
        includedIn: ["growth", "expansion"],
        note: "Available as an add-on on Foundation.",
      },
      {
        slug: "database-reactivation",
        name: "Database Reactivation",
        outcome: "The easiest revenue you are sitting on.",
        body: "Targeted campaigns to past customers and dormant leads — the quotes that never closed, the clients who stopped booking. Most businesses have a list like this and never touch it.",
        icon: FiRefreshCw,
        includedIn: ["expansion"],
        note: "Quarterly on Expansion. One-time or ongoing campaigns available on any system.",
      },
    ],
  },
  {
    number: "03",
    eyebrow: "Group three",
    title: "Reputation and growth.",
    intro:
      "What people find when they look you up, and what keeps them coming back once they have hired you.",
    solutions: [
      {
        slug: "reputation-management",
        name: "Reputation Management",
        outcome: "A steady stream of reviews, without asking twice.",
        body: "Automated review requests after every completed job or appointment, monitoring across Google and Facebook, sentiment-aware response handling, and ongoing tuning of when and how the ask goes out.",
        icon: FiStar,
        includedIn: ["foundation", "growth", "expansion"],
        note: "Included on every system.",
        href: "/services/reputation",
      },
      {
        slug: "unified-inbox",
        name: "Unified Inbox",
        outcome: "One inbox instead of six apps.",
        body: "SMS, email, webchat, social DMs, and Google Business messages land in one place. Your team replies from one screen and the platform handles the routing behind it.",
        icon: FiInbox,
        includedIn: ["foundation", "growth", "expansion"],
        note: "Included on every system.",
      },
      {
        slug: "birthday-campaigns",
        name: "Birthday Campaigns",
        outcome: "A reason to come back, sent automatically.",
        body: "Birthday outreach with an offer tuned to your business. It does obvious work in beauty and personal services, and it quietly earns repeat work in home services too.",
        icon: FiGift,
        includedIn: ["growth", "expansion"],
        note: "Available as an add-on on Foundation.",
      },
      {
        slug: "rewards",
        name: "Rewards",
        outcome: "Turn regulars into referrals.",
        body: "Loyalty points, rewards, and referral tracking built into the platform, plus the campaigns that actually get customers to participate. Retention work that runs without a punch card.",
        icon: FiAward,
        includedIn: ["expansion"],
        note: "Add-on at a published price on Foundation and Growth.",
      },
    ],
  },
  {
    number: "04",
    eyebrow: "Group four",
    title: "Specialized work.",
    intro:
      "Three services that go past what the platform alone can do. The real work depends on your market, your goals, and your budget — so we write a scope before we quote a price.",
    solutions: [
      {
        slug: "seo",
        name: "SEO",
        outcome: "Show up when someone searches for what you do.",
        body: "SEO Foundation covers citations, keyword mapping, Google Business Profile optimization, and the technical fundamentals. Beyond that: ongoing content programs, link building, and competitive market work.",
        icon: FiSearch,
        includedIn: ["growth", "expansion"],
        note: "SEO Foundation is included on Growth and Expansion. Full programs are quoted per engagement.",
        href: "/services/seo",
      },
      {
        slug: "ads",
        name: "Google & Meta Ads",
        outcome: "Paid traffic that lands in a system built to catch it.",
        body: "Strategy, copy, creative, audience setup, campaign management, optimization, and reporting across Google Search, Performance Max, Local Services Ads, and Meta. We run ads into the lead engine, not into a contact form nobody checks.",
        icon: FiBarChart2,
        includedIn: [],
        note: "Quoted per engagement, based on scope and ad budget.",
        href: "/services/ads",
      },
      {
        slug: "websites",
        name: "Websites",
        outcome: "A site that earns the call, wired into everything else.",
        body: "A one-page site on Foundation, a 3–5 page site on Growth, and a custom 5–10 page Webflow build plus a blog on Expansion. Mobile-first, conversion-focused, and connected to your CRM, booking, and inbox from day one.",
        icon: FiMonitor,
        includedIn: ["foundation", "growth", "expansion"],
        note: "Scope varies by system. Larger custom builds are quoted per engagement.",
        href: "/services/websites",
      },
    ],
  },
];

function InclusionChips({ includedIn }: { includedIn: SystemKey[] }) {
  if (includedIn.length === 0) {
    return (
      <p className="font-brand text-xs font-bold uppercase tracking-[0.09em] text-sand-600">
        Not in a system — add it to any of them
      </p>
    );
  }
  return (
    <div className="flex flex-wrap gap-2">
      {includedIn.map((key) => (
        <Link
          key={key}
          href={systemMeta[key].href}
          className="inline-flex items-center rounded-full border-2 border-sand-950 px-3 py-1.5 font-brand text-[11px] font-extrabold uppercase tracking-[0.08em] text-sand-950 no-underline transition-colors hover:bg-sand-950 hover:text-sand-50"
        >
          {systemMeta[key].label}
        </Link>
      ))}
    </div>
  );
}

function SolutionRow({ solution, isLast }: { solution: Solution; isLast: boolean }) {
  const Icon = solution.icon;
  return (
    <article
      id={solution.slug}
      className={`scroll-mt-28 grid gap-8 py-10 md:py-12 lg:grid-cols-[5fr_6fr_4fr] lg:gap-12 ${
        isLast ? "" : "border-b-2 border-sand-200"
      }`}
    >
      <div>
        <Icon size={28} className="text-lime-600" aria-hidden="true" />
        <h3 className="mt-5 font-brand text-2xl font-black uppercase leading-[0.98] tracking-[-0.045em] md:text-[1.75rem]">
          {solution.name}
        </h3>
        <p className="mt-3 max-w-[330px] font-brand text-[15px] font-bold leading-snug tracking-[-0.02em] text-clay-600">
          {solution.outcome}
        </p>
      </div>

      <p className="max-w-[560px] text-[16px] leading-[1.75] text-sand-700 lg:pt-1">
        {solution.body}
      </p>

      <div className="lg:pt-1">
        <p className="mb-3 font-brand text-[11px] font-bold uppercase tracking-[0.16em] text-sand-600">
          Included in
        </p>
        <InclusionChips includedIn={solution.includedIn} />
        <p className="mt-4 max-w-[280px] text-[13px] leading-[1.6] text-sand-600">
          {solution.note}
        </p>
        {solution.href ? (
          <Link
            href={solution.href}
            className="mt-5 inline-flex items-center gap-2 font-brand text-[13px] font-bold uppercase tracking-[0.06em] text-sand-950 underline decoration-lime-500 decoration-2 underline-offset-[6px] hover:text-clay-600"
          >
            See the details <FiArrowRight aria-hidden="true" />
          </Link>
        ) : null}
      </div>
    </article>
  );
}

const solutionCount = `${groups.reduce((total, group) => total + group.solutions.length, 0)} solutions`;

/** Grouped anchor links — shared by the mobile dropdown and the desktop grid. */
function JumpIndexGroups() {
  return (
    <>
      {groups.map((group) => (
        <div key={group.number}>
          <p className="font-brand text-[11px] font-bold uppercase tracking-[0.14em] text-sand-600">
            {group.title}
          </p>
          <ul className="mt-3 space-y-2">
            {group.solutions.map((solution) => (
              <li key={solution.slug}>
                <a
                  href={`#${solution.slug}`}
                  className="font-brand text-sm font-bold uppercase tracking-[-0.01em] text-sand-950 no-underline hover:text-clay-600"
                >
                  {solution.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

export default function ServicesHubPage() {
  return (
    <main className="pt-8 overflow-hidden bg-sand-50 text-sand-950">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative border-b-4 border-sand-950 py-20 md:py-28">
        <HeroGlow className="-right-40 top-0 h-[520px] w-[520px]" />
        <div className="relative mx-auto grid w-full max-w-[1200px] gap-12 px-6 lg:grid-cols-[7fr_5fr] lg:items-end">
          <div>
            <p className="mb-5 font-brand text-xs font-bold uppercase tracking-[0.18em] text-lime-600">
              The catalog
            </p>
            <h1 className="max-w-[760px] font-brand text-[clamp(2.75rem,5.5vw,5.25rem)] font-black uppercase leading-[0.91] tracking-[-0.055em]">
              Twelve platform solutions. Three specialized services.{" "}
              <span className="text-lime-600">One managed system.</span>
            </h1>
            <p className="mt-7 max-w-[600px] text-[17px] leading-[1.7] text-sand-700">
              This is everything we run. Some of it is in every system. Some of it is
              system-specific. Anything not in your system can be added on — you will
              always know what it costs before you buy it.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link
                href="/pricing"
                className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-lime-500 px-6 py-3 font-brand text-sm font-bold uppercase tracking-[0.06em] text-sand-950 no-underline transition-transform duration-200 hover:-translate-y-0.5 hover:bg-lime-600"
              >
                Compare systems <FiArrowRight aria-hidden="true" />
              </Link>
              <a
                href={CALENDLY_URL}
                className="inline-flex items-center gap-2 font-brand text-sm font-bold uppercase tracking-[0.06em] text-sand-950 underline decoration-lime-500 decoration-2 underline-offset-8 hover:text-clay-600"
              >
                Book Free Consult <FiArrowRight aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Count panel — mirrors the price card on the system pages. */}
          <div className="rounded-3xl bg-sand-950 p-8 text-sand-950 shadow-[10px_10px_0_0_#588817]">
            <p className="font-brand text-sm font-bold uppercase tracking-[0.12em] text-lime-600">
              What we run
            </p>
            <dl className="mt-6 space-y-5">
              {[
                ["12", "Platform solutions", "Delivered through the platform we manage."],
                ["3", "Specialized services", "SEO, ads, and web — scoped, then quoted."],
                ["1", "Monthly price", "One team, one invoice, month-to-month."],
              ].map(([count, label, detail]) => (
                <div key={label} className="flex gap-5 border-t border-sand-50/15 pt-5 first:border-0 first:pt-0">
                  <dt className="font-brand text-4xl font-black leading-none tracking-[-0.06em] text-lime-600">
                    {count}
                  </dt>
                  <dd>
                    <p className="font-brand text-sm font-extrabold uppercase tracking-[-0.01em]">
                      {label}
                    </p>
                    <p className="mt-1 text-[13px] leading-relaxed text-sand-950/65">{detail}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── JUMP INDEX ───────────────────────────────────────────────────── */}
      <section className="border-b-4 border-sand-950 bg-sand-100 py-6 md:py-10">
        <div className="mx-auto w-full max-w-[1200px] px-6">
          {/* Mobile: collapsed by default so the list is not a scroll tax. */}
          <details className="group md:hidden">
            <summary className="flex min-h-[52px] cursor-pointer list-none items-center justify-between gap-4 rounded-full border-2 border-sand-950 bg-sand-50 px-5 py-3 [&::-webkit-details-marker]:hidden">
              <span className="font-brand text-xs font-bold uppercase tracking-[0.18em] text-lime-600">
                Jump to a solution
              </span>
              <span className="flex items-center gap-2 font-brand text-[11px] font-bold uppercase tracking-[0.12em] text-sand-600">
                {solutionCount}
                <FiChevronDown
                  aria-hidden="true"
                  className="transition-transform duration-200 group-open:rotate-180"
                />
              </span>
            </summary>
            <nav aria-label="Solution index" className="mt-5 grid gap-y-6">
              <JumpIndexGroups />
            </nav>
          </details>

          {/* Desktop: always visible. */}
          <div className="hidden md:block">
            <p className="font-brand text-xs font-bold uppercase tracking-[0.18em] text-lime-600">
              Jump to a solution
            </p>
            <nav
              aria-label="Solution index"
              className="mt-6 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-4"
            >
              <JumpIndexGroups />
            </nav>
          </div>
        </div>
      </section>

      {/* ── GROUPS ───────────────────────────────────────────────────────── */}
      {groups.map((group, index) => (
        <section
          key={group.number}
          className={index % 2 === 1 ? "bg-sand-100 py-12 md:py-16" : "py-12 md:py-16"}
        >
          <div className="mx-auto w-full max-w-[1200px] px-6">
            {/* Each group collapses so the four headings stay scannable. */}
            <details className="group" open={index === 0}>
              <summary className="flex cursor-pointer list-none items-start gap-6 rounded-2xl py-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-600 [&::-webkit-details-marker]:hidden">
                <div className="grid flex-1 gap-4 lg:grid-cols-[5fr_6fr] lg:items-end">
                  <div>
                    <p className="mb-4 font-brand text-xs font-bold uppercase tracking-[0.18em] text-lime-600">
                      {group.eyebrow}
                    </p>
                    <h2 className="font-brand text-[clamp(2.25rem,4.4vw,4rem)] font-black uppercase leading-[0.93] tracking-[-0.055em]">
                       {group.title}
                    </h2>
                  </div>
                  <p className="max-w-[560px] text-[17px] leading-[1.7] text-sand-700 lg:pb-2">
                    {group.intro}
                  </p>
                </div>

                <span className="mt-2 flex shrink-0 items-center gap-3">
                  <span className="hidden font-brand text-[11px] font-bold uppercase tracking-[0.12em] text-sand-600 sm:inline">
                    {group.solutions.length}{" "}
                    {group.solutions.length === 1 ? "solution" : "solutions"}
                  </span>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-sand-950 transition-transform duration-200 group-hover:bg-lime-500 group-open:rotate-180">
                    <FiChevronDown size={22} aria-hidden="true" />
                  </span>
                </span>
              </summary>

              <div className="mt-10 border-t-4 border-sand-950">
                {group.solutions.map((solution, solutionIndex) => (
                  <SolutionRow
                    key={solution.slug}
                    solution={solution}
                    isLast={solutionIndex === group.solutions.length - 1}
                  />
                ))}
              </div>

              {group.number === "04" ? (
                <div className="mt-10 flex flex-wrap items-center gap-6 rounded-3xl border-2 border-sand-950 bg-sand-50 p-8">
                  <p className="max-w-[620px] font-brand text-lg font-bold leading-snug tracking-[-0.03em]">
                    Specialized work is priced on the real scope, not from a template. Tell us
                    what you are trying to do and we will come back with a written scope and a
                    price.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-sand-950 px-6 py-3 font-brand text-sm font-bold uppercase tracking-[0.06em] text-sand-50 no-underline transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    Talk to us about a custom quote <FiArrowRight aria-hidden="true" />
                  </Link>
                </div>
              ) : null}
            </details>
          </div>
        </section>
      ))}

      {/* ── ADD-ON EXPLAINER ─────────────────────────────────────────────── */}
      <section className="border-y-4 border-sand-950 bg-sand-100 bg-grid-pattern py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1200px] px-6">
          <div className="max-w-[720px]">
            <p className="mb-4 font-brand text-xs font-bold uppercase tracking-[0.18em] text-lime-600">
              How it is priced
            </p>
            <h2 className="font-brand text-[clamp(2.25rem,4.4vw,4rem)] font-black uppercase leading-[0.93] tracking-[-0.055em]">
              Add what you need. Nothing you don&apos;t.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl bg-sand-50 p-8 md:p-10">
              <FiLayers size={28} className="text-lime-600" aria-hidden="true" />
              <h3 className="mt-6 font-brand text-2xl font-black uppercase tracking-[-0.04em]">
                Published add-on prices.
              </h3>
              <p className="mt-4 max-w-[460px] leading-[1.7] text-sand-700">
                Any platform solution that is not in your system can be added at a published
                price. Voice Agents, Lead Nurture, Rewards, extra automations, extra chatbot
                builds. Your monthly stays clear and itemized.
              </p>
              <Link
                href="/pricing"
                className="mt-7 inline-flex items-center gap-2 font-brand text-sm font-bold uppercase tracking-[0.06em] text-sand-950 underline decoration-lime-500 decoration-2 underline-offset-[6px] hover:text-clay-600"
              >
                See what each system includes <FiArrowRight aria-hidden="true" />
              </Link>
            </article>
            <article className="rounded-3xl bg-sand-950 p-8 text-sand-50 md:p-10">
              <FiGlobe size={28} className="text-lime-600" aria-hidden="true" />
              <h3 className="mt-6 font-brand text-2xl font-black uppercase tracking-[-0.04em]">
                Custom-quoted work.
              </h3>
              <p className="mt-4 max-w-[460px] leading-[1.7] text-sand-50/70">
                Full SEO programs, ads management, larger website projects, and big workflow
                builds are quoted per engagement. Publishing a placeholder number for work
                that varies this much would just be a number that turns out to be wrong.
              </p>
              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 font-brand text-sm font-bold uppercase tracking-[0.06em] text-sand-50 underline decoration-lime-500 decoration-2 underline-offset-[6px]"
              >
                Talk to us about scope <FiArrowRight aria-hidden="true" />
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="bg-sand-900 py-24 text-sand-50 md:py-32">
        <div className="mx-auto w-full max-w-[1200px] px-6">
          <div className="max-w-[760px]">
            <p className="mb-4 font-brand text-xs font-bold uppercase tracking-[0.18em] text-lime-600">
              What next
            </p>
            <h2 className="font-brand text-[clamp(2.5rem,5vw,4.5rem)] font-black uppercase leading-[0.92] tracking-[-0.055em]">
              You don&apos;t buy these one at a time.
            </h2>
            <p className="mt-6 max-w-[600px] text-[17px] leading-[1.7] text-sand-50/70">
              You pick a system, and the solutions that fit your business come with it. Pick
              the one that fits today — you can move up or down as the business changes.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl bg-sand-50 p-8 text-sand-950 md:p-10">
              <h3 className="font-brand text-2xl font-black uppercase tracking-[-0.04em]">
                See the three systems.
              </h3>
              <p className="mt-4 max-w-[440px] leading-[1.65] text-sand-700">
                Foundation, Growth, and Expansion side by side, with every solution above
                mapped against them.
              </p>
              <Link
                href="/pricing"
                className="mt-8 inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-sand-950 px-6 py-3 font-brand text-sm font-bold uppercase tracking-[0.06em] text-sand-50 no-underline transition-transform duration-200 hover:-translate-y-0.5"
              >
                Compare systems <FiArrowRight aria-hidden="true" />
              </Link>
            </article>
            <article className="rounded-3xl border border-lime-500/50 bg-sand-800 p-8 md:p-10">
              <h3 className="font-brand text-2xl font-black uppercase tracking-[-0.04em]">
                Not sure what you need?
              </h3>
              <p className="mt-4 max-w-[440px] leading-[1.65] text-sand-50/70">
                Free 30-minute consult. No pitch deck. We will tell you plainly which
                solutions your business would actually use.
              </p>
              <a
                href={CALENDLY_URL}
                className="mt-8 inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-lime-500 px-6 py-3 font-brand text-sm font-bold uppercase tracking-[0.06em] text-sand-950 no-underline transition-transform duration-200 hover:-translate-y-0.5 hover:bg-lime-600"
              >
                Book Free Consult <FiArrowRight aria-hidden="true" />
              </a>
            </article>
          </div>
          <p className="mt-9 text-center text-sm text-sand-50/65">
            Still scoping the problem?{" "}
            <Link
              href="/calculators/missed-call-revenue"
              className="font-bold text-sand-50 underline decoration-lime-500 decoration-2 underline-offset-4"
            >
              Calculate my missed-call revenue →
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
