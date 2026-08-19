import { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import Link from "next/link";
import { CheckCircle2, Mail, Tv, ArrowRight, ShieldCheck } from "lucide-react";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Commande Confirmée - Merci | STRONG4K",
  description: "Confirmation de votre souscription à STRONG4K.",
  robots: {
    index: false,
    follow: false,
  },
};

function ConfirmationContent({ searchParams }: { searchParams: { order?: string; plan?: string } }) {
  const orderId = searchParams.order || "STR-892147";

  return (
    <div className="max-w-3xl mx-auto space-y-8 text-center">
      <div className="w-20 h-20 rounded-full bg-emerald-50 border-2 border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
        <CheckCircle2 className="w-10 h-10" />
      </div>

      <div className="space-y-3">
        <span className="text-xs font-black font-mono uppercase tracking-widest text-emerald-700 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-200 shadow-sm">
          N° DE COMMANDE : {orderId}
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900">
          Merci pour votre commande !
        </h1>
        <p className="text-slate-600 text-base max-w-xl mx-auto leading-relaxed font-medium">
          Votre paiement a été validé avec succès. Votre abonnement STRONG4K est désormais enregistré et en cours de déploiement.
        </p>
      </div>

      {/* Next Steps Card */}
      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md shadow-slate-200/50 text-left space-y-6">
        <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
          <Mail className="w-5 h-5 text-red-600" />
          Prochaines étapes pour profiter du service
        </h3>

        <ol className="space-y-4 text-xs sm:text-sm text-slate-600 font-medium">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-red-50 border border-red-200 text-red-600 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
              1
            </span>
            <div>
              <strong className="text-slate-900 block font-bold">Vérifiez votre boîte e-mail :</strong>
              Un message de confirmation contenant vos identifiants sécurisés (et lien M3U) vous a été transmis. Pensez à vérifier votre dossier spams si besoin.
            </div>
          </li>

          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-red-50 border border-red-200 text-red-600 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
              2
            </span>
            <div>
              <strong className="text-slate-900 block font-bold">Consultez nos tutoriels d'installation :</strong>
              Si vous avez besoin d'aide pour paramétrer votre Smart TV, Fire TV ou smartphone, accédez à nos guides illustrés.
            </div>
          </li>

          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-red-50 border border-red-200 text-red-600 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
              3
            </span>
            <div>
              <strong className="text-slate-900 block font-bold">Assistance 7j/7 disponible :</strong>
              Une question ? Notre équipe de support répond à toutes vos sollicitations via la rubrique Contact.
            </div>
          </li>
        </ol>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
        <Link
          href="/installation"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-700 hover:to-rose-700 text-white font-extrabold text-sm shadow-md shadow-red-600/30 transition-all"
        >
          <Tv className="w-4 h-4" />
          <span>Accéder aux guides d'installation</span>
        </Link>

        <Link
          href="/"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm border border-slate-200 transition-colors shadow-sm"
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
