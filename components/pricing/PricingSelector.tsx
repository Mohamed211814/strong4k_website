"use client";

import { useState } from "react";
import { ProductPlan } from "@/lib/config/products";
import { getWhatsAppUrl } from "@/lib/config/site";
import { Check, ShieldCheck, ArrowRight, Sparkles, MessageCircle } from "lucide-react";

interface PricingSelectorProps {
  products: ProductPlan[];
}

export function PricingSelector({ products }: PricingSelectorProps) {
  const [selectedPlanId, setSelectedPlanId] = useState<string>(
    products.find((p) => p.featured)?.id || products[0].id
  );

  return (
    <div className="space-y-10">
      {/* Interactive Selector Tabs */}
      <div className="flex items-center justify-center">
        <div className="glass-card p-1.5 rounded-2xl border border-white/10 flex items-center gap-1">
          {products.map((plan) => {
            const isSelected = plan.id === selectedPlanId;
            return (
              <button
                key={plan.id}
                onClick={() => setSelectedPlanId(plan.id)}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 relative ${
                  isSelected
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/30"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {plan.duration}
                {plan.featured && (
                  <span className="ml-1.5 text-[10px] bg-amber-400 text-black px-1.5 py-0.2 rounded-full font-extrabold">
                    TOP
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {products.map((plan) => {
          const isSelected = plan.id === selectedPlanId;
          const isFeatured = plan.featured;
          const whatsappLink = getWhatsAppUrl(plan.name);

          return (
            <div
              key={plan.id}
              onClick={() => setSelectedPlanId(plan.id)}
              className={`rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between relative cursor-pointer ${
                isFeatured
                  ? "bg-gradient-to-b from-[#191428] via-[#11131a] to-[#0d0e15] border-2 border-purple-500 shadow-2xl shadow-purple-950/60 lg:-translate-y-2"
                  : "glass-card border border-white/10 hover:border-white/20"
              } ${isSelected ? "ring-2 ring-purple-400" : ""}`}
            >
              {/* Featured Badge */}
              {isFeatured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-amber-500 text-white font-extrabold text-[11px] uppercase tracking-wider px-4 py-1 rounded-full shadow-lg flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 fill-white" />
                  <span>{plan.badge || "LE PLUS POPULAIRE"}</span>
                </div>
              )}

              <div className="space-y-6">
                {/* Header */}
                <div className="space-y-2 border-b border-white/10 pb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest text-purple-400">
                      {plan.duration}
                    </span>
                    {plan.popularDiscountBadge && (
                      <span className="text-[10px] font-extrabold text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                        {plan.popularDiscountBadge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-extrabold text-white">{plan.name}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{plan.description}</p>
                </div>

                {/* Price Display */}
                <div className="space-y-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                      {plan.priceFormatted}
                    </span>
                    <span className="text-sm font-semibold text-gray-400">/ pass</span>
                  </div>
                  <p className="text-xs text-purple-300 font-medium">
                    Équivalent : {plan.monthlyEquivalent}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3 pt-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Ce qui est inclus :
                  </p>
                  <ul className="space-y-2.5 text-xs text-gray-300">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        <span className="leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button linking to WhatsApp */}
              <div className="pt-8">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2.5 py-4 rounded-xl font-bold text-sm transition-all duration-300 shadow-lg ${
                    isFeatured
                      ? "bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-400 text-white shadow-emerald-600/30 hover:scale-[1.02]"
                      : "bg-emerald-950/60 hover:bg-emerald-900/80 text-emerald-300 border border-emerald-500/30"
                  }`}
                >
                  <span>Découvrir l'offre</span>
                </a>

                <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-gray-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Commande directe • Réponse rapide 7j/7</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
