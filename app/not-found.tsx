import Link from "next/link";
import { Home, AlertCircle, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-24 pb-16 px-4">
      <div className="glass-card p-10 sm:p-14 rounded-3xl border border-white/10 text-center max-w-lg space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-purple-950/80 border border-purple-500/40 text-purple-400 flex items-center justify-center mx-auto shadow-2xl">
          <AlertCircle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-4xl font-black text-purple-400 font-mono">404</span>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            Oups... cette page n'existe pas.
          </h1>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            La page que vous recherchez a peut-être été déplacée ou n'existe plus.
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-purple-600/30 transition-all"
        >
          <Home className="w-4 h-4" />
          <span>Retour à l'accueil</span>
        </Link>
      </div>
    </div>
  );
}
