"use client";

import { testimonials } from "../../data/testimonials";
import { SectionLabel } from "../shared/SectionLabel";
import { PrimaryButton } from "../shared/PrimaryButton";
import { IconArrowRight } from "../shared/icons";
import { TestimonialCard } from "./TestimonialCard";
import "./ResultsSection.css";

export function ResultsSection() {
  return (
    <section
      id="results"
      aria-labelledby="results-heading"
      className="bg-sand-50 py-24 md:py-28"
    >
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <div className="mb-14">
          <SectionLabel text="Results" />
          <h2
            id="results-heading"
            className="results-heading font-brand font-extrabold text-sand-950"
          >
            Real results from
            <br />
            real <span className="text-lime-700">local businesses.</span>
          </h2>
        </div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </div>

        {/* Mid-page CTA banner */}
        <div className="mt-14 flex flex-col items-center gap-6 overflow-hidden rounded-[32px] bg-sand-900 bg-dots-pattern p-12 text-center">
          <p className="results-cta-line m-0 font-brand font-extrabold text-white">
            Ready to find out where you stand?
          </p>
          <PrimaryButton href="#contact" variant="lime">
            See if we&apos;re a fit <IconArrowRight />
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
