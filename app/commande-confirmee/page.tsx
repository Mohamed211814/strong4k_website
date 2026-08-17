import { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import Link from "next/link";
import { CheckCircle2, Mail, Tv, ArrowRight, ShieldCheck } from "lucide-react";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Commande Confirmée - Merci | STREAMORA",
  description: "Confirmation de votre souscription à STREAMORA.",
  robots: {
    index: false,
    follow: false,
  },
};

function ConfirmationContent({ searchParams }: { searchParams: { order?: string; plan?: string } }) {
  const orderId = searchParams.order || "STR-892147";

  return (
    <div className="max-w-3xl mx-auto space-y-8 text-center">
      <div className="w-20 h-20 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-2xl shadow-emerald-600/30">
        <CheckCircle2 className="w-10 h-10" />
      </div>

      <div className="space-y-3">
        <span className="text-xs font-bold font-mono uppercase tracking-widest text-emerald-400 bg-emerald-950/60 px-3.5 py-1 rounded-full border border-emerald-500/30">
          N° DE COMMANDE : {orderId}
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
          Merci pour votre commande !
        </h1>
        <p className="text-gray-300 text-base max-w-xl mx-auto leading-relaxed">
          Votre paiement a été validé avec succès. Votre abonnement STREAMORA est désormais enregistré et en cours de déploiement.
        </p>
      </div>

      {/* Next Steps Card */}
      <div className="glass-card p-8 rounded-3xl border border-white/10 text-left space-y-6">
        <h3 className="text-lg font-bold text-white border-b border-white/10 pb-3 flex items-center gap-2">
          <Mail className="w-5 h-5 text-purple-400" />
          Prochaines étapes pour profiter du service
        </h3>

        <ol className="space-y-4 text-xs sm:text-sm text-gray-300">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-purple-600/30 border border-purple-500/40 text-purple-300 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
              1
            </span>
            <div>
              <strong className="text-white block">Vérifiez votre boîte e-mail :</strong>
              Un message de confirmation contenant vos identifiants sécurisés (et lien M3U) vous a été transmis. Pensez à vérifier votre dossier spams si besoin.
            </div>
          </li>

          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-cyan-600/30 border border-cyan-500/40 text-cyan-300 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
              2
            </span>
            <div>
              <strong className="text-white block">Consultez nos tutoriels d'installation :</strong>
              Si vous avez besoin d'aide pour paramétrer votre Smart TV, Fire TV ou smartphone, accédez à nos guides illustrés.
            </div>
          </li>

          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
              3
            </span>
            <div>
              <strong className="text-white block">Assistance 7j/7 disponible :</strong>
              Une question ? Notre équipe de support répond à toutes vos sollicitations via la rubrique Contact.
            </div>
          </li>
        </ol>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
        <Link
          href="/installation"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm shadow-lg shadow-purple-600/30 transition-all"
        >
          <Tv className="w-4 h-4" />
          <span>Accéder aux guides d'installation</span>
        </Link>

        <Link
          href="/"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl glass-card text-gray-200 hover:text-white font-semibold text-sm border border-white/10 transition-colors"
        >
          <span>Retour à l'accueil</span>
        </Link>
      </div>
    </div>
  );
}

export default async function OrderConfirmationPage({
  searchParams,
}: {
  searchParams: Promise<{ order?: string; plan?: string }>;
}) {
  const params = await searchParams;

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Suspense fallback={<div className="text-center text-gray-400">Chargement...</div>}>
          <ConfirmationContent searchParams={params} />
        </Suspense>
      </div>
    </div>
  );
}
