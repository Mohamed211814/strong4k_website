import { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { DeviceShowcase } from "@/components/devices/DeviceShowcase";
import { FinalCta } from "@/components/cta/FinalCta";
import Link from "next/link";
import { Tv, Flame, Smartphone, Monitor, Tablet, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Compatibilité Appareils - Smart TV, Fire TV, Android & Mobile",
  description:
    "Vérifiez la compatibilité de vos appareils avec le service STREAMORA. Guides d'installation pas à pas pour Smart TV, Amazon Fire TV, Android, iPhone et PC.",
  alternates: {
    canonical: `${siteConfig.domain}/compatibilite`,
  },
};

export default function CompatibilitePage() {
  const guideLinks = [
    {
      title: "Smart TV (Samsung & LG)",
      href: "/installation/smart-tv",
      desc: "Configuration sur téléviseurs connectés sous Tizen OS ou webOS.",
      icon: Tv,
    },
    {
      title: "Android TV & Boîtiers",
      href: "/installation/android-tv",
      desc: "Tutoriel pour téléviseurs Sony, TCL, Philips et boîtiers Nvidia Shield.",
      icon: Tv,
    },
    {
      title: "Amazon Fire TV Stick",
      href: "/installation/fire-tv",
      desc: "Paramétrage rapide des clés de streaming Fire TV Stick HD et 4K.",
      icon: Flame,
    },
    {
      title: "Smartphones & Tablettes",
      href: "/installation/mobile",
      desc: "Utilisation en mobilité sur iPhone, iPad et smartphones Android.",
      icon: Smartphone,
    },
    {
      title: "Ordinateurs (PC & Mac)",
      href: "/installation/ordinateur",
      desc: "Visionnage sur ordinateur de bureau et portable via lecteurs vidéo.",
      icon: Monitor,
    },
  ];

  return (
    <div className="pt-28 pb-16 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={[{ name: "Compatibilité", url: "/compatibilite" }]} />

        <div className="py-12 text-center max-w-4xl mx-auto space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-400 bg-purple-950/60 px-3.5 py-1 rounded-full border border-purple-500/30">
            DISPONIBLE PARTOUT
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Compatibilité des appareils
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            STREAMORA s'intègre parfaitement avec la majorité des équipements télévisuels et multimédias récents.
          </p>
        </div>

        {/* Guides Overview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
          {guideLinks.map((guide) => {
            const Icon = guide.icon;
            return (
              <div
                key={guide.title}
                className="glass-card p-6 rounded-2xl border border-white/10 space-y-4 flex flex-col justify-between glass-card-hover"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{guide.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{guide.desc}</p>
                </div>

                <Link
                  href={guide.href}
                  className="inline-flex items-center justify-between py-2 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-bold text-purple-300 border border-white/5 transition-colors"
                >
                  <span>Accéder au guide complet</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <DeviceShowcase />
      <FinalCta />
    </div>
  );
}
