import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config/site";
import { blogPosts } from "@/lib/config/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.domain;

  const staticRoutes = [
    "",
    "/abonnement-iptv",
    "/iptv-france",
    "/offres",
    "/compatibilite",
    "/installation",
    "/installation/smart-tv",
    "/installation/android-tv",
    "/installation/fire-tv",
    "/installation/mobile",
    "/installation/ordinateur",
    "/faq",
    "/a-propos",
    "/contact",
    "/blog",
    "/mentions-legales",
    "/conditions-generales",
    "/politique-de-confidentialite",
    "/politique-de-remboursement",
  ];

  const routes = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : route.includes("abonnement") || route.includes("offres") ? 0.9 : 0.7,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...blogRoutes];
}
