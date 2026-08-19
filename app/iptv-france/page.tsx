import { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PricingSection } from "@/components/pricing/PricingSection";
import { HowItWorks } from "@/components/how-it-works/HowItWorks";
import { FinalCta } from "@/components/cta/FinalCta";
import { Tv, Globe, Shield, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "IPTV France - Solution Streaming TV Réactive & Fluide",
  description:
    "Profitez d'une solution TV par Internet pensée pour les utilisateurs en France. Compatible Fibre, ADSL et 4G/5G sur Smart TV, Android et iOS.",
  alternates: {
    canonical: `${siteConfig.domain}/iptv-france`,
  },
};

export default function IptvFrancePage() {
  return (
    <div className="pt-28 pb-16 space-y-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={[{ name: "IPTV France", url: "/iptv-france" }]} />

        <div className="py-12 text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Globe className="w-3.5 h-3.5 text-red-600" />
            <span>OPTIMISÉ POUR LES RÉSEAUX EN FRANCE</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            IPTV France 4K : <br />
            <span className="text-gradient-red">Votre télé en direct avec haute stabilité.</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Profitez des meilleures performances de diffusion sur l'ensemble des réseaux Fibre et ADSL en France.
            Une interface épurée sans décalage ni interruption.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md shadow-slate-200/50 space-y-4 hover:border-red-500/40 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center">
              <Tv className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Compatibilité Box & Smart TV</h3>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">
              Que vous utilisiez une Smart TV Samsung, LG, Sony ou un boîtier Android TV branché sur votre télévision, l'installation se fait en toute simplicité.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md shadow-slate-200/50 space-y-4 hover:border-red-500/40 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center">
              <Shield className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Support Technique Dédié</h3>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">
              Notre équipe francophone est disponible 7j/7 pour vous aider à paramétrer vos applications et garantir une qualité de visionnage irréprochable.
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
