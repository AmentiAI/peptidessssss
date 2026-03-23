"use client"
import { useState } from "react"
import { Calculator, ChevronDown } from "lucide-react"

const PEPTIDE_PRESETS: { name: string; slug: string; lowMcgKg: number; highMcgKg: number; note: string }[] = [
  { name: "BPC-157", slug: "bpc-157", lowMcgKg: 2, highMcgKg: 10, note: "1–2× daily" },
  { name: "TB-500", slug: "tb-500", lowMcgKg: 2.5, highMcgKg: 10, note: "2× weekly loading, then weekly" },
  { name: "Ipamorelin", slug: "ipamorelin", lowMcgKg: 1, highMcgKg: 3, note: "2–3× daily, fasted" },
  { name: "CJC-1295 (no DAC)", slug: "cjc-1295-without-dac", lowMcgKg: 1, highMcgKg: 2, note: "Paired with GHRP, 2–3× daily" },
  { name: "GHRP-2", slug: "ghrp-2-acetate", lowMcgKg: 1, highMcgKg: 3, note: "2–3× daily, fasted" },
  { name: "Sermorelin", slug: "sermorelin-acetate", lowMcgKg: 0.5, highMcgKg: 2, note: "Once nightly" },
  { name: "Epithalon", slug: "epithalon", lowMcgKg: 0.1, highMcgKg: 0.14, note: "10 mcg/day flat dose, 10-day cycles" },
  { name: "GHK-CU", slug: "ghk-cu", lowMcgKg: 1, highMcgKg: 3, note: "Once daily" },
  { name: "Semax", slug: "semax", lowMcgKg: 0.5, highMcgKg: 1, note: "Intranasal, 1–2× daily" },
  { name: "PT-141", slug: "pt-141-bremelanotide", lowMcgKg: 0.5, highMcgKg: 2, note: "1–2 hrs before use" },
  { name: "Selank", slug: "selank", lowMcgKg: 0.5, highMcgKg: 1, note: "Intranasal or SC" },
  { name: "AOD9604", slug: "aod9604", lowMcgKg: 0.25, highMcgKg: 0.5, note: "Fasted, once daily" },
  { name: "Tesamorelin", slug: "tesamorelin", lowMcgKg: 0.03, highMcgKg: 0.03, note: "~2mg flat dose daily" },
  { name: "IGF-1 LR3", slug: "igf-1lr3", lowMcgKg: 0.5, highMcgKg: 2, note: "Post-workout, 4–6 hrs max" },
]

