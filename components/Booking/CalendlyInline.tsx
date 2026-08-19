"use client";

import { useEffect, useRef, useState } from "react";
import { InlineWidget } from "react-calendly";
import { FiCalendar } from "react-icons/fi";
import { CALENDLY_PAGE_SETTINGS, CALENDLY_URL } from "@/data/booking";

interface CalendlyInlineProps {
  /** Embed height. Calendly needs ~700px to render the month grid without its own scrollbar. */
  height?: number;
  className?: string;
}

/**
 * Inline Calendly embed for the booking sections.
 *
 * The widget script is ~90kb and blocks nothing above the fold, so the embed is
 * only mounted once it scrolls near the viewport. Until then we render a branded
 * placeholder containing a real link, which keeps the CTA usable if JS fails.
 */
export function CalendlyInline({ height = 700, className = "" }: CalendlyInlineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={className} style={{ minHeight: height }}>
      {shouldLoad ? (
        <InlineWidget
          url={CALENDLY_URL}
          styles={{ height: `${height}px`, minWidth: "320px" }}
          pageSettings={CALENDLY_PAGE_SETTINGS}
        />
      ) : (
        <div className="flex h-full min-h-[inherit] items-center justify-center rounded-2xl border-2 border-sand-200 bg-sand-100 p-8 text-center">
          <div>
            <FiCalendar className="mx-auto text-lime-600" size={34} aria-hidden="true" />
            <p className="mt-4 font-brand font-bold uppercase">Loading the calendar</p>
            <a
              href={CALENDLY_URL}
              className="mt-2 inline-block text-sm text-sand-700 underline"
            >
              Or open the booking page directly
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
