import { Sparkles, Shield, MonitorPlay, SlidersHorizontal } from "lucide-react";

export function StatementSection() {
  return (
    <section className="relative py-24 bg-[#050507] overflow-hidden">
      {/* Background radial glow */}
      <div className="glow-orb glow-violet w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>SIMPLICITÉ & ERGONOMIE</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Découvrez notre service IPTV.
          <br />
          <span className="text-gradient-violet">Tout ce dont vous avez besoin.</span>
          <br />
          <span className="text-gray-400">Rien de superflu.</span>
        </h2>

        <p className="text-gray-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed font-normal">
          Une expérience pensée pour être simple à utiliser, agréable à parcourir et parfaitement adaptée à vos appareils compatibles en France.
        </p>

        {/* Minimalist Visual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
          <div className="glass-card p-6 rounded-2xl border border-white/10 text-left space-y-3 glass-card-hover">
            <div className="w-12 h-12 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center">
              <MonitorPlay className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-lg font-bold text-white">Interface Épurée</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Une navigation fluide et intuitive pensée pour retrouver directement vos flux favoris sur grand écran.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-white/10 text-left space-y-3 glass-card-hover">
            <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center">
              <SlidersHorizontal className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-lg font-bold text-white">Stabilité Prioritaire</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Des flux optimisés avec une infrastructure haute performance assurant une qualité HD et 4K constante.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-white/10 text-left space-y-3 glass-card-hover">
            <div className="w-12 h-12 rounded-xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-center">
              <Shield className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-lg font-bold text-white">Transparence Totale</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Pas de frais cachés, pas d'engagement contraint. Des formules d'abonnement claires et maîtrisées.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
