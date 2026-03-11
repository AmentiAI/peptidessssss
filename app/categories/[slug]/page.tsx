import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, ChevronRight } from "lucide-react"
import { PageLayout } from "@/components/peptide-hub/page-layout"
import { ProductCard } from "@/components/peptide-hub/product-card"
import { CategoryFeatures } from "@/components/peptide-hub/category-features"
import {
  getCategoryBySlug,
  getAllCategorySlugs,
  getProductsByCategory,
} from "@/lib/peptide-data"

const AFFILIATE_URL =
  process.env.NEXT_PUBLIC_AFFILIATE_URL || "https://pantheonpeptides.com/partner/AmentiAI/"

export async function generateStaticParams() {
  const slugs = await getAllCategorySlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const cat = await getCategoryBySlug(slug)
  if (!cat) return {}
  return {
    title: `Best ${cat.name} Peptides — Benefits, Dosing & Where to Buy`,
    description: cat.seoDescription ?? `Browse ${cat.name} peptides from Pantheon Peptides. Mechanisms, protocols, and complete product catalog.`,
    alternates: { canonical: `https://www.peptidesmaxxing.com/categories/${slug}` },
    openGraph: {
      title: `Best ${cat.name} Peptides — Benefits, Dosing & Where to Buy`,
      description: cat.seoDescription ?? `Browse ${cat.name} peptides from Pantheon Peptides.`,
      url: `https://www.peptidesmaxxing.com/categories/${slug}`,
      type: "website",
      images: [{ url: "https://www.peptidesmaxxing.com/opengraph-image", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `Best ${cat.name} Peptides — Benefits, Dosing & Where to Buy`,
      description: cat.seoDescription ?? `Browse ${cat.name} peptides from Pantheon Peptides.`,
    },
  }
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const cat = await getCategoryBySlug(slug)
  if (!cat) notFound()

  const catProducts = await getProductsByCategory(cat.name)

  // Parse FAQ
  const faqItems = Array.isArray(cat.faq)
    ? (cat.faq as { question: string; answer: string }[])
    : []

  function renderContent(content: string | null) {
    if (!content) return null
    return content.split("\n").map((line, i) => {
      if (line.startsWith("## "))
        return (
          <h2 key={i} className="text-2xl font-bold text-slate-900 mt-10 mb-4 pb-3 border-b border-slate-200">
            {line.slice(3)}
          </h2>
        )
      if (line.startsWith("### "))
        return (
          <h3 key={i} className="text-lg font-semibold text-slate-800 mt-6 mb-2">
            {line.slice(4)}
          </h3>
        )
      if (line.startsWith("- "))
        return (
          <li key={i} className="text-slate-600 leading-relaxed ml-4 list-disc">
            {line.slice(2)}
          </li>
        )
      if (line.trim() === "") return <div key={i} className="mb-2" />
      return (
        <p key={i} className="text-slate-600 leading-[1.85] mb-2">
          {line}
        </p>
      )
    })
  }

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden border-b border-slate-200">
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{ background: cat.color ?? "#2563eb" }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-slate-700 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/categories" className="hover:text-slate-700 transition-colors">
              Categories
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-700">{cat.name}</span>
          </nav>

          <p
            className="text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: cat.color ?? "#2563eb" }}
          >
            {cat.name}
          </p>
          <h1 className="text-5xl font-bold text-slate-900 mb-4 max-w-3xl">
            {cat.name} Research Peptides
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mb-8">
            {cat.heroDescription ?? cat.description}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-4">
            <div className="px-4 py-2 rounded-xl border border-slate-200 bg-slate-50">
              <span className="text-sm font-bold text-slate-900">{catProducts.length}</span>
              <span className="text-sm text-slate-500 ml-1">products</span>
            </div>
            <div className="px-4 py-2 rounded-xl border border-slate-200 bg-slate-50">
              <span className="text-sm font-bold text-slate-900">Pantheon Peptides</span>
              <span className="text-sm text-slate-500 ml-1">supplier</span>
            </div>
          </div>
        </div>
      </section>

      {/* Prose content */}
      {cat.content && (
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-4xl prose-peptide">
            {renderContent(cat.content)}
          </div>
        </section>
      )}

      {/* Unique category feature components */}
      <CategoryFeatures slug={slug} />

      {/* Mid-page CTA */}
      <section className="my-4 mx-4 sm:mx-6 py-10 rounded-2xl border border-slate-200 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">
            Shop {cat.name} Peptides
          </h2>
          <p className="text-slate-500 mb-6">
            Available on Pantheon Peptides — trusted supplier. For research use only.
          </p>
          <a
            href={AFFILIATE_URL}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-slate-900 text-white hover:bg-slate-700 transition-colors"
          >
            View on Pantheon Peptides <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">
          {cat.name} Peptides ({catProducts.length})
        </h2>
        {catProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {catProducts.map((product, i) => (
              <ProductCard key={product.slug} product={product} priority={i < 4} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 border border-slate-200 rounded-2xl">
            <p className="text-slate-500">No products found in this category yet.</p>
            <Link href="/products" className="inline-flex items-center gap-2 mt-4 text-blue-600 font-semibold hover:text-blue-800">
              Browse all products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </section>

      {/* Cross-link to stacks */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
        <div className="p-6 rounded-2xl border border-slate-200 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">Peptide Cycles</p>
            <h3 className="text-lg font-bold text-slate-900">
              Try a Pre-Built Research Cycle
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Synergistic combinations of {cat.name.toLowerCase()} peptides.
            </p>
          </div>
          <Link
            href="/stacks"
            className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold bg-slate-900 text-white hover:bg-slate-700 transition-colors flex-shrink-0"
          >
            View Cycles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      {faqItems.length > 0 && (
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqItems.map((item, i) => (
                <details
                  key={i}
                  className="group rounded-xl border border-slate-200 overflow-hidden bg-white"
                >
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-semibold text-slate-900 hover:text-blue-600 transition-colors">
                    {item.question}
                    <ChevronRight className="w-4 h-4 flex-shrink-0 transition-transform group-open:rotate-90" />
                  </summary>
                  <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-16 border-t border-slate-100 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Start Your {cat.name} Research
          </h2>
          <p className="text-slate-500 mb-8">
            {catProducts.length} research peptides available. Available at Pantheon Peptides.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={AFFILIATE_URL}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold bg-slate-900 text-white hover:bg-slate-700 transition-colors"
            >
              Shop {cat.name} Peptides <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/guides"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-slate-900 border-2 border-slate-900 hover:bg-slate-900 hover:text-white transition-all"
            >
              Research Guides
            </Link>
          </div>
          <p className="mt-6 text-xs text-slate-400">
            For research use only. Not for human consumption. Consult a physician.
          </p>
        </div>
      </section>
    </PageLayout>
  )
}
