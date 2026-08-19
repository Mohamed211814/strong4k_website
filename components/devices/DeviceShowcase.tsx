import Link from "next/link";
import { Tv, Smartphone, Tablet, Monitor, Flame, ArrowRight, Check } from "lucide-react";

export function DeviceShowcase() {
  const devices = [
    {
      id: "smart-tv",
      name: "Smart TV",
      icon: Tv,
      badge: "Samsung / LG",
      href: "/installation/smart-tv",
      description: "Applications dédiées compatibles sur Samsung Tizen OS, LG webOS et Smart TV connectées.",
    },
    {
      id: "android-tv",
      name: "Android TV",
      icon: Tv,
      badge: "Sony / Xiaomi / Shield",
      href: "/installation/android-tv",
      description: "Fluidité optimale sur tous les téléviseurs et boîtiers tournant sous Android TV ou Google TV.",
    },
    {
      id: "fire-tv",
      name: "Fire TV",
      icon: Flame,
      badge: "Amazon Fire Stick",
      href: "/installation/fire-tv",
      description: "Guide dédié pour paramétrer rapidement votre clé Amazon Fire TV Stick HD et 4K.",
    },
    {
      id: "mobile",
      name: "Smartphone",
      icon: Smartphone,
      badge: "iOS & Android",
      href: "/installation/mobile",
      description: "Emportez votre abonnement sur iPhone, iPad et smartphones Android en mobilité.",
    },
    {
      id: "tablette",
      name: "Tablette",
      icon: Tablet,
      badge: "iPad / Android",
      href: "/installation/mobile",
      description: "Confort visuel supérieur sur écran tactile en Wi-Fi ou connexion réseau 4G/5G.",
    },
    {
      id: "ordinateur",
      name: "Ordinateur",
      icon: Monitor,
      badge: "PC Windows / Mac",
      href: "/installation/ordinateur",
      description: "Accès facile via lecteurs multimédias standard (VLC, lecteurs Web ou logiciels dédiés).",
    },
  ];

  return (
    <section className="relative py-20 bg-slate-50" id="compatibilite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-800 bg-rose-50 px-4 py-1.5 rounded-full border border-rose-200 shadow-sm">
            COMPATIBILITÉ TOTALE
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
            Votre écran. <span className="text-rose-700">Votre choix.</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            STRONG4K s'adapte à vos appareils d'aujourd'hui et de demain sans contrainte matérielle.
          </p>
        </div>

        {/* Devices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {devices.map((device) => {
            const Icon = device.icon;
            return (
              <div
                key={device.id}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md shadow-slate-200/50 hover:border-rose-500/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-5"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-rose-700" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                      {device.badge}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-slate-900">{device.name}</h3>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      {device.description}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-rose-700">
                    <Check className="w-3.5 h-3.5" />
                    <span>Prise en charge certifiée</span>
                  </div>

                  <Link
                    href={device.href}
                    className="inline-flex items-center gap-1 text-xs font-bold text-rose-700 hover:text-rose-800 transition-colors"
                  >
                    <span>Voir le guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
