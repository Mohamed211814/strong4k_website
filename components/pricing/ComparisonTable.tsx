import { Check, Sparkles } from "lucide-react";

export function ComparisonTable() {
  const comparisonRows = [
    {
      label: "Durée d'engagement",
      m1: "1 Mois (Sans engagement)",
      m6: "6 Mois",
      m12: "12 Mois (Économique)",
    },
    {
      label: "Activation des accès",
      m1: "Rapide (Quelques min)",
      m6: "Rapide (Quelques min)",
      m12: "Prioritaire Instantanée",
    },
    {
      label: "Appareils simultanés",
      m1: "1 Appareil",
      m6: "1 Appareil",
      m12: "1 à 2 Appareils",
    },
    {
      label: "Qualité vidéo",
      m1: "HD & 4K Ultra HD",
      m6: "HD & 4K Ultra HD",
      m12: "4K UHD & 60 FPS Prioritaire",
    },
    {
      label: "Assistance client",
      m1: "Standard 7j/7",
      m6: "Réactive 7j/7",
      m12: "VIP Dédiée 24/7",
    },
    {
      label: "Mises à jour gratuites",
      m1: "Incluses",
      m6: "Incluses",
      m12: "Incluses + Garantie Service",
    },
  ];

  return (
    <div className="space-y-6 pt-12">
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-black text-slate-900">Comparez nos formules 4K</h3>
        <p className="text-sm text-slate-600 font-medium">Toutes nos offres sont sans engagement et incluent une assistance complète.</p>
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block bg-white rounded-3xl border border-slate-200 shadow-md shadow-slate-200/50 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="py-5 px-6 text-sm font-bold text-slate-700">Caractéristique</th>
              <th className="py-5 px-6 text-sm font-bold text-slate-900 text-center">1 MOIS</th>
              <th className="py-5 px-6 text-sm font-bold text-slate-900 text-center">6 MOIS</th>
              <th className="py-5 px-6 text-sm font-black text-red-600 text-center bg-red-50/60">
                12 MOIS <span className="text-[10px] bg-red-600 text-white font-extrabold px-1.5 py-0.5 rounded ml-1">★ MEILLEUR CHOIX</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
            {comparisonRows.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                <td className="py-4 px-6 font-bold text-slate-900">{row.label}</td>
                <td className="py-4 px-6 text-center text-slate-600 font-medium">{row.m1}</td>
                <td className="py-4 px-6 text-center text-slate-700 font-medium">{row.m6}</td>
                <td className="py-4 px-6 text-center font-bold text-red-700 bg-red-50/40">
                  {row.m12}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Stacked View */}
      <div className="block md:hidden space-y-4">
        <div className="bg-white p-5 rounded-2xl border-2 border-red-200 shadow-md space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <span className="text-sm font-black text-red-600">12 MOIS (Formule Populaire)</span>
            <span className="text-[10px] bg-red-600 text-white font-extrabold px-2 py-0.5 rounded">
              MEILLEURE VENTE
            </span>
          </div>
          <div className="space-y-2 text-xs">
            {comparisonRows.map((r, i) => (
              <div key={i} className="flex justify-between border-b border-slate-100 pb-1">
                <span className="text-slate-500 font-medium">{r.label} :</span>
                <span className="font-bold text-slate-900">{r.m12}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
