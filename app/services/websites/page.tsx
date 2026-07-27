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
  title: "Websites — Built To Turn Searches Into Calls",
  description:
    "Custom websites for local service businesses. Fast, mobile-first, wired into your CRM, booking, and inbox from day one. Flat fee or monthly plan.",
};

const includedItems: IncludedItem[] = [
  {
    no: "01",
    title: "Custom design",
    body: "Every page drawn around your business — your services, your customers, your market. No drag-and-drop template that looks like the four shops down the road.",
    icon: "/logos/webdesignlogo.png",
    bullets: ["Brand voice", "Local imagery", "Service pages"],
  },
  {
    no: "02",
    title: "Modern build",
    body: "Built on Next.js and React. Fast on a phone, fast on a slow connection, fast on a search engine's crawl. The same stack the big national sites run on.",
    icon: "/logos/webdevlogo.png",
    bullets: ["Next.js & React", "Mobile-first", "Sub-second loads"],
  },
  {
    no: "03",
    title: "Hosting & email",
    body: "Domain email, SSL, daily backups, and hosting that does not go down on a Saturday. Subscription clients get this baked in.",
    icon: "/logos/hostingemailLogo.png",
    bullets: ["Domain email", "SSL & backups", "Uptime monitoring"],
  },
  {
    no: "04",
    title: "Local search setup",
    body: "Schema markup, sitemaps, page speed, and on-page fundamentals done right at launch — so the site starts ranking without a rebuild six months in.",
    icon: "/logos/formsLogo.png",
    bullets: ["Schema markup", "Sitemaps", "Page speed"],
  },
  {
    no: "05",
    title: "Analytics that make sense",
    body: "Analytics and call tracking installed and configured. We tell you which pages actually book calls, in plain English, every month.",
    icon: "/logos/anayzeLogo.png",
    bullets: ["GA4 setup", "Call tracking", "Monthly reports"],
  },
  {
    no: "06",
    title: "Edits & support",
    body: "Need a new service page? A price update? A photo swapped? Text us. Subscription clients get unlimited edits, usually same day.",
    icon: "/logos/editsupportLogo.png",
    bullets: ["Same-day fixes", "Unlimited edits", "Direct text line"],
  },
];

const processSteps: ProcessStep[] = [
  {
    no: "01",
    title: "Discovery & audit",
    body: "A 30-minute call. We learn the business, the market, and the competition. Then we audit what you have today so the new site does not repeat old mistakes.",
  },
  {
    no: "02",
    title: "Design & approve",
    body: "We mock up the homepage and one service page first. You react in real time — no forty-page brand guide to wade through. Once it feels right, we build the rest.",
  },
  {
    no: "03",
    title: "Build & launch",
    body: "We build, you review, we ship. Domain, hosting, analytics, and search console all wired up at launch, not on a follow-up invoice three weeks later.",
  },
  {
    no: "04",
    title: "Edit & optimize",
    body: "The site keeps earning. We watch which pages convert and which are getting traffic. Edits go in. The site gets sharper every month.",
  },
];

const stats: Stat[] = [
  { value: "4 – 6", label: "Weeks until you are online", unit: "wks" },
  { value: "90%", label: "Page speed scores on a standard build", unit: "+" },
  { value: "5", label: "Pages in a standard build", unit: "pgs" },
  { value: "$0", label: "Upfront cost on the subscription plan" },
];

const priceCards: PriceCard[] = [
  {
    name: "Lump sum",
    meta: "One-time",
    priceLabel: "Project fee",
    price: "$3,000",
    priceSuffix: "+ $25/mo hosting",
    body: "You own the code, the design files, and the domain. Pay once and walk away with the asset. Best if you have the upfront budget and want full ownership on day one.",
    features: [
      "Five-page custom design and development",
      "Full ownership of code and files",
      "Hosting billed at $25/mo separately",
      "Content edits available at $25/mo",
      "Additional pages at $150 each",
      "Blog system and chatbot as add-ons",
    ],
    ctaLabel: "Start a lump-sum build",
    ctaHref: "/contact",
  },
  {
    name: "Subscription",
    meta: "12-month minimum",
    priceLabel: "Starting at",
    price: "$180",
    priceSuffix: "/mo",
    body: "No upfront build cost. Hosting, email, edits, and support roll into one flat monthly fee. Best if you want a modern site without writing a $3,000 check on day one.",
    features: [
      "Custom design and development",
      "Hosting, SSL, and domain email",
      "Unlimited content edits",
      "Analytics and call tracking setup",
      "Full ongoing support",
      "Zero upfront build cost",
    ],
    ctaLabel: "Start a subscription build",
    ctaHref: "/contact",
    badge: "Most common",
    featured: true,
  },
];

const addOns = [
  { label: "Blog system", price: "$250" },
  { label: "Chatbot subscription", price: "" },
  { label: "Additional pages", price: "$150 each" },
];

