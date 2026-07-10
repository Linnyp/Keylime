import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ — Digital Marketing Questions Answered | Linax Digital",
  description:
    "Answers to common questions about pricing, contracts, services, timelines, and working with Linax Digital.",
};

export default function FaqPage() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section id="hero" className="px-6 py-24 max-w-7xl mx-auto">
        <nav className="text-sm text-[var(--color-sand-700)] mb-6">
          <Link href="/">Home</Link> &rsaquo; FAQ
        </nav>
        <h1 className="text-5xl font-[var(--font-display)]">FAQ Hero — "Straight answers to the questions we hear most" · organized into sections for easy scanning</h1>
      </section>

      {/* ── PRICING & CONTRACTS ──────────────────────────────────────────── */}
      <section id="pricing-contracts" className="bg-[var(--color-sand-100)] px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-[var(--font-display)]">Pricing & Contracts — How much does it cost? · What's the 12-month website contract? · Can I cancel? · Is pricing negotiable?</h1>
        </div>
      </section>

      {/* ── SERVICES & SCOPE ─────────────────────────────────────────────── */}
      <section id="services-scope" className="px-6 py-20 max-w-7xl mx-auto">
        <h1 className="text-4xl font-[var(--font-display)]">Services & Scope — What's included in reputation management? · Do you do social media? · What platforms do you build on? · Can I get just one service?</h1>
      </section>

      {/* ── RESULTS & TIMELINES ──────────────────────────────────────────── */}
      <section id="results-timelines" className="bg-[var(--color-sand-100)] px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-[var(--font-display)]">Results & Timelines — How long until I see SEO results? · How fast can a website be built? · What kind of ROI can I expect from ads?</h1>
        </div>
      </section>

      {/* ── WORKING TOGETHER ─────────────────────────────────────────────── */}
      <section id="working-together" className="px-6 py-20 max-w-7xl mx-auto">
        <h1 className="text-4xl font-[var(--font-display)]">Working Together — Do I work with you directly? · What does onboarding look like? · How do I get started? → link to /audit</h1>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section id="cta" className="bg-[var(--color-brown-900)] text-white px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-[var(--font-display)]">CTA — Still have questions? Book a free 30-min call (Calendly)</h1>
        </div>
      </section>
    </main>
  );
}
