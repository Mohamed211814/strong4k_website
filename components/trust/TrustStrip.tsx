import { Zap, Tv, Headphones, Lock } from "lucide-react";

export function TrustStrip() {
  const trustItems = [
    {
      icon: Zap,
      title: "Activation Rapide",
      description: "Vos accès configurés en quelques minutes",
    },
    {
      icon: Tv,
      title: "Appareils Compatibles",
      description: "Smart TV, Fire TV, Mobile, PC & Tablettes",
    },
    {
      icon: Headphones,
      title: "Assistance Client 7j/7",
      description: "Équipe réactive pour vous accompagner",
    },
    {
      icon: Lock,
      title: "Paiement Sécurisé",
      description: "Transactions cryptées SSL & confidentielles",
    },
  ];

  return (
    <section className="relative py-8 bg-white border-y border-slate-200 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-center gap-3.5 p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-red-500/40 shadow-sm transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-600 font-medium leading-snug">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
