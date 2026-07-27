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
  title: "SEO — Show Up When Your Customers Search",
  description:
    "Local SEO for home services and beauty businesses. Keyword mapping, citations, Google Business Profile, content, and backlinks — foundation build plus ongoing work.",
};

const includedItems: IncludedItem[] = [
  {
    no: "01",
    title: "Keyword research & mapping",
    body: "We pull the terms your customers actually search in your market — not a generic template list. Each keyword gets mapped to the page on your site that should rank for it.",
    icon: "/icons/keywordseoLogo.png",
  },
  {
    no: "02",
    title: "Local citations & NAP",
    body: "Your name, address, and phone number cleaned up and unified across every directory that matters. Inconsistent listings are one of the most common reasons a local business does not rank.",
    icon: "/icons/citationseoLogo.png",
  },
  {
    no: "03",
    title: "Google Business Profile",
    body: "Full setup and optimization — categories, services, photos, posts, Q&A. The map pack drives more local calls than the blue links do most weeks.",
    icon: "/icons/gmbseo.png",
  },
  {
    no: "04",
    title: "Foundation backlinks",
    body: "One to two high-authority backlinks at setup, then strategic monthly link building from real local and industry sources. No link farms, no penalty risk.",
    icon: "/icons/backlinklogo.png",
  },
  {
    no: "05",
    title: "Content that ranks",
    body: "Four articles a month written around keywords your customers search, structured to turn a reader into a phone call rather than just a pageview.",
    icon: "/icons/seocontentlogo.png",
  },
  {
    no: "06",
    title: "Plain-English reporting",
    body: "A monthly report a human can read. Rankings, traffic, and what we shipped — no jargon dump, no vanity metrics, no forty-tab spreadsheet.",
    icon: "/icons/analyzeseoIcon.png",
  },
];

const processSteps: ProcessStep[] = [
  {
    no: "01",
    title: "Audit & keyword map",
    body: "We start with your current rankings, your competitors, your technical health, and your Google Business Profile. Then we map the keywords worth ranking for, ordered by what would actually drive booked calls.",
  },
  {
    no: "02",
    title: "Foundation setup",
    body: "Citations cleaned, profile optimized, on-page fixes shipped, foundation backlinks placed. This is the floor every local business needs before ongoing work pays off.",
  },
  {
    no: "03",
    title: "Content & backlinks",
    body: "Every month: four articles, profile posts, strategic backlinks, and ongoing on-page tuning. The compounding work that moves rankings slowly, then all at once.",
  },
  {
    no: "04",
    title: "Track & refine",
    body: "We watch what is ranking, what is converting, and what is stuck. We double down on the keywords gaining traction and quietly drop the ones that will not move.",
  },
];

const stats: Stat[] = [
  { value: "3 – 6", label: "Months to meaningful ranking gains", unit: "mo" },
  { value: "4", label: "Articles shipped per month", unit: "/mo" },
  { value: "1 – 2", label: "High-authority backlinks at foundation" },
  { value: "$0", label: "Long-term lock-in. Month-to-month." },
];

const priceCards: PriceCard[] = [
  {
    name: "SEO Foundation",
    meta: "One-time",
    priceLabel: "Setup fee",
    price: "$600",
    priceSuffix: "flat",
    body: "The floor every local business needs. Works as a one-shot setup if you are not ready for monthly content yet, or as the kickoff for ongoing work.",
    features: [
      "Keyword research and mapping",
      "Local citation building with unified listings",
      "1–2 high-authority foundation backlinks",
      "Press release where applicable",
      "Google Business Profile setup and optimization",
      "Handoff documentation",
    ],
    ctaLabel: "Start with Foundation",
    ctaHref: "/contact",
  },
  {
    name: "Ongoing SEO",
    meta: "Month-to-month",
    priceLabel: "Starting at",
    price: "$300",
    priceSuffix: "/mo",
    body: "The compounding work that moves rankings. Content, backlinks, profile activity, and on-page tuning every month, with no long-term contract.",
    features: [
      "Content strategy",
      "Four articles per month",
      "Profile posts and ongoing optimization",
      "Strategic backlink building",
      "Press releases where applicable",
      "No long-term lock-in",
    ],
    ctaLabel: "Start ongoing SEO",
    ctaHref: "/contact",
    badge: "Most common",
    featured: true,
  },
];

