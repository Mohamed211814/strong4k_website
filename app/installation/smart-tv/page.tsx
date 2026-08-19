import { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import Link from "next/link";
import { Tv, CheckCircle2, AlertCircle, ArrowRight, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Guide Installation Smart TV (Samsung & LG) | STRONG4K",
  description:
    "Comment installer et configurer STRONG4K sur votre Smart TV Samsung Tizen ou LG webOS. Tutoriel étape par étape pour profiter de la 4K.",
  alternates: {
    canonical: `${siteConfig.domain}/installation/smart-tv`,
  },
};

export default function SmartTvGuidePage() {
  return (
    <div className="pt-28 pb-16 space-y-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Breadcrumbs
          items={[
            { name: "Installation", url: "/installation" },
            { name: "Smart TV", url: "/installation/smart-tv" },
          ]}
        />

        <div className="py-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-red-700 bg-red-50 px-4 py-1.5 rounded-full border border-red-200 shadow-sm">
            TUTORIEL PAS À PAS
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900">
            Installation sur Smart TV (Samsung & LG)
          </h1>
          <p className="text-slate-600 text-base leading-relaxed font-medium">
            Suivez notre guide illustré pour configurer votre abonnement STRONG4K directement depuis le store d'applications de votre téléviseur connecté.
          </p>
        </div>

        {/* Requirements Box */}
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-red-600" />
            Prérequis obligatoires
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-medium">
            <li>• Une Smart TV Samsung (modèles 2017+) ou LG (webOS 3.0+).</li>
            <li>• Une connexion Internet stable (Fibre recommandée pour la 4K).</li>
            <li>• Vos identifiants ou le lien d'accès transmis lors de votre commande STRONG4K.</li>
          </ul>
        </div>

        {/* Steps */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl font-black text-slate-900">Instructions de configuration</h2>

          <div className="space-y-4">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md shadow-slate-200/50 space-y-2">
              <span className="text-xs font-black text-red-600 uppercase tracking-widest">Étape 1</span>
              <h3 className="text-lg font-extrabold text-slate-900">Accéder au App Store de votre TV</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                Allumez votre télévision et ouvrez le store d'applications (Samsung Smart Hub ou LG Content Store).
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md shadow-slate-200/50 space-y-2">
              <span className="text-xs font-black text-red-600 uppercase tracking-widest">Étape 2</span>
              <h3 className="text-lg font-extrabold text-slate-900">Télécharger l'application compatible</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                Recherchez l'un des lecteurs vidéo recommandés (ex: Smart IPTV, IPTV Smarters Pro, ou Nanomid) et installez l'application.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md shadow-slate-200/50 space-y-2">
              <span className="text-xs font-black text-red-600 uppercase tracking-widest">Étape 3</span>
              <h3 className="text-lg font-extrabold text-slate-900">Saisir vos accès STRONG4K</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                Ouvrez l'application, accédez aux paramètres puis entrez le lien de playlist M3U ou vos identifiants Xtream API figurant dans votre e-mail de confirmation.
              </p>
            </div>
          </div>
        </div>

        {/* Troubleshooting */}
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3 pt-6">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-amber-500" />
            Résolution des problèmes fréquents
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
            Si le chargement stagne, vérifiez que le câble Ethernet est bien branché ou redémarrez votre box internet. Vous pouvez également nous contacter pour une assistance guidée 7j/7.
          </p>
        </div>

        {/* CTA */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-red-50 via-slate-50 to-rose-50 p-6 rounded-2xl border border-red-200 text-slate-900 shadow-md">
          <div>
            <h4 className="text-sm font-extrabold text-slate-900">Prêt à choisir votre formule 4K ?</h4>
            <p className="text-xs text-slate-600 font-medium">Consultez nos pass 1, 6 et 12 mois sans engagement.</p>
          </div>
          <Link
            href="/#abonnements"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-md shadow-red-600/30 transition-all duration-300"
          >
            <span>Voir les offres</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
