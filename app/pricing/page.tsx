import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — Digital Marketing Services, Cape Coral FL",
  description:
    "Transparent pricing for websites, local SEO, Google & Meta Ads, and reputation management. No runaround — our prices are on the website.",
};

export default function PricingPage() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section id="hero" className="px-6 py-24 max-w-7xl mx-auto">
        <h1 className="text-5xl font-[var(--font-display)]">Pricing Hero — "Our prices are on the website. No runaround." · subhead on transparent pricing as a differentiator</h1>
      </section>

      {/* ── PRICING TABLE ────────────────────────────────────────────────── */}
      <section id="pricing-table" className="bg-[var(--color-sand-100)] px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-[var(--font-display)]">Pricing Table — Full breakdown: Websites (lump-sum $3k / subscription $180/mo) · SEO Foundation $600 / ongoing $300/mo · Ads $300/mo or 10% · Reputation $195/mo · add-ons</h1>
        </div>
      </section>

      {/* ── BILLING TERMS ────────────────────────────────────────────────── */}
      <section id="billing-terms" className="px-6 py-24 max-w-7xl mx-auto">
        <h1 className="text-4xl font-[var(--font-display)]">Billing Terms — Milestone billing for projects · monthly for subscriptions · 12-month website contract explained · month-to-month for SEO, Ads, Reputation</h1>
      </section>

      {/* ── ROAS GUARANTEE ───────────────────────────────────────────────── */}
      <section id="roas-guarantee" className="bg-[var(--color-sand-100)] px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-[var(--font-display)]">ROAS Guarantee Callout — No management fees if ROAS falls below 2:1 on Ads engagements</h1>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section id="faq" className="px-6 py-24 max-w-7xl mx-auto">
        <h1 className="text-4xl font-[var(--font-display)]">FAQ — Pricing-specific: what's included, contract terms, cancellation policy, what happens after 12-month website contract</h1>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section id="cta" className="bg-[var(--color-brown-900)] text-white px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-[var(--font-display)]">CTA — Book a free consult to discuss which services fit your budget (Calendly)</h1>
        </div>
      </section>
    </main>
  );
}
