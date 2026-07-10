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
  title: "Warm Lime Palette Test",
  description:
    "Linax Digital homepage retinted with the Warm Lime palette: warm near-white surface, charcoal text, saturated lime accent, warm gray muted text.",
};

export default function TestPalettePage() {
  return (
    <main className="warm-lime-theme">
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
