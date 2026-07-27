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
  title: "Reputation Management — Reviews, Inbox, Follow-Ups Handled",
  description:
    "Done-for-you reputation management for local service businesses. Automated review requests, sentiment routing, a unified inbox, and multi-platform monitoring.",
};

const includedItems: IncludedItem[] = [
  {
    no: "01",
    title: "Your own platform workspace",
    body: "A private workspace provisioned, configured, and managed for your business. You get login access — never a $400/mo software bill or a three-month setup learning curve.",
  },
  {
    no: "02",
    title: "Review request workflows",
    body: "Automated text and email requests that go out after a job, sale, or appointment — written in your voice, sent under your business name. Review velocity goes up without sounding like a robot.",
  },
  {
    no: "03",
    title: "Sentiment routing",
    body: "Happy customers get sent to a public review. Unhappy ones get a private feedback form. You get the chance to fix something before a one-star review lands on the internet.",
  },
  {
    no: "04",
    title: "Unified inbox",
    body: "Texts, emails, Facebook messages, and Google Business chat in one inbox. Stop juggling six apps, missing replies in three of them, and losing track of which thread is which.",
  },
  {
    no: "05",
    title: "CRM & contact management",
    body: "Every customer who has ever called, emailed, or filled out a form ends up in one organized contact list — searchable, taggable, and ready for whatever comes next.",
  },
  {
    no: "06",
    title: "Multi-platform monitoring",
    body: "Google, Facebook, and Yelp watched continuously. We get notified when a review lands so you can respond fast — and we will draft the response if you want us to.",
  },
];

const processSteps: ProcessStep[] = [
  {
    no: "01",
    title: "Discovery & setup",
    body: "A 30-minute call to learn the business and your current review presence. We provision your workspace, connect your Google Business Profile, and import your customer list.",
  },
  {
    no: "02",
    title: "Workflow configuration",
    body: "We write the review request templates in your voice, set up sentiment routing, configure the unified inbox, and wire up notifications — all behind the scenes, with no work on your end.",
  },
  {
    no: "03",
    title: "Launch & train",
    body: "We go live and walk you through it in a 30-minute session. You learn where reviews show up, how to use the inbox, and how to find any contact in five seconds.",
  },
  {
    no: "04",
    title: "Manage & expand",
    body: "We run the workflows, monitor the reviews, and keep things tuned. Once it is humming you can layer on campaigns, loyalty, or automations from the same workspace.",
  },
];

const stats: Stat[] = [
  { value: "14", label: "Days to the first batch of new reviews", unit: "days" },
  { value: "1", label: "Inbox replacing five or more scattered tools" },
  { value: "24/7", label: "Multi-platform review monitoring" },
  { value: "$0", label: "Long-term lock-in. Month-to-month." },
];

const priceCards: PriceCard[] = [
  {
    name: "Reputation",
    meta: "Month-to-month",
    priceLabel: "Flat monthly",
    price: "$195",
    priceSuffix: "/mo",
    body: "The full done-for-you reputation system, the workspace, the unified inbox, and the CRM. Setup is included — no separate onboarding invoice, no surprise fees.",
    features: [
      "Dedicated managed workspace",
      "Review request workflows configured and run",
      "Sentiment routing and customer engagement",
      "CRM and unified inbox access",
      "Multi-platform review monitoring",
      "Setup included · no long-term contract",
    ],
    ctaLabel: "Start Reputation Management",
    ctaHref: "/contact",
    badge: "Most common",
    featured: true,
  },
  {
    name: "What you don't pay for",
    meta: "The fine print",
    priceLabel: "Setup · platform · cancellation",
    price: "$0",
    body: "A standalone subscription to the platform underneath this runs $97–$497/mo before you configure anything. Most agencies add a setup fee on top of their monthly. We do not.",
    features: [
      "No setup or onboarding fee",
      "No separate platform subscription",
      "No long-term contract — cancel anytime",
      "No per-message or per-contact charges",
      "No data lock-in — your contact list is yours",
      "Written gameplan included up front",
    ],
    ctaLabel: "Talk it through with us",
    ctaHref: "/contact",
  },
];

