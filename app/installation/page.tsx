import { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import Link from "next/link";
import { Tv, Flame, Smartphone, Monitor, ArrowRight, BookOpen, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Guides d'Installation IPTV - Tutoriels Configuration Appareils",
  description:
    "Consultez nos tutoriels d'installation pas à pas pour configurer STREAMORA sur Smart TV, Fire TV, Android TV, iPhone et ordinateur PC/Mac.",
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
      duration: "4 minutes",
    },
    {
      title: "Guide Amazon Fire TV Stick",
      slug: "fire-tv",
      href: "/installation/fire-tv",
      desc: "Tutoriel illustré pour clés Fire TV Stick Lite, HD, 4K et 4K Max.",
      icon: Flame,
      duration: "3 minutes",
    },
    {
      title: "Guide Smartphones & Tablettes",
      slug: "mobile",
      href: "/installation/mobile",
      desc: "Instructions pour appareils iOS (iPhone, iPad) et mobiles Android.",
      icon: Smartphone,
      duration: "2 minutes",
    },
    {
      title: "Guide PC Windows & Mac",
      slug: "ordinateur",
      href: "/installation/ordinateur",
      desc: "Paramétrage via lecteurs vidéo standard tels que VLC ou IPTV Smarters.",
      icon: Monitor,
      duration: "3 minutes",
    },
  ];

  return (
    <div className="pt-28 pb-16 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={[{ name: "Installation", url: "/installation" }]} />

        <div className="py-12 text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-purple-400" />
            <span>CENTRE DE CONFIGURATION</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Besoin d'aide pour l'installation ?
          </h1>

          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Sélectionnez votre appareil ci-dessous pour suivre notre guide de configuration illustré et profiter rapidement de votre service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((g) => {
            const Icon = g.icon;
            return (
              <div
                key={g.slug}
                className="glass-card p-6 rounded-2xl border border-white/10 space-y-4 flex flex-col justify-between glass-card-hover"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-full border border-cyan-500/30">
                      ~ {g.duration}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white">{g.title}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed">{g.desc}</p>
                  </div>
                </div>

                <Link
                  href={g.href}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-purple-600/30 hover:bg-purple-600/50 text-white font-bold text-xs border border-purple-500/40 transition-colors"
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
