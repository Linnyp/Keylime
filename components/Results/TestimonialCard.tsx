"use client";

import type { TestimonialItem } from "../../types";

export function TestimonialCard({
  testimonial,
}: {
  testimonial: TestimonialItem;
}) {
  return (
    <article className="group flex h-full cursor-default flex-col gap-6 rounded-3xl border border-sand-200 bg-white p-9 shadow-[0_2px_6px_0_rgba(28,30,26,0.06)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_26px_0_rgba(28,30,26,0.12)]">
      <div className="flex items-start justify-between gap-6">
        <img
          src={testimonial.avatarSrc}
          alt={testimonial.avatarAlt}
          style={
            testimonial.avatarWidthPx
              ? { width: `${testimonial.avatarWidthPx}px` }
              : undefined
          }
          className={
            testimonial.avatarWidthPx
              ? "block h-auto object-cover"
              : "block h-auto w-[55%] max-w-[200px] object-cover"
          }
        />
        <div
          aria-hidden="true"
          className="select-none pt-6 font-brand text-[64px] font-extrabold leading-[0.7] text-lime-500"
        >
          &ldquo;
        </div>
      </div>

      <blockquote className="m-0 text-[15px] font-normal leading-[1.7] text-sand-700 not-italic">
        {testimonial.quote}
      </blockquote>

      <footer className="mt-auto flex items-center gap-4 border-t border-sand-200 pt-5">
        <img
          src={testimonial.ownerPhotoSrc}
          alt={testimonial.ownerPhotoAlt}
          className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-sand-100"
        />
        <div className="min-w-0">
          <div className="font-brand text-[14px] font-bold tracking-[-0.02em] text-sand-950">
            {testimonial.name}
          </div>
          <div className="mt-1 text-[13px] text-sand-600">
            {testimonial.titleAndCompany}
          </div>
        </div>
      </footer>
    </article>
  );
}
