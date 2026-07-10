"use client";

import type { ProblemItem } from "../../types";

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
  return (
    <article className="group h-full cursor-default border-4 border-sand-950 bg-sand-100 p-10 transition-colors duration-150 hover:bg-sand-950">
      <div className="mb-4 flex items-start justify-between gap-4">
        <h3 className="font-brand text-[20px] font-extrabold uppercase tracking-[-0.02em] text-sand-950 transition-colors duration-150 group-hover:text-sand-50">
          {problem.name}
        </h3>
        <span className="shrink-0 font-brand text-[11px] font-black tracking-[0.1em] text-clay-500 transition-colors duration-150 group-hover:text-sand-50">
          0{index + 1}
        </span>
      </div>

      <p className="mb-5 font-brand text-[15px] leading-[1.7] text-sand-600 transition-colors duration-150 group-hover:text-white/90">
        {problem.body}
      </p>

      <p className="font-brand text-[15px] leading-[1.7] text-sand-600 transition-colors duration-150 group-hover:text-white/90">
        <span className="font-bold text-clay-500 transition-colors duration-150 group-hover:text-sand-50">
          Solution:
        </span>{" "}
        {problem.solution}
      </p>
    </article>
  );
}
