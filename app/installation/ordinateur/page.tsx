import { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import Link from "next/link";
import { Monitor, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Guide Installation Ordinateur (PC & Mac) | STREAMORA",
  description:
    "Comment configurer STREAMORA sur ordinateur PC Windows et Mac via VLC Media Player ou des lecteurs multimédias dédiés.",
  alternates: {
    canonical: `${siteConfig.domain}/installation/ordinateur`,
  },
};

export default function OrdinateurGuidePage() {
  return (
    <div className="pt-28 pb-16 space-y-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Breadcrumbs
          items={[
            { name: "Installation", url: "/installation" },
            { name: "Ordinateur", url: "/installation/ordinateur" },
          ]}
        />

        <div className="py-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 bg-indigo-950/60 px-3.5 py-1 rounded-full border border-indigo-500/30">
            TUTORIEL PAS À PAS
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            Installation sur Ordinateur (PC & Mac)
          </h1>
          <p className="text-gray-300 text-base leading-relaxed">
            Visionnez facilement vos programmes sur votre ordinateur de bureau ou portable avec des logiciels légers et éprouvés.
          </p>
        </div>

        <div className="glass-card p-6 rounded-2xl border border-indigo-500/30 space-y-3">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-indigo-400" />
            Prérequis obligatoires
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
            <li>• Ordinateur PC sous Windows 10/11 ou Mac sous macOS.</li>
            <li>• Logiciel de lecture multimédia (VLC Media Player, IPTV Smarters pour Windows/Mac).</li>
            <li>• Lien de flux M3U ou accès transmis par STREAMORA.</li>
          </ul>
        </div>

        <div className="space-y-6 pt-4">
          <h2 className="text-2xl font-bold text-white">Instructions avec VLC Media Player</h2>

          <div className="space-y-4">
            <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-2">
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Étape 1</span>
              <h3 className="text-lg font-bold text-white">Télécharger et ouvrir VLC</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Téléchargez VLC gratuitement depuis le site officiel videolan.org et exécutez le logiciel.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-2">
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Étape 2</span>
              <h3 className="text-lg font-bold text-white">Ouvrir un flux réseau</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Cliquez sur le menu <strong>Média</strong> puis <strong>Ouvrir un flux réseau...</strong> (Ctrl + N sur PC ou Cmd + N sur Mac).
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-2">
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Étape 3</span>
              <h3 className="text-lg font-bold text-white">Coller votre lien M3U STREAMORA</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Insérez le lien fourni dans votre e-mail de confirmation et cliquez sur Lire.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 glass-card p-6 rounded-2xl border border-white/10">
          <div>
            <h4 className="text-sm font-bold text-white">Besoin d'aide supplémentaire ?</h4>
            <p className="text-xs text-gray-400">Notre équipe de support est disponible par message 7j/7.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg transition-colors"
          >
            <span>Nous contacter</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
