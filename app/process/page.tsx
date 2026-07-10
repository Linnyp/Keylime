import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How We Work — Our 4-Step Process | Linax Digital",
  description:
    "Linax Digital's 4-step process: Free Call, Audit & Plan, Build & Launch, Grow & Optimize.",
};

export default function ProcessPage() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section id="hero" className="px-6 py-24 max-w-7xl mx-auto">
        <nav className="text-sm text-[var(--color-sand-700)] mb-6">
          <Link href="/">Home</Link> &rsaquo; How We Work
        </nav>
        <h1 className="text-5xl font-[var(--font-display)]">Process Hero — "Here's exactly how we work together" · sets expectation of transparency and simplicity</h1>
      </section>

      {/* ── STEP 1 ───────────────────────────────────────────────────────── */}
      <section id="step-1" className="bg-[var(--color-sand-100)] px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-[var(--font-display)]">Step 1 — Free Call: 30-min discovery, no pitch, just an honest conversation about where you are and where you want to go</h1>
        </div>
      </section>

      {/* ── STEP 2 ───────────────────────────────────────────────────────── */}
      <section id="step-2" className="px-6 py-20 max-w-7xl mx-auto">
        <h1 className="text-4xl font-[var(--font-display)]">Step 2 — Audit & Plan: we review your website, SEO, GBP, and reputation · build a plain-language action plan with clear priorities</h1>
      </section>

      {/* ── STEP 3 ───────────────────────────────────────────────────────── */}
      <section id="step-3" className="bg-[var(--color-sand-100)] px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-[var(--font-display)]">Step 3 — Build & Launch: execution on the agreed scope · you review, we revise, we ship · no surprise scope creep</h1>
        </div>
      </section>

      {/* ── STEP 4 ───────────────────────────────────────────────────────── */}
      <section id="step-4" className="px-6 py-20 max-w-7xl mx-auto">
        <h1 className="text-4xl font-[var(--font-display)]">Step 4 — Grow & Optimize: monthly reporting, ongoing improvements, proactive recommendations · you're not on your own after launch</h1>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section id="cta" className="bg-[var(--color-brown-900)] text-white px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-[var(--font-display)]">CTA — Start with the Free Call (Calendly) · links to /about and /services</h1>
        </div>
      </section>
    </main>
  );
}
