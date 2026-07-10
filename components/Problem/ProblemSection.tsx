"use client";

import { useEffect, useRef, useState } from "react";
import StackingCards, { StackingCardItem } from "@/components/StackingCards";
import { problems } from "../../data/problems";
import { SectionLabel } from "../shared/SectionLabel";
import { ProblemCard } from "./ProblemCard";
import "./ProblemSection.css";

const STICKY_TOP_PX = 80;
const DESKTOP_PIN_PX = 112;
const CARD_HEIGHT_PX = 460;

export function ProblemSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const mobileHeadingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [showNavCover, setShowNavCover] = useState(false);
  const [stackPin, setStackPin] = useState(DESKTOP_PIN_PX);
  const [mobileSticky, setMobileSticky] = useState(true);

  useEffect(() => {
    const target = sectionRef.current;
    if (!target) return;
    const update = () => {
      const r = target.getBoundingClientRect();
      setShowNavCover(r.top < STICKY_TOP_PX && r.bottom > STICKY_TOP_PX);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    const el = mobileHeadingRef.current;
    if (!el) return;

    const measure = () => {
      const isSmall = window.matchMedia("(max-width: 767px)").matches;
      if (!isSmall) {
        setStackPin(DESKTOP_PIN_PX);
        return;
      }
      setStackPin(STICKY_TOP_PX + el.offsetHeight + 16);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  useEffect(() => {
    const update = () => {
      const isMobile = window.matchMedia("(max-width: 1023px)").matches;
      if (!isMobile) {
        setMobileSticky(true);
        return;
      }
      const cards = cardsRef.current;
      const heading = mobileHeadingRef.current;
      if (!cards || !heading) return;
      const pin = STICKY_TOP_PX + heading.offsetHeight + 16;
      const lastCardOffset = (problems.length - 1) * CARD_HEIGHT_PX - pin;
      const cardsTop = cards.getBoundingClientRect().top;
      setMobileSticky(cardsTop > -lastCardOffset);
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

        <div
          ref={mobileHeadingRef}
          className={`${mobileSticky ? "sticky top-20" : ""} md:relative! md:top-auto! z-20 -mx-6 px-6 lg:hidden bg-sand-50`}
        >
          <h2 className="problem-heading font-brand font-black uppercase text-sand-950 md:hidden">
            You&apos;ve Got 99 Problems
            <br />
            <span className="text-clay-500">Marketing</span> Shouldn&apos;t Be 1
          </h2>
          <h2 className="problem-heading font-brand font-black uppercase text-sand-950 hidden md:block">
            You&apos;ve Got
            <br />
            99 Problems
            <br />
            <span className="text-clay-500">Marketing </span>
            <br />
            Shouldn&apos;t Be 1
          </h2>
          <img
            src="/jugglingPain.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none hidden md:block absolute top-0 right-6 h-auto w-auto max-w-[40%] select-none object-contain"
          />
        </div>

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[5fr_7fr] lg:gap-16 ">
          <div>
            <div className="lg:sticky lg:top-24">
              <div className="hidden lg:block">
                <SectionLabel text="The Problem" />
                <h2 className="problem-heading font-brand font-black uppercase text-sand-950">
                  You&apos;ve Got
                  <br />
                  99 Problems
                  <br />
                  <span className="text-clay-500">Marketing </span>
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
              <img
                src="/jugglingPain.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none mx-auto block h-auto w-full max-w-[380px] select-none object-contain md:hidden"
              />
              <img
                src="/jugglingPain.png"
                alt="Illustration of a business owner juggling marketing pain points"
                className="absolute left-0 right-0 top-full hidden h-auto w-full lg:block"
              />
            </div>
            <div aria-hidden className="hidden lg:block lg:h-[904px]" />
          </div>

          <div ref={cardsRef}>
            <StackingCards totalCards={problems.length} scaleMultiplier={0.03}>
              {problems.map((problem, i) => (
                <StackingCardItem
                  key={problem.name}
                  index={i}
                  topPosition={`${i * 3}%`}
                  className="problem-card-item h-[490px]! md:h-[290px]! lg:h-[360px]!"
                  style={{ top: stackPin }}
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