const faq: FaqItem[] = [
  {
    question: "How long until I actually see results?",
    answer:
      "Foundation work — citations, profile optimization, on-page fixes — usually shows up in the local map pack within four to eight weeks. Real organic gains on competitive keywords take three to six months. Anyone promising page one in thirty days is either guessing or about to get your site penalized. SEO compounds: the work you pay for in month one is still paying in month twelve.",
  },
  {
    question: "What is the difference between SEO Foundation and ongoing SEO?",
    answer:
      "Foundation is the one-time $600 setup: keyword research, citations with unified listings, one to two high-authority backlinks, Google Business Profile setup, and a press release where applicable. It is the floor. Ongoing at $300/mo is what builds rankings on top of that floor — four articles a month, profile posts, strategic backlinks, and continuous optimization. Foundation is one-and-done. Ongoing is how you actually win.",
  },
  {
    question: "Do you guarantee rankings?",
    answer:
      "No, and you should walk away from anyone who does. Google owns the algorithm and changes it constantly. What we guarantee is the work: keyword research that targets terms your customers search, technical fixes that remove crawl barriers, and content that earns links. The rankings are the output of the work, not a promise.",
  },
  {
    question: "I already have someone doing SEO — should I switch?",
    answer:
      "Depends. If you get a monthly report you understand and your rankings are climbing for terms that matter, stay. If you are getting jargon-heavy reports, no clarity on what shipped, or rankings for words nobody would ever pay you for, that is a problem. Send us your last report and we will tell you straight whether it is worth keeping.",
  },
  {
    question: "Why does my Google Business Profile keep losing visibility?",
    answer:
      "Three usual suspects: inconsistent listings across the web (your address differs by one character between directories), no recent posts or photos (Google reads dormancy as decline), or competitors actively building reviews while yours sit still. Foundation fixes the first two. Ongoing fixes the third, and Reputation Management hardens the review side.",
  },
];

const pairs: PairsWithItem[] = [
  {
    label: "Google & Meta Ads",
    copy: "Accelerate with paid traffic while SEO compounds in the background.",
    href: "/services/ads",
  },
  {
    label: "Websites",
    copy: "A fast, well-structured site is the thing SEO ranks. Pair the two.",
    href: "/services/websites",
  },
  {
    label: "Compare systems",
    copy: "SEO Foundation is included on Growth and Expansion. See what else is.",
    href: "/pricing",
  },
];

export default function SeoPage() {
  return (
    <main className="overflow-hidden bg-sand-50 text-sand-950">
      <ServiceHero
        eyebrow="Specialized work"
        title={
          <>
            Show up when your customers{" "}
            <span className="text-lime-600">already search.</span>
          </>
        }
        intro="Most local searches end with a call to one of the top three results. We do the work that gets you there — keyword research, citations, Google Business Profile, content, and backlinks — month over month, until you are the obvious pick."
        glance={[
          ["Format", "Foundation + ongoing"],
          ["Included in", "Growth · Expansion"],
          ["Pricing", "$600 setup · or $300/mo"],
          ["Lock-in", "None · month-to-month"],
        ]}
      />

      <ServiceSection id="whats-included" surface="alt" grid>
        <SectionHead
          eyebrow="What's included"
          headingId="included-heading"
          heading={
            <>
              The whole stack. Not just tags and{" "}
              <span className="text-lime-600">backlinks.</span>
            </>
          }
          intro="Local SEO is a stack — keyword research, on-page, citations, profile, backlinks, content. Pull one piece out and the whole thing underperforms. Foundation builds the floor. Ongoing keeps it compounding."
        />
        <IncludedGrid items={includedItems} />
      </ServiceSection>

      <ServiceSection id="pricing">
        <SectionHead
          eyebrow="Pricing"
          headingId="pricing-heading"
          heading={
            <>
              Foundation, then <span className="text-lime-600">compounding</span>{" "}
              work.
            </>
          }
          intro="Pay once for the floor, then a flat monthly for the work that builds rankings on top of it. No long-term contract on the ongoing side."
        />
        <PricingPair cards={priceCards} />
        <PricingFootnote>
          Most clients start with Foundation, then roll into ongoing once the floor is
          set. Research is bundled into the monthly fee — there is no separate audit
          invoice.
        </PricingFootnote>
      </ServiceSection>

      <ServiceSection id="results" surface="alt">
        <SectionHead
          eyebrow="By the numbers"
          headingId="results-heading"
          align="right"
          heading={
            <>
              Slow at first. Then <span className="text-lime-600">all at once.</span>
            </>
          }
          intro="SEO does not spike, it compounds. The work you pay for in month one keeps paying in month twelve — and the rankings get harder for competitors to take back the longer you stay consistent."
        />
        <StatGrid stats={stats} />
        <TestimonialCallout
          quote="Six months in, we're ranking in the map pack for three of our top services. The phone rings on Mondays now — that didn't happen before."
          attribution="Virtue Sod · Lee County"
        />
      </ServiceSection>

      <ServiceSection id="process" grid>
        <SectionHead
          eyebrow="The process"
          headingId="process-heading"
          align="right"
          heading={
            <>
              From audit to compounding{" "}
              <span className="text-lime-600">rankings.</span>
            </>
          }
        />
        <ProcessSteps steps={processSteps} />
      </ServiceSection>

      <ServiceSection id="faq" surface="alt" grid rule={false}>
        <ServiceFaq
          eyebrow="Questions about SEO"
          heading={
            <>
              Honest answers about <span className="text-lime-600">ranking.</span>
            </>
          }
          intro="The questions every owner asks before paying for SEO — answered the way we would answer them on a call."
          items={faq}
        />
      </ServiceSection>

      <ServiceCta
        heading={
          <>
            Be the top result when your town{" "}
            <span className="text-lime-600">searches you.</span>
          </>
        }
        blurb="Free 30-minute consult. We will pull your current rankings, look at your Google Business Profile, and tell you straight whether SEO would move the needle — or whether ads would get there faster."
        pairs={pairs}
      />
    </main>
  );
}
