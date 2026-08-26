export const siteConfig = {
  brandName: "STRONG4K",
  tagline: "Votre divertissement 4K Ultra HD. À votre façon.",
  description:
    "Découvrez l'expérience IPTV 4K Ultra HD ultime sur tous vos appareils compatibles en France. Des abonnements simples, transparents et sans engagement avec une activation instantanée.",
  domain: process.env.NEXT_PUBLIC_SITE_URL || "https://www.strong4k.us",
  language: "fr-FR",
  supportEmail: "zprotv25@gmail.com",
  supportPhone: "+33 7 56 90 12 34",
  whatsAppNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+212779395271",
  company: {
    name: "STRONG4K MEDIA SAS",
    address: "128 Rue La Boétie, 75008 Paris, France",
    registration: "RCS Paris B 918 273 645 | SIRET 91827364500012",
    vatNumber: "FR 82 918273645",
    capital: "10 000 €",
    publicationDirector: "Direction STRONG4K",
    host: "Vercel Inc. | 440 N Barranca Ave #4133, Covina, CA 91723, USA",
  },
  navLinks: [
    { label: "Abonnements", href: "/#abonnements" },
    { label: "Offres", href: "/#abonnements" },
    { label: "Panel", href: "/panel" },
    { label: "Contact", href: "/contact" },
  ],
  footerLinks: {
    navigation: [
      { label: "Nos Offres", href: "/#abonnements" },
      { label: "Panel Reseller", href: "/panel" },
      { label: "Guides d'Installation", href: "/installation" },
      { label: "Foire Aux Questions", href: "/faq" },
    ],
    company: [
      { label: "À propos", href: "/a-propos" },
      { label: "Blog & Actualités", href: "/blog" },
      { label: "Nous Contacter", href: "/contact" },
    ],
    legal: [
      { label: "Conditions Générales de Vente", href: "/conditions-generales" },
      { label: "Politique de Confidentialité", href: "/politique-de-confidentialite" },
      { label: "Politique de Remboursement", href: "/politique-de-remboursement" },
    ],
  },
};

export function getWhatsAppUrl(planName?: string): string {
  const cleanNumber = siteConfig.whatsAppNumber.replace(/[^0-9]/g, "");
  const text = planName
    ? `Bonjour, je souhaite commander l'offre STRONG4K ${planName}. Merci de me donner les instructions pour finaliser la commande.`
    : "Bonjour, je souhaite commander un abonnement STRONG4K.";
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;
}
