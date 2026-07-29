import { SectionLabel } from "../shared/SectionLabel";
import { PrimaryButton } from "../shared/PrimaryButton";
import { IconArrowRight } from "../shared/icons";
import "./ServicesSection.css";

/*
 * Services section — split header (eyebrow + heading left, browse button
 * right) over an asymmetric 2-column grid of five link cards. Editorial
 * Citrus & Charcoal treatment: soft rounded cards, a charcoal featured card,
 * lime accents on hover. Body copy is real.
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
  icon: "/webdev-icon.png",
};

const speedToLeadCard: ServiceCardData = {
  title: "Speed-To-Lead",
  body: "Missed-call text-back, online booking, chatbots, and after-hours voice agents. Your phone gets answered — one way or another.",
  href: "/services",
  icon: "/chatbotIcon.webp",
};

const seoCard: ServiceCardData = {
  title: "Local SEO",
  body: "Get found by the customers already searching your service area.",
  href: "/services/seo",
  icon: "/seo-icon.png",
};

const adsCard: ServiceCardData = {
  title: "Paid Advertising",
  body: "Google and Meta campaigns run on cost-per-lead — not vanity metrics.",
  href: "/services/ads",
  icon: "/ad-icon.png",
};

const reputationCard: ServiceCardData = {
  title: "Reputation Management",
  body: "Review automation that makes your Google listing look like the quality of your work.",
  href: "/services/reputation",
  icon: "/googlereviewhand.png",
};

function ArrowCircle({ light }: { light?: boolean }) {
  return (
    <span
      aria-hidden
      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors duration-200 ${
        light
          ? "bg-white/10 text-white group-hover:bg-lime-500 group-hover:text-sand-950"
          : "bg-sand-100 text-sand-950 group-hover:bg-lime-500 group-hover:text-sand-950"
      }`}
    >
      <IconArrowRight />
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
      className={`group flex flex-col gap-2 rounded-3xl border p-8 no-underline transition-all duration-200 hover:-translate-y-1 ${
        featured
          ? "border-sand-900 bg-sand-900 shadow-[0_12px_26px_0_rgba(28,30,26,0.14)]"
          : "border-sand-200 bg-white shadow-[0_2px_6px_0_rgba(28,30,26,0.06)] hover:border-lime-300 hover:shadow-[0_12px_26px_0_rgba(28,30,26,0.12)]"
      } ${className}`}
    >
      <div className="flex items-start justify-between gap-4">
        <h3
          className={`m-0 max-w-[240px] font-brand text-[21px] font-bold tracking-[-0.03em] leading-[1.2] ${
            featured ? "text-white" : "text-sand-950"
          }`}
        >
          {card.title}
        </h3>
        <ArrowCircle light={featured} />
      </div>

      <div className={featured ? "lg:mt-auto" : ""}>
        <img
          src={card.icon}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="mb-3 h-36 w-36 object-contain"
        />
        <p
          className={`m-0 max-w-[340px] text-[15px] leading-[1.65] ${
            featured ? "text-white/75" : "text-sand-600"
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
      className="services-section relative z-10 bg-sand-50 py-24 md:py-28"
    >
      <div className="mx-auto w-full max-w-[1200px] px-6">
        {/* Split header — eyebrow + heading left, browse button right */}
        <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[732px]">
            <SectionLabel text="Our Services" />
            <h2
              id="services-heading"
              className="services-headline font-brand font-extrabold text-sand-950"
            >
              Twelve individual solutions to
              <br />
              <span className="text-lime-600">customize your system with.</span>
            </h2>
          </div>
          <PrimaryButton
            href="/services"
            className="self-start lg:self-end"
          >
            Browse All Solutions
          </PrimaryButton>
        </div>

        {/* Asymmetric card grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <ServiceCard card={websiteCard} featured className="flex-1" />
            <ServiceCard card={speedToLeadCard} />
          </div>
          <div className="flex flex-col gap-6">
            <ServiceCard card={seoCard} />
            <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2">
              <ServiceCard card={adsCard} />
              <ServiceCard card={reputationCard} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
