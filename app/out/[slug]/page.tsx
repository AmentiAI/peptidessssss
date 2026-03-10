import { getProductBySlug, getAllProductSlugs, vendor } from "@/lib/peptide-data"
import { RedirectClient } from "./redirect-client"

export function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }))
}

export default async function OutPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  const destination = product?.url ?? vendor.url

  return (
    <RedirectClient
      destination={destination}
      productName={product?.name}
      productPrice={product?.price_formatted}
    />
  )
}
