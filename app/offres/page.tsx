import { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PricingSection } from "@/components/pricing/PricingSection";
import { FaqSection } from "@/components/faq/FaqSection";
import { FinalCta } from "@/components/cta/FinalCta";

export const metadata: Metadata = {
  title: "Nos Offres & Tarifs - Formules STREAMORA",
  description:
    "Consultez l'ensemble de nos formules d'abonnement : Pass 1 mois, 6 mois et 12 mois. Tarifs transparents, sans engagement et activation instantanée.",
  alternates: {
    canonical: `${siteConfig.domain}/offres`,
  },
};

export default function OffresPage() {
  return (
    <div className="pt-28 pb-16 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={[{ name: "Nos Offres", url: "/offres" }]} />
      </div>

      <PricingSection />
      <FaqSection />
      <FinalCta />
    </div>
  );
}
