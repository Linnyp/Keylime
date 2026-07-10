"use client";

import type { TestimonialItem } from "../../types";

export function TestimonialCard({
  testimonial,
}: {
  testimonial: TestimonialItem;
}) {
  return (
    <article className="group flex h-full cursor-default flex-col gap-6 border-2 border-sand-950 bg-sand-100 p-10 transition-transform duration-150 hover:-translate-y-0.5">
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
          className="select-none pt-6 font-brand text-[64px] font-black leading-[0.7] text-clay-500"
        >
          &ldquo;
        </div>
      </div>

      <blockquote className="m-0 font-brand text-[14px] font-normal leading-[1.75] text-sand-700 not-italic">
        {testimonial.quote}
      </blockquote>

      <footer className="mt-auto flex items-center gap-4 border-t-2 border-sand-950 pt-4">
        <img
          src={testimonial.ownerPhotoSrc}
          alt={testimonial.ownerPhotoAlt}
          className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-sand-50"
        />
        <div className="min-w-0">
          <div className="font-brand text-[13px] font-extrabold uppercase tracking-[0.04em] text-sand-950">
            {testimonial.name}
          </div>
          <div className="mt-1 font-brand text-[12px] text-sand-600">
            {testimonial.titleAndCompany}
          </div>
        </div>
      </footer>
    </article>
  );
}
