"use client"
import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, ExternalLink, Activity, Flame, Sparkles, Brain, Dumbbell } from "lucide-react"
import { staticCategories, AFFILIATE_URL } from "@/lib/static-products"

const NAV_LINKS = [
  { href: "/products", label: "Products" },
  { href: "/stacks", label: "Cycles & Stacks" },
  { href: "/compare", label: "Compare" },
  { href: "/protocols", label: "Protocols" },
  { href: "/science", label: "Science" },
  { href: "/blog", label: "Blog" },
  { href: "/guides", label: "Guides" },
]

const GOAL_LINKS = [
  { href: "/recovery", label: "Recovery & Repair", desc: "BPC-157, TB-500, LL-37", icon: Activity, color: "#ef4444" },
  { href: "/fat-loss", label: "Fat Loss", desc: "Tirzepatide, Retatrutide", icon: Flame, color: "#f97316" },
  { href: "/anti-aging", label: "Anti-Aging", desc: "Epithalon, GHK-Cu, MOTS-C", icon: Sparkles, color: "#8b5cf6" },
  { href: "/cognitive", label: "Cognitive", desc: "Semax, Selank, Cerebrolysin", icon: Brain, color: "#3b82f6" },
  { href: "/muscle-growth", label: "Muscle Growth", desc: "IGF-1LR3, GHRP-2, Ipamorelin", icon: Dumbbell, color: "#22c55e" },
]

export function Navigation() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [catOpen, setCatOpen] = useState(false)
  const [goalOpen, setGoalOpen] = useState(false)
  const catTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  const goalTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  function openCat() {
    if (catTimeout.current) clearTimeout(catTimeout.current)
    setCatOpen(true)
  }
  function closeCat() {
    catTimeout.current = setTimeout(() => setCatOpen(false), 200)
  }
  function openGoal() {
    if (goalTimeout.current) clearTimeout(goalTimeout.current)
    setGoalOpen(true)
  }
  function closeGoal() {
    goalTimeout.current = setTimeout(() => setGoalOpen(false), 200)
  }

  const displayCategories = staticCategories.filter((c) => c.name !== "Supplies" && c.name !== "Peptides Cycles")

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image
            src="/images/site-logo.png"
            alt="PeptidesMaxxing"
            width={36}
            height={36}
            className="rounded-lg"
            priority
          />
          <span className="text-xl font-bold tracking-tight text-slate-900">
            Peptides<span className="text-blue-600">Maxxing</span>
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
                  ? "text-slate-900 bg-slate-100"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Categories dropdown */}
          <div className="relative" onMouseEnter={openCat} onMouseLeave={closeCat} onFocus={openCat} onBlur={closeCat}>
            <button
              className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                pathname.startsWith("/categories")
                  ? "text-slate-900 bg-slate-100"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              Categories
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${catOpen ? "rotate-180" : ""}`} />
            </button>

            {catOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 rounded-xl border border-slate-200 shadow-xl overflow-hidden z-50 bg-white">
                <div className="p-3 grid gap-0.5">
                  {displayCategories.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/categories/${cat.slug}`}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all duration-150"
                    >
                      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: cat.color ?? "#94a3b8" }} />
                      <span className="font-medium">{cat.name}</span>
                    </Link>
                  ))}
                  <div className="border-t border-slate-100 mt-1 pt-1">
                    <Link
                      href="/categories"
                      className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs text-slate-500 hover:text-blue-600 transition-colors"
                    >
                      View all categories →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* By Goal dropdown */}
          <div className="relative" onMouseEnter={openGoal} onMouseLeave={closeGoal} onFocus={openGoal} onBlur={closeGoal}>
            <button
              className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                GOAL_LINKS.some((g) => pathname === g.href)
                  ? "text-slate-900 bg-slate-100"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              By Goal
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${goalOpen ? "rotate-180" : ""}`} />
            </button>

            {goalOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 rounded-xl border border-slate-200 shadow-xl overflow-hidden z-50 bg-white">
                <div className="p-3 grid gap-0.5">
                  {GOAL_LINKS.map(({ href, label, desc, icon: Icon, color }) => (
                    <Link
                      key={href}
                      href={href}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all duration-150"
                    >
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${color}18` }}>
                        <Icon className="w-3.5 h-3.5" style={{ color }} />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">{label}</div>
                        <div className="text-[11px] text-slate-400">{desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href={AFFILIATE_URL}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold bg-slate-900 text-white hover:bg-slate-700 transition-colors"
          >
            Shop Peptides
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-slate-900 bg-slate-100"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile goals */}
            <div className="px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-widest mt-2">
              By Goal
            </div>
            {GOAL_LINKS.map(({ href, label, icon: Icon, color }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                <div className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0" style={{ background: `${color}18` }}>
                  <Icon className="w-3.5 h-3.5" style={{ color }} />
                </div>
                {label}
              </Link>
            ))}

            {/* Mobile categories */}
            <div className="px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-widest mt-2">
              Categories
            </div>
            {displayCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/categories/${cat.slug}`}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: cat.color ?? "#94a3b8" }} />
                {cat.name}
              </Link>
            ))}

            <Link
              href={AFFILIATE_URL}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold bg-slate-900 text-white"
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
