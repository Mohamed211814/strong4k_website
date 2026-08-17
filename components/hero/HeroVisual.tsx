"use client";

import { Tv, Smartphone, Zap, ShieldCheck, Play, Radio, Sparkles } from "lucide-react";

export function HeroVisual() {
  return (
    <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[540px] flex items-center justify-center p-2">
      {/* Background glow behind TV dashboard */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 via-indigo-600/20 to-cyan-500/20 rounded-3xl blur-3xl opacity-60 animate-pulse-glow" />

      {/* Main Streaming Interface Mockup Container */}
      <div className="relative w-full max-w-lg lg:max-w-xl glass-card rounded-2xl p-4 sm:p-5 border border-white/15 shadow-2xl shadow-purple-950/40 overflow-hidden backdrop-blur-2xl">
        {/* Top Header of Fictional UI */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-2 text-xs font-semibold text-gray-300 tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" /> STREAMORA HUB
            </span>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-medium text-cyan-400 bg-cyan-950/40 px-2.5 py-1 rounded-full border border-cyan-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <span>FLUX 4K ACTIF</span>
          </div>
        </div>

        {/* Fictional Dashboard Content */}
        <div className="space-y-4">
          {/* Navigation Bar inside Fictional UI */}
          <div className="flex items-center justify-between text-xs font-medium border-b border-white/5 pb-2">
            <div className="flex items-center gap-3">
              <span className="text-white font-bold bg-purple-600/40 px-2.5 py-1 rounded-lg border border-purple-500/30 flex items-center gap-1">
                <Radio className="w-3 h-3 text-red-400 animate-pulse" /> En Direct
              </span>
              <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">À découvrir</span>
              <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Favoris</span>
            </div>
            <span className="text-[10px] text-gray-400 font-mono">1080p 60fps</span>
          </div>

          {/* Fictional Featured Banner Card */}
          <div className="relative rounded-xl overflow-hidden h-36 bg-gradient-to-r from-purple-900/60 via-indigo-900/50 to-slate-900/80 p-4 border border-white/10 flex flex-col justify-end">
            <div className="absolute top-3 right-3 bg-red-600/90 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow">
              DIRECT HD
            </div>
            <div className="space-y-1 relative z-10">
              <span className="text-[10px] font-semibold text-purple-300 uppercase tracking-widest">
                Événement Spécial
              </span>
              <h4 className="text-sm font-bold text-white tracking-tight">
                Grand Rendez-Vous Divertissement
              </h4>
              <p className="text-[11px] text-gray-300 line-clamp-1">
                Profitez d'un flux d'une netteté exceptionnelle sur tous vos écrans.
              </p>
            </div>
          </div>

          {/* Fictional Channel / Content Thumbnails Grid */}
          <div className="grid grid-cols-3 gap-2.5">
            <div className="rounded-lg bg-white/5 p-2.5 border border-white/10 hover:border-purple-500/40 transition-colors">
              <div className="w-full aspect-video rounded bg-gradient-to-br from-purple-600/30 to-blue-600/20 mb-2 flex items-center justify-center">
                <Play className="w-4 h-4 text-purple-300 fill-purple-300/40" />
              </div>
              <div className="h-2 w-16 bg-gray-600/40 rounded mb-1" />
              <div className="h-1.5 w-10 bg-gray-700/40 rounded" />
            </div>

            <div className="rounded-lg bg-white/5 p-2.5 border border-white/10 hover:border-purple-500/40 transition-colors">
              <div className="w-full aspect-video rounded bg-gradient-to-br from-cyan-600/30 to-indigo-600/20 mb-2 flex items-center justify-center">
                <Tv className="w-4 h-4 text-cyan-300" />
              </div>
              <div className="h-2 w-16 bg-gray-600/40 rounded mb-1" />
              <div className="h-1.5 w-12 bg-gray-700/40 rounded" />
            </div>

            <div className="rounded-lg bg-white/5 p-2.5 border border-white/10 hover:border-purple-500/40 transition-colors">
              <div className="w-full aspect-video rounded bg-gradient-to-br from-indigo-600/30 to-purple-600/20 mb-2 flex items-center justify-center">
                <Radio className="w-4 h-4 text-indigo-300" />
              </div>
              <div className="h-2 w-14 bg-gray-600/40 rounded mb-1" />
              <div className="h-1.5 w-8 bg-gray-700/40 rounded" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Glass Badges around Main Card */}
      {/* Badge 1: Smart TV */}
      <div className="absolute -top-3 -left-3 sm:top-4 sm:-left-6 glass-card px-3.5 py-2.5 rounded-xl border border-white/15 shadow-xl flex items-center gap-2.5 animate-float">
        <div className="w-8 h-8 rounded-lg bg-purple-600/30 border border-purple-500/30 flex items-center justify-center">
          <Tv className="w-4 h-4 text-purple-300" />
        </div>
        <div>
          <p className="text-xs font-bold text-white">Smart TV</p>
          <p className="text-[10px] text-gray-400">App dédiée 4K</p>
        </div>
      </div>

      {/* Badge 2: Android TV */}
      <div className="absolute top-1/2 -right-4 sm:-right-8 -translate-y-1/2 glass-card px-3.5 py-2.5 rounded-xl border border-white/15 shadow-xl flex items-center gap-2.5 animate-float-delayed">
        <div className="w-8 h-8 rounded-lg bg-cyan-600/30 border border-cyan-500/30 flex items-center justify-center">
          <Zap className="w-4 h-4 text-cyan-300" />
        </div>
        <div>
          <p className="text-xs font-bold text-white">Android & Fire TV</p>
          <p className="text-[10px] text-gray-400">Installation rapide</p>
        </div>
      </div>

      {/* Badge 3: Mobile & Tablet */}
      <div className="absolute -bottom-4 left-6 sm:-bottom-6 sm:left-12 glass-card px-3.5 py-2.5 rounded-xl border border-white/15 shadow-xl flex items-center gap-2.5 animate-float">
        <div className="w-8 h-8 rounded-lg bg-blue-600/30 border border-blue-500/30 flex items-center justify-center">
          <Smartphone className="w-4 h-4 text-blue-300" />
        </div>
        <div>
          <p className="text-xs font-bold text-white">Mobile & Tablette</p>
          <p className="text-[10px] text-gray-400">En déplacement</p>
        </div>
      </div>

      {/* Badge 4: Activation Rapide */}
      <div className="absolute -bottom-2 right-4 sm:bottom-4 sm:right-6 glass-card px-3.5 py-2 rounded-xl border border-emerald-500/30 shadow-xl flex items-center gap-2 bg-emerald-950/30">
        <ShieldCheck className="w-4 h-4 text-emerald-400" />
        <span className="text-xs font-semibold text-emerald-300">Activation Rapide</span>
      </div>
    </div>
  );
}
