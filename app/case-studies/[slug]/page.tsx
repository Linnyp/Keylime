import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Study | Linax Digital",
};

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <main>
      {/* ── CLIENT CONTEXT ───────────────────────────────────────────────── */}
      <section id="client-context" className="px-6 py-24 max-w-7xl mx-auto">
        <h1 className="text-5xl font-[var(--font-display)]">Client Context — Industry, business size, challenge they faced before working with Linax Digital</h1>
      </section>

      {/* ── APPROACH ─────────────────────────────────────────────────────── */}
      <section id="approach" className="bg-[var(--color-sand-100)] px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-[var(--font-display)]">Approach — Which Linax Digital services were used · what was done and why · how the work was structured</h1>
        </div>
      </section>

      {/* ── RESULTS ──────────────────────────────────────────────────────── */}
      <section id="results" className="px-6 py-24 max-w-7xl mx-auto">
        <h1 className="text-4xl font-[var(--font-display)]">Results — Before/after metrics: traffic, rankings, review count, lead volume, revenue impact</h1>
      </section>

      {/* ── CLIENT QUOTE ─────────────────────────────────────────────────── */}
      <section id="client-quote" className="bg-[var(--color-sand-100)] px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-[var(--font-display)]">Client Quote — Testimonial from the client with name, title, and business name</h1>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section id="cta" className="bg-[var(--color-brown-900)] text-white px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-[var(--font-display)]">CTA — Get similar results for your business (Calendly) · link to relevant service page</h1>
        </div>
      </section>
    </main>
  );
}
