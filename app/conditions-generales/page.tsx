import { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente (CGV) | STREAMORA",
  description: "Conditions générales de vente et d'utilisation du service STREAMORA.",
  alternates: {
    canonical: `${siteConfig.domain}/conditions-generales`,
  },
};

export default function ConditionsGeneralesPage() {
  return (
    <div className="pt-28 pb-16 space-y-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={[{ name: "Conditions Générales", url: "/conditions-generales" }]} />

        <div className="py-6 space-y-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">Conditions Générales de Vente</h1>
          <p className="text-xs text-purple-300 uppercase tracking-widest font-mono">
            Dernière mise à jour : Février 2026
          </p>
        </div>

        <div className="glass-card p-8 rounded-3xl border border-white/10 space-y-6 text-sm text-gray-300 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">1. Objet & Champ d'application</h2>
            <p>
              Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre la société {siteConfig.company.name} et toute personne effectuant une souscription à un pass d'accès sur le site {siteConfig.brandName}.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">2. Formules d'Abonnement & Tarifs</h2>
            <p>
              Les tarifs des abonnements (Pass 1 mois, Pass 6 mois, Pass 12 mois) sont indiqués en Euros TTC sur la page de commande. {siteConfig.brandName} se réserve le droit de modifier ses prix à tout moment pour l'avenir, mais les pass souscrits sont facturés au tarif en vigueur au moment de la validation de la commande.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">3. Activation & Livraison</h2>
            <p>
              L'activation du service est effectuée dès confirmation du paiement. L'utilisateur reçoit les éléments de configuration (liens d'accès M3U / identifiants Xtream) directement à l'adresse e-mail renseignée lors du checkout.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">4. Engagement & Résiliation</h2>
            <p>
              Toutes les offres commercialisées sur {siteConfig.brandName} sont sans engagement de durée et ne font l'objet d'aucun prélèvement automatique sans l'accord préalable du client.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
