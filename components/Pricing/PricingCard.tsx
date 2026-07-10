"use client";

import type { BillingMode, PricingPlanItem } from "../../types";
import { IconArrowRight } from "../shared/icons";

interface PricingCardProps {
  plan: PricingPlanItem;
  mode: BillingMode;
  setMode: (m: BillingMode) => void;
}

export function PricingCard({ plan, mode, setMode }: PricingCardProps) {
  const subscriptionOnly = mode === "lumpSum" && plan.lumpSum === null;
  const tier = (mode === "monthly" ? plan.monthly : plan.lumpSum) ?? plan.monthly;
  const isFeatured = plan.name === "Websites";

  // Featured cards keep the dark surface regardless of hover.
  const articleClasses = [
    "group relative -ml-0.5 box-border flex h-full flex-col gap-7 p-10 transition-colors duration-150",
    isFeatured
      ? "border-4 border-sand-900 bg-sand-900"
      : "border-2 border-sand-950 bg-sand-50 hover:bg-sand-100",
  ].join(" ");

  const heading = isFeatured ? "text-sand-50" : "text-sand-950";
  const muted = isFeatured ? "text-sand-50/60" : "text-sand-600";
  const body = isFeatured ? "text-sand-50/75" : "text-sand-600";
  const dividerColor = isFeatured ? "rgba(251,248,243,0.15)" : "rgba(31,27,22,0.1)";

  return (
    <article className={articleClasses}>
      {subscriptionOnly && (
        <Badge className="bg-sand-800 text-sand-50/70">Subscription only</Badge>
      )}
      {isFeatured && (
        <Badge className="bg-clay-500 text-sand-50">Most Popular</Badge>
      )}

      <div>
        <h3
          className={`m-0 mb-3 font-brand text-[26px] font-black uppercase tracking-[-0.03em] ${heading}`}
        >
          {plan.name}
        </h3>
        <div className="flex flex-col gap-0.5">
          <span
            className={`font-brand text-[11px] font-medium uppercase tracking-[0.06em] ${muted}`}
          >
            starting at
          </span>
          <div className="flex items-baseline gap-1.5">
            <span
              className={`font-brand text-[44px] font-black leading-none tracking-[-0.04em] ${heading}`}
            >
              {tier.price}
            </span>
            {tier.priceUnit && (
              <span className={`font-brand text-[16px] font-semibold ${muted}`}>
                {tier.priceUnit}
              </span>
            )}
            <MiniBillingToggle
              mode={mode}
              setMode={setMode}
              isFeatured={isFeatured}
            />
          </div>
        </div>
      </div>

      <p
        className={`m-0 border-t pt-5 font-brand text-[13px] leading-[1.65] ${body}`}
        style={{ borderColor: dividerColor }}
      >
        {plan.description}
      </p>

      <div className="flex flex-1 items-start">
        <a
          href={plan.breakdownHref}
          className="group/link inline-flex items-center gap-1.5 font-brand text-[13px] font-semibold leading-[1.5] text-clay-500 underline underline-offset-4 transition-colors duration-150 hover:text-clay-700"
        >
          Full {plan.name} Breakdown
          <span className="transition-transform duration-150 group-hover/link:translate-x-0.5">
            <IconArrowRight />
          </span>
        </a>
      </div>

      <a
        href="#contact"
        className="flex min-h-[48px] items-center justify-center bg-clay-500 px-6 py-3.5 font-brand text-[12px] font-bold uppercase tracking-[0.1em] text-sand-50 no-underline transition-colors duration-150 hover:bg-clay-700"
      >
        {plan.cta}
      </a>
    </article>
  );
}

function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <div
      className={`absolute -top-[18px] left-10 px-3.5 py-[5px] font-brand text-[10px] font-bold uppercase tracking-[0.12em] ${className}`}
    >
      {children}
    </div>
  );
}

const MINI_OPTIONS: { id: BillingMode; label: string }[] = [
  { id: "monthly", label: "Month" },
  { id: "lumpSum", label: "Lump" },
];

function MiniBillingToggle({
  mode,
  setMode,
  isFeatured,
}: {
  mode: BillingMode;
  setMode: (m: BillingMode) => void;
  isFeatured: boolean;
}) {
  const wrapperBorder = isFeatured ? "border-sand-50/30" : "border-sand-950";
  const wrapperBg = isFeatured ? "bg-sand-800" : "bg-sand-50";
  const inactiveText = isFeatured ? "text-sand-50/70" : "text-sand-950";

  return (
    <div
      role="tablist"
      aria-label="Billing mode"
      className={`ml-auto flex self-center gap-0.5 border ${wrapperBorder} ${wrapperBg} p-0.5 sm:hidden`}
    >
      {MINI_OPTIONS.map((opt) => {
        const active = mode === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => setMode(opt.id)}
            className={`cursor-pointer border-none px-2 py-1 font-brand text-[10px] font-bold uppercase tracking-[0.08em] transition-colors duration-150 ${
              active ? "bg-clay-500 text-sand-50" : `bg-transparent ${inactiveText}`
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
