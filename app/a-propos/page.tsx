import { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FinalCta } from "@/components/cta/FinalCta";
import { ShieldCheck, Tv, Headphones, Lock, CheckCircle2, Server, Award, Sparkles, Zap, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: "À propos | STRONG4K | Qualité 4K & Stabilité",
  description:
    "Découvrez la philosophie de STRONG4K : une expérience TV 4K Ultra HD moderne, réactive et conforme pour vos appareils compatibles en France.",
  alternates: {
    canonical: `${siteConfig.domain}/a-propos`,
  },
};

export default function AProposPage() {
  return (
    <div className="pt-28 pb-16 space-y-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        <Breadcrumbs items={[{ name: "À propos", url: "/a-propos" }]} />

        {/* Hero */}
        <div className="py-8 text-center max-w-4xl mx-auto space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-800 bg-rose-50 px-4 py-1.5 rounded-full border border-rose-200 shadow-sm">
            NOTRE MISSION & NOTRE ENGAGEMENT
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 leading-tight">
            À propos de STRONG4K
          </h1>
          <p className="text-slate-600 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            Nous avons conçu STRONG4K pour proposer une alternative 4K Ultra HD moderne, claire et transparente à l'offre télévisuelle traditionnelle.
          </p>
        </div>

        {/* Key Metrics Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center space-y-2">
            <span className="text-3xl font-black text-rose-700 font-mono">99,9%</span>
            <p className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">Stabilité des Serveurs</p>
            <p className="text-[11px] text-slate-500 font-medium">Infrastructure Haute Performance</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center space-y-2">
            <span className="text-3xl font-black text-rose-700 font-mono">20 000+</span>
            <p className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">Flux HD & 4K</p>
            <p className="text-[11px] text-slate-500 font-medium">Catalogue mis à jour</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center space-y-2">
            <span className="text-3xl font-black text-rose-700 font-mono">&lt; 5 min</span>
            <p className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">Délai d'Activation</p>
            <p className="text-[11px] text-slate-500 font-medium">Accès quasi instantané</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center space-y-2">
            <span className="text-3xl font-black text-rose-700 font-mono">7j / 7</span>
            <p className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">Assistance VIP</p>
            <p className="text-[11px] text-slate-500 font-medium">Support francophone dédié</p>
          </div>
        </div>

        {/* Story & Philosophy Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-md shadow-slate-200/50 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center">
                <Tv className="w-6 h-6 text-rose-700" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">Focus sur l'expérience utilisateur 4K</h3>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                Le divertissement doit être simple. Notre mission essentielle est de fournir des flux 4K ultrastables et une mise en route rapide sur tous vos supports numériques quotidiens (Smart TV, boîtiers Android, Fire TV Stick, smartphones et ordinateurs).
              </p>
            </div>
            <ul className="space-y-2 text-xs font-semibold text-slate-700 pt-2 border-t border-slate-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-rose-700 shrink-0" />
                <span>Optimisation réseau pour connexions Fibre et 5G</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-rose-700 shrink-0" />
                <span>Guide de programmes EPG structuré et lisible</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-md shadow-slate-200/50 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-rose-700" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">Conformité et Transparence</h3>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                STRONG4K prône une lisibilité totale. Nos formules sont sans engagement et exemptes de frais dissimulés. Chaque souscription fait l'objet d'un suivi rigoureux et nos équipes s'assurent que votre accès soit immédiatement opérationnel.
              </p>
            </div>
            <ul className="space-y-2 text-xs font-semibold text-slate-700 pt-2 border-t border-slate-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-rose-700 shrink-0" />
                <span>Sans tacite reconduction ni frais cachés</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-rose-700 shrink-0" />
                <span>Assistance directe par e-mail et WhatsApp</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Detailed Values Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-black text-slate-900">Nos 4 Piliers de Qualité</h2>
            <p className="text-sm text-slate-600 font-medium">Ce qui distingue l'expérience STRONG4K au quotidien.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <Server className="w-6 h-6 text-rose-700" />
              <h4 className="text-base font-bold text-slate-900">Infrastructure Dédiée</h4>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Des serveurs répartis sur plusieurs centres de données européens pour garantir un taux de disponibilité maximal.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <Zap className="w-6 h-6 text-rose-700" />
              <h4 className="text-base font-bold text-slate-900">Zero Buffering</h4>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Technologies de compression modernes assurant une très grande fluidité même pendant les événements sportifs majeurs.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <HeartHandshake className="w-6 h-6 text-rose-700" />
              <h4 className="text-base font-bold text-slate-900">Accompagnement Client</h4>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Une équipe réactive qui vous aide étape par étape dans l'installation de votre application préférée.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <Award className="w-6 h-6 text-rose-700" />
              <h4 className="text-base font-bold text-slate-900">Ecosystème Universel</h4>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Compatibilité vérifiée sur Smart TV Samsung, LG, Android TV, Fire TV, iPhone, Android, PC et Mac.
              </p>
            </div>
          </div>
        </div>

        {/* Company Identity Card */}
        <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6 max-w-4xl mx-auto">
          <div className="border-b border-slate-200 pb-4 flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Informations sur l'Éditeur & Contact Officiel</h3>
              <p className="text-xs text-slate-500 font-medium">Mentions légales de l'entreprise opératrice</p>
            </div>
            <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              Société Vérifiée
            </span>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700 font-medium">
            <li className="bg-white p-3.5 rounded-xl border border-slate-200"><strong>Raison Sociale :</strong> {siteConfig.company.name}</li>
            <li className="bg-white p-3.5 rounded-xl border border-slate-200"><strong>Adresse Siège :</strong> {siteConfig.company.address}</li>
            <li className="bg-white p-3.5 rounded-xl border border-slate-200"><strong>Immatriculation :</strong> {siteConfig.company.registration}</li>
            <li className="bg-white p-3.5 rounded-xl border border-slate-200"><strong>Numéro TVA :</strong> {siteConfig.company.vatNumber}</li>
            <li className="bg-white p-3.5 rounded-xl border border-slate-200 sm:col-span-2"><strong>Support E-mail Officiel :</strong> <span className="font-mono text-rose-700 font-bold">{siteConfig.supportEmail}</span></li>
          </ul>
        </div>
      </div>

      <FinalCta />
    </div>
  );
}
