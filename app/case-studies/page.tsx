import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies — Client Results | Linax Digital",
  description:
    "Real results for real local service businesses in Southwest Florida. See how Linax Digital has helped clients grow.",
};

export default function CaseStudiesPage() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section id="hero" className="px-6 py-24 max-w-7xl mx-auto">
        <nav className="text-sm text-[var(--color-sand-700)] mb-6">
          <Link href="/">Home</Link> &rsaquo; Case Studies
        </nav>
        <h1 className="text-5xl font-[var(--font-display)]">Case Studies Hero — "Real results for real businesses" · subhead on the variety of SWFL verticals served</h1>
      </section>

      {/* ── CASE STUDY CARDS GRID ────────────────────────────────────────── */}
      <section id="case-study-grid" className="bg-[var(--color-sand-100)] px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-[var(--font-display)]">Case Study Grid — Cards for: Four Leaf Charters · Verona Cabinets · Mycelia Foundation · Mega Kovas · ord-x · Virtue Sod · placeholder state while results mature</h1>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section id="cta" className="bg-[var(--color-brown-900)] text-white px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-[var(--font-display)]">CTA — Ready to be the next case study? Book a free consult (Calendly)</h1>
        </div>
      </section>
    </main>
  );
}
