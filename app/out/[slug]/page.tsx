import { getAllProductSlugs, getProductBySlug, AFFILIATE_URL } from "@/lib/peptide-data"
import { getAllStackGuides } from "@/lib/stack-guides"
import { RedirectClient } from "./redirect-client"

export async function generateStaticParams() {
  const [productSlugs, stackGuides] = await Promise.all([
    getAllProductSlugs(),
    Promise.resolve(getAllStackGuides()),
  ])
  const stackSlugs = stackGuides.map((s) => s.slug)
  return [...productSlugs, ...stackSlugs].map((slug) => ({ slug }))
}

export default async function OutPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = await getProductBySlug(slug)

  // Use the product's specific vendor URL when available, fall back to affiliate homepage
  const destination = product?.productUrl ?? AFFILIATE_URL

  return (
    <RedirectClient
      destination={destination}
      productName={slug.replace(/-/g, " ")}
    />
  )
}
