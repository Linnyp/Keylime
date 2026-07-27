"use client";

import PixelBlast from "@/components/PixelBlast";
import LogoLoop from "@/components/LogoLoop";
import { MissedCallWidget } from "@/components/MissedCallWidget/MissedCallWidget";
import { clientLogos } from "../../data/clientLogos";
import { PrimaryButton } from "../shared/PrimaryButton";
import { IconArrowRight } from "../shared/icons";
import "./HeroSection.css";

export function HeroSection() {
  return (
    <section
      aria-label="Hero"
      className="hero relative overflow-x-clip bg-sand-50 pt-28 md:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <PixelBlast
          variant="square"
          pixelSize={4}
          color="#E4E8DA"
          patternScale={2}
          patternDensity={1}
          pixelSizeJitter={0}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.5}
          edgeFade={0.25}
          transparent
          className=""
          style={{}}
        />
      </div>

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

            <p className="mb-9 max-w-[600px] text-[17px] font-normal leading-[1.6] text-sand-600">
              KeyLime helps local service businesses in South Florida show up on
              Google, look credible to the people who find them, and turn those
              visitors into booked jobs. One working system. Honest pricing.
            </p>

            <div className="flex flex-col items-center gap-3 min-[740px]:flex-row min-[740px]:items-stretch">
              <PrimaryButton href="#contact" variant="lime">
            Calculate Total Losses <IconArrowRight />
              </PrimaryButton>
              <PrimaryButton href="#services">
                See What We Do
              </PrimaryButton>
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
              <img src="/heroiphone.png" alt="" className="w-full" />
            </div>

            {/* Card — inset equally from the backdrop's bottom and left edges
                on desktop (container is ~square, so 6% reads even on both). */}
            <div className="relative mt-[18%] w-[74%] lg:absolute lg:bottom-[6%] lg:left-[6%] lg:mt-0 lg:w-[58%]">
              <MissedCallWidget />
            </div>
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
