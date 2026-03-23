/**
 * FAQ data for product pages — used to generate FAQPage JSON-LD schema.
 * Covers the top/most-searched products. Remaining products get
 * auto-generated FAQs via generateFallbackFAQs().
 */

export type FAQItem = { question: string; answer: string }

export const productFAQs: Record<string, FAQItem[]> = {
  "bpc-157": [
    { question: "What is BPC-157 used for?", answer: "BPC-157 is a research peptide studied for tissue repair, tendon and ligament healing, gut health, muscle recovery, and neuroprotection. It is one of the most extensively researched healing peptides with over 300 published preclinical studies." },
    { question: "How does BPC-157 work?", answer: "BPC-157 works through multiple mechanisms: upregulating VEGF for angiogenesis, increasing GH receptor expression on fibroblasts, activating the FAK-paxillin cell migration pathway, and inhibiting NF-κB to resolve inflammation." },
    { question: "What is the typical BPC-157 research dosage?", answer: "Preclinical research typically uses 2–10 mcg/kg body weight, administered once or twice daily. A common reconstitution approach is a 5 mg vial with 2 mL bacteriostatic water to yield 2,500 mcg/mL." },
    { question: "Can BPC-157 be stacked with TB-500?", answer: "Yes — BPC-157 and TB-500 are frequently co-studied and are available as a pre-formulated stack. BPC-157 provides localized repair signals while TB-500 offers systemic tissue remodeling via its actin-regulation mechanism." },
    { question: "Where can I buy BPC-157 for research?", answer: "BPC-157 is available from Pantheon Peptides, the supplier featured on PeptidesMaxxing. Pantheon Peptides supplies research-grade peptides with documented quality standards." },
  ],
  "tb-500": [
    { question: "What is TB-500?", answer: "TB-500 is a synthetic analogue of Thymosin Beta-4 (TB-4), a naturally occurring protein involved in cell migration, angiogenesis, and tissue repair. It is studied for its systemic healing properties and ability to activate stem cells throughout the body." },
    { question: "How does TB-500 differ from BPC-157?", answer: "TB-500 works systemically via actin regulation and stem cell mobilization, making it effective for injuries anywhere in the body. BPC-157 is more locally-acting with strong angiogenic and gut-protective properties. The two are frequently combined for comprehensive healing research." },
    { question: "What is the typical TB-500 research dosage?", answer: "Common research protocols use 2.5–10 mg twice weekly during a loading phase, then reduce to once weekly. TB-500 is reconstituted with bacteriostatic water and administered via subcutaneous injection in research settings." },
    { question: "Can TB-500 help with heart tissue?", answer: "Preclinical research has shown TB-4 (TB-500's parent compound) can reactivate dormant cardiac progenitor cells following myocardial injury — one of the more striking findings in this research area." },
  ],
  "tirzepatide": [
    { question: "What is Tirzepatide?", answer: "Tirzepatide is a dual GIP and GLP-1 receptor agonist — the same mechanism as Mounjaro and Zepbound. It is studied for weight management, diabetes control, and metabolic health, and is one of the most potent fat-loss peptides currently researched." },
    { question: "How does Tirzepatide cause weight loss?", answer: "Tirzepatide activates both GIP and GLP-1 receptors, suppressing appetite via hypothalamic signaling, slowing gastric emptying, and improving insulin sensitivity. The dual-receptor action produces greater weight reduction than GLP-1 agonists alone." },
    { question: "How does Tirzepatide compare to Retatrutide?", answer: "Retatrutide targets three receptors (GIP, GLP-1, and glucagon), making it even more aggressive for fat loss. Tirzepatide is generally considered better-tolerated, while Retatrutide may be superior for maximum fat reduction in research contexts." },
    { question: "Where can I buy Tirzepatide for research?", answer: "Tirzepatide is available from Pantheon Peptides in 5 mg vials. It is sold strictly for research purposes and requires reconstitution with bacteriostatic water before use in research settings." },
  ],
  "retatrutide": [
    { question: "What is Retatrutide?", answer: "Retatrutide is a triple hormone agonist targeting GIP, GLP-1, and glucagon receptors simultaneously. It is considered the most potent weight-loss peptide currently in research, producing fat loss superior to dual-agonists like Tirzepatide in preclinical models." },
    { question: "How does Retatrutide compare to Tirzepatide?", answer: "Retatrutide adds a glucagon receptor component to the GIP/GLP-1 dual action of Tirzepatide. The glucagon agonism further increases energy expenditure and fat oxidation, resulting in greater total fat loss — at the cost of a more complex side effect profile." },
    { question: "What is Retatrutide used for in research?", answer: "Retatrutide is studied for severe obesity, metabolic syndrome, non-alcoholic steatohepatitis (NASH), and cardiovascular risk reduction associated with visceral adiposity." },
  ],
  "epithalon": [
    { question: "What is Epithalon?", answer: "Epithalon (also spelled Epitalon) is a synthetic tetrapeptide (Ala-Glu-Asp-Gly) that activates the enzyme telomerase, which rebuilds telomere length. It is considered one of the most studied anti-aging peptides, with research spanning longevity, sleep regulation, and immune function." },
    { question: "How does Epithalon work as an anti-aging peptide?", answer: "Epithalon stimulates telomerase activity in somatic cells, allowing telomere elongation. Shorter telomeres are associated with cellular aging and increased disease risk — so Epithalon is studied as a potential mechanism for slowing biological aging at the cellular level." },
    { question: "What is a typical Epithalon research protocol?", answer: "Common research protocols use 5–10 mg per cycle, typically administered as 10 mcg/day for 10–20 consecutive days, then repeated 2–4 times per year. Some protocols use 100 mcg per kg of body weight." },
    { question: "Can Epithalon be combined with other anti-aging peptides?", answer: "Yes — Epithalon is frequently studied alongside GHK-Cu, MOTS-c, and sermorelin. A pre-formulated stack with 5-Amino-1MQ targeting both telomere health and metabolic aging is also available." },
  ],
  "ghk-cu": [
    { question: "What is GHK-Cu?", answer: "GHK-Cu (copper peptide GHK) is a naturally occurring copper-binding tripeptide found in human plasma, saliva, and urine. It is one of the most extensively studied peptides for skin regeneration, collagen synthesis, wound healing, and anti-aging — with over 50 years of research behind it." },
    { question: "What does GHK-Cu do for skin?", answer: "GHK-Cu stimulates collagen synthesis, promotes skin regeneration, accelerates wound healing, reduces fine lines and wrinkles, and reverses some age-related gene expression changes. It is studied both topically and systemically." },
    { question: "Is GHK-Cu good for hair growth?", answer: "Yes — GHK-Cu activates hair follicle stem cells and has been shown to shift follicles from telogen (resting) to anagen (growth) phase in preclinical research. It is frequently studied as a component of hair loss research protocols." },
    { question: "How does GHK-Cu compare to Epithalon for anti-aging?", answer: "GHK-Cu works primarily at the tissue and gene-expression level (collagen, skin, wound healing), while Epithalon targets the cellular aging process via telomere length. Many anti-aging researchers study both compounds in complementary protocols." },
  ],
  "semax": [
    { question: "What is Semax?", answer: "Semax is a synthetic heptapeptide derived from ACTH (adrenocorticotropic hormone) developed by Russian researchers in the 1980s. It is one of the most studied nootropic peptides, researched for cognitive enhancement, neuroprotection, focus, and memory — without stimulant properties." },
    { question: "How does Semax improve cognitive function?", answer: "Semax increases BDNF (brain-derived neurotrophic factor) and NGF (nerve growth factor) expression, promotes neuroplasticity, and modulates dopaminergic and serotonergic systems. These mechanisms support memory consolidation, learning, and mental clarity." },
    { question: "Does Semax have stimulant effects?", answer: "No — Semax is classified as a non-stimulant nootropic. It does not act on adrenergic receptors or cause the agitation, insomnia, or cardiovascular effects associated with stimulants. Researchers note it produces calm focus rather than stimulant-driven alertness." },
    { question: "Can Semax be stacked with Selank?", answer: "Yes — Semax and Selank are frequently combined. Semax enhances cognitive performance and mental clarity while Selank reduces anxiety. The combination is studied for achieving optimal cognitive function without anxiety — particularly useful in high-stress research contexts." },
  ],
  "ipamorelin": [
    { question: "What is Ipamorelin?", answer: "Ipamorelin is a pentapeptide growth hormone secretagogue that selectively stimulates GH release from the pituitary gland. It is considered one of the cleanest GHRPs (growth hormone releasing peptides) with minimal impact on cortisol and prolactin — making it a preferred choice in muscle growth and anti-aging research." },
    { question: "How does Ipamorelin work?", answer: "Ipamorelin binds to the ghrelin receptor (GHS-R1a) in the pituitary, triggering a pulse of growth hormone release. Unlike older GHRPs such as GHRP-2 or GHRP-6, Ipamorelin produces minimal cortisol or prolactin elevation, creating a cleaner hormonal signal." },
    { question: "What is Ipamorelin best stacked with?", answer: "The most studied combination is Ipamorelin + CJC-1295, which pairs a GHRP (Ipamorelin) with a GHRH (CJC-1295) for synergistic GH release. This stack is considered the gold standard in GH secretagogue research for muscle growth and body composition." },
    { question: "When should Ipamorelin be administered in research?", answer: "Research protocols typically administer Ipamorelin 2–3 times daily in a fasted state (ideally 2+ hours after a meal) to avoid insulin's suppressive effect on GH release. Pre-sleep administration is particularly studied for maximizing nocturnal GH pulses." },
  ],
  "pt-141-bremelanotide": [
    { question: "What is PT-141 (Bremelanotide)?", answer: "PT-141, also known as Bremelanotide, is a synthetic melanocortin peptide that acts on MC3R and MC4R receptors in the central nervous system to enhance sexual arousal and libido in both men and women. Unlike PDE5 inhibitors, it works through brain pathways rather than vascular mechanisms." },
    { question: "How does PT-141 differ from Viagra or Cialis?", answer: "PT-141 acts centrally on the brain's melanocortin system to generate sexual arousal, while Viagra and Cialis act peripherally by increasing blood flow. PT-141 is effective even in the absence of vascular dysfunction and can enhance desire/arousal rather than just physical response." },
    { question: "Does PT-141 work for women?", answer: "Yes — PT-141 is one of the few peptides studied specifically for female sexual dysfunction. Clinical research showed significant improvements in desire and arousal in premenopausal women with hypoactive sexual desire disorder (HSDD)." },
  ],
  "cjc-1295-ipamorelin": [
    { question: "What is the CJC-1295 + Ipamorelin stack?", answer: "CJC-1295 + Ipamorelin is a pre-formulated combination of a GHRH (growth hormone releasing hormone analogue) and a GHRP (growth hormone releasing peptide). Together they produce synergistic GH release by acting on two complementary receptor systems — making this the most widely researched GH secretagogue stack." },
    { question: "Why combine CJC-1295 with Ipamorelin?", answer: "CJC-1295 (GHRH analogue) stimulates the hypothalamic-pituitary axis to increase GH pulse amplitude, while Ipamorelin (GHRP) amplifies GH pulse frequency. Using both creates a larger, more frequent GH secretion pattern than either compound alone." },
    { question: "What are the benefits of the CJC-1295 + Ipamorelin stack?", answer: "Preclinical research shows this stack promotes lean muscle growth, fat metabolism, improved recovery, better sleep quality, collagen synthesis, and anti-aging effects — all through the amplified GH/IGF-1 axis." },
  ],
  "selank": [
    { question: "What is Selank?", answer: "Selank is a synthetic heptapeptide derived from tuftsin, developed by the Institute of Molecular Genetics in Russia. It is studied as an anxiolytic, cognitive enhancer, and mood stabilizer — with effects described as anxiolytic without sedation." },
    { question: "How does Selank reduce anxiety?", answer: "Selank modulates GABA-A receptor activity (the same target as benzodiazepines) but through a different binding mechanism that produces anxiolytic effects without tolerance development, sedation, or withdrawal. It also increases BDNF and influences serotonin/dopamine balance." },
    { question: "Can Selank be combined with Semax?", answer: "Yes — Semax and Selank are the classic cognitive research combination. Semax drives cognitive performance and BDNF while Selank manages anxiety and emotional regulation. The combination is studied for optimal cognitive enhancement under stress conditions." },
  ],
  "thymosin-alpha-1": [
    { question: "What is Thymosin Alpha-1?", answer: "Thymosin Alpha-1 (Tα1) is a naturally occurring peptide derived from thymosin fraction 5, secreted by the thymus gland. It is one of the most extensively studied immune-modulating peptides, with clinical use in multiple countries for viral infections, cancer support, and immune deficiency." },
    { question: "How does Thymosin Alpha-1 boost immunity?", answer: "Tα1 stimulates T-cell maturation, enhances NK cell activity, promotes dendritic cell function, and modulates cytokine production. It activates toll-like receptors (TLR) that are central to innate immune surveillance — effectively 'tuning up' the immune system rather than simply stimulating it." },
    { question: "Is Thymosin Alpha-1 used in clinical practice?", answer: "Yes — Thymosin Alpha-1 (brand name Zadaxin) has been approved for clinical use in over 35 countries for treatment of viral infections including HBV, HCV, and as an immune adjuvant. It has one of the longest clinical track records of any peptide in this catalog." },
  ],
  "aod9604": [
    { question: "What is AOD-9604?", answer: "AOD-9604 is a synthetic analogue of the C-terminus of human growth hormone (amino acids 176-191). It was originally developed by Metabolic Pharmaceuticals for obesity treatment and is studied specifically for its fat-reducing properties without the growth-promoting or blood sugar effects of full GH." },
    { question: "How does AOD-9604 target belly fat?", answer: "AOD-9604 mimics the lipolytic (fat-breaking) region of HGH while blocking lipogenesis (fat storage). It preferentially activates fat breakdown in adipose tissue — particularly visceral/abdominal fat — while sparing lean muscle mass." },
    { question: "Does AOD-9604 affect blood sugar or IGF-1?", answer: "No — this is a key differentiator of AOD-9604. Unlike full GH, it does not significantly impact glucose metabolism or raise IGF-1 levels. This makes it a cleaner research tool for studying fat loss without metabolic disruption." },
  ],
}

