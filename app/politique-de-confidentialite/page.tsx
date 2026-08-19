import { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | STRONG4K",
  description: "Protection des données personnelles (RGPD) et politique des cookies STRONG4K.",
  alternates: {
    canonical: `${siteConfig.domain}/politique-de-confidentialite`,
  },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="pt-28 pb-16 space-y-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={[{ name: "Confidentialité", url: "/politique-de-confidentialite" }]} />

        <div className="py-6 space-y-4">
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900">Politique de Confidentialité</h1>
          <p className="text-xs text-red-600 uppercase tracking-widest font-mono font-bold">
            Conforme RGPD (UE) 2016/679
          </p>
        </div>

        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6 text-sm text-slate-700 font-medium leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">1. Collecte des Données Personnelles</h2>
            <p>
              Nous collectons uniquement les données strictement nécessaires au traitement de vos commandes et à l'exécution de l'assistance client : Prénom, Nom, Adresse e-mail, et Pays.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">2. Sécurité & Données Bancaires</h2>
            <p>
              {siteConfig.brandName} ne stocke à aucun moment vos données de carte bancaire. Les transactions financières sont traitées de manière totalement cryptée par nos partenaires de paiement agréés certifiés PCI-DSS.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">3. Vos Droits RGPD</h2>
            <p>
              Conformément à la réglementation européenne, vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données. Pour exercer ce droit, il vous suffit de nous contacter par e-mail à : <span className="font-mono text-red-600 font-bold">{siteConfig.supportEmail}</span>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
