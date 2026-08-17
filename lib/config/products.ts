export interface ProductPlan {
  id: string;
  name: string;
  duration: string;
  durationMonths: number;
  priceFormatted: string;
  priceValue: number;
  currency: string;
  monthlyEquivalent: string;
  description: string;
  featured: boolean;
  badge?: string;
  features: string[];
  ctaText: string;
  popularDiscountBadge?: string;
}

export const products: ProductPlan[] = [
  {
    id: "plan-1-month",
    name: "Pass 1 Mois",
    duration: "1 MOIS",
    durationMonths: 1,
    priceFormatted: "14,99 €",
    priceValue: 14.99,
    currency: "€",
    monthlyEquivalent: "14,99 € / mois",
    description: "Idéal pour tester l'expérience STREAMORA en toute liberté sans engagement.",
    featured: false,
    ctaText: "Découvrir l'offre",
    features: [
      "Accès complet sur 1 appareil simultané",
      "Qualité HD & 4K Ultra HD disponible",
      "Activation rapide des accès",
      "Compatible Smart TV, Android & iOS",
      "Assistance client 7j/7",
      "Sans engagement de durée",
    ],
  },
  {
    id: "plan-12-months",
    name: "Pass 12 Mois",
    duration: "12 MOIS",
    durationMonths: 12,
    priceFormatted: "69,99 €",
    priceValue: 69.99,
    currency: "€",
    monthlyEquivalent: "5,83 € / mois",
    description: "La formule la plus économique pour profiter d'un an de divertissement sans interruption.",
    featured: true,
    badge: "LE PLUS POPULAIRE",
    popularDiscountBadge: "ÉCONOMISEZ 60%",
    ctaText: "Découvrir l'offre",
    features: [
      "Accès complet sur 1 à 2 appareils compatibles",
      "Qualité 4K Ultra HD & 60 FPS prioritaire",
      "Activation prioritaire instantanée",
      "Compatibilité totale (Smart TV, Fire TV, Mobile, PC)",
      "Assistance VIP dédiée 24/7",
      "Mises à jour automatiques incluses",
      "Garantie de service continue",
    ],
  },
  {
    id: "plan-6-months",
    name: "Pass 6 Mois",
    duration: "6 MOIS",
    durationMonths: 6,
    priceFormatted: "44,99 €",
    priceValue: 44.99,
    currency: "€",
    monthlyEquivalent: "7,50 € / mois",
    description: "Le parfait compromis entre souplesse et économies pour un confort prolongé.",
    featured: false,
    ctaText: "Découvrir l'offre",
    features: [
      "Accès complet sur 1 appareil compatible",
      "Qualité HD & 4K Ultra HD disponible",
      "Activation rapide sous quelques minutes",
      "Compatible tous supports & applications",
      "Assistance client réactive 7j/7",
      "Guide d'installation pas à pas inclus",
    ],
  },
];

export function getProductById(id: string): ProductPlan | undefined {
  return products.find((p) => p.id === id);
}
