import { faqItems } from "@/lib/config/faq";
import { FaqAccordion } from "./FaqAccordion";
import { getFaqSchema } from "@/lib/seo/schema";
import { HelpCircle } from "lucide-react";

export function FaqSection() {
  const faqSchema = getFaqSchema(faqItems);

  return (
    <section className="relative py-24 bg-[#050507] overflow-hidden" id="faq">
      {/* JSON-LD Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-purple-400" />
            <span>RÉPONSES À VOS QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Questions Fréquentes
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Retrouvez rapidement les réponses concernant le fonctionnement, l'activation et la compatibilité de STREAMORA.
          </p>
        </div>

        {/* Accordion Component */}
        <FaqAccordion items={faqItems} />
      </div>
    </section>
  );
}
