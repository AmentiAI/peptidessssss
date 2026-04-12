import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Star, Sparkles, Heart, Shield, ChevronRight } from "lucide-react"
import { PageLayout } from "@/components/peptide-hub/page-layout"
import { staticProducts, AFFILIATE_URL } from "@/lib/static-products"

export const metadata: Metadata = {
  title: "Anti-Aging Peptides — Epithalon, GHK-Cu, MOTS-C | PeptidesMaxxing",
  description:
    "Research the top anti-aging and longevity peptides: Epithalon, GHK-Cu, MOTS-C, Thymulin. Telomere extension, collagen synthesis, and mitochondrial biogenesis research.",
  alternates: { canonical: "https://www.peptidesmaxxing.com/anti-aging" },
  openGraph: {
    title: "Anti-Aging Peptides — Epithalon, GHK-Cu, MOTS-C",
    description:
      "Top longevity research compounds — Epithalon, GHK-Cu, MOTS-C with full science documentation and COA verification.",
    url: "https://www.peptidesmaxxing.com/anti-aging",
    type: "website",
  },
}

const ANTI_AGING_SLUGS = [
  "epithalon",
  "ghk-cu",
  "mots-c",
  "thymulin",
  "thymosin-alpha-1",
  "dsip-delta-sleep-inducing-peptide",
]

const BENEFITS = [
  {
    icon: Star,
    title: "Telomere Extension",
    desc: "Epithalon is the only known peptide that directly activates telomerase, the enzyme responsible for maintaining telomere length.",
    color: "#8b5cf6",
  },
  {
    icon: Sparkles,
    title: "Collagen & Skin Repair",
    desc: "GHK-Cu stimulates collagen, elastin, and glycosaminoglycan synthesis while activating over 300 human genes.",
    color: "#ec4899",
  },
  {
    icon: Heart,
    title: "Mitochondrial Health",
    desc: "MOTS-C is a mitochondria-derived peptide that improves metabolic flexibility, insulin sensitivity, and cellular energy production.",
    color: "#ef4444",
  },
  {
    icon: Shield,
    title: "Immune Restoration",
    desc: "Thymulin and Thymosin Alpha-1 restore thymic function and T-cell counts, crucial for longevity and immune competence.",
    color: "#10b981",
  },
]

