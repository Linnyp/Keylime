"use client";

import CardNav from "@/components/CardNav";

const LOGO_SRC = "/keylimelogolite.webp";

const NAV_ITEMS = [
  {
    label: "Systems",
    bgColor: "var(--color-sand-900)",
    textColor: "#FFFFFF",
    links: [
      { label: "How It Works", ariaLabel: "How KeyLime works", href: "/how-it-works" },
      { label: "Foundation", ariaLabel: "Foundation system", href: "/systems/foundation" },
      { label: "Growth", ariaLabel: "Growth system", href: "/systems/growth" },
      { label: "Expansion", ariaLabel: "Expansion system", href: "/systems/expansion" },
      { label: "Compare & Pricing", ariaLabel: "Compare systems and pricing", href: "/pricing" },
    ],
  },
  {
    label: "Services",
    bgColor: "var(--color-sand-800)",
    textColor: "#FFFFFF",
    links: [
      { label: "All Services", ariaLabel: "All Services", href: "/services" },
      { label: "Websites", ariaLabel: "Website Design Services", href: "/services/websites" },
      { label: "Local SEO", ariaLabel: "Local SEO Services", href: "/services/seo" },
      { label: "Google & Meta Ads", ariaLabel: "Google and Meta Ads Services", href: "/services/ads" },
      { label: "Reputation Management", ariaLabel: "Reputation Management Services", href: "/services/reputation" },
    ],
  },
  {
    label: "Company",
    bgColor: "var(--color-lime-500)",
    textColor: "#1C1E1A",
    links: [
      { label: "About", ariaLabel: "About Linax Digital", href: "/about" },
      { label: "Revenue Calculator", ariaLabel: "Missed-call revenue calculator", href: "/calculators/missed-call-revenue" },
      { label: "FAQ", ariaLabel: "Frequently Asked Questions", href: "/faq" },
      { label: "Contact", ariaLabel: "Contact Linax Digital", href: "/contact" },
    ],
  },
];

export default function Navbar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 h-0">
      <div className="nav-silk-bg bg-sand-frost" />
      <div className="pointer-events-auto">
        <CardNav
          logo={LOGO_SRC}
          logoAlt="KeyLime"
          items={NAV_ITEMS}
          baseColor="transparent"
          menuColor="#1C1E1A"
          buttonBgColor="#A4D639"
          buttonTextColor="#1C1E1A"
        />
      </div>
    </div>
  );
}
