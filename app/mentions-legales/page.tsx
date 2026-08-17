import { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Mentions Légales | STREAMORA",
  description: "Mentions légales et informations d'éditeur du site STREAMORA.",
  alternates: {
    canonical: `${siteConfig.domain}/mentions-legales`,
  },
};

export default function MentionsLegalesPage() {
  return (
    <div className="pt-28 pb-16 space-y-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={[{ name: "Mentions Légales", url: "/mentions-legales" }]} />

        <div className="py-6 space-y-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">Mentions Légales</h1>
          <p className="text-xs text-purple-300 uppercase tracking-widest font-mono">
            Dernière mise à jour : Février 2026
          </p>
        </div>

        <div className="glass-card p-8 rounded-3xl border border-white/10 space-y-6 text-sm text-gray-300 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">1. Éditeur du site</h2>
            <p>
              Le site Internet <strong>{siteConfig.brandName}</strong> est édité par la société :
            </p>
            <ul className="list-disc pl-5 space-y-1 font-mono text-xs">
              <li>Raison Sociale : {siteConfig.company.name}</li>
              <li>Adresse : {siteConfig.company.address}</li>
              <li>Immatriculation RCS : {siteConfig.company.registration}</li>
              <li>Capital Social : {siteConfig.company.capital}</li>
              <li>Numéro de TVA Intra. : {siteConfig.company.vatNumber}</li>
              <li>Directeur de la publication : {siteConfig.company.publicationDirector}</li>
              <li>Contact E-mail : {siteConfig.supportEmail}</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">2. Hébergement du site</h2>
            <p>
              Le site est hébergé par la plateforme d'infrastructures cloud :
            </p>
            <p className="font-mono text-xs">{siteConfig.company.host}</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">3. Propriété Intellectuelle & Droits</h2>
            <p>
              {siteConfig.brandName} respecte scrupuleusement la réglementation relative à la propriété intellectuelle. Le service ne promeut et ne distribue que des flux et chaînes pour lesquels la société détient les droits de diffusion ou mandats nécessaires.
            </p>
            <p>
              Toutes les marques, logos ou dénominations tiers cités sur ce site (ex: Samsung, LG, Amazon Fire TV, Android) appartiennent à leurs propriétaires respectifs et ne sont utilisés qu'à des fins d'information sur la compatibilité matérielle.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
