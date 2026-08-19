import { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import Link from "next/link";
import { Flame, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Guide Installation Amazon Fire TV Stick | STRONG4K",
  description:
    "Comment configurer et utiliser STRONG4K sur Amazon Fire TV Stick Lite, HD, 4K et Fire TV Cube rapidement.",
  alternates: {
    canonical: `${siteConfig.domain}/installation/fire-tv`,
  },
};

export default function FireTvGuidePage() {
  return (
    <div className="pt-28 pb-16 space-y-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Breadcrumbs
          items={[
            { name: "Installation", url: "/installation" },
            { name: "Fire TV", url: "/installation/fire-tv" },
          ]}
        />

        <div className="py-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-red-700 bg-red-50 px-4 py-1.5 rounded-full border border-red-200 shadow-sm">
            TUTORIEL PAS À PAS
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900">
            Installation sur Amazon Fire TV Stick
          </h1>
          <p className="text-slate-600 text-base leading-relaxed font-medium">
            Guide pas à pas pour transformer votre Fire Stick en centre de divertissement complet avec STRONG4K.
          </p>
        </div>

        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-red-600" />
            Prérequis obligatoires
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-medium">
            <li>• Amazon Fire TV Stick (modèle HD ou 4K recommandé).</li>
            <li>• Compte Amazon actif relié au Stick.</li>
            <li>• Vos données de connexion STRONG4K.</li>
          </ul>
        </div>

        <div className="space-y-6 pt-4">
          <h2 className="text-2xl font-black text-slate-900">Instructions de configuration</h2>

          <div className="space-y-4">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md shadow-slate-200/50 space-y-2">
              <span className="text-xs font-black text-red-600 uppercase tracking-widest">Étape 1</span>
              <h3 className="text-lg font-extrabold text-slate-900">Rechercher une application sur l'Amazon Appstore</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                Depuis le menu principal de votre Fire Stick, utilisez la loupe de recherche et tapez "IPTV Smarters" ou "Downloader".
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md shadow-slate-200/50 space-y-2">
              <span className="text-xs font-black text-red-600 uppercase tracking-widest">Étape 2</span>
              <h3 className="text-lg font-extrabold text-slate-900">Télécharger et lancer le lecteur</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                Installez l'application choisie et autorisez les accès au stockage de l'appareil.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md shadow-slate-200/50 space-y-2">
              <span className="text-xs font-black text-red-600 uppercase tracking-widest">Étape 3</span>
              <h3 className="text-lg font-extrabold text-slate-900">Entrer vos informations STRONG4K</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                Saisissez les identifiants ou le lien M3U fourni lors de votre souscription pour charger instantanément les catégories.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-red-50 via-slate-50 to-rose-50 p-6 rounded-2xl border border-red-200 text-slate-900 shadow-md">
          <div>
            <h4 className="text-sm font-extrabold text-slate-900">Prêt à démarrer l'expérience 4K ?</h4>
            <p className="text-xs text-slate-600 font-medium">Découvrez nos formules adaptées 1, 6 et 12 mois.</p>
          </div>
          <Link
            href="/#abonnements"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-md shadow-red-600/30 transition-all duration-300"
          >
            <span>Découvrir les offres</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
