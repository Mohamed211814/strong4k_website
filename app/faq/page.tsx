import { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FaqSection } from "@/components/faq/FaqSection";
import { FinalCta } from "@/components/cta/FinalCta";

export const metadata: Metadata = {
  title: "FAQ Abonnement IPTV France 4K | Questions, Test 24h & Installation",
  description:
    "Trouvez toutes les réponses sur votre abonnement IPTV 4K France : installation Smart TV (Samsung, LG), Amazon Firestick, IPTV Smarters Pro, Tivimate, Xtream Codes API et M3U.",
  keywords: siteConfig.seoKeywords,
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
