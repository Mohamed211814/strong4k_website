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
    <section className="relative py-8 bg-[#08090e] border-y border-white/10 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-center gap-3.5 p-3 sm:p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-purple-500/20 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-gray-400 leading-snug">
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
