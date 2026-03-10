import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ShoppingCart, ArrowRight, Star, CheckCircle, FlaskConical,
  Shield, Award, Zap, ChevronRight,
} from "lucide-react"
import { PageLayout } from "@/components/peptide-hub/page-layout"
import { ProductCard } from "@/components/peptide-hub/product-card"
import {
  getProductBySlug,
  getAllProductSlugs,
  getRelatedProducts,
  vendor,
} from "@/lib/peptide-data"

export function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return {}
  return {
    title: `${product.name} — Research Peptide | PeptideLab`,
    description: product.short_description + ` ${product.purity} purity, HPLC verified. For research use only.`,
    keywords: [product.name, ...product.categories, "research peptide", "buy peptides"],
    alternates: { canonical: `https://peptidelab.com/products/${slug}` },
    openGraph: {
      title: `${product.name} | PeptideLab`,
      description: product.short_description,
      url: `https://peptidelab.com/products/${slug}`,
      images: [{ url: product.image_url, width: 800, height: 800 }],
    },
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) notFound()

  const related = getRelatedProducts(slug)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `https://peptidelab.com${product.image_url}`,
    sku: product.sku,
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "USD",
      availability: product.in_stock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      url: `https://peptidelab.com/out/${product.slug}`,
      seller: { "@type": "Organization", name: vendor.name },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviews,
    },
  }

  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8">
        <nav className="flex items-center gap-2 text-xs text-[rgba(255,255,255,0.4)]">
          <Link href="/" className="hover:text-[#00d4ff] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/products" className="hover:text-[#00d4ff] transition-colors">Products</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[rgba(255,255,255,0.7)]">{product.name}</span>
        </nav>
      </div>

      {/* Product Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-[rgba(0,212,255,0.15)]"
              style={{ background: "rgba(12,12,32,0.8)" }}>
              <Image
                src={product.image_url}
                alt={product.name}
                width={600}
                height={600}
                className="object-cover w-full h-full"
                priority
              />
              {product.badge && (
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-sm font-bold text-black"
                  style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)" }}>
                  {product.badge}
                </div>
              )}
            </div>
            {/* Purity badge */}
            <div className="absolute -bottom-4 right-6 px-4 py-2 rounded-xl border border-green-500/30 bg-green-500/10 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm font-bold text-green-400">{product.purity} Purity</span>
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
                  className="px-3 py-1 rounded-full text-xs font-semibold text-[rgba(0,212,255,0.9)] bg-[rgba(0,212,255,0.08)] border border-[rgba(0,212,255,0.2)] hover:bg-[rgba(0,212,255,0.15)] transition-colors"
                >
                  {cat}
                </Link>
              ))}
            </div>

            <h1 className="text-4xl font-bold text-white mb-2">{product.name}</h1>
            <p className="text-[rgba(255,255,255,0.6)] text-lg leading-relaxed mb-6">{product.short_description}</p>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-[#f59e0b] text-[#f59e0b]" : "text-[rgba(255,255,255,0.2)]"}`}
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-white">{product.rating}</span>
              <span className="text-sm text-[rgba(255,255,255,0.4)]">({product.reviews.toLocaleString()} reviews)</span>
            </div>

            {/* Key specs */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                { label: "Purity", value: product.purity, color: "#22c55e" },
                { label: "Molecular Weight", value: product.molecular_weight, color: "#00d4ff" },
                { label: "SKU", value: product.sku, color: "#7c3aed" },
                { label: "Stock", value: product.in_stock ? `${product.stock} units` : "Out of Stock", color: product.in_stock ? "#22c55e" : "#ef4444" },
              ].map(({ label, value, color }) => (
                <div key={label} className="p-3 rounded-xl border border-[rgba(255,255,255,0.07)]" style={{ background: "rgba(12,12,32,0.6)" }}>
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>{label}</p>
                  <p className="text-sm font-bold" style={{ color }}>{value}</p>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="mb-8">
              <p className="text-xs font-bold text-[rgba(255,255,255,0.4)] uppercase tracking-widest mb-3">Research Benefits</p>
              <div className="grid grid-cols-1 gap-2">
                {product.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2 text-sm text-[rgba(255,255,255,0.75)]">
                    <CheckCircle className="w-4 h-4 text-[#00d4ff] flex-shrink-0" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>

            {/* Price + CTA */}
            <div className="p-6 rounded-2xl border border-[rgba(0,212,255,0.15)]" style={{ background: "rgba(0,212,255,0.04)" }}>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs text-[rgba(255,255,255,0.4)] mb-1">Research Price</p>
                  <p className="text-4xl font-bold text-white">{product.price_formatted}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-[rgba(255,255,255,0.4)]">Free shipping</p>
                  <p className="text-xs text-[rgba(255,255,255,0.4)]">on orders over $200</p>
                </div>
              </div>
              <Link
                href={`/out/${product.slug}`}
                className="flex items-center justify-center gap-3 w-full py-4 rounded-xl text-base font-bold text-black transition-all hover:-translate-y-0.5 mb-3"
                style={{
                  background: "linear-gradient(135deg, #00d4ff, #7c3aed)",
                  boxShadow: "0 0 25px rgba(0,212,255,0.25)",
                }}
              >
                <ShoppingCart className="w-5 h-5" />
                Buy {product.name} — {product.price_formatted}
              </Link>
              <p className="text-xs text-center text-[rgba(255,255,255,0.3)]">
                Affiliate disclosure: PeptideLab earns a commission at no cost to you.
              </p>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap gap-4 mt-4">
              {[
                { icon: Shield, label: "HPLC Verified" },
                { icon: Award, label: "COA Available" },
                { icon: FlaskConical, label: "Research Grade" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 text-xs text-[rgba(255,255,255,0.5)]">
                  <Icon className="w-3.5 h-3.5 text-[#00d4ff]" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
        <div className="max-w-4xl">
          <h2 className="text-2xl font-bold text-white mb-4">About {product.name}</h2>
          <p className="text-[rgba(255,255,255,0.65)] leading-relaxed">{product.description}</p>

          {/* Sequence */}
          <div className="mt-6 p-4 rounded-xl border border-[rgba(255,255,255,0.07)]" style={{ background: "rgba(12,12,32,0.6)" }}>
            <p className="text-xs font-bold text-[rgba(255,255,255,0.4)] uppercase tracking-widest mb-2">Amino Acid Sequence</p>
            <p className="text-sm text-[rgba(0,212,255,0.8)] font-mono break-all">{product.sequence}</p>
          </div>

          {/* Research disclaimer */}
          <div className="mt-6 p-4 rounded-xl border border-[rgba(255,165,0,0.2)] bg-[rgba(255,165,0,0.05)]">
            <p className="text-xs text-[rgba(255,165,0,0.8)] leading-relaxed">
              ⚗️ <strong className="text-[rgba(255,165,0,1)]">Research Use Only:</strong> {vendor.disclaimer} This product is not intended for human consumption. Consult a qualified physician before any use.
            </p>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="py-12 border-t border-[rgba(0,212,255,0.08)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-xs font-bold text-[#00d4ff] uppercase tracking-widest mb-1">Related Research</p>
                <h2 className="text-2xl font-bold text-white">You Might Also Need</h2>
              </div>
              <Link href="/products" className="flex items-center gap-1 text-sm font-semibold text-[#00d4ff] hover:text-white transition-colors">
                All Products <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 border-t border-[rgba(0,212,255,0.08)]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <Zap className="w-10 h-10 text-[#00d4ff] mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-3">Ready to Order?</h2>
          <p className="text-[rgba(255,255,255,0.55)] mb-6">Get {product.name} from Peptide Sciences — {product.purity} purity, HPLC verified.</p>
          <Link
            href={`/out/${product.slug}`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-black transition-all hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)", boxShadow: "0 0 25px rgba(0,212,255,0.25)" }}
          >
            <ShoppingCart className="w-5 h-5" />
            Buy {product.name} — {product.price_formatted}
          </Link>
        </div>
      </section>
    </PageLayout>
  )
}
