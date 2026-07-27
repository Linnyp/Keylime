import type { Metadata } from "next";
import { IncludedGrid, type IncludedItem } from "@/components/Services/detail/IncludedGrid";
import {
  PricingFootnote,
  PricingPair,
  ProcessSteps,
  SectionHead,
  ServiceCta,
  ServiceFaq,
  ServiceHero,
  ServiceSection,
  StatGrid,
  TestimonialCallout,
  type FaqItem,
  type PairsWithItem,
  type PriceCard,
  type ProcessStep,
  type Stat,
} from "@/components/Services/detail/ServiceSections";

export const metadata: Metadata = {
  title: "Google & Meta Ads — Managed Paid Advertising",
  description:
    "Google and Meta ads built and managed for local service businesses. Search, Performance Max, Local Services Ads, and Meta — run in your account, in your name.",
};

const includedItems: IncludedItem[] = [
  {
    no: "01",
    title: "Google Search ads",
    body: "The high-intent work. Someone searching for a roof repair at 2pm on a Tuesday is ready to buy — we put your business in front of them before they scroll to a competitor.",
    icon: "/adIcons/googleSearch.png",
  },
  {
    no: "02",
    title: "Performance Max",
    body: "Google's automated multi-channel campaigns — Search, Display, YouTube, Maps, Gmail — running as one. Best once you are ready to scale beyond pure search.",
    icon: "/adIcons/googleMax.png",
  },
  {
    no: "03",
    title: "Local Services Ads",
    body: "Pay per lead, not per click. Google-verified, sits above the regular search ads, and only charges when a real customer contacts you. Ideal for home services.",
    icon: "/adIcons/localService.png",
  },
  {
    no: "04",
    title: "Meta ads",
    body: "Audience-driven campaigns on Facebook and Instagram for awareness, retargeting, and visual sells. Useful when your customers are scrolling rather than searching.",
    icon: "/adIcons/metaFb.png",
  },
  {
    no: "05",
    title: "Ad copy & creative",
    body: "Headlines, descriptions, and assets written for your business and tested against each other every week. Winners rotate up, losers rotate out — weekly, not quarterly.",
    icon: "/adIcons/copy.png",
  },
  {
    no: "06",
    title: "Tracking & reporting",
    body: "Conversion tracking, call tracking, and a monthly report in plain English. Cost per lead, return on spend, what worked, what we changed.",
    icon: "/adIcons/reporting.png",
  },
];

const processSteps: ProcessStep[] = [
  {
    no: "01",
    title: "Audit & strategy",
    body: "We pull your current ad accounts — or your competitors', if you do not run any yet — map the keywords and audiences worth chasing, and tell you which channel hits hardest first. Nothing gets built until we agree on the plan.",
  },
  {
    no: "02",
    title: "Account setup",
    body: "We get the plumbing right before spending a dollar: conversion tracking, call tracking, tag management, and clean account structure in your name. Most agencies skip this and then wonder why the reporting is useless.",
  },
  {
    no: "03",
    title: "Build & launch",
    body: "Campaigns built, copy written, audiences segmented, budgets set. We launch lean and deliberate. The first thirty days are the learning window — the platforms need data to optimize, so we let them work.",
  },
  {
    no: "04",
    title: "Optimize & report",
    body: "Weekly tuning: pause losing keywords, scale winners, rotate creative, refine audiences. The monthly report shows cost per lead, return on spend, and what we shipped — readable on your phone between jobs.",
  },
];

const stats: Stat[] = [
  { value: "2:1", label: "Minimum return on ad spend — or you don't pay our fee" },
  { value: "$2K", label: "Hard cap on monthly management fees", unit: "/mo" },
  { value: "30", label: "Days to first campaign launch", unit: "days" },
  { value: "$0", label: "Long-term lock-in. Month-to-month." },
];

