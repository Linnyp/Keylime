import Link from "next/link";
import type { ReactNode } from "react";
import { FiArrowRight } from "react-icons/fi";
import { HeroGlow } from "@/components/shared/HeroGlow";
import DecryptedText from "@/components/shared/DecryptedText";

/**
 * Shared section primitives for the individual service detail pages
 * (`/services/[slug]`). Every page composes these so the four pages stay
 * visually identical to each other and to `/how-it-works`, `/pricing`, and the
 * `/systems/*` pages: Inter black uppercase display type on the charcoal/lime
 * palette, pill CTAs, rounded cards, and 4px charcoal section rules.
 */

export const CALENDLY_URL =
  "https://calendly.com/keylime-marketing/discovery-call";

const CONTAINER = "mx-auto w-full max-w-[1200px] px-6";
const EYEBROW =
  "font-brand text-xs font-bold uppercase tracking-[0.18em] text-lime-600";
const H2 =
  "font-brand text-[clamp(2.25rem,4.4vw,4rem)] font-black uppercase leading-[0.93] tracking-[-0.055em]";
const PILL_BASE =
  "inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full px-6 py-3 font-brand text-sm font-bold uppercase tracking-[0.06em] no-underline transition-transform duration-200 hover:-translate-y-0.5";

/** Pill CTA. `lime` on light surfaces, `charcoal` for the secondary path. */
export function ServicePill({
  href,
  children,
  variant = "lime",
}: {
  href: string;
  children: ReactNode;
  variant?: "lime" | "charcoal" | "light";
}) {
  const variantClass =
    variant === "charcoal"
      ? "bg-sand-950 text-sand-950 hover:bg-sand-800"
      : variant === "light"
        ? "border-2 border-sand-50/60 bg-transparent text-sand-950"
        : "bg-lime-500 text-sand-950 hover:bg-lime-600";
  const isInternal = href.startsWith("/");
  const content = (
    <>
      {children} <FiArrowRight aria-hidden="true" />
    </>
  );
  return isInternal ? (
    <Link href={href} className={`${PILL_BASE} ${variantClass}`}>
      {content}
    </Link>
  ) : (
    <a href={href} className={`${PILL_BASE} ${variantClass}`}>
      {content}
    </a>
  );
}

/** Underlined text link in the system's accent-rule style. */
export function ServiceTextLink({
  href,
  children,
  light = false,
}: {
  href: string;
  children: ReactNode;
  light?: boolean;
}) {
  const cls = `inline-flex items-center gap-2 font-brand text-sm font-bold uppercase tracking-[0.06em] underline decoration-lime-500 decoration-2 underline-offset-8 ${
    light ? "text-sand-50" : "text-sand-950 hover:text-clay-600"
  }`;
  const content = (
    <>
      {children} <FiArrowRight aria-hidden="true" />
    </>
  );
  return href.startsWith("/") ? (
    <Link href={href} className={cls}>
      {content}
    </Link>
  ) : (
    <a href={href} className={cls}>
      {content}
    </a>
  );
}

/* ── HERO ──────────────────────────────────────────────────────────────── */

