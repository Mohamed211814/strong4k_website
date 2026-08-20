import { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import Link from "next/link";
import { Tv, Flame, Smartphone, Monitor, ArrowRight, BookOpen, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Guides d'Installation 4K | Tutoriels Configuration Appareils",
  description:
    "Consultez nos tutoriels d'installation pas à pas pour configurer STRONG4K sur Smart TV, Fire TV, Android TV, iPhone et ordinateur PC/Mac.",
  alternates: {
    canonical: `${siteConfig.domain}/installation`,
  },
};

export default function InstallationIndexPage() {
  const guides = [
    {
      title: "Guide Smart TV (Samsung & LG)",
      slug: "smart-tv",
      href: "/installation/smart-tv",
      desc: "Apprenez à installer le service directement sur votre téléviseur connecté sans décodeur supplémentaire.",
      icon: Tv,
      duration: "3 minutes",
    },
    {
      title: "Guide Android TV & Google TV",
      slug: "android-tv",
      href: "/installation/android-tv",
      desc: "Configuration pas à pas pour boîtiers Shield, Xiaomi Box et téléviseurs sous Android TV.",
      icon: Tv,
      duration: "2 minutes",
    },
    {
      title: "Guide Amazon Fire TV Stick",
      slug: "fire-tv",
      href: "/installation/fire-tv",
      desc: "Procédure d'installation guidée pour clé Amazon Fire Stick HD et 4K.",
      icon: Flame,
      duration: "3 minutes",
    },
    {
      title: "Guide Smartphones & Tablettes",
      slug: "mobile",
      href: "/installation/mobile",
      desc: "Tutoriel de configuration sur appareils iOS (iPhone/iPad) et smartphones Android.",
      icon: Smartphone,
      duration: "2 minutes",
    },
    {
      title: "Guide Ordinateur (PC & Mac)",
      slug: "ordinateur",
      href: "/installation/ordinateur",
      desc: "Utilisation du service sur ordinateur de bureau et portable via lecteurs multimédias.",
      icon: Monitor,
      duration: "2 minutes",
    },
  ];

  return (
    <div className="pt-28 pb-16 space-y-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        <Breadcrumbs items={[{ name: "Installation", url: "/installation" }]} />

        <div className="py-12 text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold uppercase tracking-wider shadow-sm">
            <BookOpen className="w-3.5 h-3.5 text-rose-700" />
            <span>CENTRE DE CONFIGURATION</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 leading-tight">
            Besoin d'aide pour l'installation 4K ?
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Sélectionnez votre appareil ci dessous pour suivre notre guide de configuration illustré et profiter rapidement de votre service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((g) => {
            const Icon = g.icon;
            return (
              <div
                key={g.slug}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md shadow-slate-200/50 hover:border-red-500/40 hover:shadow-xl transition-all duration-300 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-red-600" />
                    </div>
                    <span className="text-[11px] font-bold text-red-700 bg-red-50 px-3 py-1 rounded-full border border-red-200">
                      ~ {g.duration}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-slate-900">{g.title}</h3>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">{g.desc}</p>
                  </div>
                </div>

                <Link
                  href={g.href}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-md shadow-red-600/20 transition-all duration-300"
                >
                  <span>Consulter le tutoriel</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
