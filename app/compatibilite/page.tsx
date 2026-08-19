import { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { DeviceShowcase } from "@/components/devices/DeviceShowcase";
import { FinalCta } from "@/components/cta/FinalCta";
import Link from "next/link";
import { Tv, Flame, Smartphone, Monitor, Tablet, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Compatibilité Appareils 4K - Smart TV, Fire TV, Android & Mobile",
  description:
    "Vérifiez la compatibilité de vos appareils avec le service STRONG4K. Guides d'installation pas à pas pour Smart TV, Amazon Fire TV, Android, iPhone et PC.",
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
    <div className="pt-28 pb-16 space-y-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={[{ name: "Compatibilité", url: "/compatibilite" }]} />

        <div className="py-12 text-center max-w-4xl mx-auto space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-red-700 bg-red-50 px-4 py-1.5 rounded-full border border-red-200 shadow-sm">
            DISPONIBLE PARTOUT
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 leading-tight">
            Compatibilité des appareils <span className="text-gradient-red">4K</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            STRONG4K s'intègre parfaitement avec la majorité des équipements télévisuels et multimédias récents.
          </p>
        </div>

        {/* Guides Overview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
          {guideLinks.map((guide) => {
            const Icon = guide.icon;
            return (
              <div
                key={guide.title}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md shadow-slate-200/50 space-y-4 flex flex-col justify-between hover:border-red-500/40 hover:shadow-xl transition-all duration-300"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{guide.title}</h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">{guide.desc}</p>
                </div>

                <Link
                  href={guide.href}
                  className="inline-flex items-center justify-between py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-red-50 text-xs font-bold text-red-600 border border-slate-200 transition-colors"
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
