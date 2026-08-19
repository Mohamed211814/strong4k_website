import { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import Link from "next/link";
import { Monitor, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Guide Installation Ordinateur (PC & Mac) | STRONG4K",
  description:
    "Comment configurer STRONG4K sur ordinateur PC Windows et Mac via VLC Media Player ou des lecteurs multimédias dédiés.",
  alternates: {
    canonical: `${siteConfig.domain}/installation/ordinateur`,
  },
};

export default function OrdinateurGuidePage() {
  return (
    <div className="pt-28 pb-16 space-y-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Breadcrumbs
          items={[
            { name: "Installation", url: "/installation" },
            { name: "Ordinateur", url: "/installation/ordinateur" },
          ]}
        />

        <div className="py-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-red-700 bg-red-50 px-4 py-1.5 rounded-full border border-red-200 shadow-sm">
            TUTORIEL PAS À PAS
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900">
            Installation sur Ordinateur (PC & Mac)
          </h1>
          <p className="text-slate-600 text-base leading-relaxed font-medium">
            Visionnez facilement vos programmes sur votre ordinateur de bureau ou portable avec des logiciels légers et éprouvés.
          </p>
        </div>

        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-red-600" />
            Prérequis obligatoires
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-medium">
            <li>• Ordinateur PC sous Windows 10/11 ou Mac sous macOS.</li>
            <li>• Logiciel de lecture multimédia (VLC Media Player, IPTV Smarters pour Windows/Mac).</li>
            <li>• Lien de flux M3U ou accès transmis par STRONG4K.</li>
          </ul>
        </div>

        <div className="space-y-6 pt-4">
          <h2 className="text-2xl font-black text-slate-900">Instructions avec VLC Media Player</h2>

          <div className="space-y-4">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md shadow-slate-200/50 space-y-2">
              <span className="text-xs font-black text-red-600 uppercase tracking-widest">Étape 1</span>
              <h3 className="text-lg font-extrabold text-slate-900">Télécharger et ouvrir VLC</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                Téléchargez VLC gratuitement depuis le site officiel videolan.org et exécutez le logiciel.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md shadow-slate-200/50 space-y-2">
              <span className="text-xs font-black text-red-600 uppercase tracking-widest">Étape 2</span>
              <h3 className="text-lg font-extrabold text-slate-900">Ouvrir un flux réseau</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                Cliquez sur le menu <strong>Média</strong> puis <strong>Ouvrir un flux réseau...</strong> (Ctrl + N sur PC ou Cmd + N sur Mac).
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md shadow-slate-200/50 space-y-2">
              <span className="text-xs font-black text-red-600 uppercase tracking-widest">Étape 3</span>
              <h3 className="text-lg font-extrabold text-slate-900">Coller votre lien M3U STRONG4K</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                Insérez le lien fourni dans votre e-mail de confirmation et cliquez sur Lire.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-red-50 via-slate-50 to-rose-50 p-6 rounded-2xl border border-red-200 text-slate-900 shadow-md">
          <div>
            <h4 className="text-sm font-extrabold text-slate-900">Besoin d'aide supplémentaire ?</h4>
            <p className="text-xs text-slate-600 font-medium">Notre équipe de support est disponible par message 7j/7.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-md shadow-red-600/30 transition-all duration-300"
          >
            <span>Nous contacter</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
