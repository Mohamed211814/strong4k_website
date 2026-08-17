import Link from "next/link";
import { ArrowRight, Sparkles, Tv, ShieldCheck } from "lucide-react";

export function FinalCta() {
  return (
    <section className="relative py-28 bg-[#050507] overflow-hidden">
      {/* Cinematic Atmospheric Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#07080e] via-[#150d2a] to-[#0a1024] opacity-90" />
      <div className="glow-orb glow-violet w-[700px] h-[700px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-35 animate-pulse-glow" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-purple-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span>ACCÈS IMMÉDIAT EN FRANCE</span>
        </div>

        <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
          Prêt à regarder <span className="text-gradient-violet">autrement ?</span>
        </h2>

        <p className="text-gray-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
          Découvrez nos offres simples et choisissez celle qui correspond parfaitement à vos appareils et à votre mode de vie.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/#abonnements"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-extrabold text-lg shadow-2xl shadow-purple-600/40 transition-all duration-300 hover:scale-105"
          >
            <span>Voir les abonnements</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-gray-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-purple-400" /> Activation rapide
          </span>
          <span className="flex items-center gap-1.5">
            <Tv className="w-4 h-4 text-cyan-400" /> Sans engagement
          </span>
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-emerald-400" /> Support 7j/7
          </span>
        </div>
      </div>
    </section>
  );
}
