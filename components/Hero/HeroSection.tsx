"use client";

import LogoLoop from "@/components/LogoLoop";
import { MissedCallWidget } from "@/components/MissedCallWidget/MissedCallWidget";
import { clientLogos } from "../../data/clientLogos";
import { PrimaryButton } from "../shared/PrimaryButton";
import { IconArrowRight } from "../shared/icons";
import "./HeroSection.css";

export function HeroSection() {
  /* Rendered in two slots and shown one at a time: under the paragraph from lg
     up, below the widget on smaller screens so the calculator is the first
     thing in reach on a phone. Both are plain anchors, so the hidden copy
     stays out of the accessibility tree. */
  const ctas = (
    <>
      <PrimaryButton href="/calculators/missed-call-revenue" variant="lime">
        Calculate Total Losses <IconArrowRight />
      </PrimaryButton>
      <PrimaryButton href="#how-it-works-snapshot">See What We Do</PrimaryButton>
    </>
  );

  return (
    <section
      aria-label="Hero"
      className="hero relative overflow-x-clip bg-sand-50 pt-28 md:pt-32"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 pb-16 lg:pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-16">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="mb-6 flex justify-center lg:justify-start">
              <span className="wf-eyebrow">Digital marketing · Southwest Florida</span>
            </div>

            <div className="hero-title-wrap relative z-30 mb-6 w-full max-w-[640px]">
              <h1 className="hero-title font-brand font-extrabold text-sand-950 text-center lg:text-left">
                What are missed calls
                <br />
                costing <span className="text-lime-600">you?</span>
              </h1>
            </div>

            <p className="mb-0 max-w-[600px] text-[17px] font-normal leading-[1.6] text-sand-600 lg:mb-9">
              KeyLime helps local service businesses in South Florida show up on
              Google, look credible to the people who find them, and turn those
              visitors into booked jobs. One working system. Honest pricing.
            </p>

            {/* Desktop reverses the visual order (secondary first, primary on
                the right) while DOM order keeps the primary CTA first for
                tab/reading order. */}
            <div className="hidden flex-col items-center gap-3 min-[740px]:flex-row min-[740px]:items-stretch lg:flex lg:flex-row-reverse lg:justify-end">
              {ctas}
            </div>
          </div>

          {/* Missed-call revenue widget — the hero's conversion centerpiece.
              Desktop (441×435 comp): estimator card floating over a lime
              rounded-rect backdrop with the hero iPhone rising behind it. */}
          <div className="relative mx-auto w-full max-w-[480px] lg:mx-0 lg:aspect-[441/435] lg:max-w-none">
            {/* Lime backdrop */}
            <div
              className="absolute inset-0 hidden rounded-[48px] bg-lime-500 lg:block"
              aria-hidden="true"
            />

            {/* Hero iPhone rising behind the card. */}
            <div className="absolute right-0 bottom-0 aspect-[268/425] w-[56%] overflow-hidden lg:top-[19.3%] lg:aspect-auto lg:w-[60.8%] lg:rounded-br-[48px]">
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

            {/* Card — flush with the backdrop's bottom-left corner on desktop,
                sized up so it carries more of the lime panel. */}
            <div className="relative mt-[18%] w-[74%] lg:absolute lg:bottom-0 lg:left-0 lg:mt-0 lg:w-[68%]">
              <MissedCallWidget />
            </div>
          </div>

          {/* Mobile CTA slot — sits after the widget in the stacked grid. */}
          <div className="flex flex-col items-center gap-3 min-[740px]:flex-row min-[740px]:items-stretch min-[740px]:justify-center lg:hidden">
            {ctas}
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full border-t border-sand-200 bg-sand-100">
        <div className="mx-auto flex w-full max-w-brand flex-col items-center gap-4 px-6 py-6 md:flex-row md:items-center md:gap-10">
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
