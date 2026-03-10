import type { Metadata } from "next"
import { PageLayout } from "@/components/peptide-hub/page-layout"
import { ProductCard } from "@/components/peptide-hub/product-card"
import { products, categories } from "@/lib/peptide-data"
import { FlaskConical, Filter } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "All Research Peptides — BPC-157, TB-500, Ipamorelin, Epithalon & More",
  description:
    "Browse all 20+ research peptides. BPC-157, TB-500, Ipamorelin, CJC-1295, Epithalon, Semax, GHK-Cu, and more. ≥99% purity, HPLC verified, COA available.",
  alternates: { canonical: "https://peptidelab.com/products" },
  openGraph: {
    title: "All Research Peptides | PeptideLab",
    description: "20+ research-grade peptides — ≥99% purity, HPLC verified, COA available.",
    url: "https://peptidelab.com/products",
  },
}

export default function ProductsPage() {
  const inStock = products.filter((p) => p.in_stock)
  const outStock = products.filter((p) => !p.in_stock)
  const sorted = [...inStock, ...outStock]

  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-16 border-b border-[rgba(0,212,255,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-4">
            <FlaskConical className="w-6 h-6 text-[#00d4ff]" />
            <p className="text-xs font-bold text-[#00d4ff] uppercase tracking-widest">All Products</p>
          </div>
          <h1 className="text-5xl font-bold text-white mb-3">Research Peptides</h1>
          <p className="text-[rgba(255,255,255,0.55)] text-lg max-w-2xl">
            {products.length} research-grade peptides — ≥99% HPLC purity, third-party tested, COA provided. For research use only.
          </p>

          {/* Category filter pills */}
          <div className="flex flex-wrap gap-2 mt-8">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border border-[rgba(0,212,255,0.3)] text-[#00d4ff] bg-[rgba(0,212,255,0.08)]">
              <Filter className="w-3 h-3" /> All ({products.length})
            </span>
            {categories.map((cat) => {
              const count = products.filter((p) => p.categories.includes(cat.name)).length
              return (
                <Link
                  key={cat.slug}
                  href={`/categories/${cat.slug}`}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold border border-[rgba(255,255,255,0.1)] text-[rgba(255,255,255,0.6)] hover:border-[rgba(0,212,255,0.3)] hover:text-[#00d4ff] transition-all"
                >
                  {cat.name} ({count})
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Product grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {sorted.map((product, i) => (
            <ProductCard key={product.slug} product={product} priority={i < 4} />
          ))}
        </div>
      </section>

      {/* Disclaimer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
        <div className="p-4 rounded-xl border border-[rgba(255,165,0,0.2)] bg-[rgba(255,165,0,0.05)]">
          <p className="text-xs text-[rgba(255,165,0,0.8)] leading-relaxed">
            ⚗️ <strong className="text-[rgba(255,165,0,1)]">Research Use Only:</strong> All peptides are sold strictly for laboratory research purposes. Not for human consumption. Not for veterinary use. PeptideLab earns affiliate commissions at no extra cost to you.
          </p>
        </div>
      </div>
    </PageLayout>
  )
}
