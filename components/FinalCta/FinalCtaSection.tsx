"use client";

import RippleGrid from "@/components/RippleGrid";
import { IconArrowRight } from "../shared/icons";
import "./FinalCtaSection.css";

export function FinalCtaSection() {
  return (
    <section
      id="contact"
      aria-labelledby="cta-heading"
      className="relative overflow-hidden bg-sand-900 py-24"
    >
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[7fr_5fr]">
        {/* Left: copy */}
        <div>
          <div className="mb-6 flex items-center gap-3 font-brand text-[11px] font-bold uppercase tracking-[0.15em] text-clay-500">
            <span className="inline-block h-0.5 w-6 bg-clay-500" />
            Act Now
          </div>

          <h2
            id="cta-heading"
            className="cta-heading mb-8 font-brand font-black uppercase text-sand-50"
          >
            The Window
            <br />
            To Get Ahead
            <br />
            Is <span className="text-clay-500">Narrowing.</span>
          </h2>

          <p className="mb-10 max-w-[480px] border-l-4 border-clay-500 pl-5 font-brand text-[16px] font-normal leading-[1.65] text-sand-50/70">
            AI-powered marketing isn&apos;t coming — it&apos;s already here.
            The businesses that move now will hold a lead advantage that&apos;s
            very hard to close later. Book a free 30-minute call to find out
            where you stand.
          </p>

          <div className="flex flex-wrap items-center gap-0">
            <a
              href="#contact"
              className="inline-flex min-h-[52px] items-center gap-2.5 bg-clay-500 px-8 py-4 font-brand text-[13px] font-bold uppercase tracking-[0.08em] text-sand-50 no-underline transition-colors duration-150 hover:bg-clay-700"
            >
              Book Your Free Audit Call <IconArrowRight />
            </a>
            <a
              href="#checklist"
              className="inline-flex min-h-[52px] items-center gap-1.5 px-6 py-4 font-brand text-[13px] font-semibold uppercase tracking-[0.04em] text-sand-50/45 no-underline transition-colors duration-150 hover:text-sand-50"
            >
              Download AI Readiness Checklist
            </a>
          </div>

          <p className="mt-4 font-brand text-[12px] tracking-[0.04em] text-sand-50/40">
            No pressure, no pitch deck. Just a clear look at where your business
            stands online.
          </p>
        </div>

        {/* Right: decorative composition (desktop only) */}
        <div className="hidden lg:block">
          <div className="relative aspect-square w-full">
            <div className="absolute inset-[10%] border-4 border-clay-500" />
            <div className="absolute left-[10%] top-[10%] h-4/5 w-4/5 overflow-hidden">
              <RippleGrid
                enableRainbow={false}
                gridColor="#D4C7A9"
                rippleIntensity={0.03}
                gridSize={10}
                gridThickness={15}
                mouseInteraction={true}
                mouseInteractionRadius={1.2}
                opacity={0.8}
              />
            </div>
            <CornerMarks />
          </div>
        </div>
      </div>
    </section>
  );
}

function CornerMarks() {
  return (
    <>
      <span className="corner-mark corner-mark-h top-0 left-0" />
      <span className="corner-mark corner-mark-v top-0 left-0" />
      <span className="corner-mark corner-mark-h top-0 right-0" />
      <span className="corner-mark corner-mark-v top-0 right-0" />
      <span className="corner-mark corner-mark-h bottom-0 left-0" />
      <span className="corner-mark corner-mark-v bottom-0 left-0" />
      <span className="corner-mark corner-mark-h bottom-0 right-0" />
      <span className="corner-mark corner-mark-v bottom-0 right-0" />
    </>
  );
}
