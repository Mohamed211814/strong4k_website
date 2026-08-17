import { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PricingSection } from "@/components/pricing/PricingSection";
import { DeviceShowcase } from "@/components/devices/DeviceShowcase";
import { FaqSection } from "@/components/faq/FaqSection";
import { FinalCta } from "@/components/cta/FinalCta";
import { ShieldCheck, Zap, Tv, CheckCircle2, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Abonnement IPTV France - Formules & Compatibilité",
  description:
    "Découvrez nos formules d'abonnement IPTV en France. Un accès flexible, sans engagement et compatible avec toutes vos Smart TV, boîtiers Android et mobiles.",
  alternates: {
    canonical: `${siteConfig.domain}/abonnement-iptv`,
  },
};

export default function AbonnementIptvPage() {
  return (
    <div className="pt-28 pb-16 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={[{ name: "Abonnement IPTV", url: "/abonnement-iptv" }]} />

        {/* Hero Section */}
        <div className="py-12 text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>OFFRE STREAMING HAUT DÉBIT</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Abonnement IPTV en France : <br />
            <span className="text-gradient-violet">La TV moderne sur tous vos écrans.</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Accédez à vos flux préférés en Haute Définition et 4K Ultra HD avec une stabilité optimale.
            Découvrez une formule adaptée à vos équipements sans contrainte matérielle.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-300 font-medium">
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-purple-400" /> Activation sous 5 minutes
            </div>
            <div className="flex items-center gap-1.5">
              <Tv className="w-4 h-4 text-cyan-400" /> Qualité 4K / 60 FPS
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> Sans engagement
            </div>
          </div>
        </div>

        {/* Key Features Block */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
          <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-3">
            <h3 className="text-lg font-bold text-white">Flux Ultra-Fluides</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Serveurs haut débit réduisant au minimum le temps de réponse et la mise en mémoire tampon.
            </p>
          </div>
          <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-3">
            <h3 className="text-lg font-bold text-white">Application Simple</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Compatible avec les lecteurs multimédias reconnus sur Smart TV, Android TV et Amazon Fire Stick.
            </p>
          </div>
          <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-3">
            <h3 className="text-lg font-bold text-white">Assistance 7j/7</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Notre équipe française vous accompagne lors de la configuration et répond à vos questions.
            </p>
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
