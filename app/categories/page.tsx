import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, FlaskConical, Zap, TrendingUp, Clock, Brain, Flame, Heart, Shield } from "lucide-react"
import { PageLayout } from "@/components/peptide-hub/page-layout"
import { categories, products } from "@/lib/peptide-data"

export const metadata: Metadata = {
  title: "Peptide Categories — Browse by Research Goal | PeptideLab",
  description:
    "Browse research peptides by category: Recovery & Repair, Growth Hormone, Anti-Aging, Cognitive, Body Composition, Sexual Health, and Anti-Inflammatory.",
  alternates: { canonical: "https://peptidelab.com/categories" },
}

const ICON_MAP: Record<string, React.ElementType> = {
  Zap, TrendingUp, Clock, Brain, Flame, Heart, Shield,
}

export default function CategoriesPage() {
  return (
    <PageLayout>
      <section className="py-16 border-b border-[rgba(0,212,255,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-bold text-[#00d4ff] uppercase tracking-widest mb-3">Browse by Goal</p>
          <h1 className="text-5xl font-bold text-white mb-3">Peptide Categories</h1>
          <p className="text-[rgba(255,255,255,0.55)] text-lg max-w-2xl">
            Every research peptide organized by primary application. Find the right compounds for your research goals.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat) => {
            const Icon = ICON_MAP[cat.icon] ?? FlaskConical
            const catProducts = products.filter((p) => p.categories.includes(cat.name))
            return (
              <Link
                key={cat.slug}
                href={`/categories/${cat.slug}`}
                className="group p-7 rounded-2xl border border-[rgba(255,255,255,0.07)] hover:border-[rgba(0,212,255,0.3)] transition-all duration-300 hover:-translate-y-1"
                style={{ background: "rgba(12,12,32,0.7)" }}
              >
                <div className="flex items-start gap-5">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${cat.color}12`, border: `1px solid ${cat.color}25` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: cat.color }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-xl font-bold text-white group-hover:text-[#00d4ff] transition-colors">{cat.name}</h2>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: `${cat.color}15`, color: cat.color }}>
                        {catProducts.length} peptides
                      </span>
                    </div>
                    <p className="text-sm text-[rgba(255,255,255,0.55)] leading-relaxed mb-4">{cat.description}</p>

                    {/* Stats strip */}
                    <div className="flex flex-wrap gap-3 mb-4">
                      {cat.stats.slice(0, 3).map((stat) => (
                        <div key={stat.label} className="text-center">
                          <p className="text-sm font-bold" style={{ color: cat.color }}>{stat.value}</p>
                          <p className="text-[10px] text-[rgba(255,255,255,0.4)]">{stat.label}</p>
                        </div>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors" style={{ color: cat.color }}>
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
