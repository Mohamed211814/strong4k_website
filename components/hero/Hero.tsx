import Link from "next/link";
import { HeroVisual } from "./HeroVisual";
import { ArrowRight, Sparkles, CheckCircle2, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-[105vh] pt-32 lg:pt-36 pb-16 flex items-center overflow-hidden bg-grid-pattern">
      {/* Background Orbs */}
      <div className="glow-orb glow-violet w-[500px] h-[500px] -top-32 -left-32 opacity-30" />
      <div className="glow-orb glow-blue w-[500px] h-[500px] top-1/2 -right-32 opacity-25" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content Column (55% -> col-span-7) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider shadow-sm">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
              <Sparkles className="w-3.5 h-3.5 text-red-600" />
              <span>EXPÉRIENCE IPTV 4K ULTIME</span>
            </div>

            {/* Main H1 */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.1]">
              Abonnement IPTV 4K.
              <br />
              <span className="text-gradient-red">Qualité Maximale.</span>
              <br />
              <span className="text-gradient-crimson">Haute Stabilité.</span>
            </h1>

            {/* Supporting Text (max 600px) */}
            <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Profitez d'un accès instantané en 4K Ultra HD & 60 FPS sur l'ensemble de vos appareils connectés en France, avec assistance VIP 7j/7.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/#abonnements"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-700 hover:to-rose-700 text-white font-extrabold text-base shadow-xl shadow-red-600/25 transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <span>Découvrir les abonnements</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href="/#comment-ca-marche"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-base border border-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 shadow-sm"
              >
                <Play className="w-4 h-4 fill-slate-900 text-slate-900" />
                <span>Comment ça marche</span>
              </Link>
            </div>

            {/* Trust Subtext under CTAs */}
            <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs font-bold text-slate-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-red-600" />
                <span>Activation instantanée</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-red-600" />
                <span>Tous appareils compatibles</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-red-600" />
                <span>Support client 7j/7</span>
              </div>
            </div>
          </div>

          {/* Right Visual Column (45% -> col-span-5) */}
          <div className="lg:col-span-5 w-full">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
