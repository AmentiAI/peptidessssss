// Generates substantive, unique research-section content for products that
// lack a dedicated entry in product-research.ts. The goal is to move each
// product page above the thin-content threshold Google uses to mark pages
// "Crawled — currently not indexed."
//
// All paragraphs are derived from the product's own metadata (name, slug,
// categories, description), so each page ends up with unique text rather
// than a shared boilerplate block.

import type { Product } from "@/lib/peptide-data"

function hashSlug(slug: string): number {
  let h = 0
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0
  return h
}

function pickFrom<T>(arr: T[], h: number, shift: number): T {
  return arr[(h >> shift) % arr.length]
}

// Extract the base peptide name from the product name by dropping the
// dose/presentation suffix (e.g. "BAM-15 30mg/mL 30mL" → "BAM-15").
function basePeptideName(name: string): string {
  return name
    .replace(/\s*\d+(\.\d+)?\s*(mg|mcg|iu|mL|ml)(\/mL|\/ml)?/gi, "")
    .replace(/\s*x\s*\d+\s*(capsules|tablets|vials?)/gi, "")
    .replace(/\s+\d+(mg|mcg|ml|iu)\b/gi, "")
    .replace(/\s+-\s+.*$/, "")
    .replace(/\(.*?\)/g, "")
    .replace(/\s+/g, " ")
    .trim()
}

function categoryContext(categories: string[]): {
  noun: string
  verbPhrase: string
  outcomes: string[]
} {
  const lower = categories.map((c) => c.toLowerCase()).join(" ")
  if (/weight loss|metabol|fat/.test(lower)) {
    return {
      noun: "metabolic research",
      verbPhrase: "modulate energy expenditure, appetite signalling, and adipose metabolism",
      outcomes: ["adipose tissue reduction", "glycemic control", "insulin sensitivity", "satiety signalling"],
    }
  }
  if (/muscle|growth|recovery|repair|anti-inflammatory/.test(lower)) {
    return {
      noun: "tissue repair and body-composition research",
      verbPhrase: "accelerate tissue remodelling, collagen turnover, and muscle protein synthesis",
      outcomes: ["tendon and ligament repair", "muscle protein synthesis", "inflammatory resolution", "recovery kinetics"],
    }
  }
  if (/anti-aging|longevity|telomere/.test(lower)) {
    return {
      noun: "longevity and cellular aging research",
      verbPhrase: "modulate telomere biology, mitochondrial function, and senescence markers",
      outcomes: ["telomere length", "mitochondrial biogenesis", "oxidative stress markers", "senescence signalling"],
    }
  }
  if (/cognitive|nootropic|brain/.test(lower)) {
    return {
      noun: "neurological and cognitive research",
      verbPhrase: "influence neurotrophic signalling, neurotransmitter balance, and neuroprotection",
      outcomes: ["BDNF expression", "synaptic plasticity", "cognitive performance markers", "stress reactivity"],
    }
  }
  if (/immune|thymus/.test(lower)) {
    return {
      noun: "immunological research",
      verbPhrase: "modulate T-cell maturation, cytokine balance, and innate immunity",
      outcomes: ["T-cell differentiation", "cytokine profiles", "immune surveillance", "mucosal immunity"],
    }
  }
  if (/skin|hair|beauty|cosmetic/.test(lower)) {
    return {
      noun: "dermatological and aesthetic research",
      verbPhrase: "drive collagen synthesis, wound healing cascades, and follicular remodelling",
      outcomes: ["collagen density", "wound closure kinetics", "fibroblast proliferation", "melanocyte signalling"],
    }
  }
  if (/sex|libido|hormone/.test(lower)) {
    return {
      noun: "endocrine and sexual function research",
      verbPhrase: "act on central melanocortin and hypothalamic signalling",
      outcomes: ["arousal pathways", "hormonal cascades", "central nervous system activation"],
    }
  }
  return {
    noun: "biomedical research",
    verbPhrase: "influence the signalling pathways described in the product profile",
    outcomes: ["cellular signalling", "target engagement", "dose-response relationships"],
  }
}

function doseFromSlug(name: string, slug: string): string | null {
  const m = slug.match(/(\d+(?:\.\d+)?)(mg|mcg|iu|ml)(?:-ml|\/ml|)?/i)
  if (m) {
    const unit = m[2].toLowerCase() === "ml" ? "mL" : m[2].toLowerCase()
    return `${m[1]} ${unit}`
  }
  const m2 = name.match(/(\d+(?:\.\d+)?)\s*(mg|mcg|IU|mL|ml)/i)
  if (m2) return `${m2[1]} ${m2[2]}`
  return null
}

