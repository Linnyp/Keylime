"use client";

import { testimonials } from "../../data/testimonials";
import { SectionLabel } from "../shared/SectionLabel";
import { IconArrowRight } from "../shared/icons";
import { TestimonialCard } from "./TestimonialCard";
import "./ResultsSection.css";

export function ResultsSection() {
  return (
    <section
      id="results"
      aria-labelledby="results-heading"
      className="bg-sand-50 py-28"
    >
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <div className="mb-16">
          <SectionLabel text="Results" />
          <h2
            id="results-heading"
            className="results-heading font-brand font-black uppercase text-sand-950"
          >
            Real Results from
            <br />
            Real <span className="text-clay-500">local businesses.</span>
          </h2>
        </div>

        {/* Testimonial grid (negative margins overlap card borders) */}
        <div className="grid grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className={i % 3 !== 0 ? "-ml-0.5" : ""}>
              <TestimonialCard testimonial={t} />
            </div>
          ))}
        </div>

        {/* Mid-page CTA banner */}
        <div className="mt-16 flex flex-col items-center gap-5 border-4 border-sand-950 bg-sand-900 bg-dots-pattern p-12 text-center">
          <p className="results-cta-line m-0 font-brand font-black uppercase text-sand-50">
            Ready to find out where you stand?
          </p>
          <a
            href="#contact"
            className="inline-flex min-h-[48px] items-center gap-2 bg-clay-500 px-7 py-3.5 font-brand text-[13px] font-bold uppercase tracking-[0.08em] text-sand-50 no-underline transition-colors duration-150 hover:bg-clay-700"
          >
            See if we&apos;re a fit <IconArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
