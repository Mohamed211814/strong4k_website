import { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Politique de Remboursement | STRONG4K",
  description: "Conditions d'annulation et règles de remboursement du service STRONG4K.",
  alternates: {
    canonical: `${siteConfig.domain}/politique-de-remboursement`,
  },
};

export default function PolitiqueRemboursementPage() {
  return (
    <div className="pt-28 pb-16 space-y-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={[{ name: "Remboursement", url: "/politique-de-remboursement" }]} />

        <div className="py-6 space-y-4">
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900">Politique de Remboursement</h1>
          <p className="text-xs text-red-600 uppercase tracking-widest font-mono font-bold">
            Transparence & Rétractation
          </p>
        </div>

        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6 text-sm text-slate-700 font-medium leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">1. Principe de Prise en Charge</h2>
            <p>
              Chez {siteConfig.brandName}, la satisfaction de nos utilisateurs est notre priorité. Si vous rencontrez un dysfonctionnement technique majeur lié à notre service qui n'a pas pu être résolu par notre équipe technique sous 48 heures, vous pouvez demander un traitement de prise en charge ou de remboursement partiel/total.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">2. Modalités de Demande</h2>
            <p>
              Toute demande doit être adressée à notre support client à l'adresse e-mail <span className="font-mono text-red-600 font-bold">{siteConfig.supportEmail}</span> avec votre numéro de commande (ex: STR-XXXXXX) et la description du problème rencontré.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
