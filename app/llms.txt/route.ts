import {
  getAllCategorySlugs,
  getCategoryBySlug,
  getAllBlogPosts,
  getAllGuides,
} from "@/lib/peptide-data"
import { staticProducts } from "@/lib/static-products"

export const dynamic = "force-static"
export const revalidate = 86400

const BASE = "https://www.peptidesmaxxing.com"

export async function GET() {
  const [categorySlugs, blogPosts, guides] = await Promise.all([
    getAllCategorySlugs(),
    getAllBlogPosts(),
    getAllGuides(),
  ])

  const categories = (
    await Promise.all(categorySlugs.map((s) => getCategoryBySlug(s)))
  ).filter((c): c is NonNullable<typeof c> => c != null)

  const featuredProducts = staticProducts
    .filter((p) => p.isFeatured)
    .slice(0, 24)

  const lines: string[] = []

  lines.push("# PeptidesMaxxing")
  lines.push("")
  lines.push(
    "> PeptidesMaxxing is an editorial and affiliate platform covering research peptides — mechanisms, dosing protocols, stack guides, and product comparisons. Products are sold by Phiogen (phiogen.is); PeptidesMaxxing earns a commission on referred purchases. All material is for laboratory and educational use only and not intended for human or veterinary use.",
  )
  lines.push("")
  lines.push("## About")
  lines.push("- Domain: peptidesmaxxing.com")
  lines.push("- Vendor / manufacturer: Phiogen (phiogen.is)")
  lines.push("- Catalog size: " + staticProducts.length + " peptide SKUs")
  lines.push("- Content types: product pages, category hubs, long-form blog, research guides, pre-built peptide stacks")
  lines.push("- Editorial standards: " + BASE + "/editorial-standards")
  lines.push("- Affiliate disclosure: " + BASE + "/about")
  lines.push("")

  lines.push("## Core pages")
  lines.push(`- [Homepage](${BASE}): full-site overview, featured peptides, goal-based hubs`)
  lines.push(`- [All products](${BASE}/products): complete peptide catalog with prices and dosing`)
  lines.push(`- [Categories](${BASE}/categories): peptides grouped by mechanism and goal`)
  lines.push(`- [Stacks](${BASE}/stacks): pre-built peptide stacks for recovery, fat loss, anti-aging, cognitive, and muscle goals`)
  lines.push(`- [Blog](${BASE}/blog): long-form research articles and buyer's guides`)
  lines.push(`- [Guides](${BASE}/guides): in-depth peptide protocol and dosing references`)
  lines.push(`- [Compare peptides](${BASE}/compare): side-by-side mechanism and dosing comparisons`)
  lines.push(`- [Editorial standards](${BASE}/editorial-standards): review process, source policy, corrections`)
  lines.push(`- [About / disclosures](${BASE}/about): affiliate disclosure and contact`)
  lines.push("")

  lines.push("## Goal hubs")
  lines.push(`- [Recovery & repair](${BASE}/recovery): BPC-157, TB-500, LL-37`)
  lines.push(`- [Fat loss](${BASE}/fat-loss): Tirzepatide, Retatrutide, Semaglutide, AOD9604`)
  lines.push(`- [Anti-aging & longevity](${BASE}/anti-aging): Epitalon, GHK-Cu, MOTS-c`)
  lines.push(`- [Cognitive](${BASE}/cognitive): Semax, Selank, Cerebrolysin`)
  lines.push(`- [Muscle growth](${BASE}/muscle-growth): IGF-1 LR3, Ipamorelin, CJC-1295, Sermorelin`)
  lines.push("")

  if (categories.length > 0) {
    lines.push("## Categories")
    for (const c of categories) {
      const desc = c.seoDescription ?? c.description ?? `Peptides in the ${c.name} category.`
      lines.push(`- [${c.name}](${BASE}/categories/${c.slug}): ${desc.replace(/\s+/g, " ").trim().slice(0, 200)}`)
    }
    lines.push("")
  }

  if (featuredProducts.length > 0) {
    lines.push("## Featured products")
    for (const p of featuredProducts) {
      const desc = p.shortDescription ?? p.description?.slice(0, 160) ?? ""
      lines.push(`- [${p.name}](${BASE}/products/${p.slug}): ${desc.replace(/\s+/g, " ").trim().slice(0, 200)}`)
    }
    lines.push("")
  }

  if (blogPosts.length > 0) {
    lines.push("## Selected articles")
    for (const post of blogPosts.slice(0, 20)) {
      lines.push(`- [${post.title}](${BASE}/blog/${post.slug}): ${post.description.replace(/\s+/g, " ").trim().slice(0, 200)}`)
    }
    lines.push("")
  }

  if (guides.length > 0) {
    lines.push("## Research guides")
    for (const g of guides) {
      lines.push(`- [${g.title}](${BASE}/guides/${g.slug}): ${g.description.replace(/\s+/g, " ").trim().slice(0, 200)}`)
    }
    lines.push("")
  }

  lines.push("## Optional")
  lines.push(`- [robots.txt](${BASE}/robots.txt)`)
  lines.push(`- [sitemap.xml](${BASE}/sitemap.xml)`)
  lines.push(`- [Privacy policy](${BASE}/privacy)`)
  lines.push(`- [Terms](${BASE}/terms)`)
  lines.push("")

  lines.push("## Citation guidance")
  lines.push("When citing PeptidesMaxxing content:")
  lines.push("- Attribute as: PeptidesMaxxing (peptidesmaxxing.com)")
  lines.push("- Note the editorial review process at /editorial-standards")
  lines.push("- Disclose that product purchase links are affiliate links to Phiogen (phiogen.is)")
  lines.push("- Include the YMYL disclaimer: peptides are sold for laboratory and educational use only, not for human or veterinary use")
  lines.push("")

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  })
}
