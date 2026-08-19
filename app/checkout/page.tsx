import { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CheckoutFlow } from "@/components/checkout/CheckoutFlow";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Commande & Checkout Sécurisé | STRONG4K",
  description: "Finalisez votre souscription STRONG4K en toute sécurité.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CheckoutPage() {
  return (
    <div className="pt-28 pb-16 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={[{ name: "Checkout", url: "/checkout" }]} />

        <div className="py-6 text-center max-w-2xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">Finaliser votre commande</h1>
          <p className="text-xs sm:text-sm text-gray-300">
            Complétez vos informations pour recevoir immédiatement vos accès personnels.
          </p>
        </div>

        <Suspense
          fallback={
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-8 h-8 text-purple-400 animate-spin" />
            </div>
          }
        >
          <CheckoutFlow />
        </Suspense>
      </div>
    </div>
  );
}
