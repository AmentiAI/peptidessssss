"use client"
import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, ArrowRight, FlaskConical } from "lucide-react"

const SLIDES = [
  {
    id: 1,
    image: "/images/hero/bpc-157-hero.webp",
    category: "Recovery & Repair",
    categoryColor: "#06b6d4",
    title: "BPC-157",
    subtitle: "The Premier Tissue Repair Peptide",
    description: "300+ studies. Accelerates healing of muscles, tendons, ligaments, and gut lining.",
    stat1: { value: "99.1%", label: "Purity" },
    stat2: { value: "$45", label: "Per Vial" },
    stat3: { value: "300+", label: "Studies" },
    cta: "Shop BPC-157",
    href: "/products/bpc-157-5mg",
    outHref: "/out/bpc-157-5mg",
    badge: "#1 Recovery Peptide",
  },
  {
    id: 2,
    image: "/images/hero/ipamorelin-hero.webp",
    category: "Growth Hormone",
    categoryColor: "#8b5cf6",
    title: "Ipamorelin",
    subtitle: "The Cleanest GH Secretagogue",
    description: "Selective GH release. No cortisol, no prolactin. The gold standard GHRP for research.",
    stat1: { value: "99.2%", label: "Purity" },
    stat2: { value: "$38", label: "Per Vial" },
    stat3: { value: "2,156", label: "Reviews" },
    cta: "Shop Ipamorelin",
    href: "/products/ipamorelin-5mg",
    outHref: "/out/ipamorelin-5mg",
    badge: "Best Seller",
  },
  {
    id: 3,
    image: "/images/hero/epithalon-hero.webp",
    category: "Anti-Aging & Longevity",
    categoryColor: "#f59e0b",
    title: "Epithalon",
    subtitle: "35 Years of Longevity Research",
    description: "Activates telomerase. Elongates telomeres. The most studied anti-aging peptide in existence.",
    stat1: { value: "99.5%", label: "Purity" },
    stat2: { value: "$60", label: "Per Vial" },
    stat3: { value: "35+", label: "Years Research" },
    cta: "Shop Epithalon",
    href: "/products/epithalon-10mg",
    outHref: "/out/epithalon-10mg",
    badge: "Top Longevity Pick",
  },
  {
    id: 4,
    image: "/images/hero/semax-hero.webp",
    category: "Cognitive & Nootropic",
    categoryColor: "#10b981",
    title: "Semax",
    subtitle: "The BDNF-Maximizing Nootropic",
    description: "800% BDNF increase. Clinically used in Russia for 20+ years for cognitive enhancement.",
    stat1: { value: "99.2%", label: "Purity" },
    stat2: { value: "$55", label: "Per Vial" },
    stat3: { value: "800%", label: "BDNF Increase" },
    cta: "Shop Semax",
    href: "/products/semax-5mg",
    outHref: "/out/semax-5mg",
    badge: "#1 Nootropic",
  },
  {
    id: 5,
    image: "/images/hero/ghk-cu-hero.webp",
    category: "Anti-Aging",
    categoryColor: "#f59e0b",
    title: "GHK-Cu",
    subtitle: "4,000+ Gene Activating Copper Peptide",
    description: "Naturally found in human plasma — declines 60% by age 60. Collagen, hair, and tissue regeneration.",
    stat1: { value: "99.3%", label: "Purity" },
    stat2: { value: "$40", label: "Per Vial" },
    stat3: { value: "4,000+", label: "Genes Activated" },
    cta: "Shop GHK-Cu",
    href: "/products/ghk-cu-50mg",
    outHref: "/out/ghk-cu-50mg",
    badge: "Editor's Choice",
  },
]

export function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const goTo = useCallback((index: number) => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrent(index)
    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating])

  const prev = useCallback(() => {
    goTo((current - 1 + SLIDES.length) % SLIDES.length)
  }, [current, goTo])

  const next = useCallback(() => {
    goTo((current + 1) % SLIDES.length)
  }, [current, goTo])

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length)
    }, 5500)
    return () => clearInterval(timer)
  }, [])

  const slide = SLIDES[current]

  return (
    <div className="relative w-full overflow-hidden rounded-none" style={{ height: "min(85vh, 680px)" }}>
      {/* Background image */}
      {SLIDES.map((s, i) => (
        <div
          key={s.id}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0, zIndex: 0 }}
        >
          <Image
            src={s.image}
            alt={s.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority={i === 0}
          />
          {/* Multi-layer overlay */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(6,6,18,0.92) 0%, rgba(6,6,18,0.6) 60%, rgba(6,6,18,0.3) 100%)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(6,6,18,0.9) 0%, transparent 60%)" }} />
        </div>
      ))}

      {/* Grid bg overlay */}
      <div className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,212,255,0.04) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }} />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div
            key={current}
            className="max-w-2xl"
            style={{ animation: "fadeInSlide 0.5s ease-out forwards" }}
          >
            <style dangerouslySetInnerHTML={{ __html: `
              @keyframes fadeInSlide {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
              }
            `}} />

            {/* Badge */}
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1.5 rounded-full text-[11px] font-bold text-black"
                style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)" }}>
                {slide.badge}
              </span>
              <span className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: slide.categoryColor }}>
                <FlaskConical className="w-3 h-3" />
                {slide.category}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-6xl sm:text-7xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-bebas), system-ui", letterSpacing: "0.04em" }}>
              {slide.title}
            </h2>
            <p className="text-xl font-semibold mb-3" style={{ color: slide.categoryColor }}>
              {slide.subtitle}
            </p>
            <p className="text-base text-[rgba(255,255,255,0.65)] mb-7 leading-relaxed max-w-lg">
              {slide.description}
            </p>

            {/* Stats */}
            <div className="flex gap-5 mb-8">
              {[slide.stat1, slide.stat2, slide.stat3].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-[rgba(255,255,255,0.45)]">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex gap-3">
              <Link
                href={slide.outHref}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-black transition-all hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)", boxShadow: "0 0 25px rgba(0,212,255,0.3)" }}
              >
                {slide.cta} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={slide.href}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white border border-[rgba(255,255,255,0.2)] hover:border-[rgba(0,212,255,0.4)] hover:bg-[rgba(0,212,255,0.05)] transition-all"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center border border-[rgba(255,255,255,0.15)] bg-[rgba(6,6,18,0.6)] text-white hover:border-[rgba(0,212,255,0.4)] hover:bg-[rgba(0,212,255,0.1)] transition-all backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center border border-[rgba(255,255,255,0.15)] bg-[rgba(6,6,18,0.6)] text-white hover:border-[rgba(0,212,255,0.4)] hover:bg-[rgba(0,212,255,0.1)] transition-all backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="transition-all duration-300"
            style={{
              width: i === current ? "24px" : "6px",
              height: "6px",
              borderRadius: i === current ? "3px" : "50%",
              background: i === current ? "#00d4ff" : "rgba(255,255,255,0.3)",
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-6 right-6 z-20 text-xs font-bold text-[rgba(255,255,255,0.4)]">
        {String(current + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
      </div>
    </div>
  )
}
