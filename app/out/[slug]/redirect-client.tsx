"use client"
import { useEffect } from "react"
import Link from "next/link"

export function RedirectClient({
  destination,
  productName,
  productPrice,
}: {
  destination: string
  productName?: string
  productPrice?: string
}) {
  useEffect(() => {
    window.location.replace(destination)
  }, [destination])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#060612] text-white px-4">
      <div className="text-center max-w-md">
        <div className="w-12 h-12 border-4 border-[#00d4ff] border-t-transparent rounded-full animate-spin mx-auto mb-6" />
        <h1 className="text-2xl font-bold mb-2">Redirecting to Peptide Sciences...</h1>
        {productName && (
          <p className="text-[rgba(255,255,255,0.65)] mb-1">
            {productName}
            {productPrice && <span className="ml-2 text-[#00d4ff] font-semibold">{productPrice}</span>}
          </p>
        )}
        <p className="text-sm text-[rgba(255,255,255,0.4)] mt-6 mb-4">
          You will be redirected automatically. If not,{" "}
          <a
            href={destination}
            rel="nofollow sponsored noopener noreferrer"
            className="text-[#00d4ff] underline underline-offset-2"
          >
            click here
          </a>
          .
        </p>
        <p className="text-xs text-[rgba(255,255,255,0.3)]">
          Affiliate disclosure: PeptideLab earns a commission at no extra cost to you.
        </p>
        <Link href="/products" className="inline-block mt-6 text-sm text-[rgba(255,255,255,0.5)] hover:text-white transition-colors">
          ← Back to Products
        </Link>
      </div>
    </div>
  )
}
