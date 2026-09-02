import { Sparkles, Shield, MonitorPlay, SlidersHorizontal } from "lucide-react";

export function StatementSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background radial glow */}
      <div className="glow-orb glow-red w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold uppercase tracking-wider shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-rose-700" />
          <span>SIMPLICITÉ & ERGONOMIE</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight">
          Découvrez notre service Strong IPTV.
          <br />
          <span className="text-rose-700">Tout ce dont vous avez besoin.</span>
          <br />
          <span className="text-slate-500">Rien de superflu.</span>
        </h2>

        <p className="text-slate-600 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
          Une expérience Strong IPTV pensée pour être simple à utiliser, ultra stable, agréable à parcourir et parfaitement adaptée à vos appareils compatibles en France.
        </p>

        {/* Minimalist Visual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md shadow-slate-200/50 text-left space-y-3 hover:border-rose-400 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center">
              <MonitorPlay className="w-6 h-6 text-rose-700" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Interface Épurée</h3>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">
              Une navigation fluide et intuitive pensée pour retrouver directement vos flux favoris sur grand écran.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md shadow-slate-200/50 text-left space-y-3 hover:border-rose-400 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center">
              <SlidersHorizontal className="w-6 h-6 text-rose-700" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Stabilité Prioritaire</h3>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">
              Des flux optimisés avec une infrastructure haute performance assurant une qualité HD et 4K constante.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md shadow-slate-200/50 text-left space-y-3 hover:border-rose-400 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center">
              <Shield className="w-6 h-6 text-rose-700" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Transparence Totale</h3>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">
              Pas de frais cachés, pas d'engagement contraint. Des formules d'abonnement claires et maîtrisées.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
