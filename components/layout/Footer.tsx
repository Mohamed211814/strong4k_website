import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config/site";
import { ShieldCheck, Tv, Lock, HelpCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-slate-50 border-t border-slate-200 pt-16 pb-12 overflow-hidden">
      {/* Background glow orb */}
      <div className="glow-orb glow-red w-96 h-96 -bottom-48 -left-48 opacity-10"></div>
      <div className="glow-orb glow-red w-96 h-96 -bottom-48 -right-48 opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="relative w-9 h-9 rounded-xl overflow-hidden bg-white border border-slate-200 p-0.5 shadow-md shadow-red-600/10 flex items-center justify-center">
                <Image
                  src="/apple-touch-icon.png"
                  alt="STRONG4K Logo"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <span className="text-xl font-black tracking-tight text-slate-900 flex items-center gap-1">
                STRONG<span className="text-rose-700 font-extrabold">4K</span>
                <span className="w-1.5 h-1.5 rounded-full bg-rose-700"></span>
              </span>
            </Link>

            <p className="text-slate-600 text-sm max-w-sm leading-relaxed font-medium">
              Une expérience TV moderne, simple et pensée pour vos appareils compatibles en France.
              Profitez d'offres flexibles avec une assistance client disponible 7j/7.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex items-center gap-1.5 text-xs text-slate-700 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm font-semibold">
                <ShieldCheck className="w-4 h-4 text-rose-700" />
                <span>Service Sécurisé</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-700 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm font-semibold">
                <Tv className="w-4 h-4 text-rose-700" />
                <span>Multi-Appareils</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-700 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm font-semibold">
                <Lock className="w-4 h-4 text-rose-700" />
                <span>Paiement SSL</span>
              </div>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-rose-700">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 font-medium">
              {siteConfig.footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-rose-700 transition-colors focus:outline-none focus:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Enterprise Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-rose-700">
              Entreprise
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 font-medium">
              {siteConfig.footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-rose-700 transition-colors focus:outline-none focus:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-rose-700">
              Informations
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 font-medium">
              {siteConfig.footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-rose-700 transition-colors focus:outline-none focus:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright Notice */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p className="text-center md:text-left max-w-2xl leading-relaxed">
            <span className="font-bold text-slate-700">Avertissement Légal : </span>
            {siteConfig.brandName} fait la promotion et distribue exclusivement des flux de télévision et programmes dont la distribution est dûment autorisée. Les marques et dénominations d'appareils cités (Smart TV, Android TV, Fire TV) restent la propriété de leurs détenteurs respectifs.
          </p>

          <p className="text-center md:text-right font-bold text-slate-700">
            © 2026 {siteConfig.brandName}. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
