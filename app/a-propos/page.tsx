import { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FinalCta } from "@/components/cta/FinalCta";
import { ShieldCheck, Tv, Headphones, Lock, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "À propos de STREAMORA - Engagement & Qualité",
  description:
    "Découvrez la philosophie de STREAMORA : une expérience TV moderne, réactive et conforme pour vos appareils compatibles en France.",
  alternates: {
    canonical: `${siteConfig.domain}/a-propos`,
  },
};

export default function AProposPage() {
  return (
    <div className="pt-28 pb-16 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        <Breadcrumbs items={[{ name: "À propos", url: "/a-propos" }]} />

        {/* Hero */}
        <div className="py-8 text-center max-w-4xl mx-auto space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-400 bg-purple-950/60 px-3.5 py-1 rounded-full border border-purple-500/30">
            NOTRE ENGAGEMENT
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            À propos de <span className="text-gradient-violet">STREAMORA</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Nous avons conçu STREAMORA pour proposer une alternative moderne, claire et transparente à l'offre télévisuelle traditionnelle.
          </p>
        </div>

        {/* Philosophy Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card p-8 rounded-3xl border border-white/10 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center">
              <Tv className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Focus sur l'expérience utilisateur</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Le divertissement doit être simple. Notre mission est de fournir des flux stables et une mise en route rapide sur tous vos supports numériques quotidiens.
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl border border-white/10 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Conformité et Transparence</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              STREAMORA fait la promotion exclusive de contenus dont la diffusion est légalement autorisée. Nos tarifs et conditions d'utilisation sont sans surprise ni frais masqués.
            </p>
          </div>
        </div>

        {/* Company Identity Placeholders Card */}
        <div className="glass-card p-8 rounded-3xl border border-white/10 space-y-4 max-w-3xl mx-auto">
          <h3 className="text-lg font-bold text-white border-b border-white/10 pb-3">
            Informations Entreprise (Placeholders)
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-gray-300 font-mono">
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
