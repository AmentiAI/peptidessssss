type HowToStep = {
  name: string
  text: string
}

type HowToDef = {
  name: string
  description: string
  totalTime?: string
  supplies: string[]
  tools: string[]
  steps: HowToStep[]
}

const HOWTO_GUIDES: Record<string, HowToDef> = {
  "peptide-storage-reconstitution-guide": {
    name: "How to Reconstitute and Store Research Peptides",
    description:
      "Step-by-step laboratory procedure for reconstituting lyophilized research peptides with bacteriostatic water and storing the vial at appropriate temperature.",
    totalTime: "PT10M",
    supplies: [
      "Lyophilized research peptide vial",
      "Bacteriostatic water (0.9% benzyl alcohol)",
      "Sterile insulin syringe",
      "Alcohol swabs",
    ],
    tools: ["Refrigerator maintained at 2–8°C", "Laboratory workspace"],
    steps: [
      {
        name: "Inspect the vial",
        text: "Verify the peptide vial is intact, correctly labelled, and the lyophilized powder is visible at the bottom. Record the lot number against the Certificate of Analysis.",
      },
      {
        name: "Sterilize surfaces",
        text: "Wipe the rubber stopper of the peptide vial and the bacteriostatic water vial with an alcohol swab. Allow to air-dry for 30 seconds.",
      },
      {
        name: "Calculate reconstitution volume",
        text: "Choose the target concentration (typical research range is 1–5 mg/mL) and calculate the bacteriostatic water volume required for the vial size.",
      },
      {
        name: "Draw bacteriostatic water",
        text: "Insert a sterile syringe into the bacteriostatic water vial and draw the calculated volume. Avoid introducing air bubbles.",
      },
      {
        name: "Reconstitute the peptide",
        text: "Angle the needle against the inside wall of the peptide vial and inject the bacteriostatic water slowly. Do not inject directly onto the powder. Swirl gently — do not shake.",
      },
      {
        name: "Verify dissolution",
        text: "Wait 30–60 seconds for the peptide to fully dissolve. The solution should be clear with no visible particulates. If cloudy, the peptide may be degraded — do not use.",
      },
      {
        name: "Store the reconstituted vial",
        text: "Store the reconstituted peptide at 2–8°C (standard refrigerator) and use within 28 days, or according to stability data on the Certificate of Analysis. Never freeze a reconstituted peptide.",
      },
      {
        name: "Document the batch",
        text: "Record the reconstitution date, concentration, and lot number in a laboratory logbook for research traceability.",
      },
    ],
  },
  "peptide-purity-testing-guide": {
    name: "How to Verify Research Peptide Purity",
    description:
      "Procedure for evaluating the purity of a research peptide using the three complementary assays reported on a standard Certificate of Analysis: HPLC, mass spectrometry, and endotoxin testing.",
    totalTime: "PT15M",
    supplies: ["Certificate of Analysis for the lot being evaluated"],
    tools: ["HPLC report reader", "Mass spectrometry report reader"],
    steps: [
      {
        name: "Request the Certificate of Analysis",
        text: "Ask the supplier for the lot-specific COA. Reject any supplier that will not provide a lot-specific COA or that only supplies a generic, non-lot report.",
      },
      {
        name: "Check the HPLC peak",
        text: "On the HPLC chromatogram, confirm that the main peak represents ≥99% of the total area under the curve. Anything below 98% is below research-grade purity.",
      },
      {
        name: "Verify molecular identity with mass spectrometry",
        text: "Compare the reported molecular weight on the MS trace against the theoretical molecular weight of the peptide sequence. A match within ±1 Da confirms identity.",
      },
      {
        name: "Check endotoxin level",
        text: "Look for a bacterial endotoxin test result expressed in EU/mg. For research-grade peptides, <5 EU/mg is standard.",
      },
      {
        name: "Compare across lots",
        text: "If you are purchasing recurring lots, keep a log and compare consistency of purity percentages, MS mass, and endotoxin counts lot-to-lot. Flag any regressions.",
      },
    ],
  },
}

export function howToForGuide(slug: string) {
  const def = HOWTO_GUIDES[slug]
  if (!def) return null
  const url = `https://www.peptidesmaxxing.com/guides/${slug}`
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${url}#howto`,
    name: def.name,
    description: def.description,
    url,
    ...(def.totalTime ? { totalTime: def.totalTime } : {}),
    supply: def.supplies.map((s) => ({ "@type": "HowToSupply", name: s })),
    tool: def.tools.map((t) => ({ "@type": "HowToTool", name: t })),
    step: def.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
      url: `${url}#step-${i + 1}`,
    })),
  }
}