const addOns: IncludedItem[] = [
  {
    no: "01",
    title: "SMS campaigns",
    body: "Targeted text campaigns to your contact list — promotions, seasonal offers, win-back flows. The platform is already wired up and the deliverability is real.",
  },
  {
    no: "02",
    title: "Email campaigns",
    body: "Newsletters, drip sequences, and one-off sends run from the same CRM. No separate email tool, no duplicated contact list, no extra invoice.",
  },
  {
    no: "03",
    title: "Rewards & loyalty",
    body: "A points or referral program that runs automatically against your customer list — the kind that keeps repeat customers coming back without eating staff time.",
  },
  {
    no: "04",
    title: "Workflow automations",
    body: "Lead routing, appointment reminders, no-show recovery, post-job follow-ups, internal alerts. Anything repeatable can be automated.",
  },
  {
    no: "05",
    title: "Chatbots & voice agents",
    body: "A chatbot on your site or a voice agent on a dedicated line. Trained on your services, escalates real leads to your calendar, works at 11pm on a Tuesday.",
  },
  {
    no: "06",
    title: "Custom builds",
    body: "Have a process eating your time? We design and build a custom automation around it — quoted per scope, transparently, with no surprise platform fees.",
  },
];

const faq: FaqItem[] = [
  {
    question: "What platform is this running on, and why?",
    answer:
      "We run the reputation workflows on an enterprise marketing platform and provision a dedicated workspace for your business at no extra charge. It handles review requests, your unified inbox, your CRM, and the automations underneath everything. You get the benefit of the platform without the monthly software bill or the three-month learning curve to configure it yourself.",
  },
  {
    question: "Do my customers know the messages are automated?",
    answer:
      "They read like a normal text from your business, because they are. We write the templates in your voice rather than corporate-speak, and they go out under your business name and number. Most customers reply right back. The ones who do not open it were not going to leave a review anyway.",
  },
  {
    question: "What about negative reviews — can you bury them?",
    answer:
      "No, and we would not even if we could. What we do is route negative feedback before it becomes a public review: the workflow asks for a star rating first, and unhappy customers get a private feedback form instead of a review link. That gives you a chance to make it right. The math works in your favor — more happy reviews land publicly, fewer angry ones do.",
  },
  {
    question: "Can I see what's being sent on my behalf?",
    answer:
      "Yes. You get full login access — every message sent, every review request, every customer reply. We do not black-box this. You can edit templates, pause campaigns, or turn anything off whenever you want. Most clients log in once a week to scan the inbox and stay out of the weeds.",
  },
  {
    question: "Why are campaigns and loyalty only available after I onboard?",
    answer:
      "Because they all run on the same workspace. Once you are set up with Reputation Management, the scaffolding for SMS campaigns, email sends, loyalty programs, and custom automations is already in place — which makes each one faster and cheaper to add than starting from scratch. We do not sell platform access without the managed service, because the platform without the work is not the product.",
  },
];

const pairs: PairsWithItem[] = [
  {
    label: "SEO",
    copy: "Reviews and local search compound. Reviews lift rankings, rankings bring more reviews.",
    href: "/services/seo",
  },
  {
    label: "Websites",
    copy: "A fast, modern site is where every five-star review sends the customer next.",
    href: "/services/websites",
  },
  {
    label: "Compare systems",
    copy: "Reputation Management is included on every system. See what else each one adds.",
    href: "/pricing",
  },
];

