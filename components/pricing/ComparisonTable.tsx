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
        <h3 className="text-2xl font-extrabold text-white">Comparez nos formules</h3>
        <p className="text-sm text-gray-400">Toutes nos offres sont sans engagement et incluent une assistance complète.</p>
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block glass-card rounded-3xl border border-white/10 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/10 bg-white/[0.02]">
              <th className="py-5 px-6 text-sm font-bold text-gray-300">Caractéristique</th>
              <th className="py-5 px-6 text-sm font-bold text-white text-center">1 MOIS</th>
              <th className="py-5 px-6 text-sm font-bold text-white text-center">6 MOIS</th>
              <th className="py-5 px-6 text-sm font-bold text-purple-400 text-center bg-purple-950/20">
                12 MOIS <span className="text-[10px] text-amber-400 font-extrabold ml-1">★ BEST</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
            {comparisonRows.map((row, idx) => (
              <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                <td className="py-4 px-6 font-semibold text-gray-300">{row.label}</td>
                <td className="py-4 px-6 text-center text-gray-400">{row.m1}</td>
                <td className="py-4 px-6 text-center text-gray-300">{row.m6}</td>
                <td className="py-4 px-6 text-center font-bold text-purple-300 bg-purple-950/10">
                  {row.m12}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Stacked View */}
      <div className="block md:hidden space-y-4">
        <div className="glass-card p-5 rounded-2xl border border-purple-500/30 space-y-3">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="text-sm font-bold text-purple-400">12 MOIS (Formule Populaire)</span>
            <span className="text-[10px] bg-purple-600 text-white font-extrabold px-2 py-0.5 rounded">
              TOP VENTE
            </span>
          </div>
          <div className="space-y-2 text-xs">
            {comparisonRows.map((r, i) => (
              <div key={i} className="flex justify-between border-b border-white/5 pb-1">
                <span className="text-gray-400">{r.label} :</span>
                <span className="font-semibold text-white">{r.m12}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
