import { Metadata } from "next";
import { siteConfig, getWhatsAppUrl } from "@/lib/config/site";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FinalCta } from "@/components/cta/FinalCta";
import { ShieldCheck, Zap, Layers, Sparkles, UserCheck, MessageCircle, Server, CreditCard, Users, CheckCircle2, Clock, HelpCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Panel Reseller IPTV 4K | Gestion & Revente | STRONG4K",
  description:
    "Découvrez les Packs Reseller STRONG4K. Pack 120 Crédits et Pack 240 Crédits (10 Crédits = 1 An d'abonnement) avec gestion autonome et support 24/7.",
  alternates: {
    canonical: `${siteConfig.domain}/panel`,
  },
};

export default function PanelPage() {
  const panelWhatsappUrl = getWhatsAppUrl("Accès Panel Reseller");
  const pack120WhatsappUrl = getWhatsAppUrl("Pack Reseller 120 Crédits");
  const pack240WhatsappUrl = getWhatsAppUrl("Pack Reseller 240 Crédits");

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
        </div>

        {/* Reseller Packs Section */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-700">TARIFS REVENDEURS</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">Nos Packs de Crédits Reseller</h2>
            <p className="text-sm text-slate-600 font-medium">
              Formules claires et transparentes : <strong className="text-rose-700 font-bold">10 Crédits = 1 An d'abonnement</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
            {/* Pack 1: 120 Credits */}
            <div className="bg-white p-8 rounded-3xl border-2 border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col justify-between space-y-6 hover:border-rose-500 transition-all">
              <div className="space-y-6">
                <div className="border-b border-slate-100 pb-6 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-widest text-rose-700 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
                      PACK STARTER
                    </span>
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 pt-2">Pack 120 Crédits</h3>
                  
                  {/* Price Display */}
                  <div className="py-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-black text-slate-900">120 $</span>
                      <span className="text-xs font-semibold text-slate-400">/ 120 crédits</span>
                    </div>
                  </div>

                  <div className="text-sm font-bold text-rose-700 bg-rose-50/60 p-3 rounded-xl border border-rose-200/60">
                    💡 10 Crédits = 1 An (Permet de créer 12 abonnements de 1 an)
                  </div>
                </div>

                <ul className="space-y-3 text-xs font-semibold text-slate-700">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-rose-700 shrink-0" />
                    <span><strong>120 Crédits Reseller</strong> rechargeables</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-rose-700 shrink-0" />
                    <span>Équivalence : 10 Crédits = 1 An d'abonnement</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-rose-700 shrink-0" />
                    <span>Permet de créer <strong>12 abonnements de 1 an</strong></span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-rose-700 shrink-0" />
                    <span>Génération de <strong>tests gratuits 24h illimités</strong></span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-rose-700 shrink-0" />
                    <span>Création M3U, Xtream API et adresse MAC (MAG)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-rose-700 shrink-0" />
                    <span>Gestion des sous revendeurs (Sub Resellers)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-rose-700 shrink-0" />
                    <span>Crédits sans date d'expiration</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-rose-700 shrink-0" />
                    <span>Assistance technique prioritaire 7j/7</span>
                  </li>
                </ul>
              </div>

              <a
                href={pack120WhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 py-4 rounded-xl font-extrabold text-sm transition-all duration-300 bg-rose-700 hover:bg-rose-800 text-white shadow-md shadow-rose-700/25 hover:scale-[1.02]"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                <span>Commander Pack 120 Crédits</span>
              </a>
            </div>

            {/* Pack 2: 240 Credits (Featured) */}
            <div className="bg-white p-8 rounded-3xl border-2 border-rose-700 shadow-2xl shadow-rose-700/15 flex flex-col justify-between space-y-6 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-rose-700 text-white font-black text-[11px] uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 fill-white" />
                <span>MEILLEUR RAPPORT QUALITÉ / PRIX</span>
              </div>

              <div className="space-y-6">
                <div className="border-b border-slate-100 pb-6 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-widest text-rose-700 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
                      PACK PRO REVENDEUR
                    </span>
                    <span className="text-xs font-extrabold text-rose-900 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">
                      ÉCONOMISEZ 10%
                    </span>
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 pt-2">Pack 240 Crédits</h3>
                  
                  {/* Price Display */}
                  <div className="py-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-black text-slate-900">216 $</span>
                      <span className="text-sm font-bold line-through text-slate-400">240 $</span>
                      <span className="text-xs font-semibold text-slate-400">/ 240 crédits</span>
                    </div>
                  </div>

                  <div className="text-sm font-bold text-rose-700 bg-rose-50/60 p-3 rounded-xl border border-rose-200/60">
                    💡 10 Crédits = 1 An (Permet de créer 24 abonnements de 1 an)
                  </div>
                </div>

                <ul className="space-y-3 text-xs font-semibold text-slate-700">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-rose-700 shrink-0" />
                    <span><strong>240 Crédits Reseller</strong> rechargeables</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-rose-700 shrink-0" />
                    <span>Équivalence : 10 Crédits = 1 An d'abonnement</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-rose-700 shrink-0" />
                    <span>Permet de créer <strong>24 abonnements de 1 an</strong></span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-rose-700 shrink-0" />
                    <span>Génération de <strong>tests gratuits 24h illimités</strong></span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-rose-700 shrink-0" />
                    <span>Création M3U, Xtream API et adresse MAC (MAG)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-rose-700 shrink-0" />
                    <span>Gestion complète des Sub Resellers avec commissions</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-rose-700 shrink-0" />
                    <span>Crédits sans date d'expiration</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-rose-700 shrink-0" />
                    <span>Assistance VIP prioritaire 24/7 dédiée</span>
                  </li>
                </ul>
              </div>

              <a
                href={pack240WhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 py-4 rounded-xl font-extrabold text-sm transition-all duration-300 bg-rose-700 hover:bg-rose-800 text-white shadow-md shadow-rose-700/25 hover:scale-[1.02]"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                <span>Commander Pack 240 Crédits</span>
              </a>
            </div>
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
                <CheckCircle2 className="w-4 h-4 text-rose-700" /> Sous Revendeurs (Sub Resellers)
              </h4>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Créez et gérez vos propres sous revendeurs sous votre compte panel principal et percevez une marge supplémentaire.
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
