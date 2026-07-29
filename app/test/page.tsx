import type { Metadata } from "next";
import { HeroSection } from "@/components/Hero/HeroSection";
import { ProblemSection } from "@/components/Problem/ProblemSection";
import { ServicesSection } from "@/components/Services/ServicesSection";
import { ResultsSection } from "@/components/Results/ResultsSection";
import { HowItWorksSection } from "@/components/HowItWorks/HowItWorksSection";
import { PricingSection } from "@/components/Pricing/PricingSection";
import { FaqSection } from "@/components/Faq/FaqSection";
import { FinalCtaSection } from "@/components/FinalCta/FinalCtaSection";
import "./test-palette.css";

export const metadata: Metadata = {
  title: "Key Lime Palette Test",
  description:
    "Linax Digital homepage retinted with the Key Lime palette: pale cream surface, deep forest text, vivid lime accent, sunshine yellow on hover.",
};

export default function TestPalettePage() {
  return (
    <main className="pt-8 key-lime-theme">
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <ResultsSection />
      <HowItWorksSection />
      <PricingSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  );
}
