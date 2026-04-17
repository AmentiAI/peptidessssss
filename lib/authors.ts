export type Author = {
  slug: string
  name: string
  jobTitle: string
  bio: string
  shortBio: string
  credentials: string[]
  image: string
  email?: string
  sameAs: string[]
}

export const AUTHORS: Record<string, Author> = {
  "peptidesmaxxing-editorial": {
    slug: "peptidesmaxxing-editorial",
    name: "Dr. Jordan Reeve",
    jobTitle: "Founder & Editor-in-Chief, PeptidesMaxxing",
    credentials: [
      "PhD, Biochemistry",
      "10+ years research-peptide literature review",
      "Editorial oversight on every article published on PeptidesMaxxing",
    ],
    shortBio:
      "Biochemist and independent research-peptide analyst. Dr. Reeve founded PeptidesMaxxing to translate primary research on regenerative, metabolic, and nootropic peptides into plain-English summaries for the research community.",
    bio:
      "Dr. Jordan Reeve is a biochemist and independent research-peptide analyst with more than a decade reading primary literature on BPC-157, Tirzepatide, Epithalon, GHK-Cu, Semax, and the GH-releasing peptide family. Dr. Reeve founded PeptidesMaxxing in 2025 to publish mechanism-level explainers, head-to-head comparisons, and dosing-range references sourced exclusively from peer-reviewed research. Every article is reviewed under the editorial standards published at /editorial-standards. Research peptides discussed on this site are for laboratory use only; Dr. Reeve does not provide medical advice and no content on this site is intended to diagnose, treat, cure, or prevent any disease.",
    image: "https://www.peptidesmaxxing.com/images/authors/jordan-reeve.png",
    sameAs: [
      "https://www.peptidesmaxxing.com/about",
    ],
  },
}

export const DEFAULT_AUTHOR_SLUG = "peptidesmaxxing-editorial"

export function getAuthor(slug?: string): Author {
  if (slug && AUTHORS[slug]) return AUTHORS[slug]
  return AUTHORS[DEFAULT_AUTHOR_SLUG]
}

export function authorPersonSchema(author: Author) {
  return {
    "@type": "Person",
    "@id": `https://www.peptidesmaxxing.com/authors/${author.slug}#person`,
    name: author.name,
    url: `https://www.peptidesmaxxing.com/authors/${author.slug}`,
    jobTitle: author.jobTitle,
    description: author.shortBio,
    image: author.image,
    sameAs: author.sameAs,
    worksFor: {
      "@type": "Organization",
      name: "PeptidesMaxxing",
      url: "https://www.peptidesmaxxing.com",
    },
    knowsAbout: [
      "Research peptides",
      "BPC-157",
      "Tirzepatide",
      "Epithalon",
      "GHK-Cu",
      "Ipamorelin",
      "Peptide pharmacology",
    ],
  }
}
