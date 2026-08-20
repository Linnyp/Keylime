"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  FiAward,
  FiMail,
  FiMessageCircle,
  FiMessageSquare,
  FiTool,
  FiZap,
} from "react-icons/fi";

/**
 * Glyphs available beside a card title. Keyed by string rather than passed as
 * a component so the item arrays stay serializable across the server/client
 * boundary — this grid is a client component.
 */
const leadIcons = {
  sms: FiMessageSquare,
  email: FiMail,
  rewards: FiAward,
  automation: FiZap,
  chat: FiMessageCircle,
  custom: FiTool,
} as const;

export type LeadIconKey = keyof typeof leadIcons;

export interface IncludedItem {
  no: string;
  title: string;
  body: string;
  /** Optional illustration (public path). */
  icon?: string;
  /** Optional glyph shown to the left of the title. */
  leadIcon?: LeadIconKey;
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
          className="group flex flex-col overflow-hidden rounded-3xl border-2 border-sand-200 bg-sand-50 p-8 transition-colors duration-200 md:hover:border-sand-950 md:hover:bg-sand-950 max-md:data-[active=true]:border-sand-950 max-md:data-[active=true]:bg-sand-950"
        >
          <div className="flex items-center gap-3">
            {item.leadIcon
              ? (() => {
                  const LeadIcon = leadIcons[item.leadIcon];
                  return (
                    <LeadIcon
                      aria-hidden="true"
                      className="size-6 flex-none text-lime-700 transition-colors duration-200 md:group-hover:text-lime-500 max-md:group-data-[active=true]:text-lime-500"
                    />
                  );
                })()
              : null}

            <h3 className="font-brand text-xl font-black uppercase leading-[1.1] tracking-[-0.035em] transition-colors duration-200 md:group-hover:text-sand-50 max-md:group-data-[active=true]:text-sand-50">
              {item.title}
            </h3>
          </div>

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

          {/* Cards stretch to a shared row height, so mt-auto absorbs the slack
              from shorter copy and pins every icon to the card's bottom edge
              (-mb-8 cancels the card's bottom padding); pt-4 keeps a minimum gap
              below the copy. The inner box then translates down by a fifth of
              its own height, and the card clips it (overflow-hidden) — so each
              icon emerges from the bottom by the same amount. */}
          {item.icon ? (
            <div
              aria-hidden="true"
              className="pointer-events-none -mb-8 mt-auto flex-none pt-4"
            >
              <div className="mx-auto w-full max-w-[190px] translate-y-[20%] opacity-60 transition-opacity duration-200 md:group-hover:opacity-100 max-md:group-data-[active=true]:opacity-100">
                <Image
                  src={item.icon}
                  alt=""
                  width={500}
                  height={500}
                  className="h-auto w-full"
                />
              </div>
            </div>
          ) : null}
        </article>
      ))}
    </div>
  );
}
