import { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PricingSection } from "@/components/pricing/PricingSection";
import { FaqSection } from "@/components/faq/FaqSection";
import { FinalCta } from "@/components/cta/FinalCta";

export const metadata: Metadata = {
  title: "Tarifs Abonnement Strong IPTV 4K France | Offres 1, 6 et 12 Mois Pas Cher",
  description:
    "Découvrez nos prix d'abonnement Strong IPTV 4K en France : Pass 1 mois (11,99$), 6 mois (32,99$) et 12 mois (55,99$). Sans engagement, activation instantanée & compatible tout appareil.",
  keywords: siteConfig.seoKeywords,
  alternates: {
    canonical: `${siteConfig.domain}/offres`,
  },
};

export default function OffresPage() {
  return (
    <div className="pt-28 pb-16 space-y-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={[{ name: "Nos Offres", url: "/offres" }]} />
      </div>

      <PricingSection />
      <FaqSection />
      <FinalCta />
    </div>
  );
}
