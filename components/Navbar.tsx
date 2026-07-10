"use client";

import CardNav from "@/components/CardNav";

const LOGO_SRC = "/linax-digital-logo.png";

const NAV_ITEMS = [
  {
    label: "Services",
    bgColor: "var(--color-sand-900)",
    textColor: "#FFFFFF",
    links: [
      { label: "Websites", ariaLabel: "Website Design Services", href: "/services/websites" },
      { label: "Local SEO", ariaLabel: "Local SEO Services", href: "/services/seo" },
      { label: "Google & Meta Ads", ariaLabel: "Google and Meta Ads Services", href: "/services/ads" },
      { label: "Reputation Management", ariaLabel: "Reputation Management Services", href: "/services/reputation" },
      { label: "Chat & Voice Agent", ariaLabel: "AI Chat and Voice Agent Services", href: "/services/chat-voice-agent" },
      { label: "Automations", ariaLabel: "Marketing and Workflow Automations", href: "/services/automations" },
    ],
  },
  {
    label: "Company",
    bgColor: "var(--color-sand-800)",
    textColor: "#FFFFFF",
    links: [
      { label: "About", ariaLabel: "About Linax Digital", href: "/about" },
      { label: "How We Work", ariaLabel: "Our Process", href: "/process" },
      { label: "Case Studies", ariaLabel: "Client Case Studies", href: "/case-studies" },
      { label: "Contact", ariaLabel: "Contact Linax Digital", href: "/contact" },
    ],
  },
  {
    label: "Resources",
    bgColor: "var(--color-clay-500)",
    textColor: "#FFFFFF",
    links: [
      { label: "Pricing", ariaLabel: "Pricing Plans", href: "/pricing" },
      { label: "Free Audit", ariaLabel: "Free Digital Presence Audit", href: "/audit" },
      { label: "FAQ", ariaLabel: "Frequently Asked Questions", href: "/faq" },
      { label: "Blog", ariaLabel: "Linax Digital Blog", href: "/blog" },
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
          logoAlt="Linax Digital"
          items={NAV_ITEMS}
          baseColor="transparent"
          menuColor="#1F1B16"
          buttonBgColor="#C2552D"
          buttonTextColor="#FBF8F3"
        />
      </div>
    </div>
  );
}
