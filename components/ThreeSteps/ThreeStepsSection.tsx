/*
 * KeyLime — "A complete marketing system in three steps" section.
 *
 * Homepage 3-step snapshot between Problem and Services. Editorial Citrus &
 * Charcoal treatment: warm alternating surface, soft rounded step cards with
 * oversized lime numerals, right-aligned header. Card body copy comes from
 * homepage-copy.md §4.
 */

import { SectionLabel } from "../shared/SectionLabel";
import { PrimaryButton } from "../shared/PrimaryButton";

const steps = [
  {
    number: "1",
    title: "Pick a system.",
    body: "Foundation, Growth, or Expansion. Each one's a complete working system the day it goes live. System prices are on the site.",
  },
  {
    number: "2",
    title: "We onboard you in 4 to 8 weeks.",
    body: "Discovery, written gameplan, platform setup, workflows built, integrations connected. By week eight the system is live.",
  },
  {
    number: "3",
    title: "The system runs. We run the system.",
    body: "Your phones get answered faster. Reviews come in steadier. No-shows drop. You go back to running the business.",
  },
];

export function ThreeStepsSection() {
  return (
    <section
      id="how-it-works-snapshot"
      aria-label="How it works in three steps"
      className="relative z-10 bg-sand-100 py-24 md:py-28"
    >
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <div className="mb-14 text-right">
          <div className="flex justify-end">
            <SectionLabel text="Our Fix" />
          </div>
          <h2 className="m-0 font-brand font-extrabold text-sand-950 text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] tracking-[-0.03em]">
            A complete marketing system
            <br />
            in <span className="text-lime-600">three steps.</span>
          </h2>
          <p className="m-0 ml-auto mt-6 max-w-[540px] text-[16px] leading-[1.6] text-sand-600">
            You run the business. We run the marketing. Here&apos;s exactly how
            that works.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative overflow-hidden rounded-3xl border border-sand-200 bg-white px-9 py-10 shadow-[0_2px_6px_0_rgba(28,30,26,0.06)]"
            >
              <span
                aria-hidden
                className="font-brand text-[72px] font-extrabold leading-none tracking-[-0.04em] text-lime-500"
              >
                {step.number}
              </span>
              <h3 className="mt-6 mb-3 font-brand text-[20px] font-bold leading-[1.25] tracking-[-0.03em] text-sand-950">
                {step.title}
              </h3>
              <p className="m-0 text-[15px] leading-[1.7] text-sand-600">
                {step.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <PrimaryButton href="#contact">Let&apos;s Talk</PrimaryButton>
        </div>
      </div>
    </section>
  );
}
