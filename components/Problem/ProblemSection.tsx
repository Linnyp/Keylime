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
      className="bg-sand-50 py-28"
    >
      {showNavCover && (
        <div
          aria-hidden
          className="pointer-events-none fixed inset-x-0 top-0 z-30 h-20 bg-sand-50 lg:hidden"
        />
      )}

      <div className="mx-auto w-full max-w-brand px-6">
        <div className="lg:hidden">
          <SectionLabel text="The Problem" />
        </div>

        <div className="relative z-20 -mx-6 px-6 lg:hidden bg-sand-50">
          <h2 className="problem-heading font-brand font-extrabold text-sand-950 md:hidden">
            You&apos;ve Got 99 Problems
            <br />
            <span className="text-lime-600">Marketing</span> Shouldn&apos;t Be 1
          </h2>
          <h2 className="problem-heading font-brand font-extrabold text-sand-950 hidden md:block">
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
                <h2 className="problem-heading font-brand font-extrabold text-sand-950">
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
                Most local service businesses in Southwest Florida have the same
                problem. Their customers are happy. Their work is solid. But
                somewhere between the last job they finished and the next one
                they&apos;re trying to book, something&apos;s leaking. Leads go
                to a competitor with worse reviews. Calls don&apos;t get
                returned in time. The website hasn&apos;t been touched since
                2019. It&apos;s not because you don&apos;t care. It&apos;s
                because you&apos;re running a business.
              </p>
              {/* Below lg the illustration sits in the flow under the copy;
                  from lg up it's absolutely positioned beneath the sticky
                  column. Same artwork either way — only one is ever rendered,
                  so the descriptive alt isn't duplicated for screen readers. */}
              <img
                src="/deskFrustration2.webp"
                alt="Illustration of a business owner juggling marketing pain points"
                width={1440}
                height={714}
                loading="lazy"
                decoding="async"
                className="mx-auto block h-auto w-full select-none object-contain lg:hidden"
              />
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
