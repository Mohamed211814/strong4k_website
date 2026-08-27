import { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { DeviceShowcase } from "@/components/devices/DeviceShowcase";
import { FinalCta } from "@/components/cta/FinalCta";
import Link from "next/link";
import { Tv, Flame, Smartphone, Monitor, Tablet, ArrowRight, CheckCircle2, Cpu, Sparkles, AppWindow } from "lucide-react";

export const metadata: Metadata = {
  title: "Compatibilité IPTV 4K | Smart TV Samsung LG, Firestick, Smarters Pro & Tivimate",
  description:
    "Guide de compatibilité IPTV 4K pour Smart TV Samsung (Tizen), LG (webOS), Amazon Firestick, Android TV, IPTV Smarters Pro, Tivimate, Xtream Codes API et M3U.",
  keywords: siteConfig.seoKeywords,
  alternates: {
    canonical: `${siteConfig.domain}/compatibilite`,
  },
};

export default function CompatibilitePage() {
  const guideLinks = [
    {
      title: "Smart TV (Samsung & LG)",
      href: "/installation/smart-tv",
      desc: "Configuration sur téléviseurs connectés sous Tizen OS ou webOS sans boîtier externe.",
      icon: Tv,
    },
    {
      title: "Android TV & Boîtiers",
      href: "/installation/android-tv",
      desc: "Tutoriel pour téléviseurs Sony, TCL, Philips, Xiaomi Box et Nvidia Shield.",
      icon: Tv,
    },
    {
      title: "Amazon Fire TV Stick",
      href: "/installation/fire-tv",
      desc: "Paramétrage rapide des clés de streaming Fire TV Stick HD, 4K et Max.",
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
      desc: "Visionnage sur ordinateur de bureau et portable via lecteurs vidéo dédiés.",
      icon: Monitor,
    },
  ];

  const appRecommendations = [
    { name: "IPTV Smarters Pro", platform: "Android, iOS, Fire TV, Windows, Mac", rating: "★★★★★", desc: "Interface moderne très intuitive avec EPG et gestion VOD intégrée." },
    { name: "IBO Player", platform: "Smart TV Samsung & LG", rating: "★★★★★", desc: "Lecteur ultra fluide spécialement optimisé pour les Smart TV." },
    { name: "TiviMate IPTV Player", platform: "Android TV & Fire TV Stick", rating: "★★★★★", desc: "Le meilleur lecteur style câble/satellite pour boîtiers TV." },
    { name: "Smart One IPTV", platform: "Smart TV Samsung, LG & VIDAA", rating: "★★★★☆", desc: "Excellente alternative stable pour téléviseurs récents." },
    { name: "XCIPTV Player", platform: "Android & Android TV", rating: "★★★★☆", desc: "Application épurée et très simple à prendre en main." },
    { name: "VLC Media Player", platform: "PC Windows & Mac OS", rating: "★★★★☆", desc: "Solution universelle gratuite pour ordinateurs." },
  ];

  return (
    <div className="pt-28 pb-16 space-y-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        <Breadcrumbs items={[{ name: "Compatibilité", url: "/compatibilite" }]} />

        <div className="py-8 text-center max-w-4xl mx-auto space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-800 bg-rose-50 px-4 py-1.5 rounded-full border border-rose-200 shadow-sm">
            DISPONIBLE SUR TOUS VOS ÉCRANS
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 leading-tight">
            Compatibilité des appareils <span className="text-rose-700">4K</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            STRONG4K s'intègre parfaitement avec la majorité des équipements télévisuels et multimédias récents sans contrainte matérielle.
          </p>
        </div>

        {/* Guides Overview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guideLinks.map((guide) => {
            const Icon = guide.icon;
            return (
              <div
                key={guide.title}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md shadow-slate-200/50 space-y-4 flex flex-col justify-between hover:border-rose-500/40 hover:shadow-xl transition-all duration-300"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-rose-700" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{guide.title}</h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">{guide.desc}</p>
                </div>

                <Link
                  href={guide.href}
                  className="inline-flex items-center justify-between py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-rose-50 text-xs font-bold text-rose-700 border border-slate-200 transition-colors"
                >
                  <span>Accéder au guide complet</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Applications Recommandées Table */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-black text-slate-900">Applications Recommandées</h2>
            <p className="text-sm text-slate-600 font-medium">Notre sélection des meilleures applications compatibles selon votre appareil.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {appRecommendations.map((app) => (
              <div key={app.name} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-rose-700 bg-rose-50 px-2.5 py-1 rounded-md border border-rose-200">{app.platform}</span>
                  <span className="text-xs text-amber-500 font-bold">{app.rating}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{app.name}</h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <DeviceShowcase />
      <FinalCta />
    </div>
  );
}
