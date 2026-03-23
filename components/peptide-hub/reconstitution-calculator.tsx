"use client"
import { useState } from "react"
import { FlaskConical, Info } from "lucide-react"

export function ReconstitutionCalculator() {
  const [vialMg, setVialMg] = useState("")
  const [bacMl, setBacMl] = useState("")
  const [desiredMcg, setDesiredMcg] = useState("")

  const vial = parseFloat(vialMg)
  const water = parseFloat(bacMl)
  const dose = parseFloat(desiredMcg)

  const concMcgPerMl = !isNaN(vial) && !isNaN(water) && water > 0 ? (vial * 1000) / water : null
  const doseMl = concMcgPerMl && !isNaN(dose) && dose > 0 ? dose / concMcgPerMl : null
  const doseIU = doseMl !== null ? Math.round(doseMl * 100) : null

  const PRESETS = [
    { label: "2mg vial / 2mL water", vial: "2", bac: "2" },
    { label: "5mg vial / 2mL water", vial: "5", bac: "2" },
    { label: "10mg vial / 2mL water", vial: "10", bac: "2" },
    { label: "10mg vial / 1mL water", vial: "10", bac: "1" },
  ]

  const DOSE_TABLE = concMcgPerMl ? [100, 200, 250, 300, 500, 1000].map((d) => ({
    mcg: d,
    ml: (d / concMcgPerMl).toFixed(3),
    iu: Math.round((d / concMcgPerMl) * 100),
  })) : []

  return (
    <div className="space-y-6">
      {/* Quick presets */}
      <div>
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Quick Presets</p>
        <div className="flex flex-wrap gap-2">
          {PRESETS.map((p) => (
            <button
              key={p.label}
              onClick={() => { setVialMg(p.vial); setBacMl(p.bac) }}
              className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-600 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-all"
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Inputs */}
      <div className="grid sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Vial Size (mg)</label>
          <input
            type="number"
            min="0"
            step="0.1"
            placeholder="e.g. 5"
            value={vialMg}
            onChange={(e) => setVialMg(e.target.value)}
            className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">BAC Water Added (mL)</label>
          <input
            type="number"
            min="0"
            step="0.1"
            placeholder="e.g. 2"
            value={bacMl}
            onChange={(e) => setBacMl(e.target.value)}
            className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Desired Dose (mcg)</label>
          <input
            type="number"
            min="0"
            step="1"
            placeholder="e.g. 250"
            value={desiredMcg}
            onChange={(e) => setDesiredMcg(e.target.value)}
            className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Result highlight */}
      {concMcgPerMl !== null && (
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="rounded-xl bg-blue-50 border border-blue-100 p-4 text-center">
            <p className="text-xs font-semibold text-blue-500 uppercase tracking-widest mb-1">Concentration</p>
            <p className="text-2xl font-bold text-blue-700">{concMcgPerMl.toFixed(0)}</p>
            <p className="text-xs text-blue-500 mt-0.5">mcg / mL</p>
          </div>
          {doseMl !== null && (
            <>
              <div className="rounded-xl bg-violet-50 border border-violet-100 p-4 text-center">
                <p className="text-xs font-semibold text-violet-500 uppercase tracking-widest mb-1">Draw Volume</p>
                <p className="text-2xl font-bold text-violet-700">{doseMl.toFixed(3)}</p>
                <p className="text-xs text-violet-500 mt-0.5">mL</p>
              </div>
              <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-4 text-center">
                <p className="text-xs font-semibold text-emerald-500 uppercase tracking-widest mb-1">Syringe Units</p>
                <p className="text-2xl font-bold text-emerald-700">{doseIU}</p>
                <p className="text-xs text-emerald-500 mt-0.5">IU (insulin syringe)</p>
              </div>
            </>
          )}
          {doseMl === null && (
            <div className="sm:col-span-2 rounded-xl bg-slate-50 border border-slate-100 p-4 flex items-center justify-center text-sm text-slate-400">
              Enter desired dose to calculate draw volume
            </div>
          )}
        </div>
      )}

      {/* Dose reference table */}
      {DOSE_TABLE.length > 0 && (
        <div>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Dose Reference Table</p>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Dose (mcg)</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Volume (mL)</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Insulin Syringe (IU)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {DOSE_TABLE.map((row) => (
                  <tr
                    key={row.mcg}
                    className={`hover:bg-slate-50 transition-colors ${!isNaN(dose) && row.mcg === dose ? "bg-blue-50" : ""}`}
                  >
                    <td className="px-4 py-3 font-medium text-slate-900">{row.mcg} mcg</td>
                    <td className="px-4 py-3 text-slate-600">{row.ml} mL</td>
                    <td className="px-4 py-3 text-slate-600">{row.iu} IU</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Info note */}
      <div className="flex gap-3 p-4 rounded-xl bg-amber-50 border border-amber-100">
        <Info className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
        <p className="text-xs text-amber-700 leading-relaxed">
          <span className="font-semibold">For research purposes only.</span> 1 IU on a U-100 insulin syringe = 0.01 mL. These calculations assume a standard U-100 insulin syringe. Always verify your syringe type before drawing.
        </p>
      </div>
    </div>
  )
}
