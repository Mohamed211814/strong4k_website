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
            className={`glass-card rounded-2xl border transition-all duration-200 ${
              isOpen
                ? "border-purple-500/40 bg-purple-950/20 shadow-lg shadow-purple-950/30"
                : "border-white/10 hover:border-white/20"
            }`}
          >
            <button
              id={buttonId}
              aria-expanded={isOpen}
              aria-controls={contentId}
              onClick={() => toggleItem(item.id)}
              className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-purple-400 rounded-2xl"
            >
              <span className="text-base sm:text-lg font-bold text-white leading-snug flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-purple-400 shrink-0" />
                {item.question}
              </span>
              <div
                className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180 bg-purple-600/30 text-purple-300" : "text-gray-400"
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
                className="px-5 sm:px-6 pb-6 pt-0 text-sm text-gray-300 leading-relaxed border-t border-white/5 mt-1 pt-4"
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
