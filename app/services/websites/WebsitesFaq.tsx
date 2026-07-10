"use client";

import { useState } from "react";
import { IconPlus } from "@/components/shared/icons";

const items = [
  {
    question: "What's the deal with the 12-month subscription contract?",
    answer:
      "It exists so you don't have to write a $3,000 check on day one. The subscription bundles the build, hosting, edits, and support into a flat monthly fee — but a custom site costs real money to design and ship, so we ask for a 12-month commitment to make the math work. After 12 months it's month-to-month. Cancel before then and you owe the difference between what you've paid and the $3,000 lump sum. No surprise fees.",
  },
  {
    question: "Can I edit the site myself once it's live?",
    answer:
      "Subscription clients get unlimited content edits — you send the change, we ship it, usually same day. Lump-sum clients get a $25/mo edit plan as an add-on. We don't hand off a CMS dashboard with 40 plugins because the moment you start poking at the code, the site starts breaking. Better to text us and have it done.",
  },
  {
    question: "Do you work in WordPress, Wix, or Squarespace?",
    answer:
      "No. We build on Next.js and React because the sites load faster, rank better, and don't break when a plugin auto-updates. If you already have a WordPress site you love, we'll leave it alone. If you're tired of fighting it, we'll build you something that works without the maintenance tax.",
  },
  {
    question: "How long does a build actually take?",
    answer:
      "Usually 2–4 weeks for a 5-page site once we have your content and brand assets. Discovery and design takes the first week. Build and review takes the next two. Launch and analytics setup is the final week. Bottlenecks are almost always copy and photos — the more ready you are on day one, the faster you launch.",
  },
  {
    question: "What happens to the site if I leave?",
    answer:
      "Lump-sum clients own everything — code, design files, domain, content. You can take it anywhere. Subscription clients who finish the 12-month term keep their domain and all their content. The website code and design files stay with us, since the monthly price subsidizes that build. Nothing held hostage either way.",
  },
];

export function WebsitesFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const isLast = i === items.length - 1;
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
              style={{ maxHeight: isOpen ? "500px" : "0" }}
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