const priceCards: PriceCard[] = [
  {
    name: "Management fee",
    meta: "Month-to-month",
    priceLabel: "Starting at",
    price: "$300",
    priceSuffix: "/mo",
    priceNote: "or 10% of ad spend · whichever is greater",
    body: "Pay for the work, not for a package tier you do not need. Spend a little, pay the minimum. Spend a lot and the cap stops the fee from running away with your budget.",
    features: [
      "$300/mo minimum management fee",
      "10% of ad spend above the minimum",
      "Capped at $2,000/mo no matter how big",
      "All ad spend billed directly to your card",
      "Account stays in your name, with your data",
      "Cancel anytime · no long-term contract",
    ],
    ctaLabel: "Start a campaign",
    ctaHref: "/contact",
  },
  {
    name: "Performance floor",
    meta: "Skin in the game",
    priceLabel: "Floor performance",
    price: "2:1",
    priceSuffix: "or no fee",
    priceNote: "$2 in revenue for every $1 in spend · minimum",
    body: "If we do not hit a 2:1 return on ad spend in any month after the 60-day learning window, you do not pay management fees that month. Ad spend goes to Google and Meta either way — that part is not ours to refund — but the work is on us until we earn it back.",
    features: [
      "2:1 return minimum after the learning window",
      "Tracked through your actual conversion data",
      "60-day grace period for new campaigns",
      "Fee waived in any month we miss the floor",
      "Reported plainly in your monthly summary",
      "No fine print, no asterisks, no exit fee",
    ],
    ctaLabel: "See if you qualify",
    ctaHref: "/contact",
    badge: "Performance-backed",
    featured: true,
  },
];

const faq: FaqItem[] = [
  {
    question: "What is a good return on ad spend for a local service business?",
    answer:
      "It depends on your margins and lifetime value, but a healthy floor for most local service businesses is 4:1 — four dollars in revenue for every dollar spent. The 2:1 floor is the worst case, where you still do not pay management fees. We aim to clear that inside the first sixty days and push higher from there. If your margins are thin, we will tell you up front whether the math works before running a single ad.",
  },
  {
    question: "How much should I spend on ads to get real results?",
    answer:
      "For most local service businesses, $1,500–$3,000/mo in ad spend is the floor for meaningful lead volume. Below $1,000/mo the platforms do not get enough data to optimize and you pay to learn. Above $5,000/mo you hit diminishing returns unless you run multiple locations. We will not push you past what your business can absorb — if you can handle ten leads a week, pouring gas on the fire just burns leads.",
  },
  {
    question: "Do you manage both Google and Meta, or just one?",
    answer:
      "Both. We pick the channel — or the mix — that fits your business, not the other way around. Home services and high-intent searches usually start on Google. Brand awareness, retargeting, and visual products lean Meta. Most clients run a primary channel with a small retargeting layer on the other. We will tell you which to start with on the consult instead of selling you both because it is bigger.",
  },
  {
    question: "What happens if campaigns don't perform?",
    answer:
      "If return on ad spend drops below 2:1 in any month after the 60-day learning window, you do not pay management fees that month. You still pay your ad spend — that goes to Google and Meta, not to us — but our work is on us until we earn it back. We are not in the business of charging clients to lose money.",
  },
  {
    question: "How is the management fee actually calculated?",
    answer:
      "$300/mo minimum or 10% of monthly ad spend, whichever is greater, capped at $2,000/mo. At $3,000 in spend you pay $300, the minimum. At $10,000 in spend you pay $1,000. At $25,000 or more you pay $2,000 flat, where the cap kicks in. No tiered packages, no setup fees, no surprise invoices.",
  },
  {
    question: "Are you running my own ads or reselling someone else's?",
    answer:
      "Yours. The campaigns live in a Google Ads account and a Meta account in your name, with your billing, your data, and your history. If you ever leave, you take all of it — campaign history, conversion data, audiences. Plenty of agencies run client campaigns inside their own master account so the data is held hostage when the relationship ends. We do not.",
  },
];

