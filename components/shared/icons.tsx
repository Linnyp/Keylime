import type { ServiceIconKey } from "../../types";

export function IconArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14M12 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconPlus() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 5v14M5 12h14"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const SERVICE_ICON_SRC: Record<ServiceIconKey, { src: string; alt: string }> = {
  globe: { src: "/websiteIcon.png", alt: "Websites" },
  map: { src: "/seoIcon.png", alt: "Local SEO" },
  chart: { src: "/adsIcon.png", alt: "Google & Meta Ads" },
  bolt: { src: "/reputationIcon.png", alt: "Reputation Management" },
  message: { src: "/chatbotIcon.png", alt: "Chatbots & Voice Agents" },
  settings: { src: "/automationIcon.png", alt: "Automations" },
};

export function ServiceIcon({ icon }: { icon: ServiceIconKey }) {
  const { src, alt } = SERVICE_ICON_SRC[icon];
  return (
    <img
      src={src}
      alt={alt}
      width={44}
      height={44}
      className="object-contain"
    />
  );
}
