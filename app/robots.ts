import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/checkout/",
        "/commande-confirmee/",
        "/account/",
        "/admin/",
        "/api/",
      ],
    },
    sitemap: `${siteConfig.domain}/sitemap.xml`,
  };
}
