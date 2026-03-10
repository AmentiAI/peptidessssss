import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, ChevronRight } from "lucide-react"
import { PageLayout } from "@/components/peptide-hub/page-layout"
import { ProductCard } from "@/components/peptide-hub/product-card"
import {
  getCategoryBySlug,
  getAllCategorySlugs,
  getProductsByCategory,
} from "@/lib/peptide-data"

export function generateStaticParams() {
  return getAllCategorySlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const cat = getCategoryBySlug(slug)
  if (!cat) return {}
  return {
    title: `${cat.name} Peptides — Research Guide | PeptideLab`,
    description: cat.seo_description,
    alternates: { canonical: `https://peptidelab.com/categories/${slug}` },
    openGraph: {
      title: `${cat.name} Research Peptides | PeptideLab`,
      description: cat.seo_description,
      url: `https://peptidelab.com/categories/${slug}`,
    },
  }
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const cat = getCategoryBySlug(slug)
  if (!cat) notFound()

  const catProducts = getProductsByCategory(cat.name)

  // Render simple markdown-ish content
  function renderContent(content: string) {
    return content.split("\n").map((line, i) => {
      if (line.startsWith("## ")) return <h2 key={i} className="text-2xl font-bold text-white mt-10 mb-4 pb-3 border-b border-[rgba(0,212,255,0.12)]">{line.slice(3)}</h2>
      if (line.startsWith("### ")) return <h3 key={i} className="text-lg font-semibold text-[rgba(255,255,255,0.9)] mt-6 mb-2">{line.slice(4)}</h3>
      if (line.startsWith("- ")) return <li key={i} className="text-[rgba(255,255,255,0.7)] leading-relaxed ml-4 list-disc">{line.slice(2)}</li>
      if (line.trim() === "") return <div key={i} className="mb-2" />
      return <p key={i} className="text-[rgba(255,255,255,0.65)] leading-[1.85] mb-2">{line}</p>
    })
  }

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden border-b border-[rgba(0,212,255,0.08)]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-20"
            style={{ background: `radial-gradient(circle, ${cat.color}20 0%, transparent 70%)` }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-[rgba(255,255,255,0.4)] mb-6">
            <Link href="/" className="hover:text-[#00d4ff] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/categories" className="hover:text-[#00d4ff] transition-colors">Categories</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[rgba(255,255,255,0.7)]">{cat.name}</span>
          </nav>

          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: cat.color }}>{cat.name}</p>
          <h1 className="text-5xl font-bold text-white mb-4 max-w-3xl">{cat.name} Research Peptides</h1>
          <p className="text-lg text-[rgba(255,255,255,0.6)] max-w-2xl mb-8">{cat.hero_description}</p>

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
            {cat.stats.map((stat) => (
              <div key={stat.label} className="p-4 rounded-xl border border-[rgba(255,255,255,0.07)]" style={{ background: "rgba(12,12,32,0.7)" }}>
                <p className="text-xl font-bold mb-0.5" style={{ color: cat.color }}>{stat.value}</p>
                <p className="text-xs text-[rgba(255,255,255,0.45)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prose content */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-4xl">
          {renderContent(cat.content)}
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="my-4 mx-4 sm:mx-6 py-10 rounded-2xl border border-[rgba(0,212,255,0.15)]"
        style={{ background: `linear-gradient(135deg, ${cat.color}08 0%, rgba(124,58,237,0.06) 100%)` }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Shop {cat.name} Peptides</h2>
          <p className="text-[rgba(255,255,255,0.6)] mb-6">≥99% purity, HPLC verified, COA provided. For research use only.</p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-black transition-all hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)", boxShadow: "0 0 20px rgba(0,212,255,0.2)" }}
          >
            View All Products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-white mb-8">{cat.name} Peptides ({catProducts.length})</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {catProducts.map((product, i) => (
            <ProductCard key={product.slug} product={product} priority={i < 4} />
          ))}
        </div>
      </section>

      {/* Cross-link to stacks */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
        <div className="p-6 rounded-2xl border border-[rgba(255,255,255,0.07)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{ background: "rgba(12,12,32,0.7)" }}>
          <div>
            <p className="text-xs font-bold text-[#00d4ff] uppercase tracking-widest mb-1">Synergy Stacks</p>
            <h3 className="text-lg font-bold text-white">Combine with a Research Stack</h3>
            <p className="text-sm text-[rgba(255,255,255,0.5)] mt-1">Pre-built synergistic protocols combining multiple {cat.name.toLowerCase()} peptides.</p>
          </div>
          <Link href="/stacks" className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-black flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)" }}>
            View Stacks <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {cat.faq.map((item, i) => (
              <details
                key={i}
                className="group rounded-xl border border-[rgba(255,255,255,0.07)] overflow-hidden"
                style={{ background: "rgba(12,12,32,0.7)" }}
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-semibold text-white hover:text-[#00d4ff] transition-colors">
                  {item.question}
                  <ChevronRight className="w-4 h-4 flex-shrink-0 transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-5 pb-5 text-sm text-[rgba(255,255,255,0.65)] leading-relaxed border-t border-[rgba(255,255,255,0.05)] pt-4">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 border-t border-[rgba(0,212,255,0.08)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your {cat.name} Research</h2>
          <p className="text-[rgba(255,255,255,0.55)] mb-8">
            {catProducts.length} research peptides available. ≥99% purity, HPLC verified, COA provided.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-black transition-all hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)", boxShadow: "0 0 20px rgba(0,212,255,0.2)" }}
            >
              Shop {cat.name} Peptides <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/guides" className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white border border-[rgba(255,255,255,0.15)] hover:border-[rgba(0,212,255,0.4)] transition-all">
              Research Guides
            </Link>
          </div>
          <p className="mt-6 text-xs text-[rgba(255,255,255,0.3)]">
            For research use only. Not for human consumption. Consult a physician.
          </p>
        </div>
      </section>
    </PageLayout>
  )
}
