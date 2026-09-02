import { faqItems } from "@/lib/config/faq";
import { FaqAccordion } from "./FaqAccordion";
import { getFaqSchema } from "@/lib/seo/schema";
import { HelpCircle } from "lucide-react";

export function FaqSection() {
  const faqSchema = getFaqSchema(faqItems);

  return (
    <section className="relative py-24 bg-white overflow-hidden" id="faq">
      {/* JSON-LD Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold uppercase tracking-wider shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-rose-700" />
            <span>RÉPONSES À VOS QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
            Questions Fréquentes sur Strong IPTV
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            Retrouvez rapidement les réponses concernant le fonctionnement, l'activation et la compatibilité de votre abonnement Strong IPTV STRONG4K.
          </p>
        </div>

        {/* Accordion Component */}
        <FaqAccordion items={faqItems} />
      </div>
    </section>
  );
}
