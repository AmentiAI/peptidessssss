"use client"
import { useState, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, FlaskConical, ExternalLink } from "lucide-react"
import { categories } from "@/lib/peptide-data"

const NAV_LINKS = [
  { href: "/products", label: "Products" },
  { href: "/stacks", label: "Stacks" },
  { href: "/blog", label: "Research Blog" },
  { href: "/guides", label: "Guides" },
  { href: "/about", label: "About" },
]

export function Navigation() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [catOpen, setCatOpen] = useState(false)
  const catTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  function openCat() {
    if (catTimeout.current) clearTimeout(catTimeout.current)
    setCatOpen(true)
  }
  function closeCat() {
    catTimeout.current = setTimeout(() => setCatOpen(false), 200)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[rgba(0,212,255,0.1)]" style={{ background: "rgba(6,6,18,0.92)", backdropFilter: "blur(20px)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)" }}>
            <FlaskConical className="w-4 h-4 text-black" />
          </div>
          <span className="text-xl font-bold tracking-tight">
            Peptide<span style={{ color: "#00d4ff" }}>Lab</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                pathname === link.href
                  ? "text-[#00d4ff] bg-[rgba(0,212,255,0.08)]"
                  : "text-[rgba(255,255,255,0.7)] hover:text-white hover:bg-[rgba(255,255,255,0.05)]"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Categories dropdown */}
          <div className="relative" onMouseEnter={openCat} onMouseLeave={closeCat} onFocus={openCat} onBlur={closeCat}>
            <button className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
              pathname.startsWith("/categories")
                ? "text-[#00d4ff] bg-[rgba(0,212,255,0.08)]"
                : "text-[rgba(255,255,255,0.7)] hover:text-white hover:bg-[rgba(255,255,255,0.05)]"
            }`}>
              Categories
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${catOpen ? "rotate-180" : ""}`} />
            </button>

            {catOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 rounded-xl border border-[rgba(0,212,255,0.15)] shadow-2xl shadow-black/60 overflow-hidden z-50"
                style={{ background: "rgba(10,10,28,0.97)", backdropFilter: "blur(20px)" }}>
                <div className="p-3 grid gap-0.5">
                  {categories.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/categories/${cat.slug}`}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-[rgba(255,255,255,0.7)] hover:text-white hover:bg-[rgba(0,212,255,0.08)] transition-all duration-150 group"
                    >
                      <span className="text-base" style={{ color: cat.color }}>●</span>
                      <span className="font-medium">{cat.name}</span>
                    </Link>
                  ))}
                  <div className="border-t border-[rgba(255,255,255,0.06)] mt-1 pt-1">
                    <Link href="/categories" className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs text-[rgba(255,255,255,0.45)] hover:text-[#00d4ff] transition-colors">
                      View all categories →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/products"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold text-black transition-all duration-150 hover:opacity-90 hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)", boxShadow: "0 0 20px rgba(0,212,255,0.2)" }}
          >
            Shop Peptides
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-lg text-[rgba(255,255,255,0.7)] hover:text-white hover:bg-[rgba(255,255,255,0.05)] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[rgba(0,212,255,0.1)]" style={{ background: "rgba(6,6,18,0.98)" }}>
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-[#00d4ff] bg-[rgba(0,212,255,0.08)]"
                    : "text-[rgba(255,255,255,0.7)] hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile categories */}
            <div className="px-4 py-2 text-xs font-semibold text-[rgba(255,255,255,0.4)] uppercase tracking-widest mt-2">
              Categories
            </div>
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/categories/${cat.slug}`}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-[rgba(255,255,255,0.65)] hover:text-white transition-colors"
              >
                <span style={{ color: cat.color }}>●</span>
                {cat.name}
              </Link>
            ))}

            <Link
              href="/products"
              onClick={() => setMobileOpen(false)}
              className="mt-4 mx-0 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-black"
              style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)" }}
            >
              Shop All Peptides
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
