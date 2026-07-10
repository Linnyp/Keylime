import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Linax Digital — Founder-Led Agency, Cape Coral FL",
  description:
    "Meet the founder of Linax Digital. Technical expertise, Southwest Florida roots, and the person who actually does the work.",
};

export default function AboutPage() {
  return (
    <main>
      {/* ── FOUNDER HERO ─────────────────────────────────────────────────── */}
      <section id="founder-hero" className="px-6 py-24 max-w-7xl mx-auto">
        <h1 className="text-5xl font-[var(--font-display)]">Founder Hero — Founder photo + headline: "I build the sites, I run the campaigns, I answer the phone" · warm, direct Fraunces tone</h1>
      </section>

      {/* ── FOUNDER STORY ────────────────────────────────────────────────── */}
      <section id="founder-story" className="bg-[var(--color-sand-100)] px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-[var(--font-display)]">Founder Story — Plain-language background: operating since 2022 · SWFL rooted · technical without being technical · why Linax Digital was formalized in 2026</h1>
        </div>
      </section>

      {/* ── WHY LINAX DIGITAL ────────────────────────────────────────────── */}
      <section id="why-linax" className="px-6 py-24 max-w-7xl mx-auto">
        <h1 className="text-4xl font-[var(--font-display)]">Why Linax Digital — 5 differentiators in Everyman language: modern tech · founder-led quality · AI-augmented delivery · platform-powered services · SWFL local expertise</h1>
      </section>

      {/* ── CLIENT LOGOS / VERTICALS ─────────────────────────────────────── */}
      <section id="clients" className="bg-[var(--color-sand-100)] px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-[var(--font-display)]">Clients & Verticals — Four Leaf Charters · Verona Cabinets · Mycelia Foundation · Mega Kovas · ord-x · Virtue Sod · verticals: home services, marine, specialty contractors</h1>
        </div>
      </section>

      {/* ── FOUNDER CONTACT ──────────────────────────────────────────────── */}
      <section id="founder-contact" className="px-6 py-24 max-w-7xl mx-auto">
        <h1 className="text-4xl font-[var(--font-display)]">Founder Contact — Direct email or phone as a signal of accountability: "You can reach me directly"</h1>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section id="cta" className="bg-[var(--color-brown-900)] text-white px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-[var(--font-display)]">CTA — "Book a direct call with me" (Calendly) · links to /services and /pricing mentioned in founder story</h1>
        </div>
      </section>
    </main>
  );
}
