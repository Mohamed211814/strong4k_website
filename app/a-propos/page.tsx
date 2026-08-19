import { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FinalCta } from "@/components/cta/FinalCta";
import { ShieldCheck, Tv, Headphones, Lock, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "À propos - STRONG4K | Qualité 4K & Stabilité",
  description:
    "Découvrez la philosophie de STRONG4K : une expérience TV 4K Ultra HD moderne, réactive et conforme pour vos appareils compatibles en France.",
  alternates: {
    canonical: `${siteConfig.domain}/a-propos`,
  },
};

export default function AProposPage() {
  return (
    <div className="pt-28 pb-16 space-y-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        <Breadcrumbs items={[{ name: "À propos", url: "/a-propos" }]} />

        {/* Hero */}
        <div className="py-8 text-center max-w-4xl mx-auto space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-800 bg-rose-50 px-4 py-1.5 rounded-full border border-rose-200 shadow-sm">
            NOTRE ENGAGEMENT
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 leading-tight">
            À propos
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Nous avons conçu STRONG4K pour proposer une alternative 4K Ultra HD moderne, claire et transparente à l'offre télévisuelle traditionnelle.
          </p>
        </div>

        {/* Philosophy Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md shadow-slate-200/50 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center">
              <Tv className="w-6 h-6 text-rose-700" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Focus sur l'expérience utilisateur 4K</h3>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">
              Le divertissement doit être simple. Notre mission est de fournir des flux 4K ultrastables et une mise en route rapide sur tous vos supports numériques quotidiens.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md shadow-slate-200/50 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-rose-700" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Conformité et Transparence</h3>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">
              STRONG4K fait la promotion exclusive de contenus dont la diffusion est légalement autorisée. Nos tarifs et conditions d'utilisation sont sans surprise ni frais masqués.
            </p>
          </div>
        </div>

        {/* Company Identity Card */}
        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4 max-w-3xl mx-auto">
          <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3">
            Informations sur l'Éditeur
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-mono font-medium">
            <li><strong>Raison Sociale :</strong> {siteConfig.company.name}</li>
            <li><strong>Adresse Siège :</strong> {siteConfig.company.address}</li>
            <li><strong>Immatriculation :</strong> {siteConfig.company.registration}</li>
            <li><strong>Numéro TVA :</strong> {siteConfig.company.vatNumber}</li>
            <li><strong>Support Client :</strong> {siteConfig.supportEmail}</li>
          </ul>
        </div>
      </div>

      <FinalCta />
    </div>
  );
}
