import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog Category | Linax Digital",
};

export default async function BlogCategoryPage({
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

      {/* ── CATEGORY HEADER ──────────────────────────────────────────────── */}
      <section id="category-header" className="px-6 py-24 max-w-7xl mx-auto">
        <h1 className="text-5xl font-[var(--font-display)] capitalize">
          Category: {slug.replace(/-/g, " ")} — All posts in this topic cluster
        </h1>
      </section>

      {/* ── POSTS GRID ───────────────────────────────────────────────────── */}
      <section id="posts-grid" className="bg-[var(--color-sand-100)] px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-[var(--font-display)]">Category Posts Grid — Filtered article cards for this topic · links back to /blog hub</h1>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section id="cta" className="bg-[var(--color-brown-900)] text-white px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-[var(--font-display)]">CTA — Free digital presence audit · link to /audit</h1>
        </div>
      </section>
    </main>
  );
}
