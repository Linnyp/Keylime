import type { PricingPlanItem } from "../types";

export const pricingPlans: PricingPlanItem[] = [
  {
    name: "Websites",
    description:
      "A fast, custom-built site that turns visitors into calls — no templates, no drag-and-drop.",
    cta: "Book a Call",
    featured: false,
    breakdownHref: "/services/websites#pricing",
    monthly: {
      price: "$180",
      priceUnit: "/mo",
      cadence: "12-month minimum · Website as a service",
      features: [
        "Custom design + development",
        "Hosting, SSL & domain email",
        "Unlimited content edits",
        "Analytics setup",
        "Full ongoing support",
        "No upfront build cost",
      ],
    },
    lumpSum: {
      price: "$3,000",
      priceUnit: "",
      cadence: "One-time build · $25/mo hosting",
      features: [
        "5-page custom design + development",
        "Full ownership of code & files",
        "Hosting billed at $25/mo separately",
        "Content edits available at $25/mo",
        "Additional pages at $150 each",
        "Blog system + chatbot as add-ons",
      ],
    },
  },
  {
    name: "Local SEO",
    description:
      "Rank where your customers are already searching — and stay there as competitors react.",
    cta: "Book a Call",
    featured: true,
    breakdownHref: "/services/seo#pricing",
    monthly: {
      price: "$300",
      priceUnit: "/mo",
      cadence: "Ongoing · month-to-month",
      features: [
        "Content strategy",
        "4 blog posts per month",
        "GBP posts + ongoing optimization",
        "Strategic backlink building",
        "Press releases (where applicable)",
        "No long-term lock-in",
      ],
    },
    lumpSum: {
      price: "$600",
      priceUnit: "",
      cadence: "SEO Foundation · one-time",
      features: [
        "Keyword research + mapping",
        "Local citation building (unified NAP)",
        "1\u20132 high-DA foundation backlinks",
        "Press release (where applicable)",
        "GBP setup + optimization",
        "Handoff documentation",
      ],
    },
  },
  {
    name: "Paid Ads",
    description:
      "Paid campaigns built around cost-per-lead — and you don't pay if ROAS drops below 2:1.",
    cta: "Book a Call",
    featured: false,
    breakdownHref: "/services/ads#pricing",
    monthly: {
      price: "$300",
      priceUnit: "/mo min",
      cadence: "Management fee · month-to-month",
      features: [
        "$300/mo or 10% of ad spend (higher applies)",
        "Management fee capped at $2,000/mo",
        "Google + Meta Ads covered",
        "Active campaign management",
        "Monthly performance reporting",
        "2:1 ROAS guarantee or you don't pay",
      ],
    },
    lumpSum: null,
  },
  {
    name: "Reputation",
    description:
      "Turn happy customers into a steady stream of five-star reviews that win the next caller.",
    cta: "Book a Call",
    featured: false,
    breakdownHref: "/services/reputation#pricing",
    monthly: {
      price: "$195",
      priceUnit: "/mo",
      cadence: "Ongoing · month-to-month",
      features: [
        "Dedicated Go High Level sub-account",
        "Review request workflows configured",
        "Customer engagement automation",
        "CRM + unified inbox access",
        "Multi-platform monitoring",
        "No long-term lock-in",
      ],
    },
    lumpSum: null,
  },
];
