import Link from "next/link"
import { FlaskConical, Shield, Award, Truck } from "lucide-react"
import { categories } from "@/lib/peptide-data"

const PRODUCT_LINKS = [
  { href: "/products", label: "All Peptides" },
  { href: "/categories/recovery-repair", label: "Recovery & Repair" },
  { href: "/categories/growth-hormone-peptides", label: "GH Peptides" },
  { href: "/categories/anti-aging-longevity", label: "Anti-Aging" },
  { href: "/categories/cognitive-nootropic", label: "Cognitive" },
  { href: "/stacks", label: "Research Stacks" },
]

const RESOURCE_LINKS = [
  { href: "/blog", label: "Research Blog" },
  { href: "/guides", label: "Research Guides" },
  { href: "/guides/peptide-storage-reconstitution-guide", label: "Storage Guide" },
  { href: "/guides/peptide-purity-testing-guide", label: "Purity Guide" },
  { href: "/about", label: "About PeptideLab" },
]

export function Footer() {
  return (
    <footer className="border-t border-[rgba(0,212,255,0.1)] mt-20 relative z-10" style={{ background: "rgba(6,6,18,0.95)" }}>
      {/* Trust bar */}
      <div className="border-b border-[rgba(255,255,255,0.05)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: Shield, label: "≥99% Purity", sub: "HPLC Verified" },
              { icon: Award, label: "Third-Party Tested", sub: "COA Available" },
              { icon: Truck, label: "Free Shipping $200+", sub: "USA Domestic" },
              { icon: FlaskConical, label: "Research Grade", sub: "For Lab Use Only" },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(0,212,255,0.1)" }}>
                  <Icon className="w-5 h-5 text-[#00d4ff]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{label}</p>
                  <p className="text-xs text-[rgba(255,255,255,0.45)]">{sub}</p>
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
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)" }}>
              <FlaskConical className="w-4 h-4 text-black" />
            </div>
            <span className="text-xl font-bold">
              Peptide<span style={{ color: "#00d4ff" }}>Lab</span>
            </span>
          </Link>
          <p className="text-sm text-[rgba(255,255,255,0.5)] leading-relaxed">
            The definitive resource for research peptide information, reviews, and sourcing guidance.
          </p>
          <div className="mt-4 p-3 rounded-xl border border-[rgba(255,165,0,0.2)] bg-[rgba(255,165,0,0.05)]">
            <p className="text-xs text-[rgba(255,165,0,0.8)] leading-relaxed">
              ⚗️ For research use only. Not for human consumption.
            </p>
          </div>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-4">Products</h4>
          <ul className="space-y-2.5">
            {PRODUCT_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-[rgba(255,255,255,0.5)] hover:text-[#00d4ff] transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-4">Resources</h4>
          <ul className="space-y-2.5">
            {RESOURCE_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-[rgba(255,255,255,0.5)] hover:text-[#00d4ff] transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-4">Categories</h4>
          <ul className="space-y-2.5">
            {categories.slice(0, 6).map((cat) => (
              <li key={cat.slug}>
                <Link href={`/categories/${cat.slug}`} className="text-sm text-[rgba(255,255,255,0.5)] hover:text-[#00d4ff] transition-colors flex items-center gap-1.5">
                  <span style={{ color: cat.color }}>●</span>
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[rgba(255,255,255,0.05)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[rgba(255,255,255,0.3)] text-center sm:text-left">
            © {new Date().getFullYear()} PeptideLab. All rights reserved. For research use only.
          </p>
          <p className="text-xs text-[rgba(255,255,255,0.3)] text-center sm:text-right">
            PeptideLab is an affiliate site. We earn commissions from purchases at no extra cost to you.
          </p>
        </div>
      </div>
    </footer>
  )
}
