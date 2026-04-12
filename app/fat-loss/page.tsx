import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Flame, TrendingDown, Zap, Scale, ChevronRight } from "lucide-react"
import { PageLayout } from "@/components/peptide-hub/page-layout"
import { staticProducts, AFFILIATE_URL } from "@/lib/static-products"

export const metadata: Metadata = {
  title: "Fat Loss Peptides — Tirzepatide, Retatrutide, AOD9604 | PeptidesMaxxing",
  description:
    "Research the top fat loss peptides: Tirzepatide, Retatrutide, Cagrilintide, AOD9604, 5-Amino-1MQ. GLP-1 agonists, lipolysis enhancers, and metabolic research compounds.",
  alternates: { canonical: "https://www.peptidesmaxxing.com/fat-loss" },
  openGraph: {
    title: "Fat Loss Peptides — Tirzepatide, Retatrutide & More",
    description:
      "GLP-1 agonists and metabolic peptides — Tirzepatide, Retatrutide, 5-Amino-1MQ with full research documentation.",
    url: "https://www.peptidesmaxxing.com/fat-loss",
    type: "website",
  },
}

const FAT_LOSS_SLUGS = [
  "tirzepatide",
  "retatrutide",
  "cagrilintide",
  "aod9604",
  "5-amino-1mq",
  "mazdutide",
]

const BENEFITS = [
  {
    icon: Flame,
    title: "GLP-1 / GIP Agonism",
    desc: "Tirzepatide and Retatrutide activate GLP-1 and GIP receptors to dramatically reduce appetite and caloric intake.",
    color: "#f97316",
  },
  {
    icon: TrendingDown,
    title: "Enhanced Lipolysis",
    desc: "AOD9604 is a hGH fragment that stimulates fat cell breakdown without anabolic side effects of full GH.",
    color: "#ef4444",
  },
  {
    icon: Zap,
    title: "Metabolic Boost",
    desc: "5-Amino-1MQ inhibits NNMT to upregulate NAD+ levels, increasing resting metabolic rate and fat oxidation.",
    color: "#f59e0b",
  },
  {
    icon: Scale,
    title: "Insulin Sensitization",
    desc: "Multiple compounds in this category improve insulin sensitivity, reducing fat storage and improving glucose utilization.",
    color: "#3b82f6",
  },
]

export default function FatLossPage() {
  const products = FAT_LOSS_SLUGS
    .map((slug) => staticProducts.find((p) => p.slug === slug))
    .filter(Boolean) as typeof staticProducts

  return (
    <PageLayout>
      {/* BREADCRUMB */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-0">
        <nav className="flex items-center gap-1.5 text-xs text-slate-400">
          <Link href="/" className="hover:text-slate-600 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-600 font-medium">Fat Loss Peptides</span>
        </nav>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-orange-950/30 to-slate-900 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/40 bg-orange-500/10 mb-6">
              <Flame className="w-3.5 h-3.5 text-orange-400" />
              <span className="text-xs font-bold text-orange-300 uppercase tracking-wider">Fat Loss & Metabolic</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6">
              Fat Loss &<br />
              <span className="text-orange-400">Metabolic Peptides</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              From next-gen GLP-1 triple agonists like Retatrutide to hGH fragments like AOD9604 and NNMT inhibitors — the most researched compounds for metabolic optimization and fat loss research.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={AFFILIATE_URL}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-orange-500 text-white hover:bg-orange-400 transition-colors text-base"
              >
                Shop Fat Loss Peptides <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/products/tirzepatide"
                className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold border border-slate-600 text-white hover:border-slate-400 transition-all text-base"
              >
                View Tirzepatide
              </Link>
              <Link
                href="/categories/weight-loss"
                className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors text-base"
              >
                Browse Category
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute right-20 bottom-0 w-40 h-40 bg-red-500/5 rounded-full blur-2xl" />
      </section>

      {/* PRODUCT SHOWCASE */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-2">Research Compounds</p>
            <h2 className="text-4xl font-bold text-slate-900">Top Fat Loss Peptides</h2>
            <p className="text-slate-500 mt-2">Next-generation metabolic research compounds with complete COA documentation.</p>
          </div>
          <Link href="/categories/weight-loss" className="hidden sm:flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.slug} className="group rounded-2xl border border-slate-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 overflow-hidden bg-white">
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
                    <span key={cat} className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-orange-50 text-orange-700 border border-orange-100">
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
                    className="flex-1 text-center py-2.5 rounded-xl text-sm font-bold bg-orange-500 text-white hover:bg-orange-400 transition-colors"
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
            <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-2">Research Mechanisms</p>
            <h2 className="text-3xl font-bold text-slate-900">How Fat Loss Peptides Work</h2>
            <p className="text-slate-500 mt-2 max-w-xl mx-auto">Four primary mechanisms across the most researched metabolic peptide categories.</p>
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

      {/* TIRZEPATIDE VS RETATRUTIDE CALLOUT */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-100 p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-3">Spotlight Comparison</p>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Tirzepatide vs Retatrutide</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Tirzepatide is a dual GLP-1/GIP agonist with extensive clinical research. Retatrutide adds a third agonism (GCG) for triple-receptor activation — making it one of the most potent metabolic research compounds available. Both are available from Phiogen with ≥99% purity COA.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/products/tirzepatide" className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold bg-orange-500 text-white hover:bg-orange-400 transition-colors">
                  Tirzepatide Profile <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/products/retatrutide" className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border border-orange-200 text-orange-700 hover:bg-orange-50 transition-colors">
                  Retatrutide Profile
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "Dual", label: "Tirzepatide Agonism" },
                { stat: "Triple", label: "Retatrutide Agonism" },
                { stat: "≥99%", label: "COA Purity" },
                { stat: "GLP-1", label: "Primary Receptor" },
              ].map(({ stat, label }) => (
                <div key={label} className="p-5 rounded-2xl bg-white border border-orange-100 text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-1">{stat}</div>
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
          <h2 className="text-4xl font-bold text-white mb-4">Start Your Metabolic Research</h2>
          <p className="text-slate-400 mb-8 text-lg max-w-xl mx-auto">
            Browse GLP-1 agonists, hGH fragments, and NNMT inhibitors — all with ≥99% purity documentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={AFFILIATE_URL} target="_blank" rel="nofollow sponsored noopener noreferrer"
              className="flex items-center justify-center gap-2 px-10 py-4 rounded-xl font-bold bg-orange-500 text-white hover:bg-orange-400 transition-colors text-base">
              Shop Fat Loss Peptides <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/products"
              className="flex items-center justify-center gap-2 px-10 py-4 rounded-xl font-semibold border border-slate-700 text-white hover:border-slate-500 transition-all text-base">
              Browse Full Catalog
            </Link>
          </div>
          <p className="mt-8 text-xs text-slate-500 max-w-xl mx-auto">All products for research use only. Not for human consumption. Consult a qualified physician.</p>
        </div>
      </section>
    </PageLayout>
  )
}
