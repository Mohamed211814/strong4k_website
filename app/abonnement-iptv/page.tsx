import { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PricingSection } from "@/components/pricing/PricingSection";
import { DeviceShowcase } from "@/components/devices/DeviceShowcase";
import { FaqSection } from "@/components/faq/FaqSection";
import { FinalCta } from "@/components/cta/FinalCta";
import { ShieldCheck, Zap, Tv, CheckCircle2, Sparkles, MonitorPlay, Wifi, Layers, Flame, Server } from "lucide-react";

export const metadata: Metadata = {
  title: "Meilleur Abonnement IPTV France 4K | Smart TV, Firestick, Xtream & M3U",
  description:
    "Acheter le meilleur abonnement IPTV 4K en France sans coupure. Compatible Smart TV Samsung/LG, Amazon Firestick, IPTV Smarters Pro, Tivimate, Xtream Codes et M3U. Activation rapide sous 5 min.",
  keywords: siteConfig.seoKeywords,
  alternates: {
    canonical: `${siteConfig.domain}/abonnement-iptv`,
  },
};

export default function AbonnementIptvPage() {
  return (
    <div className="pt-28 pb-16 space-y-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        <Breadcrumbs items={[{ name: "Abonnement IPTV", url: "/abonnement-iptv" }]} />

        {/* Hero Section */}
        <div className="py-8 text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-rose-700" />
            <span>EXCELLENCE DE DIFFUSION 4K</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight">
            Abonnement IPTV en France : <br />
            <span className="text-rose-700">La TV 4K Ultra HD sans compromise.</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            Profitez d'un accès télévisuel de nouvelle génération. Plus de 20 000 chaînes en direct et une immense bibliothèque VOD en 4K Ultra HD & 60 FPS, accessibles sur tous vos équipements connectés.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-700 font-bold">
            <div className="flex items-center gap-1.5 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200 shadow-sm">
              <Zap className="w-4 h-4 text-rose-700" /> Activation sous 5 minutes
            </div>
            <div className="flex items-center gap-1.5 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200 shadow-sm">
              <Tv className="w-4 h-4 text-rose-700" /> Qualité 4K / 60 FPS
            </div>
            <div className="flex items-center gap-1.5 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-rose-700" /> Sans engagement
            </div>
          </div>
        </div>

        {/* Detailed Explanation Section 1: Pourquoi Choisir STRONG4K */}
        <div className="bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-200 space-y-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-700">TECHNOLOGIE UNIQUE</span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
              Pourquoi l'Abonnement STRONG4K est le Choix n°1 en France
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              Contrairement aux offres traditionnelles bridées ou dépendantes d'une antenne parabole, STRONG4K utilise une infrastructure réseau européenne distribuée sur des serveurs haute vitesse. Cela garantit un zapping ultra rapide et une stabilité optimale lors des matchs en direct.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center">
                <Server className="w-5 h-5 text-rose-700" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Serveurs Équilibrés</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Répartition automatique de la charge pour maintenir une qualité FHD et 4K irréprochable même aux heures de grande écoute.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center">
                <Wifi className="w-5 h-5 text-rose-700" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Compatibilité FIBRE & 5G</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Optimisé pour les réseaux à haut débit (Orange, Free, SFR, Bouygues) et les connexions mobiles 4G/5G en déplacement.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center">
                <Layers className="w-5 h-5 text-rose-700" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Catalogue VOD Complet</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Une sélection mise à jour régulièrement comprenant les derniers films, séries incontournables et documentaires en version française.
              </p>
            </div>
          </div>
        </div>

        {/* Comparison: Télévision Classique vs STRONG4K */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-black text-slate-900">Comparatif : Offre TV Classique vs STRONG4K</h2>
            <p className="text-sm text-slate-600 font-medium">Découvrez ce que vous gagnez en passant à la TV 4K par Internet.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-white rounded-2xl border border-slate-200 shadow-sm">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200">
                  <th className="py-4 px-6 text-xs font-bold uppercase text-slate-700">Critères</th>
                  <th className="py-4 px-6 text-xs font-bold uppercase text-slate-500">Offre TV Câble / Satellite</th>
                  <th className="py-4 px-6 text-xs font-black uppercase text-rose-700 bg-rose-50">STRONG4K IPTV</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm font-medium">
                <tr>
                  <td className="py-4 px-6 font-bold text-slate-900">Installation physique</td>
                  <td className="py-4 px-6 text-slate-500">Décodeur obligatoire + Antenne parabole</td>
                  <td className="py-4 px-6 text-rose-700 font-bold bg-rose-50/40">100% Dématérialisé (0 équipement imposé)</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-slate-900">Compatibilité multi-écrans</td>
                  <td className="py-4 px-6 text-slate-500">Limité au téléviseur principal</td>
                  <td className="py-4 px-6 text-rose-700 font-bold bg-rose-50/40">Smart TV, Mobile, Tablette, PC & Firestick</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-slate-900">Qualité maximale</td>
                  <td className="py-4 px-6 text-slate-500">720p / 1080i souvent compressé</td>
                  <td className="py-4 px-6 text-rose-700 font-bold bg-rose-50/40">4K Ultra HD & 60 FPS natif</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-slate-900">Engagement contractuel</td>
                  <td className="py-4 px-6 text-slate-500">12 à 24 mois obligatoires</td>
                  <td className="py-4 px-6 text-rose-700 font-bold bg-rose-50/40">Liberté totale sans engagement</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-slate-900">Délai de mise en service</td>
                  <td className="py-4 px-6 text-slate-500">3 à 7 jours ouvrés (rendez-vous technicien)</td>
                  <td className="py-4 px-6 text-rose-700 font-bold bg-rose-50/40">Activation sous 5 minutes par e-mail</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <PricingSection />
      <DeviceShowcase />
      <FaqSection />
      <FinalCta />
    </div>
  );
}
