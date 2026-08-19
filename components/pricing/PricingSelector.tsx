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
    <div>
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
                  ? "bg-white text-slate-900 border-2 border-rose-700 shadow-xl shadow-rose-700/10 lg:-translate-y-2"
                  : "bg-white text-slate-900 border border-slate-200 hover:border-rose-500 shadow-md shadow-slate-200/50"
              } ${isSelected ? "ring-2 ring-rose-500" : ""}`}
            >
              {/* Featured Badge */}
              {isFeatured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-rose-700 text-white font-black text-[11px] uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 fill-white" />
                  <span>{plan.badge || "LE PLUS POPULAIRE"}</span>
                </div>
              )}

              <div className="space-y-6">
                {/* Header */}
                <div className="space-y-2 border-b border-slate-100 pb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-widest text-rose-700">
                      {plan.duration}
                    </span>
                    {plan.popularDiscountBadge && (
                      <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full text-rose-900 bg-rose-50 border border-rose-200">
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
                  <p className="text-xs font-bold text-rose-700">
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
                        <Check className="w-4 h-4 shrink-0 mt-0.5 text-rose-700" />
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
                  className="w-full inline-flex items-center justify-center gap-2.5 py-4 rounded-xl font-extrabold text-sm transition-all duration-300 shadow-md bg-rose-700 hover:bg-rose-800 text-white shadow-rose-700/25 hover:scale-[1.02]"
                >
                  <span>Découvrir l'offre</span>
                </a>

                <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] font-semibold text-slate-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-rose-700" />
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
