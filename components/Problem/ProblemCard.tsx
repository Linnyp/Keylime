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
    <article className="group h-full cursor-default rounded-3xl border border-sand-200 bg-white p-10 shadow-[0_2px_6px_0_rgba(28,30,26,0.06)] transition-all duration-200 hover:-translate-y-1 hover:border-lime-300 hover:shadow-[0_12px_26px_0_rgba(28,30,26,0.12)]">
      <div className="mb-4 flex items-start justify-between gap-4">
        <h3 className="font-brand text-[22px] font-bold tracking-[-0.03em] text-sand-950">
          {problem.name}
        </h3>
        <span className="shrink-0 font-brand text-[13px] font-extrabold tracking-[0.02em] text-lime-600">
          0{index + 1}
        </span>
      </div>

      <p className="mb-5 text-[15px] leading-[1.7] text-sand-600">
        {problem.body}
      </p>

      <p className="flex gap-2 text-[15px] leading-[1.7] text-sand-950">
        <span className="font-semibold text-lime-800">Solution:</span>
        <span className="text-sand-600">{problem.solution}</span>
      </p>
    </article>
  );
}
