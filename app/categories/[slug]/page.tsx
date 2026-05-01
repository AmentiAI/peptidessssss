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
  AFFILIATE_URL,
} from "@/lib/peptide-data"

export const dynamic = "force-static"
export const revalidate = 86400

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
  const desc = cat.seoDescription
    ? cat.seoDescription
    : `Buy ${cat.name} peptides online — mechanisms, dosing protocols, and the full product catalog. High purity, COA verified, fast shipping.`
  return {
    title: `Buy ${cat.name} Peptides Online — Benefits, Dosing & Price`,
    description: desc,
    keywords: [
      `buy ${cat.name.toLowerCase()} peptides`,
      `${cat.name.toLowerCase()} peptides for sale`,
      `${cat.name.toLowerCase()} peptide price`,
      `best ${cat.name.toLowerCase()} peptides`,
      "peptides for sale",
    ],
    alternates: { canonical: `https://www.peptidesmaxxing.com/categories/${slug}` },
    openGraph: {
      title: `Buy ${cat.name} Peptides Online — Benefits, Dosing & Price`,
      description: desc,
      url: `https://www.peptidesmaxxing.com/categories/${slug}`,
      type: "website",
      images: [{ url: "https://www.peptidesmaxxing.com/opengraph-image", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `Buy ${cat.name} Peptides Online — Benefits, Dosing & Price`,
      description: desc,
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

  // Category-specific related blog/guide links
  const categoryReadingLinks: Record<string, { label: string; href: string }[]> = {
    "muscle-growth": [
      { label: "Ipamorelin + CJC-1295 Stack Guide", href: "/blog/ipamorelin-cjc-1295-stack-guide" },
      { label: "GH Peptides for Body Recomposition", href: "/blog/gh-peptides-aesthetics-body-recomposition" },
      { label: "Complete Looksmaxxer Stack 2026", href: "/blog/looksmaxxing-peptide-stack-protocol-2026" },
      { label: "GH Peptide Stacking Guide", href: "/guides/gh-peptide-stacking-guide" },
    ],
    "recovery-repair": [
      { label: "BPC-157 Complete Guide", href: "/blog/bpc-157-complete-guide" },
      { label: "Best Recovery Peptides 2026", href: "/blog/best-recovery-peptides-2026" },
      { label: "Ipamorelin + CJC-1295 Stack Guide", href: "/blog/ipamorelin-cjc-1295-stack-guide" },
      { label: "Peptide Storage Guide", href: "/guides/peptide-storage-reconstitution-guide" },
    ],
    "anti-aging": [
      { label: "Epithalon Longevity Science", href: "/blog/epithalon-longevity-science" },
      { label: "GHK-Cu for Skin & Collagen", href: "/blog/ghk-cu-collagen-skin-looksmaxxing" },
      { label: "GHK-Cu Skin & Hair Research", href: "/blog/ghk-cu-skin-hair-research" },
      { label: "Longevity Peptide Protocols", href: "/guides/longevity-peptide-protocols" },
    ],
    "weight-loss": [
      { label: "GH Peptides for Body Recomposition", href: "/blog/gh-peptides-aesthetics-body-recomposition" },
      { label: "Best Peptides for Looksmaxxing", href: "/blog/looksmaxxing-peptides-complete-guide" },
      { label: "Complete Looksmaxxer Stack 2026", href: "/blog/looksmaxxing-peptide-stack-protocol-2026" },
      { label: "GH Peptide Stacking Guide", href: "/guides/gh-peptide-stacking-guide" },
    ],
    "brain-nerve": [
      { label: "Semax Nootropic Deep Dive", href: "/blog/semax-nootropic-deep-dive" },
      { label: "Epithalon Longevity Science", href: "/blog/epithalon-longevity-science" },
      { label: "Longevity Peptide Protocols", href: "/guides/longevity-peptide-protocols" },
    ],
    "immunity": [
      { label: "Best Recovery Peptides 2026", href: "/blog/best-recovery-peptides-2026" },
      { label: "Epithalon Longevity Science", href: "/blog/epithalon-longevity-science" },
      { label: "Longevity Peptide Protocols", href: "/guides/longevity-peptide-protocols" },
    ],
    "libido": [
      { label: "Melanotan II Looksmaxxing Guide", href: "/blog/melanotan-2-looksmaxxing-guide" },
      { label: "Best Peptides for Looksmaxxing", href: "/blog/looksmaxxing-peptides-complete-guide" },
      { label: "Complete Looksmaxxer Stack 2026", href: "/blog/looksmaxxing-peptide-stack-protocol-2026" },
    ],
    "skin-tissue-bone": [
      { label: "GHK-Cu for Skin & Collagen", href: "/blog/ghk-cu-collagen-skin-looksmaxxing" },
      { label: "GHK-Cu Skin & Hair Research", href: "/blog/ghk-cu-skin-hair-research" },
      { label: "Peptides for Hair Loss & Regrowth", href: "/blog/peptides-hair-loss-regrowth-looksmaxxing" },
      { label: "Longevity Peptide Protocols", href: "/guides/longevity-peptide-protocols" },
    ],
  }
  const relatedReading = categoryReadingLinks[slug] || []

  // Parse FAQ
  const faqItems = Array.isArray(cat.faq)
    ? (cat.faq as { question: string; answer: string }[])
    : []

  const categoryUrl = `https://www.peptidesmaxxing.com/categories/${slug}`

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.peptidesmaxxing.com" },
      { "@type": "ListItem", position: 2, name: "Categories", item: "https://www.peptidesmaxxing.com/categories" },
      { "@type": "ListItem", position: 3, name: cat.name, item: categoryUrl },
    ],
  }

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${cat.name} Peptides`,
    numberOfItems: catProducts.length,
    itemListElement: catProducts.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://www.peptidesmaxxing.com/products/${p.slug}`,
      name: p.name,
    })),
  }

  const collectionPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": categoryUrl,
    url: categoryUrl,
    name: `Buy ${cat.name} Peptides Online`,
    description: cat.seoDescription ?? cat.description ?? `${cat.name} peptides catalog.`,
    isPartOf: { "@type": "WebSite", url: "https://www.peptidesmaxxing.com", name: "PeptidesMaxxing" },
    breadcrumb: breadcrumbJsonLd,
    mainEntity: itemListJsonLd,
  }

  const faqJsonLd = faqItems.length === 0 ? null : {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  }

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}
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
            Buy {cat.name} Peptides Online
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
              <span className="text-sm font-bold text-slate-900">COA Verified</span>
              <span className="text-sm text-slate-500 ml-1">99%+ purity</span>
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
            High purity, COA verified, fast shipping from a trusted supplier.
          </p>
          <a
            href={AFFILIATE_URL}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-slate-900 text-white hover:bg-slate-700 transition-colors"
          >
            Shop {cat.name} Peptides <ArrowRight className="w-4 h-4" />
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
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">Peptide Stacks</p>
            <h3 className="text-lg font-bold text-slate-900">
              Buy a Pre-Built Peptide Stack
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Synergistic combinations of {cat.name.toLowerCase()} peptides.
            </p>
          </div>
          <Link
            href="/stacks"
            className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold bg-slate-900 text-white hover:bg-slate-700 transition-colors flex-shrink-0"
          >
            View Stacks <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Related Reading */}
      {relatedReading.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
          <div className="p-6 rounded-2xl border border-slate-200 bg-white">
            <p className="text-xs font-bold text-purple-600 uppercase tracking-widest mb-4">Related Reading</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {relatedReading.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 p-3 rounded-xl border border-slate-100 hover:border-purple-200 hover:bg-purple-50 transition-all group text-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                  <span className="text-slate-700 group-hover:text-purple-700 transition-colors font-medium leading-snug">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

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
            Buy {cat.name} Peptides Online
          </h2>
          <p className="text-slate-500 mb-8">
            {catProducts.length} peptides for sale — high purity, COA verified, fast shipping.
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
              Peptide Guides
            </Link>
          </div>
          <p className="mt-6 text-xs text-slate-400">
            Disclaimer: Sold for laboratory and educational use only. Not for human or veterinary use.
          </p>
        </div>
      </section>
    </PageLayout>
  )
}
