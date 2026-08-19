import { products } from "@/lib/config/products";
import { PricingSelector } from "./PricingSelector";
import { ComparisonTable } from "./ComparisonTable";
import { Sparkles } from "lucide-react";

export function PricingSection() {
  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden" id="abonnements">
      {/* Glow Orbs */}
      <div className="glow-orb glow-red w-[550px] h-[550px] top-0 left-1/2 -translate-x-1/2 opacity-15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-red-600" />
            <span>OFFRES & TARIFS TRANSPARENTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
            Choisissez votre expérience 4K.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            Des formules simples, sans surprise et sans engagement pour s'adapter à votre rythme.
          </p>
        </div>

        {/* Pricing Cards Selector */}
        <PricingSelector products={products} />

        {/* Comparison Table */}
        <ComparisonTable />
      </div>
    </section>
  );
}