export function ServiceHero({
  eyebrow,
  badge,
  title,
  intro,
  glance,
  media,
  secondaryHref = "#whats-included",
  secondaryLabel = "See what's included",
}: {
  eyebrow: string;
  badge?: string;
  title: ReactNode;
  intro: string;
  glance: [string, string][];
  /** Optional visual above the at-a-glance panel. */
  media?: ReactNode;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="relative border-b-4 border-sand-950 py-20 md:py-28">
      <HeroGlow className="-right-40 top-0 h-[520px] w-[520px]" />
      <div className={`relative ${CONTAINER}`}>
        <div className="grid gap-12 lg:grid-cols-[7fr_5fr] lg:items-end">
          <div>
            <div className="mb-5 flex flex-wrap items-center gap-4">
              <p className={EYEBROW}>{eyebrow}</p>
              {badge ? (
                <span className="rounded-full bg-lime-500 px-3 py-1 font-brand text-[10px] font-extrabold uppercase tracking-[0.12em] text-sand-950">
                  {badge}
                </span>
              ) : null}
            </div>

            <h1 className="max-w-[760px] font-brand text-[clamp(2.75rem,5.5vw,5.25rem)] font-black uppercase leading-[0.91] tracking-[-0.055em]">
              {title}
            </h1>

            <p className="mt-7 max-w-[600px] text-[17px] leading-[1.7] text-sand-700">
              {intro}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <ServicePill href={CALENDLY_URL}>Book Free Consult</ServicePill>
              <ServiceTextLink href={secondaryHref}>
                {secondaryLabel}
              </ServiceTextLink>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {media}
            <div className="rounded-3xl bg-sand-950 p-8 text-sand-50 shadow-[10px_10px_0_0_#588817]">
              <p className="font-brand text-sm font-bold uppercase tracking-[0.12em] text-lime-600">
                At a glance
              </p>
              <dl className="mt-6 space-y-4">
                {glance.map(([key, value]) => (
                  <div
                    key={key}
                    className="flex items-baseline justify-between gap-5 border-t border-sand-50/15 pt-4 first:border-0 first:pt-0"
                  >
                    <dt className="font-brand text-[10px] font-bold uppercase tracking-[0.18em] text-sand-50/60">
                      {key}
                    </dt>
                    <dd className="text-right font-brand text-sm font-extrabold uppercase tracking-[-0.01em]">
                      <DecryptedText
                        text={value}
                        animateOn="view"
                        sequential
                        revealDirection="start"
                        speed={70}
                        useOriginalCharsOnly
                        encryptedClassName="text-lime-600"
                      />
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── SECTION HEADER ────────────────────────────────────────────────────── */

export function SectionHead({
  eyebrow,
  heading,
  intro,
  headingId,
  align = "left",
}: {
  eyebrow: string;
  heading: ReactNode;
  intro?: string;
  headingId?: string;
  /** `right` mirrors the process/results blocks on `/how-it-works`. */
  align?: "left" | "right";
}) {
  if (align === "right") {
    return (
      <div className="mb-14 ml-auto max-w-[760px] text-right">
        <p className={`mb-4 ${EYEBROW}`}>{eyebrow}</p>
        <h2 id={headingId} className={H2}>
          {heading}
        </h2>
        {intro ? (
          <p className="mt-6 ml-auto max-w-[560px] text-[17px] leading-[1.7] text-sand-700">
            {intro}
          </p>
        ) : null}
      </div>
    );
  }
  return (
    <div className="mb-14 grid gap-8 lg:grid-cols-[6fr_5fr] lg:items-end">
      <div>
        <p className={`mb-4 ${EYEBROW}`}>{eyebrow}</p>
        <h2 id={headingId} className={H2}>
          {heading}
        </h2>
      </div>
      {intro ? (
        <p className="max-w-[560px] text-[17px] leading-[1.7] text-sand-700 lg:pb-2">
          {intro}
        </p>
      ) : null}
    </div>
  );
}

/* ── PROCESS ───────────────────────────────────────────────────────────── */

export interface ProcessStep {
  no: string;
  title: string;
  body: string;
}

/** Numbered stage grid — same construction as the three-step block on `/how-it-works`. */
export function ProcessSteps({
  steps,
  columns = 4,
}: {
  steps: ProcessStep[];
  columns?: 3 | 4;
}) {
  return (
    <div
      className={`grid grid-cols-1 border-t-4 border-sand-950 ${
        columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"
      }`}
    >
      {steps.map((step, index) => (
        <article
          key={step.no}
          className={`bg-sand-50 px-8 py-10 md:px-9 md:py-12 ${
            index > 0 ? "border-t-2 border-sand-950 lg:border-t-0 lg:border-l-2" : ""
          }`}
        >
          <p className="font-brand text-5xl font-black leading-none tracking-[-0.06em] text-lime-600 md:text-6xl">
            {step.no}
          </p>
          <h3 className="mt-7 font-brand text-lg font-extrabold uppercase leading-tight tracking-[-0.03em]">
            {step.title}
          </h3>
          <p className="mt-4 text-[15px] leading-[1.7] text-sand-700">{step.body}</p>
        </article>
      ))}
    </div>
  );
}

/* ── STATS ─────────────────────────────────────────────────────────────── */

export interface Stat {
  value: string;
  label: string;
  unit?: string;
}

export function StatGrid({
  stats,
  columns = 4,
}: {
  stats: Stat[];
  columns?: 2 | 4;
}) {
  return (
    <div
      className={`grid gap-5 grid-cols-1 sm:grid-cols-2 ${
        columns === 4 ? "lg:grid-cols-4" : ""
      }`}
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border-2 border-sand-200 bg-sand-50 p-7 transition-colors hover:border-lime-500"
        >
          <div className="flex items-baseline gap-2">
            <span className="font-brand text-[44px] font-black leading-none tracking-[-0.055em] md:text-[52px]">
              {stat.value}
            </span>
            {stat.unit ? (
              <span className="font-brand text-lg font-bold text-lime-600">
                {stat.unit}
              </span>
            ) : null}
          </div>
          <p className="mt-4 text-[14px] leading-[1.55] text-sand-700">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}

/* ── TESTIMONIAL ───────────────────────────────────────────────────────── */

export function TestimonialCallout({
  quote,
  attribution,
}: {
  quote: string;
  attribution: string;
}) {
  return (
    <figure className="mt-10 rounded-3xl bg-sand-950 bg-dots-pattern p-10 text-sand-50 md:p-12">
      <p className={EYEBROW}>In their words</p>
      <blockquote className="mt-5 max-w-[720px] border-l-4 border-lime-500 pl-6 font-brand text-xl font-bold leading-snug tracking-[-0.03em] md:text-2xl">
        {quote}
      </blockquote>
      <figcaption className="mt-5 font-brand text-xs font-bold uppercase tracking-[0.14em] text-sand-50/60">
        {attribution}
      </figcaption>
    </figure>
  );
}

/* ── PRICING ───────────────────────────────────────────────────────────── */

export interface PriceCard {
  name: string;
  meta: string;
  priceLabel: string;
  price: string;
  priceSuffix?: string;
  priceNote?: string;
  body: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  badge?: string;
  featured?: boolean;
}

export function PricingPair({ cards }: { cards: PriceCard[] }) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {cards.map((card) => {
        const dark = card.featured;
        return (
          <article
            key={card.name}
            className={`relative flex h-full flex-col gap-6 rounded-3xl p-8 md:p-10 ${
              dark
                ? "bg-sand-950 text-sand-50 shadow-[10px_10px_0_0_#588817]"
                : "border-2 border-sand-200 bg-sand-50 transition-colors hover:border-lime-500"
            }`}
          >
            {card.badge ? (
              <span className="absolute -top-3 left-8 rounded-full bg-lime-500 px-3.5 py-1.5 font-brand text-[10px] font-extrabold uppercase tracking-[0.12em] text-sand-950">
                {card.badge}
              </span>
            ) : null}

            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="font-brand text-2xl font-black uppercase tracking-[-0.04em]">
                {card.name}
              </h3>
              <span
                className={`font-brand text-[11px] font-bold uppercase tracking-[0.14em] ${
                  dark ? "text-sand-50/60" : "text-sand-600"
                }`}
              >
                {card.meta}
              </span>
            </div>

            <div>
              <p
                className={`font-brand text-[11px] font-bold uppercase tracking-[0.14em] ${
                  dark ? "text-sand-50/60" : "text-sand-600"
                }`}
              >
                {card.priceLabel}
              </p>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="font-brand text-[56px] font-black leading-none tracking-[-0.06em]">
                  {card.price}
                </span>
                {card.priceSuffix ? (
                  <span
                    className={`font-brand text-base font-semibold ${
                      dark ? "text-sand-50/60" : "text-sand-600"
                    }`}
                  >
                    {card.priceSuffix}
                  </span>
                ) : null}
              </div>
              {card.priceNote ? (
                <p
                  className={`mt-2 font-brand text-[12px] uppercase tracking-[0.08em] ${
                    dark ? "text-sand-50/60" : "text-sand-600"
                  }`}
                >
                  {card.priceNote}
                </p>
              ) : null}
            </div>

            <p
              className={`border-t pt-5 text-[14px] leading-[1.7] ${
                dark
                  ? "border-sand-50/15 text-sand-50/70"
                  : "border-sand-200 text-sand-700"
              }`}
            >
              {card.body}
            </p>

            <ul className="flex flex-1 list-none flex-col gap-3">
              {card.features.map((feature) => (
                <li
                  key={feature}
                  className={`flex items-start gap-3 text-[14px] leading-[1.55] ${
                    dark ? "text-sand-50/70" : "text-sand-700"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-3 shrink-0 rounded-full bg-lime-500"
                  />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <ServicePill
                href={card.ctaHref}
                variant={dark ? "lime" : "charcoal"}
              >
                {card.ctaLabel}
              </ServicePill>
            </div>
          </article>
        );
      })}
    </div>
  );
}

/** Footnote row below the pricing pair. */
export function PricingFootnote({
  children,
  linkHref = "/pricing",
  linkLabel = "See every system and price",
}: {
  children: ReactNode;
  linkHref?: string;
  linkLabel?: string;
}) {
  return (
    <div className="mt-10 flex flex-col items-start justify-between gap-5 border-t-2 border-sand-950 pt-7 sm:flex-row sm:items-center">
      <p className="max-w-[600px] text-[14px] leading-[1.6] text-sand-700">
        {children}
      </p>
      <ServiceTextLink href={linkHref}>{linkLabel}</ServiceTextLink>
    </div>
  );
}

/* ── FAQ ───────────────────────────────────────────────────────────────── */

export interface FaqItem {
  question: string;
  answer: string;
}

/** Native `<details>` accordion — same markup as the system-page FAQ. */
export function ServiceFaq({
  eyebrow,
  heading,
  intro,
  items,
}: {
  eyebrow: string;
  heading: ReactNode;
  intro?: string;
  items: FaqItem[];
}) {
  return (
    <div className="mx-auto w-full max-w-[900px]">
      <p className={EYEBROW}>{eyebrow}</p>
      <h2 className="mt-4 font-brand text-[clamp(2.2rem,4vw,3.6rem)] font-black uppercase leading-[0.94] tracking-[-0.055em]">
        {heading}
      </h2>
      {intro ? (
        <p className="mt-6 max-w-[600px] text-[17px] leading-[1.7] text-sand-700">
          {intro}
        </p>
      ) : null}

      <div className="mt-10 border-y-2 border-sand-950">
        {items.map((item) => (
          <details
            key={item.question}
            className="group border-b-2 border-sand-950 last:border-0"
          >
            <summary className="flex cursor-pointer list-none justify-between gap-6 py-6 font-brand text-[15px] font-bold uppercase">
              <span>{item.question}</span>
              <span aria-hidden="true" className="text-2xl text-lime-600 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="max-w-[760px] pb-7 leading-[1.75] text-sand-700">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}

/* ── FINAL CTA ─────────────────────────────────────────────────────────── */

export interface PairsWithItem {
  label: string;
  copy: string;
  href: string;
}

export function ServiceCta({
  heading,
  blurb,
  pairs,
  secondary,
}: {
  heading: ReactNode;
  blurb: string;
  pairs: PairsWithItem[];
  /** Secondary path below the primary CTA. Defaults to the calculator. */
  secondary?: { href: string; label: string };
}) {
  const sec =
    secondary ?? {
      href: "/calculators/missed-call-revenue",
      label: "Calculate my missed-call revenue",
    };
  return (
    <section id="consult" className="bg-sand-900 py-24 text-sand-50 md:py-32">
      <div className={`grid gap-14 lg:grid-cols-[7fr_5fr] lg:items-end ${CONTAINER}`}>
        <div>
          <p className={`mb-4 ${EYEBROW}`}>What next</p>
          <h2 className="font-brand text-[clamp(2.5rem,5vw,4.5rem)] font-black uppercase leading-[0.92] tracking-[-0.055em]">
            {heading}
          </h2>
          <p className="mt-8 max-w-[520px] border-l-4 border-lime-500 pl-5 text-[17px] leading-[1.7] text-sand-50/70">
            {blurb}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-6">
            <ServicePill href={CALENDLY_URL}>Book Free Consult</ServicePill>
            <ServiceTextLink href={sec.href} light>
              {sec.label}
            </ServiceTextLink>
          </div>
        </div>

        <aside aria-label="Related services">
          <p className="mb-2 font-brand text-[11px] font-bold uppercase tracking-[0.18em] text-sand-50/60">
            Pairs well with
          </p>
          {pairs.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group flex items-start justify-between gap-4 border-t border-sand-50/15 py-5 no-underline last:border-b"
            >
              <div>
                <p className="font-brand text-[15px] font-bold uppercase tracking-[-0.01em] text-sand-50 group-hover:text-lime-600">
                  {item.label}
                </p>
                <p className="mt-1 max-w-[320px] text-[13px] leading-[1.55] text-sand-50/60">
                  {item.copy}
                </p>
              </div>
              <FiArrowRight
                aria-hidden="true"
                className="mt-1 shrink-0 text-lime-600 transition-transform group-hover:translate-x-1"
              />
            </Link>
          ))}
        </aside>
      </div>
    </section>
  );
}

/** Shared section wrapper so vertical rhythm and surfaces stay consistent. */
export function ServiceSection({
  id,
  surface = "light",
  grid = false,
  rule = true,
  children,
}: {
  id?: string;
  surface?: "light" | "alt";
  /** Apply the faint grid texture. */
  grid?: boolean;
  /** Charcoal 4px bottom rule. */
  rule?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`${surface === "alt" ? "bg-sand-100" : "bg-sand-50"} ${
        grid ? "bg-grid-pattern" : ""
      } ${rule ? "border-b-4 border-sand-950" : ""} scroll-mt-24 py-24 md:py-32`}
    >
      <div className={CONTAINER}>{children}</div>
    </section>
  );
}
