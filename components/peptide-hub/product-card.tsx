import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, CheckCircle } from "lucide-react"
import type { Product } from "@/lib/peptide-data"

const AFFILIATE_URL =
  process.env.NEXT_PUBLIC_AFFILIATE_URL || "https://pantheonpeptides.com/partner/AmentiAI/"

interface ProductCardProps {
  product: Product
  priority?: boolean
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  return (
    <div className="group relative flex flex-col rounded-2xl border border-slate-200 hover:border-slate-400 hover:shadow-lg transition-all duration-300 overflow-hidden bg-white">
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full text-xs font-bold bg-slate-900 text-white">
          {product.badge}
        </div>
      )}

      {/* In stock indicator */}
      <div
        className={`absolute top-3 right-3 z-10 flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
          product.isInStock
            ? "bg-green-50 text-green-700 border border-green-200"
            : "bg-red-50 text-red-700 border border-red-200"
        }`}
      >
        <CheckCircle className="w-3 h-3" />
        {product.isInStock ? "In Stock" : "Out of Stock"}
      </div>

      {/* Image */}
      <div className="relative w-full aspect-square overflow-hidden bg-slate-50">
        {product.imageUrl ? (
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            priority={priority}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center" role="img" aria-label={`${product.name} placeholder`}>
            <span className="text-5xl" aria-hidden="true">🧪</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 gap-2">
        {/* Categories */}
        <div className="flex flex-wrap gap-1">
          {product.categories.slice(0, 2).map((cat) => (
            <span
              key={cat}
              className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-100 text-slate-600"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Name */}
        <Link
          href={`/products/${product.slug}`}
          className="font-bold text-slate-900 text-sm leading-tight hover:text-blue-600 transition-colors line-clamp-2"
        >
          {product.name}
        </Link>

        {/* Short description */}
        {product.shortDescription && (
          <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
            {product.shortDescription}
          </p>
        )}

        {/* Price + CTA */}
        <div className="flex items-center gap-2 mt-auto pt-3 border-t border-slate-100">
          {product.priceFormatted ? (
            <span className="text-lg font-bold text-slate-900">{product.priceFormatted}</span>
          ) : (
            <span className="text-sm font-semibold text-blue-600">Check Price</span>
          )}
          <Link
            href={`/out/${product.slug}`}
            target="_blank"
            className="ml-auto flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-bold bg-slate-900 text-white hover:bg-slate-700 transition-colors"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            Buy
          </Link>
        </div>
      </div>
    </div>
  )
}
