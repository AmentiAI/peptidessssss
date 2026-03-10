import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, FlaskConical, Package } from "lucide-react"
import { PageLayout } from "@/components/peptide-hub/page-layout"
import { getAllProducts } from "@/lib/peptide-data"
import { ProductCard } from "@/components/peptide-hub/product-card"

export const metadata: Metadata = {
  title: "Peptide Cycles & Stacks — Pantheon Peptides | PeptideLab",
  description:
    "Pre-built peptide cycles and stacks from Pantheon Peptides: Wolverine Cycle, Glow Plus Cycle, Nova Mind Cycle, Prime Metabolic, and more. Complete synergistic research protocols.",
  alternates: { canonical: "https://peptidelab.com/stacks" },
  openGraph: {
    title: "Peptide Cycles & Stacks | PeptideLab",
    description:
      "Pre-built synergistic peptide cycles from Pantheon Peptides for recovery, anti-aging, cognitive, and weight loss research.",
    url: "https://peptidelab.com/stacks",
  },
}

const AFFILIATE_URL =
  process.env.NEXT_PUBLIC_AFFILIATE_URL || "https://pantheonpeptides.com/partner/AmentiAI/"

export default async function StacksPage() {
  const allProducts = await getAllProducts()
  const bundleProducts = allProducts.filter((p) => p.isBundle)

  // Separate cycles from compound combos
  const cycles = bundleProducts.filter((p) => p.name.toLowerCase().includes("cycle"))
  const combos = bundleProducts.filter((p) => !p.name.toLowerCase().includes("cycle"))

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-slate-50 mb-6">
            <Package className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-xs font-semibold text-slate-600 tracking-wider uppercase">
              Peptide Cycles & Stacks
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-4">
            Research Cycles & Stacks
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Pre-built synergistic peptide combinations from Pantheon Peptides — designed for specific
            research goals with complementary mechanisms.
          </p>
        </div>
      </section>

      {/* Peptide Cycles section */}
      {cycles.length > 0 && (
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
                Complete Programs
              </p>
              <h2 className="text-3xl font-bold text-slate-900">Peptide Cycles</h2>
              <p className="text-slate-500 mt-1">
                Multi-week programs targeting specific research goals.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {cycles.map((product, i) => (
              <ProductCard key={product.slug} product={product} priority={i < 4} />
            ))}
          </div>
        </section>
      )}

      {/* Compound combos section */}
      {combos.length > 0 && (
        <section className="py-16 border-t border-slate-100 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
                Synergistic Combos
              </p>
              <h2 className="text-3xl font-bold text-slate-900">Peptide Combinations</h2>
              <p className="text-slate-500 mt-1">
                Pre-combined peptide stacks with complementary mechanisms.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {combos.map((product, i) => (
              <ProductCard key={product.slug} product={product} priority={i < 4} />
            ))}
          </div>
        </section>
      )}

      {/* Single peptides CTA */}
      <section className="py-16 border-t border-slate-100 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Browse Individual Peptides
          </h2>
          <p className="text-slate-500 mb-8">
            Build your own custom research protocol from our 62+ individual peptides.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold bg-slate-900 text-white hover:bg-slate-700 transition-colors"
            >
              Browse All Peptides <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={AFFILIATE_URL}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-slate-900 border-2 border-slate-900 hover:bg-slate-900 hover:text-white transition-all"
            >
              Shop on Pantheon <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <p className="mt-6 text-xs text-slate-400">
            For research use only. Not for human consumption. Consult a physician before any use.
          </p>
        </div>
      </section>
    </PageLayout>
  )
}
