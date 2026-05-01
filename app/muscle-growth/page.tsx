import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Dumbbell, TrendingUp, Zap, BarChart3, ChevronRight } from "lucide-react"
import { PageLayout } from "@/components/peptide-hub/page-layout"
import { staticProducts, AFFILIATE_URL } from "@/lib/static-products"

export const metadata: Metadata = {
  title: "Buy Muscle Growth Peptides Online — IGF-1LR3, GHRP-2, Ipamorelin | PeptidesMaxxing",
  description:
    "Buy top muscle growth peptides online: IGF-1LR3, GHRP-2, Ipamorelin, CJC-1295, ACE-031, AICAR, MK-677. High purity, COA verified, fast shipping. IGF-1 & GH pathway peptides.",
  keywords: [
    "buy muscle growth peptides",
    "buy IGF-1 LR3",
    "buy Ipamorelin",
    "buy CJC-1295",
    "buy GHRP-2",
    "muscle peptides for sale",
    "buy MK-677",
  ],
  alternates: { canonical: "https://www.peptidesmaxxing.com/muscle-growth" },
  openGraph: {
    title: "Buy Muscle Growth Peptides Online — IGF-1LR3, GHRP-2, Ipamorelin",
    description:
      "Top muscle growth peptides for sale — IGF-1LR3, GHRP-2, Ipamorelin with COA verification and fast shipping.",
    url: "https://www.peptidesmaxxing.com/muscle-growth",
    type: "website",
  },
}

const MUSCLE_SLUGS = [
  "igf-1lr3",
  "ghrp-2-acetate",
  "ipamorelin",
  "cjc-1295-ipamorelin",
  "ace-031",
  "aicar",
  "mk-677-oral-capsules",
]

const BENEFITS = [
  {
    icon: Dumbbell,
    title: "IGF-1 Pathway Activation",
    desc: "IGF-1LR3 is a long-acting IGF-1 analogue that activates the PI3K/Akt pathway, driving skeletal muscle hypertrophy and satellite cell activation.",
    color: "#22c55e",
  },
  {
    icon: TrendingUp,
    title: "GH Pulse Amplification",
    desc: "GHRP-2 and Ipamorelin stimulate pulsatile GH release from the pituitary, driving IGF-1 production in the liver for anabolic signaling.",
    color: "#3b82f6",
  },
  {
    icon: Zap,
    title: "AMPK & Endurance",
    desc: "AICAR activates AMPK to increase mitochondrial biogenesis, endurance, and fat oxidation — enhancing both performance and recovery.",
    color: "#f59e0b",
  },
  {
    icon: BarChart3,
    title: "Myostatin Inhibition",
    desc: "ACE-031 inhibits the myostatin pathway, removing a key brake on muscle mass to allow research into supraphysiological muscle development.",
    color: "#ef4444",
  },
]

