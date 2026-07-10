"use client";

import { useState } from "react";
import { IconPlus } from "@/components/shared/icons";

const items = [
  {
    question: "What's Go High Level and why are you using it?",
    answer:
      "Go High Level is the platform we run reputation workflows on — it handles review requests, your unified inbox, your CRM, and the automations underneath everything. We provision a dedicated sub-account for your business at no extra charge. You get the benefits of an enterprise marketing platform without the $400/mo SaaS bill or the three-month learning curve to set it up yourself.",
  },
  {
    question: "Do my customers know the messages are automated?",
    answer:
      "They feel like a normal text from your business — because they are. We write the templates in your voice, not corporate-speak, and they go out under your business name and number. Most customers reply right back. The ones who don't open it weren't going to leave a review anyway.",
  },
  {
    question: "What about negative reviews — can you bury them?",
    answer:
      "No, and we wouldn't even if we could. What we do is route negative feedback before it becomes a public review — the workflow asks for a star rating first, and unhappy customers get a private feedback form instead of a Google link. That gives you a chance to make it right. The math works in your favor: more happy reviews land publicly, fewer angry ones do.",
  },
  {
    question: "Can I see what's being sent on my behalf?",
    answer:
      "Yes. You get full login access to the platform — every message sent, every review request, every customer reply. We don't black-box this. You can edit templates, pause campaigns, or turn anything off whenever you want. Most clients log in once a week to scan the inbox and stay out of the weeds.",
  },
  {
    question: "Why are SMS, email, and loyalty programs only available after I onboard?",
    answer:
      "Because they all run on the same platform sub-account. Once you're set up with Reputation Management, the technical scaffolding for SMS campaigns, email blasts, loyalty programs, and custom automations is already in place — it's a faster, cheaper add-on than starting from scratch. We don't sell platform access without the managed reputation service because the platform without the work isn't the product.",
  },
];

export function RepFaq() {
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