/**
 * Auto-generates basic FAQ items for products without hand-written FAQs.
 * Uses product name, description, and categories.
 */
export function generateFallbackFAQs(
  name: string,
  description: string,
  categories: string[],
): FAQItem[] {
  const catList = categories.filter((c) => c !== "All Peptides").join(", ")
  const firstBenefit = description.split(/[.,]/)[0]?.trim() ?? description.slice(0, 120)

  return [
    {
      question: `What is ${name}?`,
      answer: `${name} is a research peptide studied for ${firstBenefit.toLowerCase()}. ${
        catList ? `It is classified under: ${catList}.` : ""
      } As with all peptides on PeptidesMaxxing, it is available from Pantheon Peptides for research purposes only.`,
    },
    {
      question: `What are the main benefits of ${name}?`,
      answer: description,
    },
    {
      question: `What category does ${name} belong to?`,
      answer: catList
        ? `${name} is categorized under: ${catList}. ${
            categories.includes("Muscle Growth")
              ? "It is studied in the context of GH axis optimization and lean mass research."
              : ""
          }${
            categories.includes("Weight Loss")
              ? "It is studied in the context of metabolic health and body composition research."
              : ""
          }${
            categories.includes("Anti-Aging")
              ? "It is studied in the context of longevity, cellular aging, and vitality research."
              : ""
          }`
        : `${name} is available as part of the Pantheon Peptides research catalog.`,
    },
    {
      question: `Where can I buy ${name} for research?`,
      answer: `${name} is available from Pantheon Peptides, the supplier featured on PeptidesMaxxing. Pantheon Peptides provides research-grade peptides with documented quality standards. PeptidesMaxxing earns a commission on purchases made through our affiliate links.`,
    },
  ]
}

/**
 * Returns FAQs for a product — hand-written if available, auto-generated otherwise.
 */
export function getProductFAQs(slug: string, name: string, description: string, categories: string[]): FAQItem[] {
  return productFAQs[slug] ?? generateFallbackFAQs(name, description, categories)
}
