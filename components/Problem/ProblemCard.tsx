"use client";

import type { ProblemItem } from "../../types";

/**
 * One scattered-lime backdrop per card, cycled by index — wedges, halves, then
 * whole limes. Same treatment as the page heroes (`ParallaxBackground`): the
 * artwork sits under a blurred, near-opaque wash so it reads as texture and the
 * copy keeps full contrast. Static here rather than parallaxed — these are
 * cards, not full-bleed sections.
 */
const CARD_BACKDROPS = [
  "/keylimerow.webp", // wedges
  "/keylimehalfrow.webp", // halves
  "/keylimefullrow.webp", // whole limes
];

interface ProblemCardProps {
  problem: ProblemItem;
  index: number;
  total: number;
}

export function ProblemCard({
  problem,
  index,
  total: _total,
}: ProblemCardProps) {
  const backdrop = CARD_BACKDROPS[index % CARD_BACKDROPS.length];

  return (
    <article className="group relative isolate h-full cursor-default overflow-hidden rounded-3xl border border-sand-200 bg-white p-10 shadow-[0_2px_6px_0_rgba(28,30,26,0.06)] transition-all duration-200 hover:-translate-y-1 hover:border-lime-300 hover:shadow-[0_12px_26px_0_rgba(28,30,26,0.12)]">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${backdrop}')` }}
        />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />
      </div>

      {/* Title centres on the card itself, so the index sits absolutely in the
          corner rather than taking flow width and pushing the title off-centre.
          The horizontal padding keeps a long title clear of it. */}
      <div className="relative mb-4">
        <h3 className="px-8 text-center font-brand text-[22px] font-bold tracking-[-0.03em] text-sand-950">
          {problem.name}
        </h3>
        <span className="absolute top-0 right-0 font-brand text-[13px] font-extrabold tracking-[0.02em] text-lime-600">
          0{index + 1}
        </span>
      </div>

      <p className="mb-5 text-[15px] leading-[1.7] text-sand-600">
        {problem.body}
      </p>

      <p className="text-[15px] leading-[1.7] text-sand-950">
        <span className="block text-center font-semibold text-lime-800">
          Solution:
        </span>
        <span className="block text-sand-600">{problem.solution}</span>
      </p>
    </article>
  );
}
