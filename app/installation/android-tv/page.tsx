import { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import Link from "next/link";
import { Tv, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Guide Installation Android TV & Google TV | STRONG4K",
  description:
    "Tutoriel de configuration de STRONG4K sur Android TV, boîtier Nvidia Shield, Xiaomi Mi Box et Chromecast avec Google TV.",
  alternates: {
    canonical: `${siteConfig.domain}/installation/android-tv`,
  },
};

export default function AndroidTvGuidePage() {
  return (
    <div className="pt-28 pb-16 space-y-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Breadcrumbs
          items={[
            { name: "Installation", url: "/installation" },
            { name: "Android TV", url: "/installation/android-tv" },
          ]}
        />

        <div className="py-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-red-700 bg-red-50 px-4 py-1.5 rounded-full border border-red-200 shadow-sm">
            TUTORIEL PAS À PAS
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900">
            Installation sur Android TV & Google TV
          </h1>
          <p className="text-slate-600 text-base leading-relaxed font-medium">
            Profitez de la puissance de l'écosystème Android TV pour une expérience streaming 4K Ultra HD réactive et fluide.
          </p>
        </div>

        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-red-600" />
            Prérequis obligatoires
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-medium">
            <li>• Boîtier ou TV sous Android TV 8.0+ ou Google TV.</li>
            <li>• Accès au Google Play Store officiel.</li>
            <li>• Connexion Internet filaire ou Wi-Fi 5 GHz recommandée.</li>
          </ul>
        </div>

        <div className="space-y-6 pt-4">
          <h2 className="text-2xl font-black text-slate-900">Instructions de configuration</h2>

          <div className="space-y-4">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md shadow-slate-200/50 space-y-2">
              <span className="text-xs font-black text-red-600 uppercase tracking-widest">Étape 1</span>
              <h3 className="text-lg font-extrabold text-slate-900">Ouvrir le Google Play Store</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                Depuis votre écran d'accueil Android TV, ouvrez le Play Store et recherchez l'application de votre choix.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md shadow-slate-200/50 space-y-2">
              <span className="text-xs font-black text-red-600 uppercase tracking-widest">Étape 2</span>
              <h3 className="text-lg font-extrabold text-slate-900">Installer l'application de lecture</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                Téléchargez un lecteur multimédia compatible Android TV (ex: TiviMate, IPTV Smarters Pro, OTT Navigator).
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md shadow-slate-200/50 space-y-2">
              <span className="text-xs font-black text-red-600 uppercase tracking-widest">Étape 3</span>
              <h3 className="text-lg font-extrabold text-slate-900">Renseigner le compte STRONG4K</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                Insérez le lien M3U ou vos identifiants Xtream Codes fournis dans votre mail de confirmation pour charger vos catégories et le guide des programmes.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-red-50 via-slate-50 to-rose-50 p-6 rounded-2xl border border-red-200 text-slate-900 shadow-md">
          <div>
            <h4 className="text-sm font-extrabold text-slate-900">Une question avant de vous lancer ?</h4>
            <p className="text-xs text-slate-600 font-medium">Consultez notre foire aux questions ou contactez le support.</p>
          </div>
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-md shadow-red-600/30 transition-all duration-300"
          >
            <span>Consulter la FAQ</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
