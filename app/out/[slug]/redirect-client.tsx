"use client"
import { useEffect } from "react"
import Link from "next/link"

export function RedirectClient({
  destination,
  productName,
}: {
  destination: string
  productName?: string
}) {
  useEffect(() => {
    window.location.replace(destination)
  }, [destination])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white text-slate-900 px-4">
      <div className="text-center max-w-md">
        <div className="w-12 h-12 border-4 border-slate-900 border-t-transparent rounded-full animate-spin mx-auto mb-6" />
        <h1 className="text-2xl font-bold text-slate-900 mb-2">
          Redirecting to supplier...
        </h1>
        {productName && (
          <p className="text-slate-500 mb-1 capitalize">{productName}</p>
        )}
        <p className="text-sm text-slate-400 mt-6 mb-4">
          You will be redirected automatically. If not,{" "}
          <a
            href={destination}
            rel="nofollow sponsored noopener noreferrer"
            className="text-blue-600 underline underline-offset-2"
          >
            click here
          </a>
          .
        </p>
        <p className="text-xs text-slate-400">
          PeptidesMaxxing may earn compensation from purchases at no extra cost to you.
        </p>
        <Link
          href="/products"
          className="inline-block mt-6 text-sm text-slate-500 hover:text-slate-900 transition-colors"
        >
          ← Back to Products
        </Link>
      </div>
    </div>
  )
}
