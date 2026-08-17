import Link from "next/link";
import { siteConfig } from "@/lib/config/site";
import { Play, ShieldCheck, Tv, Lock, HelpCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[#07080d] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Background glow orb */}
      <div className="glow-orb glow-violet w-96 h-96 -bottom-48 -left-48 opacity-20"></div>
      <div className="glow-orb glow-blue w-96 h-96 -bottom-48 -right-48 opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-600/30">
                <Play className="w-4 h-4 text-white fill-white ml-0.5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1">
                STREAM<span className="text-purple-400 font-extrabold">ORA</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              </span>
            </Link>

            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              Une expérience TV moderne, simple et pensée pour vos appareils compatibles en France.
              Profitez d'offres flexibles avec une assistance client disponible 7j/7.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex items-center gap-1.5 text-xs text-gray-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                <ShieldCheck className="w-4 h-4 text-purple-400" />
                <span>Service Sécurisé</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                <Tv className="w-4 h-4 text-cyan-400" />
                <span>Multi-Appareils</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                <Lock className="w-4 h-4 text-emerald-400" />
                <span>Paiement SSL</span>
              </div>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {siteConfig.footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors focus:outline-none focus:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Enterprise Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400">
              Entreprise
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {siteConfig.footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors focus:outline-none focus:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400">
              Informations
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {siteConfig.footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors focus:outline-none focus:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright Notice */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p className="text-center md:text-left max-w-2xl leading-relaxed">
            <span className="font-semibold text-gray-400">Avertissement Légal : </span>
            {siteConfig.brandName} fait la promotion et distribue exclusivement des flux de télévision et programmes dont la distribution est dûment autorisée. Les marques et dénominations d'appareils cités (Smart TV, Android TV, Fire TV) restent la propriété de leurs détenteurs respectifs.
          </p>

          <p className="text-center md:text-right font-medium">
            © 2026 {siteConfig.brandName}. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
