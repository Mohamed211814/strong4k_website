import { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import Link from "next/link";
import { Tv, CheckCircle2, AlertCircle, ArrowRight, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Guide Installation Smart TV (Samsung & LG) | STREAMORA",
  description:
    "Comment installer et configurer STREAMORA sur votre Smart TV Samsung Tizen ou LG webOS. Tutoriel étape par étape pour profiter de la 4K.",
  alternates: {
    canonical: `${siteConfig.domain}/installation/smart-tv`,
  },
};

export default function SmartTvGuidePage() {
  return (
    <div className="pt-28 pb-16 space-y-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Breadcrumbs
          items={[
            { name: "Installation", url: "/installation" },
            { name: "Smart TV", url: "/installation/smart-tv" },
          ]}
        />

        <div className="py-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-400 bg-purple-950/60 px-3.5 py-1 rounded-full border border-purple-500/30">
            TUTORIEL PAS À PAS
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            Installation sur Smart TV (Samsung & LG)
          </h1>
          <p className="text-gray-300 text-base leading-relaxed">
            Suivez notre guide illustré pour configurer votre abonnement STREAMORA directement depuis le store d'applications de votre téléviseur connecté.
          </p>
        </div>

        {/* Requirements Box */}
        <div className="glass-card p-6 rounded-2xl border border-purple-500/30 space-y-3">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-purple-400" />
            Prérequis obligatoires
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
            <li>• Une Smart TV Samsung (modèles 2017+) ou LG (webOS 3.0+).</li>
            <li>• Une connexion Internet stable (Fibre recommandée pour la 4K).</li>
            <li>• Vos identifiants ou le lien d'accès transmis lors de votre commande STREAMORA.</li>
          </ul>
        </div>

        {/* Steps */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl font-bold text-white">Instructions de configuration</h2>

          <div className="space-y-4">
            <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-2">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">Étape 1</span>
              <h3 className="text-lg font-bold text-white">Accéder au App Store de votre TV</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Allumez votre télévision et ouvrez le store d'applications (Samsung Smart Hub ou LG Content Store).
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-2">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">Étape 2</span>
              <h3 className="text-lg font-bold text-white">Télécharger l'application compatible</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Recherchez l'un des lecteurs vidéo recommandés (ex: Smart IPTV, IPTV Smarters Pro, ou Nanomid) et installez l'application.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-2">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">Étape 3</span>
              <h3 className="text-lg font-bold text-white">Saisir vos accès STREAMORA</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Ouvrez l'application, accédez aux paramètres puis entrez le lien de playlist M3U ou vos identifiants Xtream API figurant dans votre e-mail de confirmation.
              </p>
            </div>
          </div>
        </div>

        {/* Troubleshooting */}
        <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-3 pt-6">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-amber-400" />
            Résolution des problèmes fréquents
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            Si le chargement stagne, vérifiez que le câble Ethernet est bien branché ou redémarrez votre box internet. Vous pouvez également nous contacter pour une assistance guidée 7j/7.
          </p>
        </div>

        {/* CTA */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 glass-card p-6 rounded-2xl border border-white/10">
          <div>
            <h4 className="text-sm font-bold text-white">Prêt à choisir votre formule ?</h4>
            <p className="text-xs text-gray-400">Consultez nos pass 1, 6 et 12 mois sans engagement.</p>
          </div>
          <Link
            href="/#abonnements"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-lg transition-colors"
          >
            <span>Voir les offres</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
