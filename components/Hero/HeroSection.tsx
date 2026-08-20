"use client";

import LogoLoop from "@/components/LogoLoop";
import { MissedCallWidget } from "@/components/MissedCallWidget/MissedCallWidget";
import { clientLogos } from "../../data/clientLogos";
import { PrimaryButton } from "../shared/PrimaryButton";
import "./HeroSection.css";

export function HeroSection() {
  /* The primary CTA ("Calculate Total Losses") now lives inside the estimator
     widget, right under the numbers it acts on. What's left here is the
     secondary path, rendered in two slots and shown one at a time: under the
     paragraph from lg up, below the widget on smaller screens so the
     calculator is the first thing in reach on a phone. Plain anchors, so the
     hidden copy stays out of the accessibility tree. */
  const ctas = <PrimaryButton href="/how-it-works">See What We Do</PrimaryButton>;

  return (
    <section
      aria-label="Hero"
      className="hero relative overflow-x-clip bg-sand-50 pt-28 pb-16 md:pt-32 lg:pb-20"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 pb-16 lg:pb-20">
        {/* Hero panel — same card treatment as the rest of the site (sand
            surface, hairline sand-200 border, soft shadow). Padding carries the
            inset on mobile; from lg the copy column's own margins do it so the
            phone can still bleed to the panel's right edge. */}
        <div className="grid items-center gap-y-0 overflow-hidden rounded-[48px] border border-sand-200 bg-sand-100 px-6 py-10 shadow-[0_2px_6px_0_rgba(28,30,26,0.06)] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-16 lg:p-0">
          {/* Below lg the copy column dissolves (`display: contents`) so its
              children become items of the stacked grid and the paragraph can be
              ordered below the widget. Mobile spacing therefore rides on the
              children's own margins, not the grid gap. From lg up it's a normal
              flex column again and every `order`/`mx-auto` resets. */}
          <div className="contents text-center lg:mt-14 lg:ml-14 lg:flex lg:flex-col lg:items-start lg:text-left">
            <div className="mb-6 flex justify-center lg:justify-start">
              <span className="wf-eyebrow">Digital marketing · Southwest Florida</span>
            </div>

            <div className="hero-title-wrap relative z-30 mx-auto mb-6 w-full max-w-[640px] lg:mx-0">
              <h1 className="hero-title font-brand font-black text-sand-950 text-center lg:text-left">
                What are missed calls
                <br />
                costing <span className="text-lime-600">you?</span>
              </h1>
            </div>

            {/* Ordered after the widget on mobile: the numbers hook first, the
                explanation backs them up. */}
            <p className="order-1 mx-auto mt-10 mb-0 max-w-[600px] text-[17px] font-normal leading-[1.6] text-sand-600 lg:order-none lg:mx-0 lg:mt-0 lg:mb-9">
              KeyLime helps local service businesses in South Florida show up on
              Google, look credible to the people who find them, and turn those
              visitors into booked jobs. One working system. Honest pricing.
            </p>

            <div className="hidden lg:flex">
              {ctas}
            </div>
          </div>

          {/* Missed-call revenue widget — the hero's conversion centerpiece.
              Desktop (441×435 comp): estimator card floating in front of the
              hero iPhone, which rises behind it and bleeds to the panel edge. */}
          <div className="relative mx-auto mt-4 w-full max-w-[480px] lg:mx-0 lg:mt-0 lg:aspect-[441/435] lg:max-w-none">
            {/* Hero iPhone rising behind the card. */}
            <div className="absolute right-0 bottom-0 aspect-[268/425] w-[56%] overflow-hidden lg:top-[19.3%] lg:aspect-auto lg:w-[60.8%]">
              <img
                src="/heroiphone.webp"
                alt=""
                width={554}
                height={1147}
                fetchPriority="high"
                decoding="async"
                className="w-full"
              />
            </div>

            {/* Card — anchored to the bottom-left of the media box on desktop,
                overlapping the phone. */}
            <div className="relative mt-[5%] w-[74%] lg:absolute lg:bottom-0 lg:left-0 lg:mt-0 lg:w-[68%]">
              <MissedCallWidget />
            </div>
          </div>

          {/* Mobile CTA slot — last in the stacked grid, after the paragraph. */}
          <div className="order-2 mt-8 flex justify-center lg:hidden">
            {ctas}
          </div>
        </div>
      </div>

      {/* Trust bar — a contained card on the same 1200px grid as the hero
          panel above rather than a full-bleed band. */}
      <div className="relative z-10 mx-auto w-full max-w-brand px-6">
        <div className="flex flex-col items-center gap-4 rounded-3xl border border-sand-200 bg-sand-100 px-6 py-6 md:flex-row md:items-center md:gap-10 md:px-10">
          <span className="wf-eyebrow whitespace-nowrap">Trusted by</span>
          <div className="relative z-0 flex h-14 w-full flex-1 items-center overflow-hidden">
            <LogoLoop
              logos={clientLogos}
              speed={60}
              direction="left"
              logoHeight={48}
              gap={120}
              scaleOnHover
              fadeOut
              fadeOutColor="#f0f2eb"
              ariaLabel="Trusted by local Southwest Florida businesses"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
