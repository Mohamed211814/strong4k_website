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
    description: "Idéal pour tester l'expérience STRONG4K en toute liberté sans engagement.",
    featured: false,
    ctaText: "Découvrir l'offre",
    features: [
      "22,000+ Live TV Channels",
      "55,000+ Movies",
      "55,000+ Series",
      "2,000+ Sports Channels",
      "Accès complet sur tous vos appareils",
      "Qualité HD & 4K Ultra HD 60 FPS",
      "Activation instantanée sous 5 minutes",
      "Compatible Smart TV, Fire TV, Android & iOS",
      "Assistance client réactive 7j/7",
      "Mises à jour automatiques incluses",
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
      "22,000+ Live TV Channels",
      "55,000+ Movies",
      "55,000+ Series",
      "2,000+ Sports Channels",
      "Accès complet sur tous vos appareils",
      "Qualité HD & 4K Ultra HD 60 FPS",
      "Activation instantanée sous 5 minutes",
      "Compatible Smart TV, Fire TV, Android & iOS",
      "Assistance client réactive 7j/7",
      "Mises à jour automatiques incluses",
      "Sans engagement de durée",
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
      "22,000+ Live TV Channels",
      "55,000+ Movies",
      "55,000+ Series",
      "2,000+ Sports Channels",
      "Accès complet sur tous vos appareils",
      "Qualité HD & 4K Ultra HD 60 FPS",
      "Activation instantanée sous 5 minutes",
      "Compatible Smart TV, Fire TV, Android & iOS",
      "Assistance client réactive 7j/7",
      "Mises à jour automatiques incluses",
      "Sans engagement de durée",
    ],
  },
];

export function getProductById(id: string): ProductPlan | undefined {
  return products.find((p) => p.id === id);
}
