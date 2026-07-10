import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog Post | Linax Digital",
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <main>
      {/* Breadcrumb */}
      <nav className="px-6 pt-6 max-w-7xl mx-auto text-sm text-[var(--color-sand-700)]">
        <Link href="/">Home</Link> &rsaquo;{" "}
        <Link href="/blog">Blog</Link> &rsaquo;{" "}
        <span className="capitalize">{slug.replace(/-/g, " ")}</span>
      </nav>

      {/* ── ARTICLE HEADER ───────────────────────────────────────────────── */}
      <section id="article-header" className="px-6 py-16 max-w-3xl mx-auto">
        <h1 className="text-5xl font-[var(--font-display)]">Article Header — Post title (Fraunces) · category badge · publish date · estimated read time</h1>
      </section>

      {/* ── ARTICLE CONTENT ──────────────────────────────────────────────── */}
      <section id="article-content" className="px-6 py-8 max-w-3xl mx-auto">
        <h1 className="text-4xl font-[var(--font-display)]">Article Content — Full post body · internal links to relevant service pages and /audit inline · hub-and-spoke structure (pillar posts link to /services/[relevant])</h1>
      </section>

      {/* ── INLINE CTA ───────────────────────────────────────────────────── */}
      <section id="inline-cta" className="bg-[var(--color-sand-100)] px-6 py-16 max-w-3xl mx-auto">
        <h1 className="text-3xl font-[var(--font-display)]">Inline CTA — "Get your free digital presence audit →" · link to /audit</h1>
      </section>

      {/* ── RELATED POSTS ────────────────────────────────────────────────── */}
      <section id="related-posts" className="px-6 py-16 max-w-7xl mx-auto">
        <h1 className="text-3xl font-[var(--font-display)]">Related Posts — 2–3 related articles · links to relevant service pages contextually</h1>
      </section>
    </main>
  );
}
