"use client";

import { useState } from "react";
import { FaqItem } from "@/lib/config/faq";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqAccordionProps {
  items: FaqItem[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const buttonId = `faq-btn-${item.id}`;
        const contentId = `faq-content-${item.id}`;

        return (
          <div
            key={item.id}
            className={`rounded-2xl border transition-all duration-200 ${
              isOpen
                ? "border-rose-500/40 bg-slate-50 shadow-md shadow-slate-200/50"
                : "bg-white border-slate-200 hover:border-slate-300"
            }`}
          >
            <button
              id={buttonId}
              aria-expanded={isOpen}
              aria-controls={contentId}
              onClick={() => toggleItem(item.id)}
              className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-rose-500 rounded-2xl"
            >
              <span className="text-base sm:text-lg font-bold text-slate-900 leading-snug flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-rose-700 shrink-0" />
                {item.question}
              </span>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180 bg-rose-700 text-white" : "bg-slate-100 text-slate-600"
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div
                id={contentId}
                role="region"
                aria-labelledby={buttonId}
                className="px-5 sm:px-6 pb-6 pt-0 text-sm text-slate-600 font-medium leading-relaxed border-t border-slate-200/60 mt-1 pt-4"
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
