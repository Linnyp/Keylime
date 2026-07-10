"use client";

import { useState } from "react";
import { faqItems } from "../../data/faqItems";
import { IconPlus } from "../shared/icons";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {faqItems.map((item, i) => {
        const isOpen = openIndex === i;
        const isLast = i === faqItems.length - 1;
        return (
          <div
            key={i}
            className={`border-t-2 border-sand-950 ${
              isLast ? "border-b-2" : ""
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex min-h-[44px] w-full cursor-pointer items-center justify-between gap-6 border-none bg-none py-6 text-left"
            >
              <span
                className={`font-brand text-[15px] font-bold uppercase leading-[1.4] tracking-[0.01em] transition-colors duration-150 ${
                  isOpen ? "text-clay-500" : "text-sand-950"
                }`}
              >
                {item.question}
              </span>
              <span
                className={`flex shrink-0 items-center transition-[transform,color] duration-200 ${
                  isOpen ? "rotate-45 text-clay-500" : "text-sand-950"
                }`}
              >
                <IconPlus />
              </span>
            </button>

            <div
              className="overflow-hidden transition-[max-height] duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ maxHeight: isOpen ? "400px" : "0" }}
            >
              <p className="m-0 max-w-[680px] pb-7 font-brand text-[14px] leading-[1.75] text-sand-700">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
