"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type IncludedItem = {
  no: string;
  title: string;
  body: string;
  icon: string;
  iconTranslateClass?: string;
  bullets: string[];
};

export function IncludedSelector({ items }: { items: IncludedItem[] }) {
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(
              (entry.target as HTMLElement).dataset.index
            );
            if (!Number.isNaN(idx)) setActiveIndex(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items.length]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const isActive = i === activeIndex;
        return (
          <article
            key={item.no}
            data-index={i}
            data-active={isActive}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            className={`group relative flex aspect-380/457 flex-col overflow-hidden border-2 border-sand-950 bg-sand-50 p-10 transition-colors duration-150 md:hover:bg-sand-900 max-md:data-[active=true]:bg-sand-900 ${
              col > 0 ? "lg:-ml-0.5" : ""
            } ${i % 2 !== 0 ? "md:-ml-0.5 lg:ml-0" : ""} ${
              row > 0 ? "lg:-mt-0.5" : ""
            } ${i >= 2 ? "md:-mt-0.5 lg:mt-0" : ""}`}
          >
            <span className="font-brand text-[14px] font-medium leading-none text-clay-500">
              {item.no}
            </span>

            <h3 className="mt-9 m-0 font-brand text-[22px] font-black uppercase leading-[1.15] tracking-[-0.01em] text-sand-950 transition-colors duration-150 md:group-hover:text-sand-50 max-md:group-data-[active=true]:text-sand-50 lg:text-[24px]">
              {item.title}
            </h3>

            <p className="mt-4 m-0 font-brand text-[15px] leading-[1.55] text-sand-800 transition-colors duration-150 md:group-hover:text-sand-50 max-md:group-data-[active=true]:text-sand-50 lg:text-[16px]">
              {item.body}
            </p>

            <div
              aria-hidden
              className={`pointer-events-none absolute bottom-0 left-1/2 w-[88%] -translate-x-1/2 opacity-55 transition-opacity duration-150 md:group-hover:opacity-100 max-md:group-data-[active=true]:opacity-100 ${
                item.iconTranslateClass ?? "translate-y-[32%]"
              }`}
            >
              <Image
                src={item.icon}
                alt=""
                width={500}
                height={500}
                className="h-auto w-full"
              />
            </div>
          </article>
        );
      })}
    </div>
  );
}
