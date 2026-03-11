import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, FlaskConical, Zap, TrendingUp, Clock, Brain, Flame, Heart, Shield, Star, Package, Package2 } from "lucide-react"
import { PageLayout } from "@/components/peptide-hub/page-layout"
import { getAllCategories, getAllProducts } from "@/lib/peptide-data"

export const metadata: Metadata = {
  title: "Peptide Categories — Muscle Growth, Fat Loss, Anti-Aging, Brain & Longevity",
  description:
    "Shop peptides by goal — muscle growth (BPC-157, Ipamorelin, CJC-1295), anti-aging (Epithalon, GHK-Cu), fat loss (Tirzepatide, AOD9604), cognitive (Semax, Selank), immunity, libido, and skin peptides from Pantheon Peptides.",
  alternates: { canonical: "https://www.peptidesmaxxing.com/categories" },
  openGraph: {
    title: "Peptide Categories — Muscle Growth, Fat Loss, Anti-Aging, Brain & Longevity",
    description: "Muscle growth, anti-aging, weight loss, brain, immunity, libido, and skin peptides — 62+ options from Pantheon Peptides including BPC-157, Tirzepatide, Epithalon, Semax, GHK-Cu, and more.",
    url: "https://www.peptidesmaxxing.com/categories",
    type: "website",
    images: [{ url: "https://www.peptidesmaxxing.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peptide Categories — Shop by Goal | Muscle, Anti-Aging, Fat Loss & More",
    description: "Find your peptide: BPC-157 for recovery, Tirzepatide for fat loss, Epithalon for anti-aging, Semax for focus, GHK-Cu for skin — 62+ options from Pantheon Peptides.",
  },
}

const ICON_MAP: Record<string, React.ElementType> = {
  Zap, TrendingUp, Clock, Brain, Flame, Heart, Shield, Star, Package, Package2, FlaskConical,
}

export default async function CategoriesPage() {
  const [categories, products] = await Promise.all([getAllCategories(), getAllProducts()])

  return (
    <PageLayout>
      <section className="py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">Browse by Goal</p>
          <h1 className="text-5xl font-bold text-slate-900 mb-3">Peptide Categories</h1>
          <p className="text-slate-500 text-lg max-w-2xl">
            Every research peptide organized by primary application. Find the right compounds for your research goals.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat) => {
            const Icon = ICON_MAP[cat.icon ?? ""] ?? FlaskConical
            const catProducts = products.filter((p) => p.categories.includes(cat.name))
            return (
              <Link
                key={cat.slug}
                href={`/categories/${cat.slug}`}
                className="group p-7 rounded-2xl border border-slate-200 bg-white hover:border-slate-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-5">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${cat.color}15`, border: `1px solid ${cat.color}30` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: cat.color ?? "#0f172a" }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {cat.name}
                      </h2>
                      <span
                        className="text-xs font-semibold px-2.5 py-1 rounded-full"
                        style={{ background: `${cat.color}15`, color: cat.color ?? "#0f172a" }}
                      >
                        {catProducts.length} peptides
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">{cat.description}</p>
                    <span
                      className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                      style={{ color: cat.color ?? "#2563eb" }}
                    >
                      Explore {cat.name} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    </PageLayout>
  )
}
