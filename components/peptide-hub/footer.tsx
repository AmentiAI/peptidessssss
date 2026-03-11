import Link from "next/link"
import { FlaskConical, Shield, Award, ExternalLink } from "lucide-react"
import { staticCategories } from "@/lib/static-products"

const AFFILIATE_URL =
  process.env.NEXT_PUBLIC_AFFILIATE_URL || "https://pantheonpeptides.com/partner/AmentiAI/"

const PRODUCT_LINKS = [
  { href: "/products", label: "All Peptides" },
  { href: "/categories/muscle-growth", label: "Muscle Growth" },
  { href: "/categories/anti-aging", label: "Anti-Aging" },
  { href: "/categories/weight-loss", label: "Weight Loss" },
  { href: "/categories/brain-nerve", label: "Brain / Nerve" },
  { href: "/stacks", label: "Peptide Cycles" },
]

const RESOURCE_LINKS = [
  { href: "/blog", label: "Research Blog" },
  { href: "/guides", label: "Research Guides" },
  { href: "/about", label: "About PeptidesMaxxing" },
]

export function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-20 bg-white">
      {/* Trust bar */}
      <div className="border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: Shield, label: "Research Grade", sub: "For laboratory use only" },
              { icon: Award, label: "Pantheon Peptides", sub: "Trusted supplier" },
              { icon: FlaskConical, label: "60+ Products", sub: "Full catalog available" },
              { icon: ExternalLink, label: "Affiliate Site", sub: "We earn commissions" },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-slate-100">
                  <Icon className="w-5 h-5 text-slate-700" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{label}</p>
                  <p className="text-xs text-slate-500">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center">
              <FlaskConical className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">
              Peptides<span className="text-blue-600">Maxxing</span>
            </span>
          </Link>
          <p className="text-sm text-slate-500 leading-relaxed mb-4">
            The definitive resource for research peptide information from Pantheon Peptides.
          </p>
          <div className="p-3 rounded-xl border border-amber-200 bg-amber-50">
            <p className="text-xs text-amber-800 leading-relaxed">
              For research use only. Not for human consumption.
            </p>
          </div>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">Products</h4>
          <ul className="space-y-2.5">
            {PRODUCT_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">Resources</h4>
          <ul className="space-y-2.5">
            {RESOURCE_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="text-sm text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1"
              >
                Pantheon Peptides <ExternalLink className="w-3 h-3" />
              </a>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">Categories</h4>
          <ul className="space-y-2.5">
            {staticCategories.slice(0, 7).map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/categories/${cat.slug}`}
                  className="text-sm text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: cat.color ?? "#94a3b8" }} />
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-400 text-center sm:text-left">
            © {new Date().getFullYear()} PeptidesMaxxing. All rights reserved. For research use only.
          </p>
          <p className="text-xs text-slate-400 text-center sm:text-right">
            PeptidesMaxxing is an affiliate site. We earn commissions from purchases at no extra cost to you.
          </p>
        </div>
      </div>
    </footer>
  )
}
