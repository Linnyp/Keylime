"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/**
 * Whole lime → halved → wedged, one per system tier, read left to right as the
 * commitment grows.
 */
const limeStages = [
  { src: "/limes/whole.webp", rotate: -9, width: "w-[104px] md:w-[168px] lg:w-[208px]" },
  { src: "/limes/half.webp", rotate: 7, width: "w-[112px] md:w-[180px] lg:w-[224px]" },
  { src: "/limes/wedge.webp", rotate: -5, width: "w-[108px] md:w-[172px] lg:w-[214px]" },
];

/**
 * Resting offset — the share of each lime clipped by the hero's bottom edge.
 * Applied per image rather than to the row: the row is as tall as the tallest
 * lime, so a row-level percentage would eat a larger share of the shorter ones.
 */
const BASE_OFFSET = "20%";
/** Total distance the row sinks, reached after `DRIFT_SPAN` of scrolling. */
const MAX_DRIFT_PX = 300;
/** Scroll distance to full drift, as a share of viewport height. */
const DRIFT_SPAN = 0.8;

/**
 * The row of limes straddling the pricing hero's bottom edge. It drifts
 * downward as the page scrolls — slower than the page itself, so the limes sink
 * beneath the section below rather than travelling with the hero. Runs at every
 * breakpoint; honors reduced-motion.
 */
export function LimeRow() {
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0;

    const update = () => {
      raf = 0;
      if (reduceMotion.matches) {
        row.style.transform = "";
        return;
      }
      // Keyed to scroll distance, not the row's viewport position, so drift is
      // exactly zero at rest — the limes sit at BASE_OFFSET until the page
      // moves. Normalising by viewport height keeps the travel feeling the same
      // on a phone as on a desktop, where the hero occupies very different
      // shares of the screen.
      const span = window.innerHeight * DRIFT_SPAN;
      const progress = Math.max(0, Math.min(1, window.scrollY / span));
      row.style.transform = `translate3d(0, ${progress * MAX_DRIFT_PX}px, 0)`;
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    reduceMotion.addEventListener("change", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      reduceMotion.removeEventListener("change", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 z-0"
    >
      <div
        ref={rowRef}
        className="flex items-end justify-center gap-6 px-6 will-change-transform md:gap-14"
      >
        {limeStages.map((stage) => (
          <Image
            key={stage.src}
            src={stage.src}
            alt=""
            width={480}
            height={480}
            // Translate before rotate (applied right to left) so the offset
            // stays vertical in the row's space rather than the lime's.
            style={{ transform: `translateY(${BASE_OFFSET}) rotate(${stage.rotate}deg)` }}
            className={`h-auto flex-none ${stage.width}`}
          />
        ))}
      </div>
    </div>
  );
}
