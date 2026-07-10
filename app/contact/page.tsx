import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — Book a Free Consult | Linax Digital",
  description:
    "Book a free consultation or send a message. Cape Coral, FL — serving Southwest Florida.",
};

export default function ContactPage() {
  return (
    <main>
      {/* ── HEADLINE ─────────────────────────────────────────────────────── */}
      <section id="headline" className="px-6 py-24 max-w-7xl mx-auto">
        <nav className="text-sm text-[var(--color-sand-700)] mb-6">
          <Link href="/">Home</Link> &rsaquo; Contact
        </nav>
        <h1 className="text-5xl font-[var(--font-display)]">Contact Headline — "Let's talk" · brief subhead: two ways to reach us, pick what works best for you</h1>
      </section>

      {/* ── CALENDLY EMBED ───────────────────────────────────────────────── */}
      <section id="calendly" className="bg-[var(--color-sand-100)] px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-[var(--font-display)]">Calendly Embed — Inline calendar for booking a free 30-min consult (primary conversion path)</h1>
        </div>
      </section>

      {/* ── CONTACT FORM ─────────────────────────────────────────────────── */}
      <section id="contact-form" className="px-6 py-24 max-w-7xl mx-auto">
        <h1 className="text-4xl font-[var(--font-display)]">Contact Form — Name · Business · Phone · Email · Brief description of what you need · feeds Go High Level CRM (secondary path)</h1>
      </section>

      {/* ── DIRECT CONTACT ───────────────────────────────────────────────── */}
      <section id="direct-contact" className="bg-[var(--color-sand-100)] px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-[var(--font-display)]">Direct Contact — Phone number (tel: link) · Email address (mailto: link) · "You're reaching the founder directly"</h1>
        </div>
      </section>

      {/* ── LOCATION ─────────────────────────────────────────────────────── */}
      <section id="location" className="px-6 py-16 max-w-7xl mx-auto">
        <h1 className="text-3xl font-[var(--font-display)]">Location — Cape Coral, FL · Serving Lee, Collier, and Charlotte counties · Remote-capable for digital services</h1>
      </section>
    </main>
  );
}
