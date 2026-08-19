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
        <div className="bg-slate-100 p-1.5 rounded-2xl border border-slate-200 shadow-inner flex items-center gap-1">
          {products.map((plan) => {
            const isSelected = plan.id === selectedPlanId;
            return (
              <button
                key={plan.id}
                onClick={() => setSelectedPlanId(plan.id)}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 relative ${
                  isSelected
                    ? "bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-md shadow-red-600/30"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                }`}
              >
                {plan.duration}
                {plan.featured && (
                  <span className="ml-1.5 text-[10px] bg-red-600 text-white px-2 py-0.5 rounded-full font-extrabold uppercase">
                    RECOMMANDÉ
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
                  ? "bg-gradient-to-b from-red-50/70 via-white to-white text-slate-900 border-2 border-red-600 shadow-2xl shadow-red-500/10 lg:-translate-y-2"
                  : "bg-white text-slate-900 border border-slate-200 hover:border-slate-300 shadow-lg shadow-slate-200/50"
              } ${isSelected ? "ring-2 ring-red-500" : ""}`}
            >
              {/* Featured Badge */}
              {isFeatured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-600 to-rose-600 text-white font-black text-[11px] uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 fill-white" />
                  <span>{plan.badge || "LE PLUS POPULAIRE"}</span>
                </div>
              )}

              <div className="space-y-6">
                {/* Header */}
                <div className="space-y-2 border-b border-slate-100 pb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-widest text-red-600">
                      {plan.duration}
                    </span>
                    {plan.popularDiscountBadge && (
                      <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full text-red-700 bg-red-50 border border-red-200">
                        {plan.popularDiscountBadge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">{plan.name}</h3>
                  <p className="text-xs leading-relaxed font-medium text-slate-500">{plan.description}</p>
                </div>

                {/* Price Display */}
                <div className="space-y-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
                      {plan.priceFormatted}
                    </span>
                    <span className="text-sm font-semibold text-slate-400">/ pass</span>
                  </div>
                  <p className="text-xs font-bold text-red-600">
                    Équivalent : {plan.monthlyEquivalent}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3 pt-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Ce qui est inclus :
                  </p>
                  <ul className="space-y-2.5 text-xs font-semibold text-slate-700">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
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
                  className="w-full inline-flex items-center justify-center gap-2.5 py-4 rounded-xl font-extrabold text-sm transition-all duration-300 shadow-md bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-700 hover:to-rose-700 text-white shadow-red-600/30 hover:scale-[1.02]"
                >
                  <span>Découvrir l'offre</span>
                </a>

                <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] font-semibold text-slate-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-red-600" />
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
