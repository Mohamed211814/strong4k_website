import Link from "next/link";
import { ArrowRight, Sparkles, Tv, ShieldCheck } from "lucide-react";

export function FinalCta() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="bg-rose-50/60 rounded-3xl p-10 sm:p-16 text-center space-y-8 relative overflow-hidden border-2 border-rose-200 shadow-xl text-slate-900">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 border border-rose-300 text-rose-900 text-xs font-extrabold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-4 h-4 text-rose-700" />
            <span>ACCÈS 4K IMMÉDIAT EN FRANCE</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 leading-tight">
            Prêt à regarder <span className="text-rose-700">autrement ?</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            Découvrez nos offres STRONG4K simples et choisissez celle qui correspond parfaitement à vos appareils et à votre mode de vie.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#abonnements"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4.5 rounded-xl bg-rose-700 hover:bg-rose-800 text-white font-extrabold text-lg shadow-md shadow-rose-700/30 transition-all duration-300 hover:scale-105"
            >
              <span>Voir les abonnements 4K</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-bold text-slate-700">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-rose-700" /> Activation instantanée
            </span>
            <span className="flex items-center gap-1.5">
              <Tv className="w-4 h-4 text-rose-700" /> Sans engagement
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-rose-700" /> Support VIP 7j/7
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
