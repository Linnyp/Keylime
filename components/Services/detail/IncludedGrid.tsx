"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export interface IncludedItem {
  no: string;
  title: string;
  body: string;
  /** Optional illustration (public path). */
  icon?: string;
  /** Optional short capability chips. */
  bullets?: string[];
}

/**
 * "What's included" card grid for the service detail pages.
 *
 * On desktop a card inverts to charcoal on hover. On touch/mobile there is no
 * hover, so an IntersectionObserver activates whichever card is closest to the
 * middle of the viewport as you scroll — one card is always highlighted.
 */
export function IncludedGrid({ items }: { items: IncludedItem[] }) {
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.index);
            if (!Number.isNaN(idx)) setActiveIndex(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items.length]);

  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <article
          key={item.no}
          data-index={i}
          data-active={i === activeIndex}
          ref={(el) => {
            cardRefs.current[i] = el;
          }}
          className="group flex flex-col rounded-3xl border-2 border-sand-200 bg-sand-50 p-8 transition-colors duration-200 md:hover:border-sand-950 md:hover:bg-sand-950 max-md:data-[active=true]:border-sand-950 max-md:data-[active=true]:bg-sand-950"
        >
          <div className="flex items-baseline justify-between">
            <span className="font-brand text-xs font-bold uppercase tracking-[0.18em] text-clay-500">
              {item.no}
            </span>
            <span
              aria-hidden="true"
              className="h-0.5 w-10 bg-sand-200 transition-colors duration-200 md:group-hover:bg-clay-500 max-md:group-data-[active=true]:bg-clay-500"
            />
          </div>

          <h3 className="mt-7 font-brand text-xl font-black uppercase leading-[1.1] tracking-[-0.035em] transition-colors duration-200 md:group-hover:text-sand-50 max-md:group-data-[active=true]:text-sand-50">
            {item.title}
          </h3>

          <p className="mt-4 text-[15px] leading-[1.7] text-sand-700 transition-colors duration-200 md:group-hover:text-sand-50/75 max-md:group-data-[active=true]:text-sand-50/75">
            {item.body}
          </p>

          {item.bullets?.length ? (
            <ul className="mt-6 flex list-none flex-wrap gap-2">
              {item.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="rounded-full border border-sand-200 px-3 py-1 font-brand text-[10px] font-bold uppercase tracking-[0.1em] text-sand-600 transition-colors duration-200 md:group-hover:border-sand-50/25 md:group-hover:text-sand-50/70 max-md:group-data-[active=true]:border-sand-50/25 max-md:group-data-[active=true]:text-sand-50/70"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          ) : null}

          {item.icon ? (
            <div
              aria-hidden="true"
              className="pointer-events-none mx-auto mt-8 w-full max-w-[240px] flex-none opacity-60 transition-opacity duration-200 md:group-hover:opacity-100 max-md:group-data-[active=true]:opacity-100"
            >
              <Image
                src={item.icon}
                alt=""
                width={500}
                height={500}
                className="h-auto w-full"
              />
            </div>
          ) : null}
        </article>
      ))}
    </div>
  );
}
