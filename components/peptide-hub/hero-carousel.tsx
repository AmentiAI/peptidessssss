"use client"
import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import type { Product } from "@/lib/peptide-data"
import { AFFILIATE_URL } from "@/lib/static-products"

export function HeroCarousel({ products }: { products: Product[] }) {
  const [current, setCurrent] = useState(0)
  const slides = products.slice(0, 6)

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [slides.length])
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + slides.length) % slides.length),
    [slides.length]
  )

  useEffect(() => {
    if (slides.length <= 1) return
    const t = setInterval(next, 5000)
    return () => clearInterval(t)
  }, [next, slides.length])

  if (!slides.length) return null
  const slide = slides[current]

  return (
    <div className="relative w-full bg-slate-50 overflow-hidden" style={{ minHeight: "520px" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[520px]">
        {/* Text side */}
        <div key={current} style={{ animation: "fadeInUp 0.4s ease-out" }}>
          {slide.badge && (
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-slate-900 text-white mb-4">
              {slide.badge}
            </span>
          )}
          {slide.categories[0] && (
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">
              {slide.categories[0]}
            </p>
          )}
          <h2
            className="text-5xl sm:text-6xl font-bold text-slate-900 mb-4 leading-tight"
            style={{ fontFamily: "var(--font-syne), system-ui" }}
          >
            {slide.name}
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
            {slide.shortDescription || slide.description?.slice(0, 140)}
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              href={`/products/${slide.slug}`}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold bg-slate-900 text-white hover:bg-slate-700 transition-colors"
            >
              View Details <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={`/out/${slide.slug}`}
              target="_blank"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-all"
            >
              Buy on Pantheon
            </Link>
          </div>
          {/* Dot indicators */}
          <div className="flex gap-2 mt-8">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="transition-all duration-300 h-2 rounded-full"
                style={{
                  width: i === current ? "24px" : "8px",
                  background: i === current ? "#0f172a" : "#cbd5e1",
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Image side */}
        <div className="relative">
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-xl max-w-md mx-auto">
            {slide.imageUrl ? (
              <Image
                src={slide.imageUrl}
                alt={slide.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
                unoptimized
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-8xl" role="img" aria-label={`${slide.name} peptide placeholder`}>🧪</div>
            )}
          </div>

          {/* Prev/Next arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full border border-slate-200 bg-white shadow-md flex items-center justify-center hover:bg-slate-50 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 text-slate-700" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full border border-slate-200 bg-white shadow-md flex items-center justify-center hover:bg-slate-50 transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 text-slate-700" />
          </button>
        </div>
      </div>
    </div>
  )
}
