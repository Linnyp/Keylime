"use client";

import { useEffect, useRef, useState } from "react";
import StackingCards, { StackingCardItem } from "@/components/StackingCards";
import { problems } from "../../data/problems";
import { SectionLabel } from "../shared/SectionLabel";
import { ProblemCard } from "./ProblemCard";
import "./ProblemSection.css";

const NAV_HEIGHT_PX = 80; /* matches the fixed navbar height (h-20) */
const STACK_PIN_PX = 112;

export function ProblemSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [showNavCover, setShowNavCover] = useState(false);

  useEffect(() => {
    const target = sectionRef.current;
    if (!target) return;
    const update = () => {
      const r = target.getBoundingClientRect();
      setShowNavCover(r.top < NAV_HEIGHT_PX && r.bottom > NAV_HEIGHT_PX);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="problem"
      aria-label="The Problem"
      className="bg-sand-100 py-28"
    >
      {showNavCover && (
        <div
          aria-hidden
          className="pointer-events-none fixed inset-x-0 top-0 z-30 h-20 bg-sand-100 lg:hidden"
        />
      )}

      <div className="mx-auto w-full max-w-brand px-6">
        <div className="lg:hidden">
          <SectionLabel text="The Problem" />
        </div>

        <div className="relative z-20 -mx-6 px-6 lg:hidden bg-sand-100">
          <h2 className="problem-heading font-brand font-black text-sand-950 md:hidden">
            You&apos;ve Got 99 Problems
            <br />
            <span className="text-lime-600">Marketing</span> Shouldn&apos;t Be 1
          </h2>
          <h2 className="problem-heading font-brand font-black text-sand-950 hidden md:block">
            You&apos;ve Got
            <br />
            99 Problems
            <br />
            <span className="text-lime-600">Marketing </span>
            <br />
            Shouldn&apos;t Be 1
          </h2>
        </div>

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[5fr_7fr] lg:gap-16 ">
          <div>
            <div className="lg:sticky lg:top-24">
              <div className="hidden lg:block">
                <SectionLabel text="The Problem" />
                <h2 className="problem-heading font-brand font-black text-sand-950">
                  You&apos;ve Got
                  <br />
                  99 Problems
                  <br />
                  <span className="text-lime-600">Marketing </span>
                  <br />
                  Shouldn&apos;t Be 1
                  <br />
                </h2>
              </div>
              <p className="font-brand text-[15px] leading-[1.65] text-sand-600 mb-10 md:w-1/2 lg:w-auto">
                Most local service businesses in Southwest Florida have the same problem. Their customers are happy and the work is solid but they&apos;re missing the digital marketing foundation a local business needs to reach and capture more potential clients. Often losing sales to competitors due to lack of an active strategy and execution. Setting up and managing marketing for your business can be confusing, time consuming, and get expensive quickly. We make it simple by bringing together everything you'll need in one place and doing the heavy lifting work for you with transparent pricing.
              </p>
              {/* Desktop only — absolutely positioned beneath the sticky
                  column. Below lg the stacked layout has no room for it. */}
              <img
                src="/deskFrustration2.webp"
                alt="Illustration of a business owner juggling marketing pain points"
                width={1440}
                height={714}
                loading="lazy"
                decoding="async"
                className="absolute left-0 right-0 top-full hidden h-auto w-full lg:block"
              />
            </div>
            <div aria-hidden className="hidden lg:block lg:h-[904px]" />
          </div>

          <div>
            <StackingCards totalCards={problems.length} scaleMultiplier={0.03}>
              {problems.map((problem, i) => (
                <StackingCardItem
                  key={problem.name}
                  index={i}
                  topPosition={`${i * 3}%`}
                  className="problem-card-item h-[490px]! md:h-[290px]! lg:h-[360px]!"
                  style={{ top: STACK_PIN_PX }}
                >
                  <ProblemCard
                    problem={problem}
                    index={i}
                    total={problems.length}
                  />
                </StackingCardItem>
              ))}
            </StackingCards>
          </div>
        </div>
      </div>
    </section>
  );
}
