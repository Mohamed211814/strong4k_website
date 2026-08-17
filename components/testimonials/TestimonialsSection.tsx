import { Star, ShieldCheck, UserCheck } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      author: "Client vérifié",
      location: "France",
      device: "Smart TV Samsung",
      quote: "[Témoignage client vérifié à ajouter - Configuration fluide et image de haute qualité sur ma Smart TV dans le salon.]",
    },
    {
      id: 2,
      author: "Client vérifié",
      location: "France",
      device: "Fire TV Stick 4K",
      quote: "[Témoignage client vérifié à ajouter - Support réactif qui m'a accompagné lors de l'installation initiale sur mon Fire Stick.]",
    },
    {
      id: 3,
      author: "Client vérifié",
      location: "France",
      device: "Android TV & Mobile",
      quote: "[Témoignage client vérifié à ajouter - Très satisfait de la stabilité des flux lors des grands événements.]",
    },
  ];

  return (
    <section className="relative py-20 bg-[#07080e] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
            <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>AVIS & RETOURS D'EXPÉRIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Ils parlent de leur expérience.
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Retrouvez les impressions des utilisateurs qui nous font confiance au quotidien.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between space-y-4 glass-card-hover"
            >
              <div className="space-y-3">
                {/* 5-Star Visual Rating */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Quote Content */}
                <p className="text-xs sm:text-sm text-gray-300 italic leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                    {item.author}
                    <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                  </h4>
                  <p className="text-[11px] text-gray-400">{item.location}</p>
                </div>
                <span className="text-[10px] text-purple-300 bg-purple-950/60 px-2.5 py-1 rounded-full border border-purple-500/20">
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