const pairs: PairsWithItem[] = [
  {
    label: "Reputation Management",
    copy: "Capture and convert more of the leads your ads bring in. One inbox, faster follow-up.",
    href: "/services/reputation",
  },
  {
    label: "SEO",
    copy: "Run ads while SEO compounds in the background. Short-term leads, long-term rankings.",
    href: "/services/seo",
  },
  {
    label: "Compare systems",
    copy: "Ads run best on top of a system that catches the leads. See what each one includes.",
    href: "/pricing",
  },
];

export default function AdsPage() {
  return (
    <main className="overflow-hidden bg-sand-50 pt-20 text-sand-950">
      <ServiceHero
        eyebrow="Specialized work"
        title={
          <>
            Get in front of customers{" "}
            <span className="text-clay-500">already looking.</span>
          </>
        }
        intro="Google and Meta ads built and managed for local service businesses. We run the campaigns in your account, in your name. If we do not hit a 2:1 return on ad spend, you do not pay management fees that month."
        glance={[
          ["Format", "Active management"],
          ["Channels", "Google · Meta · LSA · PMax"],
          ["Pricing", "$300/mo or 10% of spend"],
          ["Lock-in", "None · month-to-month"],
        ]}
      />

      <ServiceSection id="whats-included" surface="alt" grid>
        <SectionHead
          eyebrow="What's included"
          headingId="included-heading"
          heading={
            <>
              Every channel that <span className="text-clay-500">earns its keep.</span>
            </>
          }
          intro="Search, social, local services, Performance Max. We pick the mix that fits your business, not the one that is biggest. Every dollar is tracked back to a lead, a call, or a booking."
        />
        <IncludedGrid items={includedItems} />
      </ServiceSection>

      <ServiceSection id="pricing">
        <SectionHead
          eyebrow="Pricing"
          headingId="pricing-heading"
          heading={
            <>
              A flat fee. A real <span className="text-clay-500">guarantee.</span>
            </>
          }
          intro="Management is priced on what you spend and capped where it should be capped. Performance is backed by a 2:1 floor — clear that bar or we do not charge for the work that month."
        />
        <PricingPair cards={priceCards} />
        <PricingFootnote>
          Most clients land between $300 and $1,000/mo in management fees. The cap kicks
          in once monthly ad spend clears $20,000. No setup fee, no audit invoice, no
          contract.
        </PricingFootnote>
      </ServiceSection>

      <ServiceSection id="results" surface="alt">
        <SectionHead
          eyebrow="By the numbers"
          headingId="results-heading"
          align="right"
          heading={
            <>
              Real spend. Real <span className="text-clay-500">returns.</span>
            </>
          }
          intro="Ads work fast or they do not work. Unlike SEO, you find out inside sixty days. Here is the floor we hold ourselves to and the numbers worth looking at before you write the first check."
        />
        <StatGrid stats={stats} />
        <TestimonialCallout
          quote="The phone started ringing the second week. Not random tire-kickers either — actual booked jobs. We pulled back our old spend by half and still doubled the leads."
          attribution="Four Leaf Charters · Lee County"
        />
      </ServiceSection>

      <ServiceSection id="process" grid>
        <SectionHead
          eyebrow="The process"
          headingId="process-heading"
          align="right"
          heading={
            <>
              From audit to <span className="text-clay-500">booked calls.</span>
            </>
          }
        />
        <ProcessSteps steps={processSteps} />
      </ServiceSection>

      <ServiceSection id="faq" surface="alt" grid rule={false}>
        <ServiceFaq
          eyebrow="Questions about ads"
          heading={
            <>
              Honest answers about <span className="text-clay-500">paid ads.</span>
            </>
          }
          intro="The questions every owner asks before handing a card to Google — answered the way we would answer them on a call."
          items={faq}
        />
      </ServiceSection>

      <ServiceCta
        heading={
          <>
            Stop guessing at spend. Start{" "}
            <span className="text-clay-500">tracking returns.</span>
          </>
        }
        blurb="Free 30-minute consult. We will pull your current ad accounts — or your competitors' — and tell you straight whether ads are the right move right now, or whether SEO would get you there cheaper in the long run."
        pairs={pairs}
      />
    </main>
  );
}
