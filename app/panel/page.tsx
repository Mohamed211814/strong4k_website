import { Metadata } from "next";
import { siteConfig, getWhatsAppUrl } from "@/lib/config/site";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FinalCta } from "@/components/cta/FinalCta";
import { ShieldCheck, Zap, Layers, Sparkles, UserCheck, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Panel Reseller IPTV - Gestion & Revente | STREAMORA",
  description:
    "Découvrez le Panel Reseller STREAMORA. Créez et gérez vos abonnements IPTV en toute autonomie avec une activation instantanée et un support 24/7.",
  alternates: {
    canonical: `${siteConfig.domain}/panel`,
  },
};

export default function PanelPage() {
  const panelWhatsappUrl = getWhatsAppUrl("Accès Panel Reseller");

  return (
    <div className="pt-28 pb-16 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        <Breadcrumbs items={[{ name: "Panel", url: "/panel" }]} />

        {/* Hero Section */}
        <div className="py-8 text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>ACCÈS REVENDEURS & REVENTE IPTV</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Panel Reseller STREAMORA : <br />
            <span className="text-gradient-violet">Gérez vos abonnements en toute autonomie.</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Rejoignez notre réseau de partenaires revendeurs. Profitez d'une plateforme d'administration intuitive, d'une activation en temps réel et de crédits rechargeables sans engagement.
          </p>

          <div className="pt-4 flex items-center justify-center">
            <a
              href={panelWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-base shadow-xl shadow-emerald-600/30 transition-all hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
              <span>Demander mon accès Panel via WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Panel Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-3 glass-card-hover">
            <div className="w-12 h-12 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center">
              <Zap className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-lg font-bold text-white">Activation Instantanée</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Générez et activez vos comptes d'abonnés immédiatement 24h/24 sans délai d'attente.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-3 glass-card-hover">
            <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center">
              <Layers className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-lg font-bold text-white">Gestion des Crédits</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Consommez uniquement les crédits nécessaires pour chaque formule et renouvelez votre solde selon votre rythme.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-3 glass-card-hover">
            <div className="w-12 h-12 rounded-xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center">
              <UserCheck className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-lg font-bold text-white">Assistance VIP 24/7</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Bénéficiez d'un canal de support prioritaire dédié pour accompagner vos clients au quotidien.
            </p>
          </div>
        </div>
      </div>

      <FinalCta />
    </div>
  );
}
