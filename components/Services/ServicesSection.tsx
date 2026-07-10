import { SectionLabel } from "../shared/SectionLabel";
import { IconPlus } from "../shared/icons";
import "./ServicesSection.css";

/*
 * Services section — replicates the Webflow homepage services structure:
 * split header (eyebrow + heading left, browse button right) over an
 * asymmetric 2-column grid of five link cards — a tall featured card and
 * Speed-To-Lead on the left; Local SEO and a compact 2-up (Paid
 * Advertising / Reputation Management) on the right. Local Coastal Clay
 * styling throughout; body copy is real (the Webflow build is lorem).
 */

interface ServiceCardData {
  title: string;
  body: string;
  href: string;
  icon: string;
}

const websiteCard: ServiceCardData = {
  title: "Website Design & Development",
  body: "Built from scratch — fast-loading, mobile friendly, and designed to turn visitors into calls and form fills.",
  href: "/services/websites",
  icon: "/websiteIcon.png",
};

const speedToLeadCard: ServiceCardData = {
  title: "Speed-To-Lead",
  body: "Missed-call text-back, online booking, chatbots, and after-hours voice agents. Your phone gets answered — one way or another.",
  href: "/services",
  icon: "/chatbotIcon.png",
};

const seoCard: ServiceCardData = {
  title: "Local SEO",
  body: "Get found by the customers already searching your service area.",
  href: "/services/seo",
  icon: "/seoIcon.png",
};

const adsCard: ServiceCardData = {
  title: "Paid Advertising",
  body: "Google and Meta campaigns run on cost-per-lead — not vanity metrics.",
  href: "/services/ads",
  icon: "/adsIcon.png",
};

const reputationCard: ServiceCardData = {
  title: "Reputation Management",
  body: "Review automation that makes your Google listing look like the quality of your work.",
  href: "/services/reputation",
  icon: "/reputationIcon.png",
};

function PlusCircle({ light }: { light?: boolean }) {
  return (
    <span
      aria-hidden
      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-150 ${
        light
          ? "border-sand-50/40 text-sand-50 group-hover:border-clay-500 group-hover:text-clay-500"
          : "border-sand-950 text-sand-950 group-hover:border-clay-500 group-hover:text-clay-500"
      }`}
    >
      <IconPlus />
    </span>
  );
}

function ServiceCard({
  card,
  featured = false,
  className = "",
}: {
  card: ServiceCardData;
  featured?: boolean;
  className?: string;
}) {
  return (
    <a
      href={card.href}
      className={`group flex flex-col gap-8 border-4 p-8 no-underline transition-colors duration-150 ${
        featured
          ? "border-sand-900 bg-sand-900"
          : "border-sand-950 bg-sand-50 hover:bg-sand-100"
      } ${className}`}
    >
      <div className="flex items-start justify-between gap-4">
        <h3
          className={`m-0 max-w-[240px] font-brand text-[20px] font-black uppercase tracking-[-0.03em] leading-[1.15] ${
            featured ? "text-sand-50" : "text-sand-950"
          }`}
        >
          {card.title}
        </h3>
        <PlusCircle light={featured} />
      </div>

      <div className={featured ? "lg:mt-auto" : ""}>
        <img
          src={card.icon}
          alt=""
          aria-hidden="true"
          className="mb-6 h-16 w-16 object-contain"
        />
        <p
          className={`m-0 max-w-[340px] font-brand text-[14px] leading-[1.65] ${
            featured ? "text-sand-50/75" : "text-sand-600"
          }`}
        >
          {card.body}
        </p>
      </div>
    </a>
  );
}

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="services-section relative z-10 border-y-4 border-sand-950 bg-sand-50 bg-grid-pattern py-28"
    >
      <div className="mx-auto w-full max-w-[1200px] px-6">
        {/* Split header — eyebrow + heading left, browse button right */}
        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[732px]">
            <SectionLabel text="Our Services" />
            <h2
              id="services-heading"
              className="services-headline font-brand font-black uppercase text-sand-950"
            >
              Twelve Individual Solutions to
              <br />
              <span className="text-clay-500">Customize Your System With.</span>
            </h2>
          </div>
          <a
            href="/services"
            className="inline-flex min-h-[52px] items-center gap-2 self-start border-2 border-sand-950 bg-transparent px-8 py-4 font-brand text-[13px] font-bold uppercase tracking-[0.08em] text-sand-950 no-underline transition-colors duration-150 hover:bg-sand-100 lg:self-end"
          >
            Browse All Solutions
          </a>
        </div>

        {/* Asymmetric card grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <ServiceCard card={websiteCard} featured className="flex-1" />
            <ServiceCard card={speedToLeadCard} />
          </div>
          <div className="flex flex-col gap-8">
            <ServiceCard card={seoCard} />
            <div className="grid flex-1 grid-cols-1 gap-8 sm:grid-cols-2">
              <ServiceCard card={adsCard} />
              <ServiceCard card={reputationCard} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
