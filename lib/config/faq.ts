export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const faqItems: FaqItem[] = [
  {
    id: "faq-1",
    category: "Général",
    question: "Qu'est-ce qu'un service TV sur Internet (IPTV) ?",
    answer:
      "Un service TV sur Internet (IPTV) vous permet de recevoir des flux de télévision en direct et à la demande directement via votre connexion réseau (Fibre, ADSL, 4G/5G) sur vos équipements multimédias compatibles, sans nécessiter d'antenne râteau ni de parabole satellite.",
  },
  {
    id: "appareils-compatibles",
    category: "Compatibilité",
    question: "Sur quels appareils puis-je utiliser le service STRONG4K ?",
    answer:
      "STRONG4K est compatible avec une très grande variété d'appareils : Smart TV (Samsung, LG, Philips, Sony), boîtiers & clés de streaming (Android TV, Amazon Fire TV Stick, Apple TV), smartphones et tablettes (iOS et Android), ainsi que les ordinateurs PC et Mac via des lecteurs multimédias standard.",
  },
  {
    id: "faq-3",
    category: "Activation",
    question: "Comment fonctionne l'activation de mon abonnement ?",
    answer:
      "Dès que vous finalisez votre commande, vos accès uniques vous sont transmis directement par e-mail avec un guide étape par étape. L'activation se fait généralement en quelques minutes seulement après la configuration de votre application.",
  },
  {
    id: "faq-4",
    category: "Installation",
    question: "Comment configurer le service sur mon appareil ?",
    answer:
      "C'est extrêmement simple ! Il vous suffit de télécharger l'une des applications compatibles recommandées sur le store officiel de votre appareil (ex: Smart TV Store ou Google Play), puis de saisir le lien de playlist ou les identifiants fournis lors de votre souscription. Des guides détaillés sont disponibles dans notre rubrique Installation.",
  },
  {
    id: "faq-5",
    category: "Compatibilité",
    question: "Puis-je utiliser le service sur une Smart TV sans boîtier externe ?",
    answer:
      "Absolument. Si vous possédez une Smart TV récente (Samsung sous Tizen, LG sous webOS ou une TV sous Android TV / Google TV), vous pouvez directement installer une application compatible depuis le store de votre téléviseur et profiter du service sans aucun boîtier additionnel.",
  },
  {
    id: "faq-6",
    category: "Paiement",
    question: "Quels moyens de paiement sont disponibles et sécurisés ?",
    answer:
      "Nous proposons des modes de paiement entièrement sécurisés et cryptés via notre infrastructure de checkout. Vous pouvez régler par Carte Bancaire (Visa, Mastercard) ainsi que d'autres solutions sécurisées certifiées selon la disponibilité.",
  },
  {
    id: "faq-7",
    category: "Support",
    question: "Que faire si j'ai besoin d'aide ou si j'ai une question ?",
    answer:
      "Notre équipe d'assistance client est disponible 7j/7 pour vous assister à tout moment. Vous pouvez nous contacter via le formulaire de contact en ligne ou par e-mail à l'adresse support indiquée. Nous nous engageons à répondre rapidement à toutes vos demandes.",
  },
  {
    id: "faq-8",
    category: "Remboursement",
    question: "Quelle est votre politique de remboursement ?",
    answer:
      "Nous appliquons des conditions claires et transparentes conformément à nos Conditions Générales de Vente. Si vous rencontrez une difficulté technique majeure non résoluble par notre équipe dans le délai initial, vous pouvez effectuer une demande de prise en charge auprès de notre support client.",
  },
];
