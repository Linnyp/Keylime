export type ServiceIconKey =
  | "map"
  | "bolt"
  | "globe"
  | "chart"
  | "message"
  | "settings";

export interface ServiceItem {
  icon: ServiceIconKey;
  title: string;
  hook: string;
  description: string;
}

export interface ProcessStepItem {
  number: string;
  title: string;
  body: string;
  illustration: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  titleAndCompany: string;
  avatarSrc: string;
  avatarAlt: string;
  avatarWidthPx?: number;
  ownerPhotoSrc: string;
  ownerPhotoAlt: string;
}

export interface PricingPlanTier {
  price: string;
  priceUnit: string;
  cadence: string;
  features: string[];
}

export interface PricingPlanItem {
  name: string;
  description: string;
  cta: string;
  featured: boolean;
  breakdownHref: string;
  monthly: PricingPlanTier;
  lumpSum: PricingPlanTier | null;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProblemItem {
  name: string;
  body: string;
  solution: string;
}

export interface ClientLogoItem {
  src: string;
  alt: string;
  title: string;
  /** Rendered size, so the loop reserves space before the image loads. */
  width?: number;
  height?: number;
}

export interface StatItem {
  value: string;
  label: string;
}

export type BillingMode = "monthly" | "lumpSum";
