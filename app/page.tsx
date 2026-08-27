import { Hero } from "@/components/hero/Hero";
import { TrustStrip } from "@/components/trust/TrustStrip";
import { StatementSection } from "@/components/features/StatementSection";
import { EditorialFeatures } from "@/components/features/EditorialFeatures";
import { DeviceShowcase } from "@/components/devices/DeviceShowcase";
import { PricingSection } from "@/components/pricing/PricingSection";
import { HowItWorks } from "@/components/how-it-works/HowItWorks";
import { TestimonialsSection } from "@/components/testimonials/TestimonialsSection";
import { SeoKeywordsSection } from "@/components/seo/SeoKeywordsSection";
import { FaqSection } from "@/components/faq/FaqSection";
import { FinalCta } from "@/components/cta/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <StatementSection />
      <EditorialFeatures />
      <PricingSection />
      <DeviceShowcase />
      <HowItWorks />
      <SeoKeywordsSection />
      <TestimonialsSection />
      <FaqSection />
      <FinalCta />
    </>
  );
}
