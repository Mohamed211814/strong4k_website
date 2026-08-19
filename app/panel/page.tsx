import { Metadata } from "next";
import { siteConfig, getWhatsAppUrl } from "@/lib/config/site";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FinalCta } from "@/components/cta/FinalCta";
import { ShieldCheck, Zap, Layers, Sparkles, UserCheck, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Panel Reseller IPTV 4K - Gestion & Revente | STRONG4K",
  description:
    "Découvrez le Panel Reseller STRONG4K. Créez et gérez vos abonnements IPTV 4K en toute autonomie avec une activation instantanée et un support 24/7.",
  alternates: {
    canonical: `${siteConfig.domain}/panel`,
  },
};

export default function PanelPage() {
  const panelWhatsappUrl = getWhatsAppUrl("Accès Panel Reseller");

  return (
    <div className="pt-28 pb-16 space-y-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        <Breadcrumbs items={[{ name: "Panel", url: "/panel" }]} />

        {/* Hero Section */}
        <div className="py-8 text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-red-600" />
            <span>ACCÈS REVENDEURS & REVENTE IPTV</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 leading-tight">
            Panel Reseller STRONG4K : <br />
            <span className="text-gradient-red">Gérez vos abonnements 4K en toute autonomie.</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Rejoignez notre réseau de partenaires revendeurs. Profitez d'une plateforme d'administration intuitive, d'une activation en temps réel et de crédits rechargeables sans engagement.
          </p>

          <div className="pt-4 flex items-center justify-center">
            <a
              href={panelWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold text-base shadow-xl shadow-red-600/25 transition-all hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
              <span>Demander mon accès Panel via WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Panel Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md shadow-slate-200/50 hover:border-red-500/40 hover:shadow-xl transition-all duration-300 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center">
              <Zap className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Activation Instantanée</h3>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Générez et activez vos comptes d'abonnés immédiatement 24h/24 sans délai d'attente.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md shadow-slate-200/50 hover:border-red-500/40 hover:shadow-xl transition-all duration-300 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center">
              <Layers className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Gestion des Crédits</h3>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Consommez uniquement les crédits nécessaires pour chaque formule et renouvelez votre solde selon votre rythme.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md shadow-slate-200/50 hover:border-red-500/40 hover:shadow-xl transition-all duration-300 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center">
              <UserCheck className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Assistance VIP 24/7</h3>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Bénéficiez d'un canal de support prioritaire dédié pour accompagner vos clients au quotidien.
            </p>
          </div>
        </div>
      </div>

      <FinalCta />
    </div>
  );
}
