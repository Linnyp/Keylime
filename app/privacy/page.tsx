import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Linax Digital",
  description: "Privacy Policy for Linax Digital — linaxdigital.com",
};

export default function PrivacyPage() {
  return (
    <main>
      <section id="privacy-policy" className="px-6 py-24 max-w-3xl mx-auto">
        <nav className="text-sm text-[var(--color-sand-700)] mb-6">
          <Link href="/">Home</Link> &rsaquo; Privacy Policy
        </nav>
        <h1 className="text-5xl font-[var(--font-display)] mb-8">Privacy Policy</h1>
        <div className="space-y-6 text-[var(--color-sand-700)]">
          <p className="text-sm">Effective date: [DATE] · Last updated: [DATE]</p>
          <h1 className="text-2xl font-[var(--font-display)]">Information We Collect — Name, email, phone, business info submitted via forms; analytics data via GA4 & GTM; cookies</h1>
          <h1 className="text-2xl font-[var(--font-display)]">How We Use Your Information — To respond to inquiries, deliver services, send follow-up communications via Go High Level CRM, improve site performance</h1>
          <h1 className="text-2xl font-[var(--font-display)]">Cookies & Tracking — GA4, GTM, Calendly embed; cookie consent banner; how to opt out</h1>
          <h1 className="text-2xl font-[var(--font-display)]">Third-Party Services — Calendly, Go High Level, Google Analytics, Vercel hosting</h1>
          <h1 className="text-2xl font-[var(--font-display)]">Data Retention & Your Rights — How long data is kept; how to request deletion; contact info</h1>
          <h1 className="text-2xl font-[var(--font-display)]">Contact — Questions about privacy: hello@linaxdigital.com</h1>
        </div>
      </section>
    </main>
  );
}
