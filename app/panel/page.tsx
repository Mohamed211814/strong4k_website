import { Metadata } from "next";
import { siteConfig, getWhatsAppUrl } from "@/lib/config/site";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FinalCta } from "@/components/cta/FinalCta";
import { ShieldCheck, Zap, Layers, Sparkles, UserCheck, MessageCircle, Server, CreditCard, Users, CheckCircle2, Clock, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Panel Reseller IPTV 4K | Gestion & Revente | STRONG4K",
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        <Breadcrumbs items={[{ name: "Panel", url: "/panel" }]} />

        {/* Hero Section */}
        <div className="py-8 text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-rose-700" />
            <span>ACCÈS REVENDEURS & REVENTE IPTV</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 leading-tight">
            Panel Reseller STRONG4K : <br />
            <span className="text-rose-700">Gérez vos abonnements 4K en toute autonomie.</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            Rejoignez notre réseau officiel de revendeurs partenaires. Profitez d'une plateforme d'administration puissante, d'une création de ligne en temps réel et de crédits rechargeables sans date d'expiration.
          </p>

          <div className="pt-4 flex items-center justify-center">
            <a
              href={panelWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-rose-700 hover:bg-rose-800 text-white font-extrabold text-base shadow-xl shadow-rose-700/25 transition-all hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
              <span>Demander mon accès Panel via WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Panel Core Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md space-y-4 hover:border-rose-400 transition-all">
            <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center">
              <Zap className="w-6 h-6 text-rose-700" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Activation Instantanée 24/7</h3>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Générez vos lignes d'abonnement (M3U, Xtream API, MAC MAG) en temps réel, 24 heures sur 24, sans délai d'intervention manuelle.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md space-y-4 hover:border-rose-400 transition-all">
            <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center">
              <Layers className="w-6 h-6 text-rose-700" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Gestion Flexible des Crédits</h3>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Vos crédits n'expirent jamais. Vous pouvez créer des accès de 1 mois, 6 mois ou 12 mois selon la demande de vos clients.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md space-y-4 hover:border-rose-400 transition-all">
            <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center">
              <UserCheck className="w-6 h-6 text-rose-700" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Assistance Revendeurs VIP</h3>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Canal de communication direct dédié aux revendeurs pour résoudre tout problème technique ou demande spécifique sous quelques minutes.
            </p>
          </div>
        </div>

        {/* Reseller Advantage Section */}
        <div className="bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-200 space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-700">BUSINESS MODEL PERFORMANT</span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
              Pourquoi Devenir Revendeur STRONG4K ?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium">
              Nous fournissons les outils et l'infrastructure complète pour développer votre propre activité en toute autonomie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2">
              <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-rose-700" /> Création de Tests Gratuits
              </h4>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Générez des lignes de démonstration temporaires de 24 heures pour faire tester la qualité des flux à vos futurs acheteurs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2">
              <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-rose-700" /> Sous Revendeurs (Sub-Resellers)
              </h4>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Créez et gérez vos propres sous-revendeurs sous votre compte panel principal et percevez une marge supplémentaire.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2">
              <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-rose-700" /> Personnalisation des Bouquets
              </h4>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Activez ou désactivez certains bouquets de chaînes ou catégories VOD sur demande directe de vos clients.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2">
              <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-rose-700" /> Infrastructure Ultra Stable
              </h4>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Bénéficiez du réseau 4K STRONG4K réputé pour sa haute résistance lors des grands événements sportifs internationaux.
              </p>
            </div>
          </div>
        </div>
      </div>

      <FinalCta />
    </div>
  );
}
