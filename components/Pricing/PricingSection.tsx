"use client";

import { useState } from "react";
import type { BillingMode } from "../../types";
import { pricingPlans } from "../../data/pricingPlans";
import { SectionLabel } from "../shared/SectionLabel";
import { BillingToggle } from "./BillingToggle";
import { PricingCard } from "./PricingCard";
import "./PricingSection.css";

export function PricingSection() {
  const [mode, setMode] = useState<BillingMode>("monthly");

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="bg-sand-50 py-28"
    >
      <div className="mx-auto w-full max-w-brand px-6">
        <div className="mb-16">
          <SectionLabel text="Investment" />
          <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-[7fr_5fr]">
            <h2
              id="pricing-heading"
              className="pricing-heading m-0 font-brand font-black uppercase text-sand-950"
            >
              Pricing Built
              <br />
              Around the Service
              <br />
              You Actually Need.
            </h2>
            <div className="flex flex-col gap-5 pb-2">
              <p className="m-0 font-brand text-[15px] leading-[1.65] text-sand-600">
                Pick the service you need. Pay a flat monthly fee — or a
                one-time lump sum. No bundles, no bloat, no paying for things
                you won&apos;t use.
              </p>
              <div className="hidden sm:block">
                <BillingToggle mode={mode} setMode={setMode} />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 items-stretch pt-6 sm:grid-cols-2 lg:grid-cols-4">
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              mode={mode}
              setMode={setMode}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
