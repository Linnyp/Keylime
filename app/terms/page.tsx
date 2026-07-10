import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Linax Digital",
  description: "Terms of Service for Linax Digital — linaxdigital.com",
};

export default function TermsPage() {
  return (
    <main>
      <section id="terms-of-service" className="px-6 py-24 max-w-3xl mx-auto">
        <nav className="text-sm text-[var(--color-sand-700)] mb-6">
          <Link href="/">Home</Link> &rsaquo; Terms of Service
        </nav>
        <h1 className="text-5xl font-[var(--font-display)] mb-8">Terms of Service</h1>
        <div className="space-y-6 text-[var(--color-sand-700)]">
          <p className="text-sm">Effective date: [DATE] · Last updated: [DATE]</p>
          <h1 className="text-2xl font-[var(--font-display)]">Acceptance of Terms — By using this website or engaging Linax Digital services, you agree to these terms</h1>
          <h1 className="text-2xl font-[var(--font-display)]">Services — Description of the services Linax Digital provides; engagement begins upon signed proposal or payment</h1>
          <h1 className="text-2xl font-[var(--font-display)]">Payment & Billing — Milestone billing for projects; monthly subscription terms; 12-month website contract terms; late payment policy</h1>
          <h1 className="text-2xl font-[var(--font-display)]">Cancellation & Refunds — Month-to-month cancellation terms for SEO, Ads, Reputation; website subscription early termination clause ($3,000 lump sum owed)</h1>
          <h1 className="text-2xl font-[var(--font-display)]">Intellectual Property — Client owns their content; Linax Digital retains design files unless otherwise agreed; website code on subscription model</h1>
          <h1 className="text-2xl font-[var(--font-display)]">Limitation of Liability — Ad performance guarantee scope; no guarantee of specific ranking or revenue outcomes</h1>
          <h1 className="text-2xl font-[var(--font-display)]">Governing Law — Florida law; Cape Coral, FL jurisdiction</h1>
          <h1 className="text-2xl font-[var(--font-display)]">Contact — Legal notices: hello@linaxdigital.com</h1>
        </div>
      </section>
    </main>
  );
}
