import { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | STREAMORA",
  description: "Protection des données personnelles (RGPD) et politique des cookies STREAMORA.",
  alternates: {
    canonical: `${siteConfig.domain}/politique-de-confidentialite`,
  },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="pt-28 pb-16 space-y-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={[{ name: "Confidentialité", url: "/politique-de-confidentialite" }]} />

        <div className="py-6 space-y-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">Politique de Confidentialité</h1>
          <p className="text-xs text-purple-300 uppercase tracking-widest font-mono">
            Conforme RGPD (UE) 2016/679
          </p>
        </div>

        <div className="glass-card p-8 rounded-3xl border border-white/10 space-y-6 text-sm text-gray-300 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">1. Collecte des Données Personnelles</h2>
            <p>
              Nous collectons uniquement les données strictement nécessaires au traitement de vos commandes et à l'exécution de l'assistance client : Prénom, Nom, Adresse e-mail, et Pays.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">2. Sécurité & Données Bancaires</h2>
            <p>
              {siteConfig.brandName} ne stocke à aucun moment vos données de carte bancaire. Les transactions financières sont traitées de manière totalement cryptée par nos partenaires de paiement agréés certifiés PCI-DSS.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">3. Vos Droits RGPD</h2>
            <p>
              Conformément à la réglementation européenne, vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données. Pour exercer ce droit, il vous suffit de nous contacter par e-mail à : <span className="font-mono text-purple-300">{siteConfig.supportEmail}</span>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
