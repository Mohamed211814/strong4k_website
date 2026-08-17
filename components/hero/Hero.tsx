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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-md shadow-lg shadow-purple-950/50">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>UNE NOUVELLE EXPÉRIENCE TV</span>
            </div>

            {/* Main H1 */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
              Abonnement IPTV en France.
              <br />
              <span className="text-gradient-violet">Votre divertissement.</span>
              <br />
              <span className="text-gradient-blue">À votre façon.</span>
            </h1>

            {/* Supporting Text (max 600px) */}
            <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Découvrez une expérience TV moderne et flexible sur vos appareils compatibles, avec des offres simples adaptées à vos besoins.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/#abonnements"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold text-base shadow-xl shadow-purple-600/30 transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-400"
              >
                <span>Découvrir les abonnements</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href="/#comment-ca-marche"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl glass-card text-gray-200 hover:text-white hover:bg-white/10 font-semibold text-base border border-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <Play className="w-4 h-4 fill-white text-white" />
                <span>Comment ça marche</span>
              </Link>
            </div>

            {/* Trust Subtext under CTAs */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs font-medium text-gray-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-purple-400" />
                <span>Activation rapide</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Appareils compatibles</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Assistance client 7j/7</span>
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
