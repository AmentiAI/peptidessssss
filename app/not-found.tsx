import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, FlaskConical, Search } from "lucide-react"
import { PageLayout } from "@/components/peptide-hub/page-layout"

export const metadata: Metadata = {
  title: "Page Not Found — PeptidesMaxxing Research Peptides",
  description: "The page you're looking for doesn't exist. Browse 62+ research-grade peptides — BPC-157, Tirzepatide, Epithalon, Semax & more.",
  robots: { index: false, follow: true },
}

const QUICK_LINKS = [
  { href: "/products", label: "All Peptides", desc: "Browse 62+ research compounds" },
  { href: "/stacks", label: "Cycles & Stacks", desc: "Pre-built research protocols" },
  { href: "/categories/muscle-growth", label: "Muscle Growth", desc: "Ipamorelin, CJC-1295, GHRP-2" },
  { href: "/categories/anti-aging", label: "Anti-Aging", desc: "Epithalon, GHK-Cu, MOTS-C" },
  { href: "/categories/weight-loss", label: "Weight Loss", desc: "Tirzepatide, Retatrutide, AOD9604" },
  { href: "/tools", label: "Research Tools", desc: "Calculators & peptide finder" },
]

export default function NotFound() {
  return (
    <PageLayout>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-24 text-center">
        <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto mb-6">
          <Search className="w-8 h-8 text-blue-500" />
        </div>
        <h1 className="text-5xl font-bold text-slate-900 mb-4">404</h1>
        <p className="text-xl font-semibold text-slate-700 mb-3">Page not found</p>
        <p className="text-slate-500 mb-10 max-w-md mx-auto leading-relaxed">
          This page doesn&apos;t exist or has moved. Use the links below to find what you&apos;re looking for.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-12 text-left">
          {QUICK_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all group"
            >
              <FlaskConical className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">{link.label}</p>
                <p className="text-xs text-slate-500 mt-0.5">{link.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white text-sm font-bold hover:bg-slate-700 transition-colors"
        >
          Back to Homepage
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </PageLayout>
  )
}