export function DosageCalculator() {
  const [weight, setWeight] = useState("")
  const [unit, setUnit] = useState<"lbs" | "kg">("lbs")
  const [doseRate, setDoseRate] = useState("")
  const [concentration, setConcentration] = useState("")
  const [selectedPeptide, setSelectedPeptide] = useState<typeof PEPTIDE_PRESETS[0] | null>(null)

  const weightKg = weight ? (unit === "lbs" ? parseFloat(weight) / 2.2046 : parseFloat(weight)) : null
  const rate = parseFloat(doseRate)
  const conc = parseFloat(concentration)

  const totalMcg = weightKg && !isNaN(rate) && rate > 0 ? weightKg * rate : null
  const volumeMl = totalMcg && !isNaN(conc) && conc > 0 ? totalMcg / conc : null
  const volumeIU = volumeMl !== null ? Math.round(volumeMl * 100) : null

  function applyPreset(peptide: typeof PEPTIDE_PRESETS[0]) {
    setSelectedPeptide(peptide)
    setDoseRate(String(peptide.lowMcgKg))
  }

  return (
    <div className="space-y-6">
      {/* Peptide presets */}
      <div>
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Select Peptide (fills dose rate)</p>
        <div className="flex flex-wrap gap-2">
          {PEPTIDE_PRESETS.map((p) => (
            <button
              key={p.slug}
              onClick={() => applyPreset(p)}
              className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${
                selectedPeptide?.slug === p.slug
                  ? "border-blue-500 bg-blue-500 text-white"
                  : "border-slate-200 text-slate-600 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50"
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>
        {selectedPeptide && (
          <div className="mt-3 p-3 rounded-lg bg-blue-50 border border-blue-100 text-xs text-blue-700">
            <span className="font-semibold">{selectedPeptide.name}:</span>{" "}
            {selectedPeptide.lowMcgKg === selectedPeptide.highMcgKg
              ? `${selectedPeptide.lowMcgKg} mcg/kg`
              : `${selectedPeptide.lowMcgKg}–${selectedPeptide.highMcgKg} mcg/kg`}{" "}
            · {selectedPeptide.note}.{" "}
            <a href={`/products/${selectedPeptide.slug}`} className="underline font-semibold hover:text-blue-900">
              View product →
            </a>
          </div>
        )}
      </div>

      {/* Inputs */}
      <div className="grid sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Body Weight</label>
          <div className="flex gap-2">
            <input
              type="number"
              min="0"
              step="1"
              placeholder="e.g. 180"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="flex-1 px-3 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="flex rounded-lg border border-slate-200 overflow-hidden text-xs font-semibold">
              <button
                onClick={() => setUnit("lbs")}
                className={`px-3 py-2 transition-colors ${unit === "lbs" ? "bg-blue-500 text-white" : "text-slate-500 hover:bg-slate-50"}`}
              >
                lbs
              </button>
              <button
                onClick={() => setUnit("kg")}
                className={`px-3 py-2 transition-colors ${unit === "kg" ? "bg-blue-500 text-white" : "text-slate-500 hover:bg-slate-50"}`}
              >
                kg
              </button>
            </div>
          </div>
          {weightKg && (
            <p className="text-xs text-slate-400 mt-1">{weightKg.toFixed(1)} kg</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Dose Rate (mcg / kg)</label>
          <input
            type="number"
            min="0"
            step="0.1"
            placeholder="e.g. 2"
            value={doseRate}
            onChange={(e) => setDoseRate(e.target.value)}
            className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          {selectedPeptide && (
            <p className="text-xs text-slate-400 mt-1">
              Range: {selectedPeptide.lowMcgKg}–{selectedPeptide.highMcgKg} mcg/kg
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Reconstituted Concentration (mcg/mL)</label>
          <input
            type="number"
            min="0"
            step="100"
            placeholder="e.g. 2500"
            value={concentration}
            onChange={(e) => setConcentration(e.target.value)}
            className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <p className="text-xs text-slate-400 mt-1">Use Reconstitution Calc above</p>
        </div>
      </div>

      {/* Results */}
      {totalMcg !== null && (
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="rounded-xl bg-blue-50 border border-blue-100 p-4 text-center">
            <p className="text-xs font-semibold text-blue-500 uppercase tracking-widest mb-1">Total Dose</p>
            <p className="text-2xl font-bold text-blue-700">{totalMcg.toFixed(1)}</p>
            <p className="text-xs text-blue-500 mt-0.5">mcg</p>
          </div>
          {volumeMl !== null ? (
            <>
              <div className="rounded-xl bg-violet-50 border border-violet-100 p-4 text-center">
                <p className="text-xs font-semibold text-violet-500 uppercase tracking-widest mb-1">Draw Volume</p>
                <p className="text-2xl font-bold text-violet-700">{volumeMl.toFixed(3)}</p>
                <p className="text-xs text-violet-500 mt-0.5">mL</p>
              </div>
              <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-4 text-center">
                <p className="text-xs font-semibold text-emerald-500 uppercase tracking-widest mb-1">Syringe Units</p>
                <p className="text-2xl font-bold text-emerald-700">{volumeIU}</p>
                <p className="text-xs text-emerald-500 mt-0.5">IU (insulin syringe)</p>
              </div>
            </>
          ) : (
            <div className="sm:col-span-2 rounded-xl bg-slate-50 border border-slate-100 p-4 flex items-center justify-center text-sm text-slate-400">
              Enter concentration to calculate draw volume
            </div>
          )}
        </div>
      )}
    </div>
  )
}
