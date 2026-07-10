"use client";

import { useState } from "react";
import { IconPlus } from "@/components/shared/icons";

const items = [
  {
    question: "How long until I actually see results?",
    answer:
      "Foundation work — citations, GBP optimization, on-page fixes — usually shows up in the local map pack within 4–8 weeks. Real organic ranking gains for competitive keywords take 3–6 months. Anyone who promises page-one rankings in 30 days is either lying or about to get your site penalized. SEO compounds: the work you pay for in month one is still paying you in month twelve.",
  },
  {
    question: "What's the difference between SEO Foundation and ongoing SEO?",
    answer:
      "Foundation is the one-time $600 setup — keyword research, citations with unified NAP, 1–2 high-DA backlinks, GBP setup, press release where applicable. It's the floor every local business needs. Ongoing ($300/mo) is what builds rankings on top of that floor: 4 blog posts a month, GBP posts, strategic backlinks, and continuous optimization. Foundation is one-and-done. Ongoing is how you actually win.",
  },
  {
    question: "Do you guarantee rankings?",
    answer:
      "No, and you should walk away from any agency that does. Google owns the algorithm and changes it constantly. What we guarantee is the work — keyword research that targets terms your customers actually search, technical fixes that remove crawl barriers, and content that earns links. The rankings are the output of the work, not a promise.",
  },
  {
    question: "I already have someone doing SEO — should I switch?",
    answer:
      "Depends. If they send you a monthly report you understand and your rankings are climbing for terms that matter to your business, stay. If you're getting jargon-heavy reports, no clarity on what's being shipped, or rankings for words nobody would ever pay you for, that's a problem. Send me your last report and I'll tell you straight whether it's worth keeping.",
  },
  {
    question: "Why does my Google Business Profile keep losing visibility?",
    answer:
      "Three usual suspects: inconsistent NAP across the web (your address differs by one character on Yelp vs. your site), no recent posts or photos (Google reads dormancy as decline), or competitors actively building reviews while yours sit. The Foundation package fixes 1 and 2. Ongoing fixes 3 — and Reputation Management hardens the review side.",
  },
];

export function SeoFaq() {
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
