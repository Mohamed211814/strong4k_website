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
    <div className="pt-28 pb-16 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={[{ name: "IPTV France", url: "/iptv-france" }]} />

        <div className="py-12 text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <Globe className="w-3.5 h-3.5 text-cyan-400" />
            <span>OPTIMISÉ POUR LES RÉSEAUX EN FRANCE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            IPTV France : <br />
            <span className="text-gradient-blue">Votre télé en direct avec haute stabilité.</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Profitez des meilleures performances de diffusion sur l'ensemble des réseaux Fibre et ADSL en France.
            Une interface épurée sans décalage ni interruption.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6">
          <div className="glass-card p-8 rounded-3xl border border-white/10 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center">
              <Tv className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Compatibilité Box & Smart TV</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Que vous utilisiez une Smart TV Samsung, LG, Sony ou un boîtier Android TV branché sur votre télévision, l'installation se fait en toute simplicité.
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl border border-white/10 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center">
              <Shield className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Support Technique Dédié</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
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
