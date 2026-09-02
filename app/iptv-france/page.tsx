import { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PricingSection } from "@/components/pricing/PricingSection";
import { HowItWorks } from "@/components/how-it-works/HowItWorks";
import { FinalCta } from "@/components/cta/FinalCta";
import { Tv, Globe, Shield, CheckCircle, Wifi, Cpu, Zap, Radio, Sparkles, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Fournisseur Strong IPTV France 4K | Stabilité Maximale Sans Coupure",
  description:
    "Profitez du meilleur fournisseur Strong IPTV en France. Chaînes françaises 4K, sports en direct (Ligue 1, Champions League) et VOD. Compatible IPTV Smarters Pro, Tivimate, Firestick & Smart TV.",
  keywords: siteConfig.seoKeywords,
  alternates: {
    canonical: `${siteConfig.domain}/iptv-france`,
  },
};

export default function IptvFrancePage() {
  return (
    <div className="pt-28 pb-16 space-y-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        <Breadcrumbs items={[{ name: "IPTV France", url: "/iptv-france" }]} />

        {/* Hero Section */}
        <div className="py-8 text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Globe className="w-3.5 h-3.5 text-rose-700" />
            <span>STRONG IPTV : OPTIMISÉ POUR LES RÉSEAUX EN FRANCE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight">
            Strong IPTV France 4K Ultra HD : <br />
            <span className="text-rose-700">Votre télévision avec une stabilité maximale.</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            Profitez des meilleures performances de diffusion Strong IPTV sur l'ensemble des réseaux Fibre et ADSL en France. Une infrastructure CDN haut débit garantissant une image 4K et 60 FPS sans coupure.
          </p>
        </div>

        {/* French ISP Compatibility Grid */}
        <div className="bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-200 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-700">RÉSEAU NATIONALE</span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
              Compatible avec Tous les Opérateurs en France
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium">
              Notre protocole adaptatif s'ajuste dynamiquement à la bande passante de votre FAI pour éliminer les temps de mémoire tampon.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-1">
              <span className="text-lg font-black text-slate-900">Fibre Orange / Sosh</span>
              <p className="text-xs text-rose-700 font-bold">Fluidité 4K Maximale</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-1">
              <span className="text-lg font-black text-slate-900">Freebox (Free)</span>
              <p className="text-xs text-rose-700 font-bold">Optimisé 60 FPS</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-1">
              <span className="text-lg font-black text-slate-900">SFR / RED</span>
              <p className="text-xs text-rose-700 font-bold">Zapping Instantané</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-1">
              <span className="text-lg font-black text-slate-900">Bouygues Telecom</span>
              <p className="text-xs text-rose-700 font-bold">Stabilité Certifiée</p>
            </div>
          </div>
        </div>

        {/* Technical Requirements Table */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-black text-slate-900">Prérequis Réseau Recommandés</h2>
            <p className="text-sm text-slate-600 font-medium">Pour profiter de la meilleure qualité visuelle selon votre vitesse internet.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Qualité SD / HD</span>
              <div className="text-3xl font-black text-slate-900">5 à 10 Mbps</div>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Idéal pour les connexions ADSL de base et les connexions mobiles 3G/4G en zone rurale.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-700">Qualité Full HD 1080p</span>
              <div className="text-3xl font-black text-slate-900">12 à 15 Mbps</div>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Parfait pour une utilisation fluide sur Smart TV, boîtiers Android et smartphones.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border-2 border-rose-200 shadow-md space-y-3 text-center bg-rose-50/30">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-800">Qualité 4K Ultra HD & 60 FPS</span>
              <div className="text-3xl font-black text-rose-700">25+ Mbps</div>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">
                Expérience cinéma et événements sportifs en direct sur grands écrans 4K avec zéro saccade.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md shadow-slate-200/50 space-y-4 hover:border-rose-400 transition-all">
            <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center">
              <Tv className="w-6 h-6 text-rose-700" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Compatibilité Box & Smart TV</h3>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">
              Que vous utilisiez une Smart TV Samsung (Tizen), LG (webOS), Sony (Android TV) ou une clé Amazon Fire TV Stick branchée sur votre télévision, l'installation se fait en toute simplicité en 2 minutes.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md shadow-slate-200/50 space-y-4 hover:border-rose-400 transition-all">
            <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center">
              <Shield className="w-6 h-6 text-rose-700" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Support Technique Francophone 7j/7</h3>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">
              Notre équipe d'assistance basée en France est disponible 7j/7 par e-mail et WhatsApp pour vous guider pas à pas dans l'installation et répondre à la moindre question.
            </p>
          </div>
        </div>
      </div>

      <HowItWorks />
      <PricingSection />
      <FinalCta />
    </div>
  );
}
