"use client";

/*
 * KeyLime — "Marketing Systems" section (Three Systems snapshot).
 *
 * Split header, a tab list of the three systems, and a detail pane with price,
 * included list, and CTA. Editorial Citrus & Charcoal treatment: rounded tab
 * cards (active = charcoal fill), soft-shadowed detail panel, lime accents used
 * with discipline. Copy comes from homepage-copy.md §6.
 */

import Image from "next/image";
import { useState } from "react";
import { SectionLabel } from "../shared/SectionLabel";
import { PrimaryButton } from "../shared/PrimaryButton";
import { IconCheck, IconPlus } from "../shared/icons";

interface MarketingSystem {
  name: string;
  /** Lime stage for this tier — wedge, halved, whole as the system grows. */
  icon: string;
  /** Detail page for this system. */
  href: string;
  tagline: string;
  price: string;
  badge?: string;
  included: string[];
}

const systems: MarketingSystem[] = [
  {
    name: "Foundation",
    href: "/systems/foundation",
    icon: "/limes/wedge.webp",
    tagline: "A real working system for businesses just getting their footing.",
    price: "$99",
    included: [
      "Website",
      "CRM",
      "Review automation",
      "Unified inbox",
      "Business phone line",
    ],
  },
  {
    name: "Growth",
    href: "/systems/growth",
    icon: "/limes/half.webp",
    tagline: "The lead engine.",
    price: "$195",
    badge: "Most operators start here",
    included: [
      "Everything in Foundation",
      "Missed-call text-back",
      "Online booking",
      "Chatbots",
      "Appointment reminders",
      "SEO foundation",
      "3–5 page site",
    ],
  },
  {
    name: "Expansion",
    href: "/systems/expansion",
    icon: "/limes/whole.webp",
    tagline: "The full customer lifecycle.",
    price: "$495",
    included: [
      "Everything in Growth",
      "Custom website",
      "Monthly blog content",
      "Automated nurture sequences",
      "Rewards and loyalty",
      "Google Business Profile management",
      "Quarterly database reactivation",
    ],
  },
];

export function MarketingSystemsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = systems[activeIndex];

  return (
    <section
      id="systems"
      aria-label="Marketing systems"
      className="relative z-10 bg-sand-100 py-24 md:py-28"
    >
      <div className="mx-auto w-full max-w-brand px-6">
        {/* Split header — intro left, eyebrow + heading right */}
        <div className="mb-14 flex flex-col-reverse gap-8 lg:flex-row lg:items-end lg:justify-between">
          <p className="m-0 max-w-[524px] text-[16px] leading-[1.6] text-sand-600">
            Each system is complete the day it goes live — not a stripped-down
            preview of the next one up. Prices are on the site. Month-to-month.
          </p>
          <div className="lg:text-right">
            <div className="flex lg:justify-end">
              <SectionLabel text="Marketing Systems" />
            </div>
            <h2 className="m-0 font-brand font-black uppercase text-sand-950 text-[clamp(2rem,4vw,3.25rem)] leading-[0.93] tracking-[-0.055em]">
              Three systems.
              <br />
              One <span className="text-lime-600">monthly price.</span>
            </h2>
          </div>
        </div>

        {/* Tab list + detail pane */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[5fr_7fr] lg:gap-8">
          <div role="tablist" aria-label="Marketing systems" className="flex flex-col gap-4">
            {systems.map((system, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={system.name}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="system-panel"
                  onClick={() => setActiveIndex(i)}
                  className={`group flex w-full cursor-pointer items-center justify-between gap-4 rounded-2xl border px-7 py-6 text-left transition-all duration-200 ${
                    isActive
                      ? "border-sand-900 bg-sand-900 text-white shadow-[0_12px_26px_0_rgba(28,30,26,0.14)]"
                      : "border-sand-200 bg-white text-sand-950 shadow-[0_1px_2px_0_rgba(28,30,26,0.08)] hover:-translate-y-0.5 hover:border-lime-300"
                  }`}
                >
                  <span className="flex flex-col gap-1.5">
                    <span className="flex flex-wrap items-center gap-3">
                      <Image
                        src={system.icon}
                        alt=""
                        width={64}
                        height={64}
                        aria-hidden="true"
                        className="h-7 w-auto shrink-0"
                      />
                      <span className="font-brand text-[22px] font-extrabold tracking-[-0.03em]">
                        {system.name}
                      </span>
                      {system.badge && (
                        <span className="rounded-full bg-lime-500 px-2.5 py-1 font-brand text-[10px] font-semibold uppercase tracking-[0.1em] text-sand-950">
                          {system.badge}
                        </span>
                      )}
                    </span>
                    <span
                      className={`text-[13px] leading-[1.5] ${
                        isActive ? "text-white/70" : "text-sand-600"
                      }`}
                    >
                      {system.tagline}
                    </span>
                  </span>
                  <span
                    className={`shrink-0 transition-transform duration-200 ${
                      isActive
                        ? "rotate-45 text-lime-300"
                        : "text-char-400 group-hover:text-lime-600"
                    }`}
                  >
                    <IconPlus />
                  </span>
                </button>
              );
            })}
          </div>

          <div
            id="system-panel"
            role="tabpanel"
            aria-label={active.name}
            className="rounded-3xl border border-sand-200 bg-white p-10 shadow-[0_2px_6px_0_rgba(28,30,26,0.06)]"
          >
            <div className="mb-8 flex items-baseline gap-2">
              <span className="font-brand text-[56px] font-extrabold leading-none tracking-[-0.04em] text-sand-950">
                {active.price}
              </span>
              <span className="text-[16px] font-medium text-sand-600">/mo</span>
            </div>

            <h3 className="m-0 mb-2 font-brand text-[18px] font-bold tracking-[-0.03em] text-sand-950">
              What&apos;s included in {active.name}
            </h3>
            <p className="m-0 mb-7 text-[14px] leading-[1.6] text-sand-600">
              {active.tagline}
            </p>

            <ul className="m-0 mb-10 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2">
              {active.included.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[14px] leading-[1.5] text-sand-950"
                >
                  <span
                    aria-hidden
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime-100 text-lime-800"
                  >
                    <IconCheck />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <PrimaryButton href={active.href}>View Details</PrimaryButton>
          </div>
        </div>

        <p className="m-0 mt-10 text-center text-[13px] leading-[1.6] text-sand-600">
          $200 one-time setup. Month-to-month. Move up or down anytime — your
          contacts and workflows carry across.
        </p>
      </div>
    </section>
  );
}