export default function AntiAgingPage() {
  const products = ANTI_AGING_SLUGS
    .map((slug) => staticProducts.find((p) => p.slug === slug))
    .filter(Boolean) as typeof staticProducts

  return (
    <PageLayout>
      {/* BREADCRUMB */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-0">
        <nav className="flex items-center gap-1.5 text-xs text-slate-400">
          <Link href="/" className="hover:text-slate-600 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-600 font-medium">Anti-Aging Peptides</span>
        </nav>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-950/30 to-slate-900 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/40 bg-purple-500/10 mb-6">
              <Star className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-xs font-bold text-purple-300 uppercase tracking-wider">Anti-Aging & Longevity</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6">
              Anti-Aging &<br />
              <span className="text-purple-400">Longevity Peptides</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Epithalon activates telomerase. GHK-Cu rewires 300+ genes. MOTS-C restores mitochondrial efficiency. These are the most researched longevity compounds — with complete science documentation and ≥99% COA purity.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={AFFILIATE_URL}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-purple-600 text-white hover:bg-purple-500 transition-colors text-base"
              >
                Shop Anti-Aging Peptides <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/products/epithalon"
                className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold border border-slate-600 text-white hover:border-slate-400 transition-all text-base"
              >
                View Epithalon
              </Link>
              <Link
                href="/categories/anti-aging"
                className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors text-base"
              >
                Browse Category
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute right-20 bottom-0 w-40 h-40 bg-pink-500/5 rounded-full blur-2xl" />
      </section>

      {/* PRODUCT SHOWCASE */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-bold text-purple-600 uppercase tracking-widest mb-2">Research Compounds</p>
            <h2 className="text-4xl font-bold text-slate-900">Top Anti-Aging Peptides</h2>
            <p className="text-slate-500 mt-2">Research-grade longevity compounds with full COA verification and science documentation.</p>
          </div>
          <Link href="/categories/anti-aging" className="hidden sm:flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.slug} className="group rounded-2xl border border-slate-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 overflow-hidden bg-white">
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-50">
                {product.imageUrl ? (
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-5xl">🧪</div>
                )}
                {product.badge && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold bg-slate-900 text-white">
                    {product.badge}
                  </span>
                )}
                <span className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-medium ${product.isInStock ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"}`}>
                  {product.isInStock ? "In Stock" : "Out of Stock"}
                </span>
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-1 mb-2">
                  {product.categories.slice(0, 2).map((cat) => (
                    <span key={cat} className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-purple-50 text-purple-700 border border-purple-100">
                      {cat}
                    </span>
                  ))}
                </div>
                <h3 className="font-bold text-slate-900 text-base leading-snug mb-2">{product.name}</h3>
                {product.shortDescription && (
                  <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 mb-4">{product.shortDescription}</p>
                )}
                <div className="flex gap-2 pt-3 border-t border-slate-100">
                  <Link
                    href={`/products/${product.slug}`}
                    className="flex-1 text-center py-2.5 rounded-xl text-sm font-semibold border border-slate-200 text-slate-700 hover:border-slate-400 hover:bg-slate-50 transition-all"
                  >
                    View Details
                  </Link>
                  <Link
                    href={`/out/${product.slug}`}
                    target="_blank"
                    className="flex-1 text-center py-2.5 rounded-xl text-sm font-bold bg-purple-600 text-white hover:bg-purple-500 transition-colors"
                  >
                    Buy Now →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 border-t border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-purple-600 uppercase tracking-widest mb-2">Research Mechanisms</p>
            <h2 className="text-3xl font-bold text-slate-900">How Anti-Aging Peptides Work</h2>
            <p className="text-slate-500 mt-2 max-w-xl mx-auto">Four primary longevity pathways targeted by the most-researched anti-aging peptides.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BENEFITS.map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className="p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: `${color}18`, border: `1px solid ${color}35` }}>
                  <Icon className="w-6 h-6" style={{ color }} />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EPITHALON SPOTLIGHT */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xs font-bold text-purple-600 uppercase tracking-widest mb-3">Longevity Spotlight</p>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Epithalon: The Telomerase Activator</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Epithalon (Epitalon) is a tetrapeptide developed by the St. Petersburg Institute of Bioregulation and Gerontology. Over 100 peer-reviewed studies document its ability to activate telomerase, extend telomeres, regulate the pineal gland, and improve melatonin production in aging subjects.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/products/epithalon" className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold bg-purple-600 text-white hover:bg-purple-500 transition-colors">
                  Read Epithalon Profile <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/guides/longevity-peptide-protocols" className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border border-purple-200 text-purple-700 hover:bg-purple-50 transition-colors">
                  View Longevity Protocols
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "100+", label: "Published Studies" },
                { stat: "4 AA", label: "Peptide Length" },
                { stat: "≥99%", label: "COA Purity" },
                { stat: "Pineal", label: "Target Gland" },
              ].map(({ stat, label }) => (
                <div key={label} className="p-5 rounded-2xl bg-white border border-purple-100 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-1">{stat}</div>
                  <div className="text-xs text-slate-500 font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 border-t border-slate-100 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Explore the Science of Longevity</h2>
          <p className="text-slate-400 mb-8 text-lg max-w-xl mx-auto">
            Browse Epithalon, GHK-Cu, MOTS-C and more — all with ≥99% purity documentation and complete research guides.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={AFFILIATE_URL} target="_blank" rel="nofollow sponsored noopener noreferrer"
              className="flex items-center justify-center gap-2 px-10 py-4 rounded-xl font-bold bg-purple-600 text-white hover:bg-purple-500 transition-colors text-base">
              Shop Anti-Aging Peptides <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/guides/longevity-peptide-protocols"
              className="flex items-center justify-center gap-2 px-10 py-4 rounded-xl font-semibold border border-slate-700 text-white hover:border-slate-500 transition-all text-base">
              View Longevity Protocols
            </Link>
          </div>
          <p className="mt-8 text-xs text-slate-500 max-w-xl mx-auto">All products for research use only. Not for human consumption. Consult a qualified physician.</p>
        </div>
      </section>
    </PageLayout>
  )
}