export default function ReputationPage() {
  return (
    <main className="overflow-hidden bg-sand-50 text-sand-950">
      <ServiceHero
        eyebrow="Included on every system"
        badge="Flagship"
        title={
          <>
            Your reviews, your inbox, your follow-ups.{" "}
            <span className="text-lime-600">Handled.</span>
          </>
        }
        intro="We run the system that turns happy customers into five-star reviews — and pulls every text, email, and message from every channel into one inbox you actually check. Done for you, on a platform you never have to learn."
        glance={[
          ["Format", "Done-for-you · managed"],
          ["Included in", "Foundation · Growth · Expansion"],
          ["Standalone", "$195/mo flat"],
          ["Lock-in", "None · month-to-month"],
        ]}
      />

      <ServiceSection id="whats-included" surface="alt" grid>
        <SectionHead
          eyebrow="What's included"
          headingId="included-heading"
          heading={
            <>
              One platform. <span className="text-lime-600">One inbox.</span> One bill.
            </>
          }
          intro="Reputation Management is not just review requests. It is the operations layer underneath your customer relationships — set up, run, and monitored by us. Here is what is in the box."
        />
        <IncludedGrid items={includedItems} />
      </ServiceSection>

      <ServiceSection id="pricing">
        <SectionHead
          eyebrow="Pricing"
          headingId="pricing-heading"
          heading={
            <>
              One flat fee. <span className="text-lime-600">No setup cost.</span> No
              lock-in.
            </>
          }
          intro="Everything below for one monthly price. Cancel anytime — though most clients stay because the inbox alone is worth more than the fee."
        />
        <PricingPair cards={priceCards} />
        <PricingFootnote>
          Onboarding to Reputation Management unlocks the rest of the platform. Campaigns,
          loyalty, automations, chatbots, and custom workflows are available as add-ons
          quoted per scope.
        </PricingFootnote>
      </ServiceSection>

      <ServiceSection id="results" surface="alt">
        <SectionHead
          eyebrow="By the numbers"
          headingId="results-heading"
          align="right"
          heading={
            <>
              More reviews. Fewer{" "}
              <span className="text-lime-600">missed replies.</span>
            </>
          }
          intro="Local search ranking is half-decided by your review presence and your responsiveness. We work both sides, quietly, every day — while you handle the customers walking through the door."
        />
        <StatGrid stats={stats} />
        <TestimonialCallout
          quote="We went from 12 Google reviews in three years to 38 in three months. The new ones are the ones people read. My Mondays look different now."
          attribution="Four Leaf Charters · Cape Coral"
        />
      </ServiceSection>

      <ServiceSection id="process" grid>
        <SectionHead
          eyebrow="The process"
          headingId="process-heading"
          align="right"
          heading={
            <>
              From onboarding to <span className="text-lime-600">autopilot.</span>
            </>
          }
        />
        <ProcessSteps steps={processSteps} />
      </ServiceSection>

      <ServiceSection id="add-ons" surface="alt" grid>
        <SectionHead
          eyebrow="Add-ons"
          headingId="add-ons-heading"
          heading={
            <>
              What unlocks once{" "}
              <span className="text-lime-600">you&apos;re on.</span>
            </>
          }
          intro="Every Reputation Management client is already on the platform, which makes everything below faster and cheaper to add than starting from scratch — quoted per scope, with no hidden platform fees."
        />
        <IncludedGrid items={addOns} />
        <p className="mt-10 max-w-[640px] text-[15px] leading-[1.7] text-sand-700">
          Add-ons are available to active clients only. We do not sell platform access on
          its own — the platform without the work is not the product.
        </p>
      </ServiceSection>

      <ServiceSection id="faq" grid rule={false}>
        <ServiceFaq
          eyebrow="Questions about reputation"
          heading={
            <>
              Honest answers about{" "}
              <span className="text-lime-600">your reviews.</span>
            </>
          }
          intro="The questions every owner asks before paying for a managed reputation service — answered the way we would answer them on a call."
          items={faq}
        />
      </ServiceSection>

      <ServiceCta
        heading={
          <>
            Stop watching reviews trickle in{" "}
            <span className="text-lime-600">from last year.</span>
          </>
        }
        blurb="Free 30-minute consult. We will look at your current review presence and your inbox setup, and tell you straight what a managed reputation system would do for your business — and what it would not."
        pairs={pairs}
      />
    </main>
  );
}
