import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Local Marketing Tips for SWFL Businesses | Linax Digital",
  description:
    "Practical local SEO, Google Business Profile, and digital marketing tips for service businesses in Southwest Florida.",
};

export default function BlogPage() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section id="hero" className="px-6 py-24 max-w-7xl mx-auto">
        <nav className="text-sm text-[var(--color-sand-700)] mb-6">
          <Link href="/">Home</Link> &rsaquo; Blog
        </nav>
        <h1 className="text-5xl font-[var(--font-display)]">Blog Hero — "Practical marketing advice for Southwest Florida service businesses" · stub state until first posts published</h1>
      </section>

      {/* ── POSTS GRID ───────────────────────────────────────────────────── */}
      <section id="posts-grid" className="bg-[var(--color-sand-100)] px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-[var(--font-display)]">Posts Grid — Article cards: title, category, excerpt, date · topics: local SEO, GBP tips, review management, website conversion for SMBs · empty state until launch</h1>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section id="cta" className="bg-[var(--color-brown-900)] text-white px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-[var(--font-display)]">CTA — Get your free digital presence audit while you're here (link to /audit)</h1>
        </div>
      </section>
    </main>
  );
}
