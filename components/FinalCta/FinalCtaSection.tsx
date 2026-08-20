"use client";

import RippleGrid from "@/components/RippleGrid";
import { PrimaryButton } from "../shared/PrimaryButton";
import { IconArrowRight } from "../shared/icons";
import { CALENDLY_URL } from "@/data/booking";
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
          <div className="mb-6 flex items-center gap-3 font-brand text-[12px] font-semibold uppercase tracking-[0.14em] text-lime-300">
            <span className="inline-block h-0.5 w-7 bg-lime-500" />
            Act Now
          </div>

          <h2
            id="cta-heading"
            className="cta-heading mb-8 font-brand font-black text-white"
          >
            The window
            <br />
            to get ahead
            <br />
            is <span className="text-lime-500">narrowing.</span>
          </h2>

          <p className="mb-10 max-w-[480px] border-l-2 border-lime-500 pl-5 text-[16px] font-normal leading-[1.6] text-white/70">
            AI-powered marketing isn&apos;t coming — it&apos;s already here. The
            businesses that move now will hold a lead advantage that&apos;s very
            hard to close later. Book a free 30-minute call to find out where you
            stand.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <PrimaryButton href={CALENDLY_URL} variant="lime">
              Book Your Free Audit Call <IconArrowRight />
            </PrimaryButton>
            <a
              href="#checklist"
              className="inline-flex min-h-[52px] items-center gap-1.5 px-4 py-4 font-brand text-[14px] font-medium tracking-[-0.02em] text-white/50 no-underline transition-colors duration-150 hover:text-white"
            >
              Download AI Readiness Checklist
            </a>
          </div>

          <p className="mt-4 text-[13px] tracking-[-0.01em] text-white/40">
            No pressure, no pitch deck. Just a clear look at where your business
            stands online.
          </p>
        </div>

        {/* Right: decorative composition (desktop only) */}
        <div className="hidden lg:block">
          <div className="relative aspect-square w-full">
            <div className="absolute inset-[10%] rounded-[32px] border-2 border-lime-500/70" />
            <div className="absolute left-[10%] top-[10%] h-4/5 w-4/5 overflow-hidden rounded-[32px]">
              <RippleGrid
                enableRainbow={false}
                gridColor="#6FA51F"
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
