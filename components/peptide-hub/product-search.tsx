"use client"
import { useState, useEffect, useRef, useCallback } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Search, X, ArrowRight } from "lucide-react"
import { staticProducts } from "@/lib/static-products"

type Product = (typeof staticProducts)[number]

function scoreMatch(product: Product, query: string): number {
  const q = query.toLowerCase()
  const name = product.name.toLowerCase()
  const cats = product.categories.join(" ").toLowerCase()
  const desc = (product.shortDescription ?? "").toLowerCase()

  if (name === q) return 100
  if (name.startsWith(q)) return 90
  if (name.includes(q)) return 80
  if (cats.includes(q)) return 60
  if (desc.includes(q)) return 40

  // Word-level match
  const words = q.split(/\s+/).filter(Boolean)
  const matchedWords = words.filter(
    (w) => name.includes(w) || cats.includes(w) || desc.includes(w)
  )
  if (matchedWords.length === words.length) return 70
  if (matchedWords.length > 0) return 30 * (matchedWords.length / words.length)

  return 0
}

function search(query: string): Product[] {
  if (!query.trim()) return []
  const scored = staticProducts
    .map((p) => ({ product: p, score: scoreMatch(p, query) }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
  return scored.slice(0, 8).map((x) => x.product)
}

function highlight(text: string, query: string): string {
  if (!query.trim()) return text
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  return text.replace(new RegExp(`(${escaped})`, "gi"), "<mark>$1</mark>")
}

export function ProductSearch({ onClose }: { onClose?: () => void }) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<Product[]>([])
  const [focused, setFocused] = useState(false)
  const [activeIdx, setActiveIdx] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const router = useRouter()

  useEffect(() => {
    const r = search(query)
    setResults(r)
    setActiveIdx(-1)
  }, [query])

  const open = focused && (results.length > 0 || query.trim().length > 0)

  const go = useCallback(
    (slug: string) => {
      router.push(`/products/${slug}`)
      setQuery("")
      setFocused(false)
      onClose?.()
    },
    [router, onClose]
  )

  function onKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown") {
      e.preventDefault()
      setActiveIdx((i) => Math.min(i + 1, results.length - 1))
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setActiveIdx((i) => Math.max(i - 1, -1))
    } else if (e.key === "Enter") {
      if (activeIdx >= 0 && results[activeIdx]) {
        go(results[activeIdx].slug)
      } else if (results.length > 0) {
        go(results[0].slug)
      } else if (query.trim()) {
        router.push(`/products?q=${encodeURIComponent(query.trim())}`)
        setQuery("")
        setFocused(false)
        onClose?.()
      }
    } else if (e.key === "Escape") {
      setFocused(false)
      inputRef.current?.blur()
    }
  }

  // Scroll active item into view
  useEffect(() => {
    if (activeIdx >= 0 && listRef.current) {
      const item = listRef.current.children[activeIdx] as HTMLElement
      item?.scrollIntoView({ block: "nearest" })
    }
  }, [activeIdx])

  return (
    <div className="relative w-full">
      {/* Input */}
      <div className={`flex items-center gap-2 px-3 py-2 rounded-xl border bg-white transition-all duration-200 ${focused ? "border-cyan-400 ring-2 ring-cyan-100 shadow-sm" : "border-slate-200 hover:border-slate-300"}`}>
        <Search className="w-4 h-4 text-slate-400 flex-shrink-0" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 150)}
          onKeyDown={onKey}
          placeholder="Search peptides — BPC-157, Tirzepatide..."
          className="flex-1 text-sm bg-transparent outline-none text-slate-900 placeholder:text-slate-400 min-w-0"
          autoComplete="off"
          spellCheck={false}
          aria-label="Search products"
          aria-expanded={open}
          aria-autocomplete="list"
          role="combobox"
        />
        {query && (
          <button
            onMouseDown={(e) => { e.preventDefault(); setQuery("") }}
            className="text-slate-400 hover:text-slate-600 transition-colors flex-shrink-0"
            aria-label="Clear search"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-slate-200 shadow-2xl z-50 overflow-hidden">
          {results.length > 0 ? (
            <>
              <ul ref={listRef} role="listbox" className="max-h-96 overflow-y-auto divide-y divide-slate-50">
                {results.map((product, i) => (
                  <li
                    key={product.slug}
                    role="option"
                    aria-selected={i === activeIdx}
                    onMouseDown={() => go(product.slug)}
                    onMouseEnter={() => setActiveIdx(i)}
                    className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors ${i === activeIdx ? "bg-cyan-50" : "hover:bg-slate-50"}`}
                  >
                    {/* Thumbnail */}
                    <div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-100 overflow-hidden flex-shrink-0 relative">
                      {product.imageUrl ? (
                        <Image
                          src={product.imageUrl}
                          alt={product.name}
                          fill
                          sizes="48px"
                          className="object-contain p-1"
                          unoptimized
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-lg">🧪</div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <p
                        className="text-sm font-semibold text-slate-900 truncate [&_mark]:bg-cyan-100 [&_mark]:text-cyan-800 [&_mark]:rounded"
                        dangerouslySetInnerHTML={{ __html: highlight(product.name, query) }}
                      />
                      <div className="flex items-center gap-1.5 mt-0.5">
                        {product.categories.slice(0, 2).map((cat) => (
                          <span key={cat} className="text-[10px] font-medium text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded-full truncate max-w-[100px]">
                            {cat.replace("All Peptides, ", "").split(",")[0]}
                          </span>
                        ))}
                        {product.price && (
                          <span className="text-[10px] font-bold text-cyan-600 ml-auto">${product.price}</span>
                        )}
                      </div>
                    </div>

                    <ArrowRight className="w-3.5 h-3.5 text-slate-300 flex-shrink-0" />
                  </li>
                ))}
              </ul>
              <div className="px-4 py-2.5 border-t border-slate-100 bg-slate-50">
                <button
                  onMouseDown={() => {
                    router.push(`/products`)
                    setQuery("")
                    setFocused(false)
                    onClose?.()
                  }}
                  className="text-xs text-slate-500 hover:text-cyan-600 transition-colors font-medium"
                >
                  Browse all products →
                </button>
              </div>
            </>
          ) : query.trim() ? (
            <div className="px-4 py-8 text-center">
              <p className="text-sm text-slate-500 mb-1">No results for <span className="font-semibold text-slate-700">"{query}"</span></p>
              <button
                onMouseDown={() => {
                  router.push(`/products`)
                  setQuery("")
                  setFocused(false)
                  onClose?.()
                }}
                className="text-xs text-cyan-600 hover:text-cyan-700 font-medium mt-2 inline-block"
              >
                Browse full catalog →
              </button>
            </div>
          ) : null}
        </div>
      )}
    </div>
  )
}
