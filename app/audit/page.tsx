import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Digital Presence Audit — Cape Coral FL | Linax Digital",
  description:
    "See exactly where your digital presence stands. Free structured review of your website, SEO, Google Business Profile, and online reputation.",
};

export default function AuditPage() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section id="hero" className="px-6 py-24 max-w-7xl mx-auto">
        <h1 className="text-5xl font-[var(--font-display)]">Audit Hero — "See exactly where your digital presence stands. Free." · subhead on what the audit covers and who it's for</h1>
      </section>

      {/* ── WHAT'S INCLUDED ──────────────────────────────────────────────── */}
      <section id="whats-included" className="bg-[var(--color-sand-100)] px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-[var(--font-display)]">What's Included — 4 areas reviewed: Website (speed, mobile, conversion) · SEO (rankings, citations) · Google Business Profile (completeness, reviews) · Online Reputation (review count, sentiment)</h1>
        </div>
      </section>

      {/* ── LEAD CAPTURE FORM ────────────────────────────────────────────── */}
      <section id="lead-form" className="px-6 py-24 max-w-7xl mx-auto">
        <h1 className="text-4xl font-[var(--font-display)]">Lead Capture Form — Name · Business Name · Phone or Email · Website URL · max 5 fields · feeds Go High Level CRM</h1>
      </section>

      {/* ── WHAT HAPPENS NEXT ────────────────────────────────────────────── */}
      <section id="what-happens-next" className="bg-[var(--color-sand-100)] px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-[var(--font-display)]">What Happens Next — Plain-language follow-up: you submit → we review within X days → you receive a personalized audit → we hop on a call to walk through it together</h1>
        </div>
      </section>
    </main>
  );
}
