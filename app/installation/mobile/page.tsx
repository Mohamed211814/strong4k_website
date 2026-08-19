import { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import Link from "next/link";
import { Smartphone, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Guide Installation Smartphone & Tablette (iOS & Android) | STRONG4K",
  description:
    "Comment configurer STRONG4K sur iPhone, iPad et smartphones Android pour profiter de vos contenus en mobilité.",
  alternates: {
    canonical: `${siteConfig.domain}/installation/mobile`,
  },
};

export default function MobileGuidePage() {
  return (
    <div className="pt-28 pb-16 space-y-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Breadcrumbs
          items={[
            { name: "Installation", url: "/installation" },
            { name: "Mobile", url: "/installation/mobile" },
          ]}
        />

        <div className="py-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-red-700 bg-red-50 px-4 py-1.5 rounded-full border border-red-200 shadow-sm">
            TUTORIEL PAS À PAS
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900">
            Installation sur Smartphones & Tablettes
          </h1>
          <p className="text-slate-600 text-base leading-relaxed font-medium">
            Emportez votre abonnement en déplacement et profitez d'une qualité d'image haute définition sur l'ensemble de vos appareils mobiles.
          </p>
        </div>

        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-red-600" />
            Prérequis obligatoires
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-medium">
            <li>• iPhone / iPad (iOS 13+) ou Smartphone / Tablette Android (Android 7+).</li>
            <li>• Connexion Wi-Fi ou réseau mobile 4G/5G.</li>
            <li>• Identifiants de connexion STRONG4K.</li>
          </ul>
        </div>

        <div className="space-y-6 pt-4">
          <h2 className="text-2xl font-black text-slate-900">Instructions de configuration</h2>

          <div className="space-y-4">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md shadow-slate-200/50 space-y-2">
              <span className="text-xs font-black text-red-600 uppercase tracking-widest">Étape 1</span>
              <h3 className="text-lg font-extrabold text-slate-900">Ouvrir l'App Store ou Google Play</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                Recherchez l'application partenaire recommandée sur l'App Store (iOS) ou le Play Store (Android), telles que GSE Smart IPTV ou IPTV Smarters Pro.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md shadow-slate-200/50 space-y-2">
              <span className="text-xs font-black text-red-600 uppercase tracking-widest">Étape 2</span>
              <h3 className="text-lg font-extrabold text-slate-900">Lancer et ajouter la playlist</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                Ajoutez une nouvelle liste de lecture en copiant le lien M3U fourni lors de votre commande.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md shadow-slate-200/50 space-y-2">
              <span className="text-xs font-black text-red-600 uppercase tracking-widest">Étape 3</span>
              <h3 className="text-lg font-extrabold text-slate-900">Profiter de votre direct</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                Validez le chargement. Vous pouvez désormais visionner vos flux depuis n'importe où.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-red-50 via-slate-50 to-rose-50 p-6 rounded-2xl border border-red-200 text-slate-900 shadow-md">
          <div>
            <h4 className="text-sm font-extrabold text-slate-900">Des questions sur la souscription ?</h4>
            <p className="text-xs text-slate-600 font-medium">Consultez notre rubrique de présentation générale des offres.</p>
          </div>
          <Link
            href="/offres"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-md shadow-red-600/30 transition-all duration-300"
          >
            <span>Voir toutes les offres</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
