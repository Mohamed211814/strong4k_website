import Link from "next/link";
import { Home, AlertCircle, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-24 pb-16 px-4 bg-white">
      <div className="bg-white p-10 sm:p-14 rounded-3xl border-2 border-slate-200 text-center max-w-lg space-y-6 shadow-xl">
        <div className="w-16 h-16 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 flex items-center justify-center mx-auto shadow-md">
          <AlertCircle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-4xl font-black text-rose-700 font-mono">404</span>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
            Oups... cette page n'existe pas.
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
            La page que vous recherchez a peut être été déplacée ou n'existe plus.
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-rose-700 hover:bg-rose-800 text-white font-extrabold text-sm shadow-md shadow-rose-700/30 transition-all"
        >
          <Home className="w-4 h-4" />
          <span>Retour à l'accueil</span>
        </Link>
      </div>
    </div>
  );
}
