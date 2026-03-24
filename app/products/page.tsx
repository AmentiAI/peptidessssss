import type { Metadata } from "next"
import { PageLayout } from "@/components/peptide-hub/page-layout"
import { ProductCard } from "@/components/peptide-hub/product-card"
import { getAllProducts, getAllCategories } from "@/lib/peptide-data"
import { FlaskConical, Filter, Shield, Zap, TrendingUp, Brain } from "lucide-react"
import Link from "next/link"

const CATEGORY_HIGHLIGHTS = [
  { icon: TrendingUp, label: "Muscle Growth", href: "/categories/muscle-growth", color: "#2563eb" },
  { icon: Zap, label: "Weight Loss", href: "/categories/weight-loss", color: "#dc2626" },
  { icon: Shield, label: "Anti-Aging", href: "/categories/anti-aging", color: "#7c3aed" },
  { icon: Brain, label: "Brain & Nerve", href: "/categories/brain-nerve", color: "#059669" },
]

export const metadata: Metadata = {
  title: "Buy BPC-157, Tirzepatide, Epithalon & 60+ Peptides",
  description:
    "62+ research-grade peptides. Browse by goal: muscle growth, fat loss, anti-aging, cognitive, immunity, and libido peptides. BPC-157, Tirzepatide, Epithalon & more.",
  alternates: { canonical: "https://www.peptidesmaxxing.com/products" },
  openGraph: {
    title: "Buy BPC-157, Tirzepatide, Epithalon, Ipamorelin, GHK-Cu & 60+ Peptides",
    description: "Buy BPC-157, Tirzepatide, Epithalon, Semax, GHK-Cu, Ipamorelin — 62+ research-grade peptides for muscle growth, fat loss, anti-aging, and cognitive goals.",
    url: "https://www.peptidesmaxxing.com/products",
    type: "website",
    images: [{ url: "https://www.peptidesmaxxing.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy BPC-157, Tirzepatide, Epithalon & 60+ Peptides — Full Catalog",
    description: "Full catalog: BPC-157, Tirzepatide, Epithalon, Semax, GHK-Cu, Ipamorelin, CJC-1295, TB-500, PT-141, Cerebrolysin — 62+ research-grade peptides.",
  },
}

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Research Peptides Catalog",
  description: "62+ research-grade peptides",
  url: "https://www.peptidesmaxxing.com/products",
}

export default async function ProductsPage() {
  const [products, categories] = await Promise.all([getAllProducts(), getAllCategories()])

  const inStock = products.filter((p) => p.isInStock)
  const outStock = products.filter((p) => !p.isInStock)
  const sorted = [...inStock, ...outStock]

  return (
    <PageLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      {/* Hero */}
      <section className="py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-4">
            <FlaskConical className="w-6 h-6 text-blue-600" />
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">All Products</p>
          </div>
          <h1 className="text-5xl font-bold text-slate-900 mb-3">Research Peptides</h1>
          <p className="text-slate-500 text-lg max-w-2xl">
            {products.length} research-grade peptides. For research use only.
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

      {/* Category shortcuts + intro */}
      <section className="py-10 border-b border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {CATEGORY_HIGHLIGHTS.map(({ icon: Icon, label, href, color }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200 hover:border-slate-400 hover:shadow-sm transition-all"
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${color}15` }}>
                  <Icon className="w-4 h-4" style={{ color }} />
                </div>
                <span className="text-sm font-semibold text-slate-800">{label}</span>
              </Link>
            ))}
          </div>
          <div className="max-w-3xl">
            <p className="text-sm text-slate-600 leading-relaxed">
              PeptidesMaxxing catalogs 62+ research-grade peptides from{" "}
              our trusted supplier{" "}
              — covering muscle growth (Ipamorelin, CJC-1295, IGF-1 LR3), fat loss (Tirzepatide, Retatrutide, AOD9604), anti-aging (Epithalon, GHK-Cu, MOTS-C), cognitive enhancement (Semax, Selank, Cerebrolysin), immunity (Thymosin Alpha-1, LL-37), and libido (PT-141, Kisspeptin-10).
              Use the{" "}
              <Link href="/tools" className="text-blue-600 hover:underline">Research Tools</Link>{" "}
              to calculate reconstitution volumes or find the right peptide for your goals. All compounds are for laboratory research use only.
            </p>
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
            laboratory research purposes. Not for human consumption. Not for veterinary use. PeptidesMaxxing may earn compensation from purchases made through links on this site, at no extra cost to you.
          </p>
        </div>
      </div>
    </PageLayout>
  )
}
