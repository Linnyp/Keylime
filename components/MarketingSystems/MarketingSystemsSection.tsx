"use client";

/*
 * KeyLime — "Marketing Systems" section (Three Systems snapshot).
 *
 * Local replication of the Webflow homepage tabbed system explorer:
 * split header (intro left, right-aligned eyebrow + heading), a tab list
 * of the three systems, and a detail pane with price, included list, and
 * CTAs — restyled in the site's Coastal Clay idiom. The Webflow build
 * still carries Agencia template placeholders (a "Lite" tab, $5,500 and
 * $10,500 prices, lorem bodies); copy here comes from homepage-copy.md §6.
 */

import { useState } from "react";
import { SectionLabel } from "../shared/SectionLabel";
import { IconPlus } from "../shared/icons";

interface MarketingSystem {
  name: string;
  tagline: string;
  price: string;
  badge?: string;
  included: string[];
}

const systems: MarketingSystem[] = [
  {
    name: "Foundation",
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
      className="relative z-10 border-t-4 border-sand-950 bg-sand-50 py-28"
    >
      <div className="mx-auto w-full max-w-brand px-6">
        {/* Split header — intro left, eyebrow + heading right */}
        <div className="mb-16 flex flex-col-reverse gap-8 lg:flex-row lg:items-end lg:justify-between">
          <p className="m-0 max-w-[524px] font-brand text-[15px] leading-[1.65] text-sand-600">
            Each system is complete the day it goes live — not a stripped-down
            preview of the next one up. Prices are on the site. Month-to-month.
          </p>
          <div className="lg:text-right">
            <div className="flex lg:justify-end">
              <SectionLabel text="Marketing Systems" />
            </div>
            <h2 className="m-0 font-brand font-black uppercase text-sand-950 text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] tracking-[-0.04em]">
              Three Systems.
              <br />
              One <span className="text-clay-500">Monthly Price.</span>
            </h2>
          </div>
        </div>

        {/* Tab list + detail pane */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[5fr_7fr] lg:gap-10">
          <div role="tablist" aria-label="Marketing systems" className="flex flex-col">
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
                  className={`group -mt-1 flex w-full cursor-pointer items-center justify-between gap-4 border-4 border-sand-950 px-8 py-7 text-left transition-colors duration-150 first:mt-0 ${
                    isActive
                      ? "bg-sand-900 text-sand-50"
                      : "bg-sand-50 text-sand-950 hover:bg-sand-100"
                  }`}
                >
                  <span className="flex flex-col gap-1.5">
                    <span className="flex flex-wrap items-center gap-3">
                      <span className="font-brand text-[22px] font-black uppercase tracking-[-0.03em]">
                        {system.name}
                      </span>
                      {system.badge && (
                        <span className="bg-clay-500 px-2.5 py-1 font-brand text-[10px] font-bold uppercase tracking-[0.12em] text-sand-50">
                          {system.badge}
                        </span>
                      )}
                    </span>
                    <span
                      className={`font-brand text-[13px] italic leading-[1.5] ${
                        isActive ? "text-sand-50/70" : "text-sand-600"
                      }`}
                    >
                      {system.tagline}
                    </span>
                  </span>
                  <span
                    className={`shrink-0 transition-transform duration-150 ${
                      isActive ? "rotate-45 text-clay-500" : "text-sand-950 group-hover:text-clay-500"
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
            className="border-4 border-sand-950 bg-sand-25 p-10"
          >
            <div className="mb-8 flex items-baseline gap-2">
              <span className="font-brand text-[56px] font-black leading-none tracking-[-0.04em] text-sand-950">
                {active.price}
              </span>
              <span className="font-brand text-[16px] font-semibold text-sand-600">
                /mo
              </span>
            </div>

            <h3 className="m-0 mb-3 font-brand text-[16px] font-extrabold uppercase tracking-[0.04em] text-sand-950">
              What&apos;s included in {active.name}
            </h3>
            <p className="m-0 mb-7 font-brand text-[14px] italic leading-[1.65] text-sand-600">
              {active.tagline}
            </p>

            <ul className="m-0 mb-10 flex list-none flex-col gap-3 p-0">
              {active.included.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 font-brand text-[14px] leading-[1.5] text-sand-950"
                >
                  <span
                    aria-hidden
                    className="mt-[5px] inline-block h-2.5 w-2.5 shrink-0 bg-clay-500"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-6">
              <a
                href="#contact"
                className="inline-flex min-h-[48px] items-center gap-2.5 border-2 border-transparent bg-clay-500 px-7 py-3.5 font-brand text-[12px] font-bold uppercase tracking-[0.1em] text-sand-50 no-underline transition-colors duration-150 hover:bg-clay-700"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>

        <p className="m-0 mt-10 text-center font-brand text-[13px] leading-[1.65] text-sand-600">
          $200 one-time setup. Month-to-month. Move up or down anytime — your
          contacts and workflows carry across.
        </p>
      </div>
    </section>
  );
}
