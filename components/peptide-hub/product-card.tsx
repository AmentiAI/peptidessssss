import Image from "next/image"
import Link from "next/link"
import { Star, ShoppingCart, FlaskConical, CheckCircle } from "lucide-react"
import type { Product } from "@/lib/peptide-data"

interface ProductCardProps {
  product: Product
  priority?: boolean
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  return (
    <div className="group relative flex flex-col rounded-2xl border border-[rgba(0,212,255,0.1)] hover:border-[rgba(0,212,255,0.3)] transition-all duration-300 overflow-hidden"
      style={{ background: "rgba(12,12,32,0.8)" }}>

      {/* Badge */}
      {product.badge && (
        <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full text-xs font-bold text-black"
          style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)" }}>
          {product.badge}
        </div>
      )}

      {/* In stock indicator */}
      <div className={`absolute top-3 right-3 z-10 flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
        product.in_stock
          ? "bg-green-500/15 text-green-400 border border-green-500/20"
          : "bg-red-500/15 text-red-400 border border-red-500/20"
      }`}>
        <CheckCircle className="w-3 h-3" />
        {product.in_stock ? "In Stock" : "Out of Stock"}
      </div>

      {/* Image */}
      <div className="relative w-full aspect-square overflow-hidden bg-[rgba(255,255,255,0.03)]">
        <Image
          src={product.image_url}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          priority={priority}
        />
        {/* Fallback icon overlay (shows if image fails) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-0 pointer-events-none">
          <FlaskConical className="w-16 h-16 text-[rgba(0,212,255,0.15)]" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,6,18,0.7)] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        {/* Categories */}
        <div className="flex flex-wrap gap-1.5">
          {product.categories.slice(0, 2).map((cat) => (
            <span key={cat} className="px-2 py-0.5 rounded-full text-[10px] font-semibold text-[rgba(0,212,255,0.9)] bg-[rgba(0,212,255,0.08)] border border-[rgba(0,212,255,0.15)]">
              {cat}
            </span>
          ))}
        </div>

        {/* Name */}
        <Link href={`/products/${product.slug}`} className="font-bold text-white text-base leading-tight hover:text-[#00d4ff] transition-colors line-clamp-2">
          {product.name}
        </Link>

        {/* Short description */}
        <p className="text-xs text-[rgba(255,255,255,0.55)] leading-relaxed line-clamp-2">
          {product.short_description}
        </p>

        {/* Rating + purity */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-[#f59e0b] text-[#f59e0b]" />
            <span className="font-semibold text-white">{product.rating}</span>
            <span className="text-[rgba(255,255,255,0.4)]">({product.reviews.toLocaleString()})</span>
          </div>
          <span className="font-semibold text-green-400">
            {product.purity} purity
          </span>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-[rgba(255,255,255,0.06)]">
          <div>
            <span className="text-2xl font-bold text-white">{product.price_formatted}</span>
          </div>
          <Link
            href={`/out/${product.slug}`}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-bold text-black transition-all duration-150 hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0"
            style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)", boxShadow: "0 4px 15px rgba(0,212,255,0.2)" }}
          >
            <ShoppingCart className="w-4 h-4" />
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  )
}
