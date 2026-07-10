/*
 * KeyLime — "A complete marketing system in three steps" section.
 *
 * Homepage 3-step snapshot between Problem and Services, using the same
 * visual treatment as the "Method" (HowItWorks) section: right-aligned
 * header, grid-pattern band, flush process cards with oversized numerals.
 * Card body copy comes from homepage-copy.md §4 — the Webflow build still
 * carries lorem-ipsum placeholders there.
 */

import { SectionLabel } from "../shared/SectionLabel";

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
      className="relative z-10 border-t-4 border-sand-950 bg-sand-100 bg-grid-pattern py-28"
    >
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <div className="mb-16 text-right">
          <div className="flex justify-end">
            <SectionLabel text="Our Fix" />
          </div>
          <h2 className="m-0 font-brand font-black uppercase text-sand-950 text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] tracking-[-0.04em]">
            A Complete Marketing System
            <br />
            In <span className="text-clay-500">Three Steps.</span>
          </h2>
          <p className="m-0 ml-auto mt-6 max-w-[540px] font-brand text-[15px] leading-[1.65] text-sand-600">
            You run the business. We run the marketing. Here&apos;s exactly how
            that works.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-0 lg:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`relative overflow-hidden border-t-4 border-sand-950 bg-sand-50 px-10 py-12 ${
                i > 0 ? "lg:border-l-2 lg:border-l-sand-950" : ""
              }`}
            >
              <h3 className="m-0 font-brand text-[80px] font-black leading-none tracking-[-0.04em] text-clay-500">
                {step.number}
              </h3>
              <h3 className="mt-6 mb-4 font-brand text-[16px] font-extrabold uppercase tracking-[0.04em] leading-[1.3] text-sand-950">
                {step.title}
              </h3>
              <p className="m-0 font-brand text-[14px] leading-[1.75] text-sand-600">
                {step.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href="#contact"
            className="inline-flex min-h-[52px] items-center gap-2.5 border-2 border-transparent bg-clay-500 px-8 py-4 font-brand text-[13px] font-bold uppercase tracking-[0.08em] text-sand-50 no-underline transition-colors duration-150 hover:bg-clay-700"
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </section>
  );
}
