"use client";

import { useState } from "react";
import { IconPlus } from "@/components/shared/icons";

const items = [
  {
    question: "What's a good ROAS for a local service business?",
    answer:
      "Depends on your margins and lifetime value, but a healthy floor for most local service businesses is 4:1 — four dollars in revenue for every dollar in ad spend. The 2:1 ROAS guarantee is the worst case where you still don't pay management fees. We aim to clear that bar inside the first 60 days, then push it higher from there. If your margins are thin (commodity services, hyper-competitive verticals), we'll tell you up front whether the math works before we run a single ad.",
  },
  {
    question: "How much should I spend on ads to get real results?",
    answer:
      "For most Southwest Florida service businesses, $1,500–$3,000/mo in ad spend is the floor for meaningful lead volume. Below $1,000/mo Google's algorithms don't get enough data to optimize and you waste money learning. Above $5,000/mo you start getting diminishing returns unless you're a multi-location operator. We don't push you to spend more than your business can absorb — if you can only handle 10 leads a week, we don't pour gas on a fire that'll just burn the leads.",
  },
  {
    question: "Do you manage both Google and Meta, or just one?",
    answer:
      "Both. We pick the channel — or mix — that fits your business, not the other way around. Home services and high-intent searches usually start on Google. Brand awareness, retargeting, and visual products lean Meta. Most clients run a primary channel with a small retargeting layer on the other. We'll tell you straight which one to start with on the discovery call instead of selling you both because it's bigger.",
  },
  {
    question: "What happens if campaigns don't perform?",
    answer:
      "If ROAS drops below 2:1 in any given month after the 60-day learning window, you don't pay management fees that month. You still pay your ad spend (that goes to Google and Meta, not us), but the work we did is on us until we earn it back. We're not in the business of charging clients to lose money, and the guarantee keeps everyone honest.",
  },
  {
    question: "How is the management fee actually calculated?",
    answer:
      "$300/mo minimum or 10% of monthly ad spend — whichever is greater — capped at $2,000/mo. So at $3,000 in spend you pay $300 (the min). At $10,000 in spend you pay $1,000 (10%). At $25,000+ in spend you pay $2,000 flat (the cap kicks in). No tiered packages, no setup fees, no surprise invoices. The fee is published on the website on purpose — see /pricing for the full breakdown.",
  },
  {
    question: "Are you running my own ads or reselling someone else's?",
    answer:
      "Yours. The campaigns live in a Google Ads account and Meta account in your name, with your billing, your data, and your history. If you ever leave, you take all of it with you — campaign history, conversion data, audiences. Plenty of agencies run client campaigns inside their own master accounts so the data is held hostage when the relationship ends. We don't.",
  },
];

export function AdsFaq() {
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
