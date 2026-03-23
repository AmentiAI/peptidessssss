import { getAllProductSlugs } from "@/lib/peptide-data"
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

const AFFILIATE_URL =
  process.env.NEXT_PUBLIC_AFFILIATE_URL || "https://pantheonpeptides.com/partner/AmentiAI/"

export default async function OutPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  // Always redirect to affiliate URL — cookie tracking handles attribution
  return (
    <RedirectClient
      destination={AFFILIATE_URL}
      productName={slug.replace(/-/g, " ")}
    />
  )
}
