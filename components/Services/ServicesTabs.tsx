"use client";

import { useState } from "react";
import type { ServiceIconKey } from "../../types";
import { IconArrowRight } from "../shared/icons";

const ICON_SRC: Record<ServiceIconKey, string> = {
  globe: "/websitewireframe-sm.png",
  map: "/handMagnifying.png",
  chart: "/handMicrophone.png",
  bolt: "/handReviews.png",
  message: "/chatbotIcon.png",
  settings: "/automationIcon.png",
};

interface ServiceTab {
  id: string;
  tabLabel: string;
  tagline: string;
  heading: string;
  description: string;
  icon: ServiceIconKey;
  href: string;
}

const tabs: ServiceTab[] = [
  {
    id: "websites",
    tabLabel: "Websites",
    tagline: "Website",
    heading: "A website that works as hard as you do",
    description:
      "Built from scratch — no cookie cutter design or drag-and-drop builder. Fast-loading, mobile friendly, and designed to turn visitors into leads. Yours for a flat fee or a monthly plan that makes it affordable from day one.",
    icon: "globe",
    href: "/services/websites",
  },
  {
    id: "ads",
    tabLabel: "Paid Ads",
    tagline: "Google & Meta Ads",
    heading: "Ad spend that pays you back, not just the platform",
    description:
      "We manage Google Ads and Meta campaigns with a focus on cost-per-lead efficiency for local service budgets — not vanity metrics. Every campaign is built on keyword-level data and audience targeting specific to your service area and job types.",
    icon: "chart",
    href: "/services/ads",
  },
  {
    id: "seo",
    tabLabel: "SEO",
    tagline: "Local SEO",
    heading: "Get found by the customers already searching",
    description:
      "We build local SEO programs around how customers actually search in your service area — Google Business Profile, citations, local content, and the technical groundwork that helps you rank and stay there as competitors react.",
    icon: "map",
    href: "/services/seo",
  },
  {
    id: "reputation",
    tabLabel: "Reputation Management",
    tagline: "Reputation",
    heading: "Turn happy customers into your best salespeople",
    description:
      "We set up automated review requests, monitor every major platform, and help you respond fast — so happy customers leave the five-star reviews that win the next caller before they ever pick up the phone.",
    icon: "bolt",
    href: "/services/reputation",
  },
];

export function ServicesTabs() {
  const [activeId, setActiveId] = useState(tabs[0].id);
  const active = tabs.find((t) => t.id === activeId) ?? tabs[0];

  return (
    <div className="border-2 border-sand-950 bg-sand-50">
      {/* Tab strip */}
      <div
        role="tablist"
        aria-label="Services"
        className="grid grid-cols-2 lg:grid-cols-4"
      >
        {tabs.map((tab, i) => {
          const isActive = tab.id === activeId;
          const isLastInRow = (i + 1) % 2 === 0; // sm/md
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`services-tab-${tab.id}`}
              aria-selected={isActive}
              aria-controls={`services-pane-${tab.id}`}
              onClick={() => setActiveId(tab.id)}
              className={[
                "relative flex min-h-[96px] cursor-pointer items-center justify-center px-6 py-6 font-brand text-[18px] font-black uppercase tracking-[-0.01em] transition-colors duration-150",
                !isLastInRow ? "border-r-2 border-sand-950" : "",
                "lg:border-r-2 lg:last:border-r-0",
                isActive
                  ? "bg-sand-50 text-sand-950"
                  : "border-b-2 border-sand-950 bg-sand-100 text-sand-950/70 hover:bg-sand-50 hover:text-sand-950",
                isActive
                  ? "before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-clay-500 before:content-['']"
                  : "",
              ].join(" ")}
            >
              <span className="text-center leading-tight">{tab.tabLabel}</span>
            </button>
          );
        })}
      </div>

      {/* Active pane */}
      <div
        role="tabpanel"
        id={`services-pane-${active.id}`}
        aria-labelledby={`services-tab-${active.id}`}
        className="relative grid grid-cols-1 gap-12 overflow-hidden p-10 sm:p-12 lg:grid-cols-[7fr_5fr] lg:gap-16 lg:p-14"
      >
        {/* Mobile-only faint background illustration */}
        <img
          src={ICON_SRC[active.icon]}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-contain object-center opacity-25 lg:hidden"
        />

        <div className="relative z-10 flex flex-col items-start justify-center gap-8">
          <div className="flex flex-col gap-4">
            <span className="font-brand text-[12px] font-bold uppercase tracking-[0.12em] text-clay-500">
              {active.tagline}
            </span>
            <h3 className="m-0 font-brand text-[clamp(28px,4vw,44px)] font-black uppercase leading-[1.05] tracking-[-0.02em] text-sand-950">
              {active.heading}
            </h3>
            <p className="m-0 font-brand text-[15px] leading-[1.65] text-sand-600">
              {active.description}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <a
              href={active.href}
              className="inline-flex min-h-[48px] items-center gap-2 border-2 border-sand-950 bg-sand-50 px-7 py-3 font-brand text-[12px] font-bold uppercase tracking-[0.08em] text-sand-950 no-underline transition-colors duration-150 hover:bg-sand-100"
            >
              Explore
            </a>
            <a
              href={active.href}
              className="group inline-flex items-center gap-1.5 font-brand text-[13px] font-semibold uppercase tracking-[0.08em] text-clay-500 underline underline-offset-4 transition-colors duration-150 hover:text-clay-700"
            >
              Full breakdown
              <span className="transition-transform duration-150 group-hover:translate-x-0.5">
                <IconArrowRight />
              </span>
            </a>
          </div>
        </div>

        <img
          src={ICON_SRC[active.icon]}
          alt={active.tabLabel}
          className={[
            "hidden h-full max-h-[400px] w-full self-end object-contain object-bottom lg:-mb-14 lg:block",
            active.id !== "reputation" ? "lg:max-w-none lg:mx-0" : "",
          ].join(" ")}
        />
      </div>
    </div>
  );
}