const faq: FaqItem[] = [
  {
    question: "What's the deal with the 12-month subscription term?",
    answer:
      "It exists so you do not have to write a $3,000 check on day one. The subscription bundles the build, hosting, edits, and support into a flat monthly fee — but a custom site costs real money to design and ship, so we ask for a twelve-month commitment to make the math work. After twelve months it is month-to-month. Cancel before then and you owe the difference between what you have paid and the $3,000 lump sum. No surprise fees.",
  },
  {
    question: "Can I edit the site myself once it's live?",
    answer:
      "Subscription clients get unlimited content edits — you send the change, we ship it, usually same day. Lump-sum clients can add a $25/mo edit plan. We do not hand off a dashboard with forty plugins, because the moment you start poking at the code the site starts breaking. Better to text us and have it done.",
  },
  {
    question: "Do you work in WordPress, Wix, or Squarespace?",
    answer:
      "No. We build on Next.js and React because the sites load faster, rank better, and do not break when a plugin auto-updates. If you already have a WordPress site you love, we will leave it alone. If you are tired of fighting it, we will build you something that works without the maintenance tax.",
  },
  {
    question: "How long does a build actually take?",
    answer:
      "Usually two to four weeks for a five-page site once we have your content and brand assets. Discovery and design take the first week. Build and review take the next two. Launch and analytics setup are the final week. The bottleneck is almost always copy and photos — the more ready you are on day one, the faster you launch.",
  },
  {
    question: "What happens to the site if I leave?",
    answer:
      "Lump-sum clients own everything: code, design files, domain, content. You can take it anywhere. Subscription clients who finish the twelve-month term keep their domain and all their content; the code and design files stay with us, since the monthly price subsidizes that build. Nothing is held hostage either way.",
  },
];

const pairs: PairsWithItem[] = [
  {
    label: "SEO",
    copy: "Pair a new site with local SEO so it ranks the moment it ships.",
    href: "/services/seo",
  },
  {
    label: "Reputation Management",
    copy: "Keep the leads coming. Reviews on autopilot, all in one inbox.",
    href: "/services/reputation",
  },
  {
    label: "Compare systems",
    copy: "Every system includes a site. Expansion includes a custom build and a blog.",
    href: "/pricing",
  },
];

export default function WebsitesPage() {
  return (
    <main className="overflow-hidden bg-sand-50 text-sand-950">
      <ServiceHero
        eyebrow="Specialized work"
        title={
          <>
            A site built to work hard. Not to{" "}
            <span className="text-lime-600">look pretty on a deck.</span>
          </>
        }
        intro="A custom site built from scratch on the same modern stack the big national sites run on. Fast on a phone. Easy to update. Designed around one job: turning a search into a booked call."
        glance={[
          ["Format", "Custom · 5-page build"],
          ["Stack", "Next.js · TypeScript · Tailwind"],
          ["Pricing", "$3,000 lump · or $180/mo"],
          ["Launch", "2–4 weeks"],
        ]}
      />

      <ServiceSection id="whats-included" surface="alt" grid>
        <SectionHead
          eyebrow="What's included"
          headingId="included-heading"
          heading={
            <>
              Sites that earn back the <span className="text-lime-600">build.</span>
            </>
          }
          intro="We do not ship slow sites and we do not ship sites that just sit there. Here is what a KeyLime build includes, and what to expect after launch."
        />
        <IncludedGrid items={includedItems} />
      </ServiceSection>

      <ServiceSection id="pricing">
        <SectionHead
          eyebrow="Pricing"
          headingId="pricing-heading"
          heading={
            <>
              Two ways to pay. <span className="text-lime-600">Same site</span> either
              way.
            </>
          }
          intro="Pay once and own the build, or spread it across a flat monthly fee that bundles hosting, edits, and support. Same custom site — two ways to fit the budget."
        />
        <PricingPair cards={priceCards} />

        <div className="mt-10 rounded-3xl border-2 border-sand-200 bg-sand-50 p-8">
          <p className="font-brand text-xs font-bold uppercase tracking-[0.18em] text-lime-600">
            Add-ons
          </p>
          <ul className="mt-5 flex list-none flex-wrap gap-x-8 gap-y-3">
            {addOns.map((addOn) => (
              <li key={addOn.label} className="flex items-center gap-2.5 text-[15px]">
                <span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 shrink-0 rounded-full bg-lime-500"
                />
                <span className="font-brand font-bold uppercase tracking-[-0.01em]">
                  {addOn.label}
                </span>
                {addOn.price ? (
                  <span className="text-sand-600">{addOn.price}</span>
                ) : null}
              </li>
            ))}
          </ul>
        </div>

        <PricingFootnote>
          Every add-on is quoted up front. No hidden fees, and nothing gets added to your
          monthly without you agreeing to it first.
        </PricingFootnote>
      </ServiceSection>

      <ServiceSection id="results" surface="alt">
        <SectionHead
          eyebrow="By the numbers"
          headingId="results-heading"
          align="right"
          heading={
            <>
              Sites that earn back the <span className="text-lime-600">build.</span>
            </>
          }
          intro="A site is not a brochure. It is the thing that has to turn a stranger's search into a phone call — so we measure it that way."
        />
        <StatGrid stats={stats} />
        <TestimonialCallout
          quote="The new site loads in under a second on my phone. I'm getting calls from people who said they found us on Google for the first time."
          attribution="Verona Cabinets · Cape Coral"
        />
      </ServiceSection>

      <ServiceSection id="process" grid>
        <SectionHead
          eyebrow="The process"
          headingId="process-heading"
          align="right"
          heading={
            <>
              From kickoff to launch in{" "}
              <span className="text-lime-600">2–4 weeks.</span>
            </>
          }
        />
        <ProcessSteps steps={processSteps} />
      </ServiceSection>

      <ServiceSection id="faq" surface="alt" grid rule={false}>
        <ServiceFaq
          eyebrow="Questions about websites"
          heading={
            <>
              Honest answers about <span className="text-lime-600">your site.</span>
            </>
          }
          intro="The questions every owner asks before signing — answered the way we would answer them on a call."
          items={faq}
        />
      </ServiceSection>

      <ServiceCta
        heading={
          <>
            Stop losing leads to a site that{" "}
            <span className="text-lime-600">loads like 2014.</span>
          </>
        }
        blurb="Free 30-minute consult. No pitch deck, no upsell. Just an honest read on whether a new site would actually move the needle for your business — and what it would cost."
        pairs={pairs}
      />
    </main>
  );
}
