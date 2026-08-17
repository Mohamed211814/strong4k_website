export const siteConfig = {
  brandName: "STREAMORA",
  tagline: "Votre divertissement. À votre façon.",
  description:
    "Découvrez une expérience TV moderne et flexible sur tous vos appareils compatibles en France. Des abonnements simples, transparents et sans engagement avec une activation rapide via WhatsApp.",
  domain: process.env.NEXT_PUBLIC_SITE_URL || "https://streamora-tv.fr",
  language: "fr-FR",
  supportEmail: "contact@streamora-placeholder.fr",
  supportPhone: "+33 6 00 00 00 00",
  whatsAppNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+33600000000",
  company: {
    name: "[STREAMORA SAS - Raison Sociale Placeholder]",
    address: "[123 Avenue de la Télévision, 75008 Paris, France - Adresse Placeholder]",
    registration: "[RCS Paris B 999 888 777 - SIRET Placeholder]",
    vatNumber: "[FR 99 999888777 - TVA Intra Placeholder]",
    capital: "[10 000 € - Capital Social Placeholder]",
    publicationDirector: "[Nom du Directeur de Publication - Placeholder]",
    host: "[Nom de l'hébergeur cloud - Adresse & Contact Hébergeur Placeholder]",
  },
  navLinks: [
    { label: "Accueil", href: "/" },
    { label: "Abonnements", href: "/#abonnements" },
    { label: "Offres", href: "/offres" },
    { label: "Panel", href: "/panel" },
  ],
  footerLinks: {
    navigation: [
      { label: "Accueil", href: "/" },
      { label: "Abonnement IPTV", href: "/abonnement-iptv" },
      { label: "IPTV France", href: "/iptv-france" },
      { label: "Nos Offres", href: "/offres" },
      { label: "Panel Reseller", href: "/panel" },
      { label: "Compatibilité", href: "/compatibilite" },
      { label: "Guides d'Installation", href: "/installation" },
      { label: "Foire Aux Questions", href: "/faq" },
    ],
    company: [
      { label: "À propos de STREAMORA", href: "/a-propos" },
      { label: "Blog & Actualités", href: "/blog" },
      { label: "Nous Contacter", href: "/contact" },
    ],
    legal: [
      { label: "Mentions Légales", href: "/mentions-legales" },
      { label: "Conditions Générales de Vente", href: "/conditions-generales" },
      { label: "Politique de Confidentialité", href: "/politique-de-confidentialite" },
      { label: "Politique de Remboursement", href: "/politique-de-remboursement" },
    ],
  },
};

export function getWhatsAppUrl(planName?: string): string {
  const cleanNumber = siteConfig.whatsAppNumber.replace(/[^0-9]/g, "");
  const text = planName
    ? `Bonjour, je souhaite commander l'offre STREAMORA ${planName}. Merci de me donner les instructions pour finaliser la commande.`
    : "Bonjour, je souhaite commander un abonnement STREAMORA.";
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;
}
