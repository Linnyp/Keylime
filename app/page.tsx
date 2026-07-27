import type { Metadata } from "next";
import { HeroSection } from "@/components/Hero/HeroSection";
import { ProblemSection } from "@/components/Problem/ProblemSection";
import { ThreeStepsSection } from "@/components/ThreeSteps/ThreeStepsSection";
import { ServicesSection } from "@/components/Services/ServicesSection";
import { ResultsSection } from "@/components/Results/ResultsSection";
import { MarketingSystemsSection } from "@/components/MarketingSystems/MarketingSystemsSection";
import { HowItWorksSection } from "@/components/HowItWorks/HowItWorksSection";
import { FaqSection } from "@/components/Faq/FaqSection";
import { FinalCtaSection } from "@/components/FinalCta/FinalCtaSection";

export const metadata: Metadata = {
  title: "Digital Marketing Agency Cape Coral FL",
  description:
    "Linax Digital — websites, local SEO, paid ads, and reputation management for local service businesses in Southwest Florida.",
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <ThreeStepsSection />
      <ResultsSection />
      <MarketingSystemsSection />
      <ServicesSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  );
}
