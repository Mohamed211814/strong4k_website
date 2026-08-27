import { siteConfig } from "@/lib/config/site";
import { ProductPlan } from "@/lib/config/products";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.brandName,
    url: siteConfig.domain,
    logo: `${siteConfig.domain}/images/logo-og.png`,
    description: siteConfig.description,
    email: siteConfig.supportEmail,
    address: {
      "@type": "PostalAddress",
      addressCountry: "FR",
      addressLocality: "Paris",
    },
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.brandName,
    url: siteConfig.domain,
    inLanguage: "fr-FR",
    description: siteConfig.description,
    keywords: siteConfig.seoKeywords.join(", "),
  };
}

export function getProductSchema(product: ProductPlan) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${siteConfig.brandName} | ${product.name}`,
    description: `${product.description} Meilleur abonnement IPTV 4K France compatible Smart TV, Firestick, IPTV Smarters Pro, Tivimate, Xtream Codes et M3U.`,
    keywords: siteConfig.seoKeywords.join(", "),
    brand: {
      "@type": "Brand",
      name: siteConfig.brandName,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: product.priceValue,
      availability: "https://schema.org/InStock",
      url: product.checkoutUrl || `${siteConfig.domain}/offres`,
      seller: {
        "@type": "Organization",
        name: siteConfig.brandName,
      },
    },
  };
}

export function getFaqSchema(faqItems: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${siteConfig.domain}${item.url}`,
    })),
  };
}

export function getArticleSchema(article: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: `${siteConfig.domain}/blog/${article.slug}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      "@type": "Organization",
      name: article.authorName || siteConfig.brandName,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.brandName,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.domain}/images/logo-og.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.domain}/blog/${article.slug}`,
    },
  };
}
