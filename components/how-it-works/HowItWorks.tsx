import { ShoppingBag, CreditCard, MailCheck, Tv } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Choisissez votre offre",
      description: "Sélectionnez la durée de pass (1, 6 ou 12 mois) correspondant à vos besoins.",
      icon: ShoppingBag,
    },
    {
      number: "02",
      title: "Finalisez votre commande",
      description: "Remplissez vos informations et validez via notre interface de paiement sécurisée.",
      icon: CreditCard,
    },
    {
      number: "03",
      title: "Recevez vos instructions",
      description: "Vos données d'accès personnelles et le guide d'installation vous sont envoyés par e-mail.",
      icon: MailCheck,
    },
    {
      number: "04",
      title: "Configurez votre appareil",
      description: "Suivez le tutoriel pas à pas sur votre Smart TV, Fire TV ou mobile et profitez du service.",
      icon: Tv,
    },
  ];

  return (
    <section className="relative py-24 bg-[#050507] overflow-hidden" id="comment-ca-marche">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-400 bg-purple-950/60 px-3.5 py-1.5 rounded-full border border-purple-500/30">
            SIMPLICITÉ MAXIMALE
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Commencez en <span className="text-gradient-violet">quelques étapes.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Un processus fluide conçu pour que vous puissiez profiter de vos flux en moins de 5 minutes.
          </p>
        </div>

        {/* Steps Layout (Horizontal on Desktop, Vertical on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {/* Timeline Connector Line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-12 right-12 h-0.5 bg-gradient-to-r from-purple-600/50 via-indigo-600/50 to-blue-600/50 -translate-y-6 z-0" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="glass-card p-6 rounded-2xl border border-white/10 relative z-10 glass-card-hover space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-purple-400 font-mono">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-purple-300" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white">{step.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-2 text-[11px] text-gray-400 font-medium">
                  Étape {idx + 1} sur 4
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
