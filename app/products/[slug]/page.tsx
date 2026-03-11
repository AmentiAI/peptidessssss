import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ShoppingCart, ArrowRight, CheckCircle, Shield, ChevronRight, FlaskConical } from "lucide-react"
import { PageLayout } from "@/components/peptide-hub/page-layout"
import { ProductCard } from "@/components/peptide-hub/product-card"
import {
  getProductBySlug,
  getAllProductSlugs,
  getRelatedProducts,
} from "@/lib/peptide-data"
import { productResearch } from "@/lib/product-research"

const AFFILIATE_URL =
  process.env.NEXT_PUBLIC_AFFILIATE_URL || "https://pantheonpeptides.com/partner/AmentiAI/"

export async function generateStaticParams() {
  const slugs = await getAllProductSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = await getProductBySlug(slug)
  if (!product) return {}
  const desc = (product.shortDescription ?? product.description?.slice(0, 140) ?? "") + " Research use only. From Pantheon Peptides."
  return {
    title: `${product.name} — Research Peptide Guide, Mechanisms & Benefits`,
    description: desc,
    keywords: [product.name, ...product.categories, "research peptide", "Pantheon Peptides", "buy " + product.name, product.name + " benefits"],
    alternates: { canonical: `https://peptidesmaxxing.com/products/${slug}` },
    openGraph: {
      title: `${product.name} — Research Peptide | PeptidesMaxxing`,
      description: product.shortDescription ?? product.description?.slice(0, 155) ?? "",
      url: `https://peptidesmaxxing.com/products/${slug}`,
      type: "article",
      images: product.imageUrl ? [{ url: product.imageUrl, width: 800, height: 800, alt: product.name }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} — Research Peptide | PeptidesMaxxing`,
      description: product.shortDescription ?? product.description?.slice(0, 155) ?? "",
    },
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = await getProductBySlug(slug)
  if (!product) notFound()

  const related = await getRelatedProducts(slug)
  const researchContent = productResearch[slug] ?? null

  // Parse description into benefits list
  const benefits = product.description
    .split(/[.,]/)
    .map((s) => s.trim())
    .filter((s) => s.length > 10)
    .slice(0, 6)

  function renderResearch(content: string) {
    return content.split("\n").map((line, i) => {
      if (line.startsWith("## "))
        return (
          <h2 key={i} className="text-2xl font-bold text-slate-900 mt-10 mb-4 pb-3 border-b border-slate-200">
            {line.slice(3)}
          </h2>
        )
      if (line.startsWith("### "))
        return (
          <h3 key={i} className="text-lg font-semibold text-slate-800 mt-6 mb-3">
            {line.slice(4)}
          </h3>
        )
      if (line.startsWith("- "))
        return (
          <li key={i} className="text-slate-600 leading-relaxed ml-4 mb-1 list-disc">
            {line.slice(2)}
          </li>
        )
      if (line.startsWith("**") && line.endsWith("**"))
        return (
          <p key={i} className="font-semibold text-slate-900 leading-relaxed mb-2">
            {line.slice(2, -2)}
          </p>
        )
      if (line.trim() === "") return <div key={i} className="mb-3" />
      return (
        <p key={i} className="text-slate-600 leading-[1.85] mb-3">
          {line}
        </p>
      )
    })
  }

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `https://peptidesmaxxing.com/products/${slug}`,
    name: product.name,
    description: product.description,
    image: product.imageUrl,
    url: `https://peptidesmaxxing.com/products/${slug}`,
    brand: { "@type": "Brand", name: "Pantheon Peptides" },
    category: product.categories[0],
    offers: {
      "@type": "Offer",
      availability: product.isInStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      url: AFFILIATE_URL,
      priceCurrency: "USD",
      seller: { "@type": "Organization", name: "Pantheon Peptides", url: "https://pantheonpeptides.com" },
    },
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://peptidesmaxxing.com" },
      { "@type": "ListItem", position: 2, name: "Products", item: "https://peptidesmaxxing.com/products" },
      { "@type": "ListItem", position: 3, name: product.name, item: `https://peptidesmaxxing.com/products/${slug}` },
    ],
  }

  return (
    <PageLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8">
        <nav className="flex items-center gap-2 text-xs text-slate-400" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-slate-700 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/products" className="hover:text-slate-700 transition-colors">
            Products
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-700">{product.name}</span>
        </nav>
      </div>

      {/* Product Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-slate-200 bg-slate-50">
              {product.imageUrl ? (
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-8xl">
                  🧪
                </div>
              )}
              {product.badge && (
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-sm font-bold bg-slate-900 text-white">
                  {product.badge}
                </div>
              )}
            </div>
            {/* In stock badge */}
            <div className="absolute -bottom-4 right-6 px-4 py-2 rounded-xl border border-green-200 bg-green-50 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-sm font-bold text-green-700">
                {product.isInStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>
          </div>

          {/* Details */}
          <div className="pt-4">
            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-4">
              {product.categories.map((cat) => (
                <Link
                  key={cat}
                  href={`/categories/${cat.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}`}
                  className="px-3 py-1 rounded-full text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200 hover:bg-blue-100 transition-colors"
                >
                  {cat}
                </Link>
              ))}
            </div>

            <h1 className="text-4xl font-bold text-slate-900 mb-3">{product.name}</h1>
            {product.shortDescription && (
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                {product.shortDescription}
              </p>
            )}

            {/* Benefits */}
            {benefits.length > 0 && (
              <div className="mb-8">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                  Research Benefits
                </p>
                <div className="grid grid-cols-1 gap-2">
                  {benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Buy CTA Box */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs text-slate-500 mb-1">Available at</p>
                  <p className="text-xl font-bold text-slate-900">Pantheon Peptides</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-semibold text-green-700">Trusted Supplier</span>
                </div>
              </div>
              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 rounded-xl text-base font-bold bg-slate-900 text-white hover:bg-slate-700 transition-colors mb-3"
              >
                <ShoppingCart className="w-5 h-5" />
                Buy {product.name} on Pantheon Peptides
              </a>
              <p className="text-xs text-center text-slate-400">
                Affiliate disclosure: PeptidesMaxxing earns a commission at no cost to you.
              </p>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap gap-4 mt-4">
              {[
                { icon: Shield, label: "Pantheon Peptides" },
                { icon: CheckCircle, label: "Trusted Supplier" },
                { icon: ArrowRight, label: "Research Grade" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 text-xs text-slate-500">
                  <Icon className="w-3.5 h-3.5 text-slate-400" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <div className="max-w-4xl">
          {researchContent ? (
            <>
              {/* Research label */}
              <div className="flex items-center gap-2 mb-6">
                <FlaskConical className="w-5 h-5 text-blue-600" />
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                  Research Overview
                </span>
              </div>
              {/* Rich research content */}
              <div className="prose-peptide">
                {renderResearch(researchContent)}
              </div>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">About {product.name}</h2>
              <p className="text-slate-600 leading-relaxed">{product.description}</p>
            </>
          )}

          {/* Research disclaimer */}
          <div className="mt-8 p-4 rounded-xl border border-amber-200 bg-amber-50">
            <p className="text-xs text-amber-800 leading-relaxed">
              <strong className="text-amber-900">Research Use Only:</strong> This product is for laboratory
              research purposes only. Not intended for human consumption. Not approved by the FDA for any
              therapeutic use. Consult a qualified physician before any use.
            </p>
          </div>

          {/* Second CTA */}
          <div className="mt-8 p-6 rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-50 to-blue-50">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-bold text-slate-900 text-lg">Ready to order {product.name}?</p>
                <p className="text-sm text-slate-500">Research-grade purity from Pantheon Peptides.</p>
              </div>
              <a
                href={product.productUrl}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold bg-slate-900 text-white hover:bg-slate-700 transition-colors whitespace-nowrap"
              >
                <ShoppingCart className="w-4 h-4" />
                Order Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="py-12 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">
                  Related Research
                </p>
                <h2 className="text-2xl font-bold text-slate-900">You Might Also Need</h2>
              </div>
              <Link
                href="/products"
                className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors"
              >
                All Products <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-16 border-t border-slate-100 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">Ready to Order?</h2>
          <p className="text-slate-500 mb-6">
            Get {product.name} directly from Pantheon Peptides.
          </p>
          <a
            href={AFFILIATE_URL}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-slate-900 text-white hover:bg-slate-700 transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
            Buy {product.name} on Pantheon
          </a>
        </div>
      </section>
    </PageLayout>
  )
}
