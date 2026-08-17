import { products } from "@/lib/config/products";
import { PricingSelector } from "./PricingSelector";
import { ComparisonTable } from "./ComparisonTable";
import { Sparkles } from "lucide-react";

export function PricingSection() {
  return (
    <section className="relative py-24 bg-[#08090f] overflow-hidden" id="abonnements">
      {/* Glow Orbs */}
      <div className="glow-orb glow-violet w-[550px] h-[550px] top-0 left-1/2 -translate-x-1/2 opacity-25" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>OFFRES & TARIFS TRANSPARENTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Choisissez votre expérience.
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
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
