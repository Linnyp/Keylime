import type { Metadata } from "next";
import { HeroSection } from "@/components/Hero/HeroSection";
import { SocialProofBar } from "@/components/SocialProof/SocialProofBar";
import { ServicesSection } from "@/components/Services/ServicesSection";
import { ProblemSection } from "@/components/Problem/ProblemSection";
import { HowItWorksSection } from "@/components/HowItWorks/HowItWorksSection";
import { ResultsSection } from "@/components/Results/ResultsSection";
import { PricingSection } from "@/components/Pricing/PricingSection";
import { FaqSection } from "@/components/Faq/FaqSection";
import { FinalCtaSection } from "@/components/FinalCta/FinalCtaSection";

export const metadata: Metadata = {
  title: "Agency Flow Test",
  description:
    "Linax Digital sections arranged in an agency-style flow: hero, social proof, services, why us, process, case studies, pricing, FAQ, and final CTA.",
};

export default function AgencyFlowTestPage() {
  return (
    <main>
      <HeroSection />
      <SocialProofBar />
      <ServicesSection />
      <ProblemSection />
      <HowItWorksSection />
      <ResultsSection />
      <PricingSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  );
}
