import Link from "next/link";
import { ArrowRight, Sparkles, Tv, ShieldCheck } from "lucide-react";

export function FinalCta() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="bg-gradient-to-br from-red-50 via-slate-50 to-rose-50 rounded-3xl p-10 sm:p-16 text-center space-y-8 relative overflow-hidden border-2 border-red-200/80 shadow-2xl shadow-red-500/10 text-slate-900">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 border border-red-300 text-red-700 text-xs font-extrabold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-4 h-4 text-red-600" />
            <span>ACCÈS 4K IMMÉDIAT EN FRANCE</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 leading-tight">
            Prêt à regarder <span className="text-gradient-red">autrement ?</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            Découvrez nos offres STRONG4K simples et choisissez celle qui correspond parfaitement à vos appareils et à votre mode de vie.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#abonnements"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4.5 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-700 hover:to-rose-700 text-white font-extrabold text-lg shadow-xl shadow-red-600/30 transition-all duration-300 hover:scale-105"
            >
              <span>Voir les abonnements 4K</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-bold text-slate-700">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-red-600" /> Activation instantanée
            </span>
            <span className="flex items-center gap-1.5">
              <Tv className="w-4 h-4 text-red-600" /> Sans engagement
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-red-600" /> Support VIP 7j/7
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
