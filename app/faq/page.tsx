import { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FaqSection } from "@/components/faq/FaqSection";
import { FinalCta } from "@/components/cta/FinalCta";

export const metadata: Metadata = {
  title: "Foire Aux Questions (FAQ) | Tout savoir sur STRONG4K",
  description:
    "Trouvez des réponses claires à vos questions sur les abonnements 4K, l'activation instantanée, les appareils compatibles et le support VIP.",
  alternates: {
    canonical: `${siteConfig.domain}/faq`,
  },
};

export default function FaqPage() {
  return (
    <div className="pt-28 pb-16 space-y-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={[{ name: "FAQ", url: "/faq" }]} />
      </div>

      <FaqSection />
      <FinalCta />
    </div>
  );
}
