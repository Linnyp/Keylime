import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Services — Websites, SEO, Ads & Reputation",
  description:
    "Overview of Linax Digital's four core services for local service businesses in Southwest Florida.",
};

export default function ServicesHubPage() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section id="hero" className="px-6 py-24 max-w-7xl mx-auto">
        <h1 className="text-5xl font-[var(--font-display)]">Services Hero — "Four ways we grow local service businesses in Southwest Florida" + overview subhead</h1>
      </section>

      {/* ── SERVICE CARDS ────────────────────────────────────────────────── */}
      <section id="service-cards" className="bg-[var(--color-sand-100)] px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-[var(--font-display)]">4 Service Cards — Websites · Local SEO · Google & Meta Ads · Reputation Management (with pricing teaser and link to sub-page)</h1>
        </div>
      </section>

      {/* ── RESULTS TEASER ───────────────────────────────────────────────── */}
      <section id="results-teaser" className="px-6 py-24 max-w-7xl mx-auto">
        <h1 className="text-4xl font-[var(--font-display)]">Results Teaser — 2–3 stats or a case study callout to build credibility before the CTA</h1>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section id="cta" className="bg-[var(--color-brown-900)] text-white px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-[var(--font-display)]">CTA — Book a free consult (Calendly) · Free Audit secondary CTA</h1>
        </div>
      </section>
    </main>
  );
}
