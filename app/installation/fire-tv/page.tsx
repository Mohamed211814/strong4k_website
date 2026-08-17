import { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import Link from "next/link";
import { Flame, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Guide Installation Amazon Fire TV Stick | STREAMORA",
  description:
    "Comment configurer et utiliser STREAMORA sur Amazon Fire TV Stick Lite, HD, 4K et Fire TV Cube rapidement.",
  alternates: {
    canonical: `${siteConfig.domain}/installation/fire-tv`,
  },
};

export default function FireTvGuidePage() {
  return (
    <div className="pt-28 pb-16 space-y-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Breadcrumbs
          items={[
            { name: "Installation", url: "/installation" },
            { name: "Fire TV", url: "/installation/fire-tv" },
          ]}
        />

        <div className="py-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-950/60 px-3.5 py-1 rounded-full border border-amber-500/30">
            TUTORIEL PAS À PAS
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            Installation sur Amazon Fire TV Stick
          </h1>
          <p className="text-gray-300 text-base leading-relaxed">
            Guide pas à pas pour transformer votre Fire Stick en centre de divertissement complet avec STREAMORA.
          </p>
        </div>

        <div className="glass-card p-6 rounded-2xl border border-amber-500/30 space-y-3">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-amber-400" />
            Prérequis obligatoires
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
            <li>• Amazon Fire TV Stick (modèle HD ou 4K recommandé).</li>
            <li>• Compte Amazon actif relié au Stick.</li>
            <li>• Vos données de connexion STREAMORA.</li>
          </ul>
        </div>

        <div className="space-y-6 pt-4">
          <h2 className="text-2xl font-bold text-white">Instructions de configuration</h2>

          <div className="space-y-4">
            <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-2">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Étape 1</span>
              <h3 className="text-lg font-bold text-white">Rechercher une application sur l'Amazon Appstore</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Depuis le menu principal de votre Fire Stick, utilisez la loupe de recherche et tapez "IPTV Smarters" ou "Downloader".
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-2">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Étape 2</span>
              <h3 className="text-lg font-bold text-white">Télécharger et lancer le lecteur</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Installez l'application choisie et autorisez les accès au stockage de l'appareil.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-2">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Étape 3</span>
              <h3 className="text-lg font-bold text-white">Entrer vos informations STREAMORA</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Saisissez les identifiants ou le lien M3U fourni lors de votre souscription pour charger instantanément les catégories.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 glass-card p-6 rounded-2xl border border-white/10">
          <div>
            <h4 className="text-sm font-bold text-white">Prêt à démarrer l'expérience ?</h4>
            <p className="text-xs text-gray-400">Découvrez nos formules adaptées 1, 6 et 12 mois.</p>
          </div>
          <Link
            href="/#abonnements"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs shadow-lg transition-colors"
          >
            <span>Découvrir les offres</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
