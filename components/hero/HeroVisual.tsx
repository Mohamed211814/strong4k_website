"use client";

import { Tv, Smartphone, Zap, ShieldCheck, Play, Radio, Sparkles } from "lucide-react";

export function HeroVisual() {
  return (
    <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[540px] flex items-center justify-center p-2">
      {/* Background glow behind TV dashboard */}
      <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 via-rose-500/15 to-amber-500/10 rounded-3xl blur-3xl opacity-50 animate-pulse-glow" />

      {/* Main Streaming Interface Mockup Container */}
      <div className="relative w-full max-w-lg lg:max-w-xl bg-white rounded-2xl p-4 sm:p-5 border-2 border-slate-200 shadow-2xl shadow-slate-300/40 overflow-hidden">
        {/* Top Header of Fictional UI */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-600" />
            <div className="w-3 h-3 rounded-full bg-amber-400" />
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="ml-2 text-xs font-black text-slate-900 tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-rose-700" /> ESPACE STRONG4K
            </span>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-extrabold text-rose-900 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-700 animate-ping" />
            <span>FLUX 4K ACTIF</span>
          </div>
        </div>

        {/* Fictional Dashboard Content */}
        <div className="space-y-4">
          {/* Navigation Bar inside Fictional UI */}
          <div className="flex items-center justify-between text-xs font-bold border-b border-slate-100 pb-2">
            <div className="flex items-center gap-3">
              <span className="text-white font-extrabold bg-rose-700 px-3 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                <Radio className="w-3 h-3 text-white animate-pulse" /> En Direct
              </span>
              <span className="text-slate-600 hover:text-slate-900 transition-colors cursor-pointer font-bold">À découvrir</span>
              <span className="text-slate-600 hover:text-slate-900 transition-colors cursor-pointer font-bold">Favoris</span>
            </div>
            <span className="text-[10px] text-rose-800 font-mono font-black bg-rose-50 px-2 py-0.5 rounded border border-rose-200">4K 60FPS</span>
          </div>

          {/* Fictional Featured Banner Card */}
          <div className="relative rounded-xl overflow-hidden h-36 bg-rose-700 p-5 shadow-md flex flex-col justify-end text-white">
            <div className="absolute top-3 right-3 bg-white text-rose-800 text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded shadow">
              DIRECT 4K
            </div>
            <div className="space-y-1 relative z-10">
              <span className="text-[10px] font-black text-rose-100 uppercase tracking-widest">
                Événement Spécial
              </span>
              <h4 className="text-sm sm:text-base font-black text-white tracking-tight">
                Grand Rendez-Vous Divertissement 4K
              </h4>
              <p className="text-[11px] text-rose-50 line-clamp-1 font-medium">
                Profitez d'un flux d'une netteté exceptionnelle sur tous vos écrans.
              </p>
            </div>
          </div>

          {/* Fictional Channel / Content Thumbnails Grid */}
          <div className="grid grid-cols-3 gap-2.5">
            <div className="rounded-lg bg-slate-50 p-2.5 border border-slate-200 hover:border-red-500/40 transition-all duration-300">
              <div className="w-full aspect-video rounded bg-gradient-to-br from-red-600 to-rose-600 mb-2 flex items-center justify-center shadow-sm">
                <Play className="w-4 h-4 text-white fill-white" />
              </div>
              <div className="h-2 w-16 bg-slate-300 rounded mb-1" />
              <div className="h-1.5 w-10 bg-slate-200 rounded" />
            </div>

            <div className="rounded-lg bg-slate-50 p-2.5 border border-slate-200 hover:border-red-500/40 transition-all duration-300">
              <div className="w-full aspect-video rounded bg-gradient-to-br from-red-500 to-rose-500 mb-2 flex items-center justify-center shadow-sm">
                <Tv className="w-4 h-4 text-white" />
              </div>
              <div className="h-2 w-16 bg-slate-300 rounded mb-1" />
              <div className="h-1.5 w-12 bg-slate-200 rounded" />
            </div>

            <div className="rounded-lg bg-slate-50 p-2.5 border border-slate-200 hover:border-red-500/40 transition-all duration-300">
              <div className="w-full aspect-video rounded bg-gradient-to-br from-rose-600 to-red-700 mb-2 flex items-center justify-center shadow-sm">
                <Radio className="w-4 h-4 text-white" />
              </div>
              <div className="h-2 w-14 bg-slate-300 rounded mb-1" />
              <div className="h-1.5 w-8 bg-slate-200 rounded" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Light Cards around Main Card */}
      {/* Badge 1: Smart TV */}
      <div className="absolute -top-3 -left-3 sm:top-4 sm:-left-6 bg-white px-4 py-3 rounded-2xl border border-slate-200 shadow-xl flex items-center gap-3 animate-float">
        <div className="w-9 h-9 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center">
          <Tv className="w-5 h-5 text-rose-700" />
        </div>
        <div>
          <p className="text-xs font-extrabold text-slate-900">Smart TV</p>
          <p className="text-[10px] text-slate-500 font-semibold">App dédiée 4K</p>
        </div>
      </div>

      {/* Badge 2: Android TV */}
      <div className="absolute top-1/2 -right-4 sm:-right-8 -translate-y-1/2 bg-white px-4 py-3 rounded-2xl border border-slate-200 shadow-xl flex items-center gap-3 animate-float-delayed">
        <div className="w-9 h-9 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center">
          <Zap className="w-5 h-5 text-rose-700" />
        </div>
        <div>
          <p className="text-xs font-extrabold text-slate-900">Android & Fire TV</p>
          <p className="text-[10px] text-slate-500 font-semibold">Installation rapide</p>
        </div>
      </div>

      {/* Badge 3: Mobile & Tablet */}
      <div className="absolute -bottom-4 left-6 sm:-bottom-6 sm:left-12 bg-white px-4 py-3 rounded-2xl border border-slate-200 shadow-xl flex items-center gap-3 animate-float">
        <div className="w-9 h-9 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center">
          <Smartphone className="w-5 h-5 text-rose-700" />
        </div>
        <div>
          <p className="text-xs font-extrabold text-slate-900">Mobile & Tablette</p>
          <p className="text-[10px] text-slate-500 font-semibold">En déplacement</p>
        </div>
      </div>

      {/* Badge 4: Activation Rapide */}
      <div className="absolute -bottom-2 right-4 sm:bottom-4 sm:right-6 bg-rose-700 text-white px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2">
        <ShieldCheck className="w-4 h-4 text-white" />
        <span className="text-xs font-extrabold">Activation Instantanée</span>
      </div>
    </div>
  );
}
