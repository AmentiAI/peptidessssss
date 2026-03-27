import Link from "next/link"
import Image from "next/image"
import { Shield, Award, ExternalLink, ArrowUpRight } from "lucide-react"
import { staticCategories, AFFILIATE_URL } from "@/lib/static-products"

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
  { href: "/tools", label: "Research Tools" },
  { href: "/about", label: "About PeptidesMaxxing" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/sitemap.xml", label: "Sitemap" },
]

const PARTNER_LINKS = [
  { href: "https://looksmaxingstack.com", label: "LooksMaxingStack.com" },
  { href: "https://looksmaxingstack.com/compare", label: "Compare Peptides" },
  { href: "https://looksmaxingstack.com/stacks", label: "Research Stacks" },
  { href: "https://looksmaxingstack.com/guides", label: "Partner Guides" },
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
              { icon: Award, label: "COA Verified", sub: "Research grade" },
              { icon: ExternalLink, label: "62+ Products", sub: "Full catalog available" },
              { icon: ExternalLink, label: "Independent Resource", sub: "Science-first editorial" },
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-2 md:grid-cols-5 gap-8">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="flex items-center gap-2.5 mb-4">
            <Image
              src="/images/site-logo.png"
              alt="PeptidesMaxxing"
              width={36}
              height={36}
              className="rounded-lg"
            />
            <span className="text-xl font-bold text-slate-900">
              Peptides<span className="text-blue-600">Maxxing</span>
            </span>
          </Link>
          <p className="text-sm text-slate-500 leading-relaxed mb-4">
            The definitive independent resource for research peptide information.
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
                Shop Research Peptides <ExternalLink className="w-3 h-3" />
              </a>
            </li>
          </ul>
        </div>

        {/* Partner */}
        <div>
          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">Research Partner</h4>
          <ul className="space-y-2.5">
            {PARTNER_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-500 hover:text-violet-600 transition-colors flex items-center gap-1"
                >
                  {link.label}
                  {link.href === "https://looksmaxingstack.com" && (
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  )}
                </a>
              </li>
            ))}
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
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <a href="/privacy" className="hover:text-slate-600 transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-slate-600 transition-colors">Terms</a>
            <span>PeptidesMaxxing may earn compensation from purchases made through links on this site, at no extra cost to you.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
