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
    default: "Abonnement IPTV 4K France | STRONG4K",
    template: "%s | STRONG4K",
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
    "STRONG4K",
    "IPTV 4K",
  ],
  authors: [{ name: siteConfig.brandName }],
  creator: siteConfig.brandName,
  publisher: siteConfig.brandName,
  alternates: {
    canonical: siteConfig.domain,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: siteConfig.language,
    url: siteConfig.domain,
    title: "Abonnement IPTV 4K France | STRONG4K",
    description: siteConfig.description,
    siteName: siteConfig.brandName,
    images: [
      {
        url: "/images/logo-og.png",
        width: 512,
        height: 512,
        alt: siteConfig.brandName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abonnement IPTV 4K France | STRONG4K",
    description: siteConfig.description,
    images: ["/images/logo-og.png"],
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
    <html lang="fr" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
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
      <body
        className="min-h-screen bg-white text-slate-900 antialiased flex flex-col justify-between selection:bg-red-600 selection:text-white"
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
