import { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import Link from "next/link";
import { Tv, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Guide Installation Android TV & Google TV | STREAMORA",
  description:
    "Tutoriel de configuration de STREAMORA sur Android TV, boîtier Nvidia Shield, Xiaomi Mi Box et Chromecast avec Google TV.",
  alternates: {
    canonical: `${siteConfig.domain}/installation/android-tv`,
  },
};

export default function AndroidTvGuidePage() {
  return (
    <div className="pt-28 pb-16 space-y-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Breadcrumbs
          items={[
            { name: "Installation", url: "/installation" },
            { name: "Android TV", url: "/installation/android-tv" },
          ]}
        />

        <div className="py-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/60 px-3.5 py-1 rounded-full border border-cyan-500/30">
            TUTORIEL PAS À PAS
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            Installation sur Android TV & Google TV
          </h1>
          <p className="text-gray-300 text-base leading-relaxed">
            Profitez de la puissance de l'écosystème Android TV pour une expérience streaming 4K Ultra HD réactive et fluide.
          </p>
        </div>

        <div className="glass-card p-6 rounded-2xl border border-cyan-500/30 space-y-3">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-cyan-400" />
            Prérequis obligatoires
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
            <li>• Boîtier ou TV sous Android TV 8.0+ ou Google TV.</li>
            <li>• Accès au Google Play Store officiel.</li>
            <li>• Connexion Internet filaire ou Wi-Fi 5 GHz recommandée.</li>
          </ul>
        </div>

        <div className="space-y-6 pt-4">
          <h2 className="text-2xl font-bold text-white">Instructions de configuration</h2>

          <div className="space-y-4">
            <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-2">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Étape 1</span>
              <h3 className="text-lg font-bold text-white">Ouvrir le Google Play Store</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Depuis votre écran d'accueil Android TV, ouvrez le Play Store et recherchez l'application de votre choix.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-2">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Étape 2</span>
              <h3 className="text-lg font-bold text-white">Installer l'application de lecture</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Téléchargez un lecteur multimédia compatible Android TV (ex: TiviMate, IPTV Smarters Pro, OTT Navigator).
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-2">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Étape 3</span>
              <h3 className="text-lg font-bold text-white">Renseigner le compte STREAMORA</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Insérez le lien M3U ou vos identifiants Xtream Codes fournis dans votre mail de confirmation pour charger vos catégories et le guide des programmes.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 glass-card p-6 rounded-2xl border border-white/10">
          <div>
            <h4 className="text-sm font-bold text-white">Une question avant de vous lancer ?</h4>
            <p className="text-xs text-gray-400">Consultez notre foire aux questions ou contactez le support.</p>
          </div>
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs shadow-lg transition-colors"
          >
            <span>Consulter la FAQ</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
