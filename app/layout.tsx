import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/config/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { getOrganizationSchema, getWebsiteSchema } from "@/lib/seo/schema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "Abonnement IPTV France | STREAMORA",
    template: "%s | STREAMORA",
  },
  description: siteConfig.description,
  keywords: [
    "abonnement IPTV",
    "IPTV France",
    "service IPTV",
    "IPTV Smart TV",
    "IPTV Android TV",
    "télévision sur internet",
    "TV en ligne",
    "STREAMORA",
  ],
  authors: [{ name: siteConfig.brandName }],
  creator: siteConfig.brandName,
  publisher: siteConfig.brandName,
  alternates: {
    canonical: siteConfig.domain,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.language,
    url: siteConfig.domain,
    title: "Abonnement IPTV France | STREAMORA",
    description: siteConfig.description,
    siteName: siteConfig.brandName,
  },
  twitter: {
    card: "summary_large_image",
    title: "Abonnement IPTV France | STREAMORA",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = getOrganizationSchema();
  const siteSchema = getWebsiteSchema();

  return (
    <html lang="fr" className={`${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
      </head>
      <body className="min-h-screen bg-[#050507] text-white antialiased flex flex-col justify-between selection:bg-purple-600 selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
