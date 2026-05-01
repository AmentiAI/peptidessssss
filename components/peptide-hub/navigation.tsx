"use client"
import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  Menu, X, ChevronDown, ExternalLink,
  Activity, Flame, Sparkles, Brain, Dumbbell,
  Search, BookOpen, FlaskConical, Layers,
} from "lucide-react"
import { staticCategories, AFFILIATE_URL } from "@/lib/static-products"
import { ProductSearch } from "./product-search"

const GOAL_LINKS = [
  { href: "/recovery",      label: "Recovery & Repair", desc: "BPC-157, TB-500, LL-37",       icon: Activity, color: "#ef4444" },
  { href: "/fat-loss",      label: "Fat Loss",          desc: "Tirzepatide, Retatrutide",       icon: Flame,    color: "#f97316" },
  { href: "/anti-aging",    label: "Anti-Aging",        desc: "Epithalon, GHK-Cu, MOTS-C",     icon: Sparkles, color: "#8b5cf6" },
  { href: "/cognitive",     label: "Cognitive",         desc: "Semax, Selank, Cerebrolysin",    icon: Brain,    color: "#3b82f6" },
  { href: "/muscle-growth", label: "Muscle Growth",     desc: "IGF-1LR3, GHRP-2, Ipamorelin",  icon: Dumbbell, color: "#22c55e" },
]

const MORE_LINKS = [
  { href: "/stacks",    label: "Stacks", desc: "Pre-built peptide stacks",  icon: Layers },
  { href: "/protocols", label: "Protocols",        desc: "Dosing & cycle guides",      icon: FlaskConical },
  { href: "/guides",    label: "Guides",           desc: "In-depth peptide guides",       icon: BookOpen },
  { href: "/blog",      label: "Blog",             desc: "News & buyer's articles",       icon: BookOpen },
]

