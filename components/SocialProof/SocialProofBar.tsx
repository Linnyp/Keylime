"use client";

import LogoLoop from "@/components/LogoLoop";
import { stats } from "../../data/stats";
import { clientLogos } from "../../data/clientLogos";
import "./SocialProofBar.css";

export function SocialProofBar() {
  return (
    <section
      aria-label="Social proof"
      className="bg-sand-100 bg-dots-pattern border-y-4 border-sand-950"
    >
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <div className="stats-grid grid grid-cols-1 md:grid-cols-3">
          {stats.map((stat, i) => (
            <div
              key={stat.value}
              className={`stat-cell text-center md:text-left ${
                i < stats.length - 1 ? "md:border-r-2 md:border-sand-950" : ""
              }`}
            >
              <h2 className="stat-value font-brand font-black text-sand-950">
                {stat.value}
              </h2>
              <div className="mx-auto md:mx-0 max-w-[240px] font-brand text-[13px] font-medium leading-[1.5] text-sand-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-nowrap items-center justify-start gap-8 border-t-2 border-sand-950 px-8 py-5">
          <div className="flex shrink-0 flex-col gap-0.5 border-r-2 border-sand-950 pr-6">
            <span className="font-brand text-[10px] font-bold uppercase tracking-[0.15em] text-clay-500">
              Trusted by
            </span>
            <span className="font-brand text-[11px] italic text-sand-700">
              Southwest Florida
            </span>
          </div>
          <div className="relative flex h-14 min-w-0 flex-1 items-center overflow-hidden">
            <LogoLoop
              logos={clientLogos}
              speed={60}
              direction="left"
              logoHeight={40}
              gap={120}
              scaleOnHover
              fadeOut
              fadeOutColor="#F3EEE4"
              ariaLabel="Trusted by local Southwest Florida businesses"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
