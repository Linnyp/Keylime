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
            className={`border-t border-sand-200 ${
              isLast ? "border-b" : ""
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex min-h-[44px] w-full cursor-pointer items-center justify-between gap-6 border-none bg-none py-6 text-left"
            >
              <span
                className={`font-brand text-[16px] font-bold leading-[1.4] tracking-[-0.02em] transition-colors duration-150 ${
                  isOpen ? "text-lime-700" : "text-sand-950"
                }`}
              >
                {item.question}
              </span>
              <span
                className={`flex shrink-0 items-center transition-[transform,color] duration-200 ${
                  isOpen ? "rotate-45 text-lime-700" : "text-char-400"
                }`}
              >
                <IconPlus />
              </span>
            </button>

            <div
              className="overflow-hidden transition-[max-height] duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ maxHeight: isOpen ? "400px" : "0" }}
            >
              <p className="m-0 max-w-[680px] pb-7 text-[15px] leading-[1.7] text-sand-600">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