export function Navigation() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen]   = useState(false)
  const [searchOpen, setSearchOpen]   = useState(false)
  const [catOpen,    setCatOpen]      = useState(false)
  const [goalOpen,   setGoalOpen]     = useState(false)
  const [moreOpen,   setMoreOpen]     = useState(false)
  const catTimeout  = useRef<ReturnType<typeof setTimeout> | null>(null)
  const goalTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  const moreTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  const makeHandlers = (
    open: () => void,
    close: () => void,
  ) => ({ onMouseEnter: open, onMouseLeave: close, onFocus: open, onBlur: close })

  function openCat()  { if (catTimeout.current)  clearTimeout(catTimeout.current);  setCatOpen(true) }
  function closeCat() { catTimeout.current  = setTimeout(() => setCatOpen(false),  180) }
  function openGoal() { if (goalTimeout.current) clearTimeout(goalTimeout.current); setGoalOpen(true) }
  function closeGoal(){ goalTimeout.current = setTimeout(() => setGoalOpen(false), 180) }
  function openMore() { if (moreTimeout.current) clearTimeout(moreTimeout.current); setMoreOpen(true) }
  function closeMore(){ moreTimeout.current = setTimeout(() => setMoreOpen(false), 180) }

  const displayCategories = staticCategories.filter(
    (c) => c.name !== "Supplies" && c.name !== "Peptides Cycles"
  )

  const isGoalActive = GOAL_LINKS.some((g) => pathname === g.href)
  const isMoreActive = MORE_LINKS.some((m) => pathname === m.href)

  const dropdownItem = "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all duration-150"
  const navBtn = (active: boolean) =>
    `flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-150 ${
      active ? "text-slate-900 bg-slate-100" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
    }`

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 h-[62px] flex items-center gap-4">

        {/* ── Logo ─────────────────────────────────────────── */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0 group mr-2">
          <Image
            src="/images/site-logo.png"
            alt="PeptidesMaxxing"
            width={34}
            height={34}
            className="rounded-lg"
            priority
          />
          <span className="text-lg font-bold tracking-tight text-slate-900 hidden sm:block">
            Peptides<span className="text-blue-600">Maxxing</span>
          </span>
        </Link>

        {/* ── Desktop nav (centered, flex-1) ───────────────── */}
        <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">

          {/* Products */}
          <Link
            href="/products"
            className={navBtn(pathname === "/products")}
          >
            Products
          </Link>

          {/* Compare */}
          <Link
            href="/compare"
            className={navBtn(pathname === "/compare")}
          >
            Compare
          </Link>

          {/* Science */}
          <Link
            href="/science"
            className={navBtn(pathname === "/science")}
          >
            Science
          </Link>

          {/* By Goal dropdown */}
          <div className="relative" {...makeHandlers(openGoal, closeGoal)}>
            <button className={navBtn(isGoalActive)}>
              By Goal
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${goalOpen ? "rotate-180" : ""}`} />
            </button>
            {goalOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 rounded-2xl border border-slate-200 shadow-xl bg-white overflow-hidden z-50">
                <div className="p-2">
                  {GOAL_LINKS.map(({ href, label, desc, icon: Icon, color }) => (
                    <Link key={href} href={href} className={dropdownItem}>
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${color}18` }}>
                        <Icon className="w-4 h-4" style={{ color }} />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 text-sm">{label}</div>
                        <div className="text-[11px] text-slate-400 leading-tight">{desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Categories dropdown */}
          <div className="relative" {...makeHandlers(openCat, closeCat)}>
            <button className={navBtn(pathname.startsWith("/categories"))}>
              Categories
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${catOpen ? "rotate-180" : ""}`} />
            </button>
            {catOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 rounded-2xl border border-slate-200 shadow-xl bg-white overflow-hidden z-50">
                <div className="p-2">
                  {displayCategories.map((cat) => (
                    <Link key={cat.slug} href={`/categories/${cat.slug}`} className={dropdownItem}>
                      <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: cat.color ?? "#94a3b8" }} />
                      <span className="font-medium">{cat.name}</span>
                    </Link>
                  ))}
                  <div className="border-t border-slate-100 mt-1 pt-1">
                    <Link href="/categories" className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-slate-500 hover:text-blue-600 transition-colors">
                      View all categories →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* More dropdown */}
          <div className="relative" {...makeHandlers(openMore, closeMore)}>
            <button className={navBtn(isMoreActive)}>
              More
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${moreOpen ? "rotate-180" : ""}`} />
            </button>
            {moreOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 rounded-2xl border border-slate-200 shadow-xl bg-white overflow-hidden z-50">
                <div className="p-2">
                  {MORE_LINKS.map(({ href, label, desc, icon: Icon }) => (
                    <Link key={href} href={href} className={dropdownItem}>
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-slate-100">
                        <Icon className="w-4 h-4 text-slate-500" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 text-sm">{label}</div>
                        <div className="text-[11px] text-slate-400 leading-tight">{desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* ── Right: Search + CTA ──────────────────────────── */}
        <div className="hidden lg:flex items-center gap-2.5 shrink-0 ml-2">
          <div className="w-56 xl:w-72">
            <ProductSearch />
          </div>
          <Link
            href={AFFILIATE_URL}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-bold bg-slate-900 text-white hover:bg-slate-700 transition-colors shrink-0"
          >
            Shop
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* ── Mobile: search + hamburger ───────────────────── */}
        <div className="lg:hidden flex items-center gap-1 ml-auto">
          <button
            className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            onClick={() => { setSearchOpen(!searchOpen); setMobileOpen(false) }}
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            onClick={() => { setMobileOpen(!mobileOpen); setSearchOpen(false) }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile search */}
      {searchOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 py-3">
          <ProductSearch onClose={() => setSearchOpen(false)} />
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 flex flex-col gap-0.5">

            <Link href="/products"  onClick={() => setMobileOpen(false)} className="px-4 py-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50">Products</Link>
            <Link href="/compare"   onClick={() => setMobileOpen(false)} className="px-4 py-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50">Compare</Link>
            <Link href="/science"   onClick={() => setMobileOpen(false)} className="px-4 py-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50">Science</Link>
            <Link href="/stacks"    onClick={() => setMobileOpen(false)} className="px-4 py-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50">Peptide Stacks</Link>
            <Link href="/protocols" onClick={() => setMobileOpen(false)} className="px-4 py-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50">Protocols</Link>
            <Link href="/guides"    onClick={() => setMobileOpen(false)} className="px-4 py-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50">Guides</Link>
            <Link href="/blog"      onClick={() => setMobileOpen(false)} className="px-4 py-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50">Blog</Link>

            <p className="px-4 pt-4 pb-1 text-[11px] font-bold text-slate-400 uppercase tracking-widest">By Goal</p>
            {GOAL_LINKS.map(({ href, label, icon: Icon, color }) => (
              <Link key={href} href={href} onClick={() => setMobileOpen(false)} className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-slate-600 hover:bg-slate-50">
                <div className="w-6 h-6 rounded-md flex items-center justify-center shrink-0" style={{ background: `${color}18` }}>
                  <Icon className="w-3.5 h-3.5" style={{ color }} />
                </div>
                {label}
              </Link>
            ))}

            <p className="px-4 pt-4 pb-1 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Categories</p>
            {displayCategories.map((cat) => (
              <Link key={cat.slug} href={`/categories/${cat.slug}`} onClick={() => setMobileOpen(false)} className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-slate-600 hover:bg-slate-50">
                <span className="w-2 h-2 rounded-full shrink-0" style={{ background: cat.color ?? "#94a3b8" }} />
                {cat.name}
              </Link>
            ))}

            <Link
              href={AFFILIATE_URL}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold bg-slate-900 text-white"
            >
              Shop All Peptides <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
