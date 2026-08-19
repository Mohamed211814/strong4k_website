import { Star, ShieldCheck, UserCheck } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      author: "Client vérifié",
      location: "France",
      device: "Smart TV Samsung",
      quote: "Configuration fluide et image de haute qualité sur ma Smart TV dans le salon. L'activation a pris moins de 5 minutes !",
    },
    {
      id: 2,
      author: "Client vérifié",
      location: "France",
      device: "Fire TV Stick 4K",
      quote: "Support réactif qui m'a accompagné lors de l'installation initiale sur mon Fire Stick. Très professionnel !",
    },
    {
      id: 3,
      author: "Client vérifié",
      location: "France",
      device: "Android TV & Mobile",
      quote: "Très satisfait de la stabilité des flux et de la fluidité lors des grands événements sportifs en direct.",
    },
  ];

  return (
    <section className="relative py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider shadow-sm">
            <UserCheck className="w-3.5 h-3.5 text-red-600" />
            <span>AVIS & RETOURS D'EXPÉRIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
            Ils parlent de leur expérience STRONG4K.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            Retrouvez les impressions des utilisateurs qui nous font confiance au quotidien.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md shadow-slate-200/50 hover:border-red-500/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* 5-Star Visual Rating */}
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote Content */}
                <p className="text-xs sm:text-sm text-slate-700 font-medium italic leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    {item.author}
                    <ShieldCheck className="w-3.5 h-3.5 text-red-600" />
                  </h4>
                  <p className="text-[11px] text-slate-400 font-semibold">{item.location}</p>
                </div>
                <span className="text-[10px] font-bold text-red-700 bg-red-50 px-2.5 py-1 rounded-full border border-red-200">
                  {item.device}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
