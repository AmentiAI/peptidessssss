import type { Metadata } from "next"
import { PageLayout } from "@/components/peptide-hub/page-layout"
import { ProductCard } from "@/components/peptide-hub/product-card"
import { getAllProducts, getAllCategories } from "@/lib/peptide-data"
import { FlaskConical, Filter } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "All Research Peptides — Full Catalog | BPC-157, Tirzepatide, Epithalon & 60+ More",
  description:
    "Browse all 62+ research peptides from Pantheon Peptides. BPC-157, TB-500, Tirzepatide, Retatrutide, Epithalon, Semax, GHK-Cu, PT-141, Cerebrolysin, and more.",
  alternates: { canonical: "https://www.peptidesmaxxing.com/products" },
  openGraph: {
    title: "All Research Peptides — Full Catalog",
    description: "62+ research-grade peptides from Pantheon Peptides — BPC-157, Tirzepatide, Epithalon, Semax, GHK-Cu, complete peptide cycles.",
    url: "https://www.peptidesmaxxing.com/products",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "All Research Peptides — 62+ Compounds",
    description: "Browse the full Pantheon Peptides catalog — BPC-157, Tirzepatide, Epithalon, Semax, GHK-Cu, and more.",
  },
}

export default async function ProductsPage() {
  const [products, categories] = await Promise.all([getAllProducts(), getAllCategories()])

  const inStock = products.filter((p) => p.isInStock)
  const outStock = products.filter((p) => !p.isInStock)
  const sorted = [...inStock, ...outStock]

  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-4">
            <FlaskConical className="w-6 h-6 text-blue-600" />
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">All Products</p>
          </div>
          <h1 className="text-5xl font-bold text-slate-900 mb-3">Research Peptides</h1>
          <p className="text-slate-500 text-lg max-w-2xl">
            {products.length} research-grade peptides from Pantheon Peptides. For research use only.
          </p>

          {/* Category filter pills */}
          <div className="flex flex-wrap gap-2 mt-8">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border border-slate-900 text-slate-900 bg-slate-50">
              <Filter className="w-3 h-3" /> All ({products.length})
            </span>
            {categories.map((cat) => {
              const count = products.filter((p) => p.categories.includes(cat.name)).length
              if (count === 0) return null
              return (
                <Link
                  key={cat.slug}
                  href={`/categories/${cat.slug}`}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold border border-slate-200 text-slate-600 hover:border-slate-900 hover:text-slate-900 transition-all"
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
        <div className="p-4 rounded-xl border border-amber-200 bg-amber-50">
          <p className="text-xs text-amber-800 leading-relaxed">
            <strong className="text-amber-900">Research Use Only:</strong> All peptides are sold strictly for
            laboratory research purposes. Not for human consumption. Not for veterinary use. PeptidesMaxxing earns
            affiliate commissions at no extra cost to you.
          </p>
        </div>
      </div>
    </PageLayout>
  )
}