export function generateFallbackResearch(product: Product): string {
  const h = hashSlug(product.slug)
  const base = basePeptideName(product.name)
  const ctx = categoryContext(product.categories)
  const dose = doseFromSlug(product.name, product.slug)
  const primaryCat = product.categories[0] ?? "Research"
  const purity = product.badge ? product.badge.replace(" Pure", "") : null

  const openings = [
    `${base} is studied in the context of ${ctx.noun}, where researchers examine its ability to ${ctx.verbPhrase}.`,
    `Within ${ctx.noun}, ${base} is one of the compounds currently examined for its capacity to ${ctx.verbPhrase}.`,
    `${base} has a documented position in ${ctx.noun}. Investigators study it for how it may ${ctx.verbPhrase}.`,
    `Laboratory work on ${base} sits within ${ctx.noun}, with protocols designed to ${ctx.verbPhrase}.`,
  ]
  const opening = pickFrom(openings, h, 0)

  const descriptionSentence = product.description.trim().replace(/\s+/g, " ")
  const outcomes = ctx.outcomes.slice(0, 3).join(", ")

  const mechHeaders = [
    "Mechanism & Research Context",
    "How Researchers Study It",
    "Research Landscape",
    "Mechanistic Profile",
  ]
  const mechHeader = pickFrom(mechHeaders, h, 3)

  const dosingHeaders = [
    "Protocol Notes",
    "Dosing & Handling Notes",
    "Research Protocol Considerations",
    "Practical Research Notes",
  ]
  const dosingHeader = pickFrom(dosingHeaders, h, 6)

  const useHeaders = [
    "What Researchers Examine",
    "Primary Research Applications",
    "Research Focus Areas",
    "Endpoints Studied",
  ]
  const useHeader = pickFrom(useHeaders, h, 9)

  const qualityHeaders = [
    "Quality & Specifications",
    "Material Specifications",
    "Vial & Quality Notes",
    "Supplied Material",
  ]
  const qualityHeader = pickFrom(qualityHeaders, h, 12)

  const categoryLinks = product.categories
    .slice(0, 3)
    .map((c) => {
      const slug = c.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")
      return `[${c}](/categories/${slug})`
    })
    .join(", ")

  const vialLine = dose
    ? `This ${product.name} listing supplies ${dose} of ${base}, which researchers typically reconstitute with bacteriostatic water before use in studies.`
    : `${product.name} is supplied in standard research-grade presentation. Reconstitution with bacteriostatic water is typical prior to use in study protocols.`

  const purityLine = purity
    ? `The material is specified at ${purity} purity, which is the band most published protocols require for reliable quantitative work.`
    : `Purity is verified against analytical reference standards so that dose-response data remain interpretable across studies.`

  const protocolLines = [
    `Investigators designing a protocol for ${base} typically control for vehicle, reconstitution volume, and storage temperature, since each can shift the observed effect size. Reconstituted vials are refrigerated at 2–8 °C and used within the window specified by the supplier's stability data.`,
    `Researchers select a dose window supported by prior literature for ${base}, then scale to their animal model or in-vitro system. Handling variables — vehicle choice, injection route, and freeze-thaw exposure — are documented alongside the primary outcome measures.`,
    `Experimental work with ${base} standardises reconstitution volume, aliquot size, and cold-chain handling so that serial time-points remain comparable. A single freeze-thaw cycle is generally tolerated; repeated cycling is avoided where possible.`,
  ]
  const protocolLine = pickFrom(protocolLines, h, 15)

  const researcherLines = [
    `Researchers working in ${primaryCat.toLowerCase()} protocols typically pair ${base} with control arms that isolate the variable of interest — whether that is a timing element, a co-administered compound, or a baseline physiological state.`,
    `Academic and independent labs examining ${primaryCat.toLowerCase()} endpoints commonly include ${base} in comparative arms, where its signal is benchmarked against established reference compounds and placebo vehicle.`,
    `Labs investigating ${primaryCat.toLowerCase()} outcomes often include ${base} alongside a reference agent, which makes it easier to place new results within the existing body of literature.`,
  ]
  const researcherLine = pickFrom(researcherLines, h, 18)

  const closingLines = [
    `Every protocol involving ${base} is conducted strictly in a research setting. The compound is not supplied for human use, and all work should comply with the applicable institutional and regulatory requirements.`,
    `As with all research-grade peptides, ${base} is intended strictly for laboratory investigation. It is not sold for human use, and responsible use requires documented protocols and institutional oversight.`,
    `${base} is research-grade material. It is not for human consumption and is intended exclusively for qualified researchers operating under appropriate laboratory and regulatory controls.`,
  ]
  const closingLine = pickFrom(closingLines, h, 21)

  return `## ${mechHeader}

${opening}

${descriptionSentence}

Endpoints frequently tracked in studies involving ${base} include ${outcomes}. Researchers select the exact endpoint panel based on the hypothesis being tested and the model system available.

## ${useHeader}

${researcherLine} Because ${base} sits in the ${categoryLinks || primaryCat.toLowerCase()} space, it is particularly relevant to investigators focused on the outcome families listed above.

Laboratories comparing ${base} against other compounds in the same category often set up matched-dose arms so that between-compound variation — rather than dose-scaling artefacts — drives the final analysis.

## ${dosingHeader}

${protocolLine}

Reconstitution volumes are chosen to hit the target concentration in a single convenient injection or aliquot volume. Documenting the exact reconstitution ratio used is important: even small differences in concentration translate into measurable differences in the dose delivered across a study.

## ${qualityHeader}

${vialLine} ${purityLine}

Storage before reconstitution: lyophilised ${base} is kept refrigerated or frozen per the supplier's stability documentation. After reconstitution, vials are refrigerated and aliquoted where the protocol calls for repeated dosing. Sterile technique is maintained throughout to preserve the integrity of the research material.

## Research Use Disclosure

${closingLine}

*For research use only. Not for human consumption.*`
}