export default function MuscleGrowthPage() {
  const products = MUSCLE_SLUGS
    .map((slug) => staticProducts.find((p) => p.slug === slug))
    .filter(Boolean) as typeof staticProducts

  return (
    <PageLayout>
      {/* BREADCRUMB */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-0">
        <nav className="flex items-center gap-1.5 text-xs text-slate-400">
          <Link href="/" className="hover:text-slate-600 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-600 font-medium">Buy Muscle Growth Peptides</span>
        </nav>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-green-950/30 to-slate-900 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/40 bg-green-500/10 mb-6">
              <Dumbbell className="w-3.5 h-3.5 text-green-400" />
              <span className="text-xs font-bold text-green-300 uppercase tracking-wider">Muscle Growth & Performance</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6">
              Buy Muscle Growth &<br />
              <span className="text-green-400">Performance Peptides</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              IGF-1LR3 activates the anabolic pathway directly. GHRP-2 and Ipamorelin amplify natural GH pulses. ACE-031 targets myostatin. The most popular peptides for muscle hypertrophy — high purity, COA verified, fast shipping.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={AFFILIATE_URL}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-green-600 text-white hover:bg-green-500 transition-colors text-base"
              >
                Shop Muscle Peptides <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/products/igf-1lr3"
                className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold border border-slate-600 text-white hover:border-slate-400 transition-all text-base"
              >
                View IGF-1LR3 Profile
              </Link>
              <Link
                href="/categories/muscle-growth"
                className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors text-base"
              >
                Browse Category
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute right-20 bottom-0 w-40 h-40 bg-emerald-500/5 rounded-full blur-2xl" />
      </section>

      {/* PRODUCT SHOWCASE */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-bold text-green-600 uppercase tracking-widest mb-2">Top Sellers</p>
            <h2 className="text-4xl font-bold text-slate-900">Top Muscle Growth Peptides</h2>
            <p className="text-slate-500 mt-2">High purity anabolic compounds with complete COA documentation and dosing guides.</p>
          </div>
          <Link href="/categories/muscle-growth" className="hidden sm:flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.slug} className="group rounded-2xl border border-slate-200 hover:border-green-300 hover:shadow-lg transition-all duration-300 overflow-hidden bg-white">
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-50">
                {product.imageUrl ? (
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    unoptimized
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-5xl">💪</div>
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
                    <span key={cat} className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-green-50 text-green-700 border border-green-100">
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
                    Details
                  </Link>
                  <Link
                    href={`/out/${product.slug}`}
                    target="_blank"
                    className="flex-1 text-center py-2.5 rounded-xl text-sm font-bold bg-green-600 text-white hover:bg-green-500 transition-colors"
                  >
                    Buy →
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
            <p className="text-xs font-bold text-green-600 uppercase tracking-widest mb-2">How They Work</p>
            <h2 className="text-3xl font-bold text-slate-900">How Muscle Growth Peptides Work</h2>
            <p className="text-slate-500 mt-2 max-w-xl mx-auto">Four primary anabolic pathways targeted by the most popular muscle growth peptides.</p>
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

      {/* GH STACK CALLOUT */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xs font-bold text-green-600 uppercase tracking-widest mb-3">Popular Stack</p>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">CJC-1295 + Ipamorelin Stack</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                The most popular GH peptide stack combines CJC-1295 (GHRH analogue) with Ipamorelin (ghrelin mimetic) for synergistic GH pulse amplification. CJC-1295 extends the GH pulse duration while Ipamorelin increases GH release amplitude — together producing sustained, supra-physiological GH levels.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/products/cjc-1295-ipamorelin" className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold bg-green-600 text-white hover:bg-green-500 transition-colors">
                  Buy This Stack <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/guides/gh-peptide-stacking-guide" className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border border-green-200 text-green-700 hover:bg-green-50 transition-colors">
                  GH Stacking Guide
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "GHRH", label: "CJC-1295 Mechanism" },
                { stat: "Ghrelin", label: "Ipamorelin Mechanism" },
                { stat: "≥99%", label: "COA Purity" },
                { stat: "Synergistic", label: "Stack Effect" },
              ].map(({ stat, label }) => (
                <div key={label} className="p-5 rounded-2xl bg-white border border-green-100 text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">{stat}</div>
                  <div className="text-xs text-slate-500 font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CYCLES CTA */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl bg-slate-900 p-8 text-center">
          <p className="text-xs font-bold text-green-400 uppercase tracking-widest mb-3">Pre-Built Stacks</p>
          <h2 className="text-3xl font-bold text-white mb-4">Buy the Wolverine Cycle</h2>
          <p className="text-slate-400 mb-6 max-w-lg mx-auto">
            The Wolverine Cycle is our most popular pre-built stack combining the top recovery and muscle peptides — fast shipping and high purity.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/products/wolverine-cycle" className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-green-600 text-white hover:bg-green-500 transition-colors">
              Buy Wolverine Cycle <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/stacks" className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold border border-slate-700 text-slate-200 hover:border-slate-500 transition-all">
              All Peptide Stacks
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 border-t border-slate-100 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Buy Muscle Growth Peptides — High Purity, Fast Shipping</h2>
          <p className="text-slate-400 mb-8 text-lg max-w-xl mx-auto">
            Browse IGF-1LR3, GHRP-2, Ipamorelin and more — all with ≥99% purity documentation and dosing guides.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={AFFILIATE_URL} target="_blank" rel="nofollow sponsored noopener noreferrer"
              className="flex items-center justify-center gap-2 px-10 py-4 rounded-xl font-bold bg-green-600 text-white hover:bg-green-500 transition-colors text-base">
              Shop Muscle Peptides <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/products"
              className="flex items-center justify-center gap-2 px-10 py-4 rounded-xl font-semibold border border-slate-700 text-white hover:border-slate-500 transition-all text-base">
              Browse Full Catalog
            </Link>
          </div>
          <p className="mt-8 text-xs text-slate-500 max-w-xl mx-auto">Disclaimer: Sold for laboratory and educational use only. Not for human or veterinary use.</p>
        </div>
      </section>
    </PageLayout>
  )
}
