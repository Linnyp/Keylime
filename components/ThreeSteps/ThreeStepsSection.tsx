/*
 * KeyLime — "A complete marketing system in three steps" section.
 *
 * Homepage 3-step snapshot between Problem and Services. Editorial Citrus &
 * Charcoal treatment: warm alternating surface, soft rounded step cards with
 * centered copy chained by flow arrows, centered header. Card body copy
 * comes from homepage-copy.md §4.
 */

import { Fragment } from "react";

import { SectionLabel } from "../shared/SectionLabel";
import { PrimaryButton } from "../shared/PrimaryButton";
import { CALENDLY_URL } from "@/data/booking";

const steps = [
  {
    title: "Pick a system.",
    body: "Foundation, Growth, or Expansion. Each one's a complete working system the day it goes live. System prices are on the site.",
  },
  {
    title: "We onboard you in 4 to 8 weeks.",
    body: "Discovery, written gameplan, platform setup, workflows built, integrations connected. By week eight the system is live.",
  },
  {
    title: "The system runs. We run the system.",
    body: "Your phones get answered faster. Reviews come in steadier. No-shows drop. You go back to running the business.",
  },
];

/* Flow connector: points down while the cards stack, right once they sit in a row. */
function StepArrow() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      className="size-7 shrink-0 rotate-90 self-center text-sand-950 lg:rotate-0"
    >
      <path
        d="M5 12h14M12 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ThreeStepsSection() {
  return (
    <section
      id="how-it-works-snapshot"
      aria-label="How it works in three steps"
      className="relative z-10 bg-sand-100 py-24 md:py-28"
    >
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <div className="mb-14 text-center">
          <div className="flex justify-center">
            <SectionLabel text="Our Fix" />
          </div>
          <h2 className="m-0 font-brand font-extrabold text-sand-950 text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] tracking-[-0.03em]">
            A complete marketing system
            <br />
            in <span className="text-lime-600">three steps.</span>
          </h2>
          <p className="m-0 mx-auto mt-6 max-w-[540px] text-[16px] leading-[1.6] text-sand-600">
            You run the business. We run the marketing. Here&apos;s exactly how
            that works.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-stretch lg:gap-5">
          {steps.map((step, index) => (
            <Fragment key={step.title}>
              <div className="relative w-full max-w-[420px] overflow-hidden rounded-3xl border border-sand-200 bg-white px-7 py-8 text-center shadow-[0_2px_6px_0_rgba(28,30,26,0.06)] lg:max-w-none lg:flex-1">
                <h3 className="mt-0 mb-2.5 font-brand text-[18px] font-bold leading-[1.25] tracking-[-0.03em] text-sand-950">
                  {step.title}
                </h3>
                <p className="m-0 text-[14px] leading-[1.65] text-sand-600">
                  {step.body}
                </p>
              </div>
              {index < steps.length - 1 && <StepArrow />}
            </Fragment>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <PrimaryButton href={CALENDLY_URL}>Let&apos;s Talk</PrimaryButton>
        </div>
      </div>
    </section>
  );
}
