import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Brain, Zap, Moon, Shield, ChevronRight } from "lucide-react"
import { PageLayout } from "@/components/peptide-hub/page-layout"
import { staticProducts, AFFILIATE_URL } from "@/lib/static-products"

export const metadata: Metadata = {
  title: "Cognitive & Brain Peptides — Semax, Selank, Cerebrolysin | PeptidesMaxxing",
  description:
    "Research the top cognitive and neuroprotective peptides: Semax, Selank, Cerebrolysin, DSIP. BDNF upregulation, anxiety reduction, memory consolidation, and neuroprotection.",
  alternates: { canonical: "https://www.peptidesmaxxing.com/cognitive" },
  openGraph: {
    title: "Cognitive Peptides — Semax, Selank, Cerebrolysin",
    description:
      "Top brain health research compounds — Semax, Selank, Cerebrolysin with full science documentation and COA verification.",
    url: "https://www.peptidesmaxxing.com/cognitive",
    type: "website",
  },
}

const COGNITIVE_SLUGS = [
  "semax",
  "selank",
  "selank-semax",
  "cerebrolysin",
  "dsip-delta-sleep-inducing-peptide",
]

const BENEFITS = [
  {
    icon: Brain,
    title: "BDNF Upregulation",
    desc: "Semax increases Brain-Derived Neurotrophic Factor by up to 800%, promoting neuroplasticity, memory consolidation, and cognitive resilience.",
    color: "#3b82f6",
  },
  {
    icon: Shield,
    title: "Anxiolytic Effects",
    desc: "Selank modulates GABA-A receptors and reduces anxiety without sedation, improving stress tolerance and mood stability.",
    color: "#10b981",
  },
  {
    icon: Zap,
    title: "Neuroprotection",
    desc: "Cerebrolysin contains BDNF, NGF, and CNTF fragments that protect neurons from excitotoxicity and ischemic damage.",
    color: "#8b5cf6",
  },
  {
    icon: Moon,
    title: "Sleep Architecture",
    desc: "DSIP (Delta Sleep-Inducing Peptide) promotes slow-wave sleep, critical for memory consolidation and cognitive recovery.",
    color: "#6366f1",
  },
]

export default function CognitivePage() {
  const products = COGNITIVE_SLUGS
    .map((slug) => staticProducts.find((p) => p.slug === slug))
    .filter(Boolean) as typeof staticProducts

  return (
    <PageLayout>
      {/* BREADCRUMB */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-0">
        <nav className="flex items-center gap-1.5 text-xs text-slate-400">
          <Link href="/" className="hover:text-slate-600 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-600 font-medium">Cognitive Peptides</span>
        </nav>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950/30 to-slate-900 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/40 bg-blue-500/10 mb-6">
              <Brain className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-xs font-bold text-blue-300 uppercase tracking-wider">Brain & Cognitive</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6">
              Cognitive &<br />
              <span className="text-blue-400">Brain Peptides</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Semax boosts BDNF 800%. Selank eliminates anxiety without sedation. Cerebrolysin delivers neurotrophic factors directly. These are the most researched nootropic peptides — with complete research documentation.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={AFFILIATE_URL}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-blue-600 text-white hover:bg-blue-500 transition-colors text-base"
              >
                Shop Cognitive Peptides <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/products/semax"
                className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold border border-slate-600 text-white hover:border-slate-400 transition-all text-base"
              >
                View Semax Profile
              </Link>
              <Link
                href="/categories/brain-nerve"
                className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors text-base"
              >
                Browse Category
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute right-20 bottom-0 w-40 h-40 bg-indigo-500/5 rounded-full blur-2xl" />
      </section>

      {/* PRODUCT SHOWCASE */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">Research Compounds</p>
            <h2 className="text-4xl font-bold text-slate-900">Top Cognitive Peptides</h2>
            <p className="text-slate-500 mt-2">Research-grade brain peptides with complete COA documentation and science profiles.</p>
          </div>
          <Link href="/categories/brain-nerve" className="hidden sm:flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.slug} className="group rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 overflow-hidden bg-white">
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-50">
                {product.imageUrl ? (
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-5xl">🧠</div>
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
                    <span key={cat} className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-50 text-blue-700 border border-blue-100">
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
                    className="flex-1 text-center py-2.5 rounded-xl text-sm font-bold bg-blue-600 text-white hover:bg-blue-500 transition-colors"
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
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">Research Mechanisms</p>
            <h2 className="text-3xl font-bold text-slate-900">How Cognitive Peptides Work</h2>
            <p className="text-slate-500 mt-2 max-w-xl mx-auto">Four key neuroscience pathways targeted by top research-grade cognitive peptides.</p>
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

      {/* SEMAX SPOTLIGHT */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">Nootropic Spotlight</p>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Semax: The BDNF Amplifier</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Semax is an ACTH-derived peptide developed by the Institute of Molecular Genetics (Russia). Research shows it increases BDNF levels by up to 800%, enhances working memory, accelerates stroke recovery, and provides significant neuroprotection. Often paired with Selank for synergistic cognitive research stacks.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/products/semax" className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold bg-blue-600 text-white hover:bg-blue-500 transition-colors">
                  Read Semax Profile <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/products/selank-semax" className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border border-blue-200 text-blue-700 hover:bg-blue-50 transition-colors">
                  Selank + Semax Stack
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "800%", label: "BDNF Increase" },
                { stat: "7 AA", label: "Peptide Length" },
                { stat: "≥99%", label: "COA Purity" },
                { stat: "Nasal", label: "Delivery Route" },
              ].map(({ stat, label }) => (
                <div key={label} className="p-5 rounded-2xl bg-white border border-blue-100 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">{stat}</div>
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
          <h2 className="text-4xl font-bold text-white mb-4">Explore Brain Optimization Research</h2>
          <p className="text-slate-400 mb-8 text-lg max-w-xl mx-auto">
            Browse Semax, Selank, Cerebrolysin and more — all with ≥99% purity documentation and complete research profiles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={AFFILIATE_URL} target="_blank" rel="nofollow sponsored noopener noreferrer"
              className="flex items-center justify-center gap-2 px-10 py-4 rounded-xl font-bold bg-blue-600 text-white hover:bg-blue-500 transition-colors text-base">
              Shop Cognitive Peptides <ArrowRight className="w-4 h-4" />
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
