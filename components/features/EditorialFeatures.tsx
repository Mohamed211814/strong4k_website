import Link from "next/link";
import { CheckCircle2, ArrowRight, Tv, ShieldCheck, Zap, Layers, Sparkles } from "lucide-react";

export function EditorialFeatures() {
  return (
    <section className="relative py-20 bg-[#07080e] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-24">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>FONCTIONNALITÉS CLÉS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Une expérience TV sur vos appareils compatibles
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Découvrez pourquoi STREAMORA transforme la façon dont vous accédez à votre divertissement au quotidien.
          </p>
        </div>

        {/* Feature 1: Une expérience pensée pour vous (Visual Left, Text Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Visual Left (col-span-7) */}
          <div className="lg:col-span-7 relative">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl" />
              
              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center">
                      <Layers className="w-5 h-5 text-purple-300" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Qualité & Performance</h4>
                      <p className="text-xs text-gray-400">Optimisation 60 FPS & 4K Ultra HD</p>
                    </div>
                  </div>
                  <span className="text-xs text-cyan-400 font-mono bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-500/30">
                    SANS RAME
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/5 space-y-1">
                    <p className="text-xs text-purple-300 font-bold uppercase tracking-wider">Qualité Vidéo</p>
                    <p className="text-lg font-extrabold text-white">FHD & 4K UHD</p>
                    <p className="text-[11px] text-gray-400">Fluidité sur grand écran</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/5 space-y-1">
                    <p className="text-xs text-cyan-300 font-bold uppercase tracking-wider">Serveurs</p>
                    <p className="text-lg font-extrabold text-white">Haut Débit</p>
                    <p className="text-[11px] text-gray-400">Temps de réponse minimal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Right (col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-purple-400">
              01 — ERGONOMIE SOIGNÉE
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Une expérience pensée pour vous
            </h3>
            <p className="text-gray-300 leading-relaxed text-base">
              Accédez instantanément à vos flux en direct avec une interface claire, réactive et agréable à utiliser au quotidien sur votre téléviseur ou mobile.
            </p>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0" />
                <span>Guide des programmes (EPG) structuré et rapide</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0" />
                <span>Qualité d'image adaptée automatiquement à votre connexion</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0" />
                <span>Compatibilité multi-écrans selon l'offre choisie</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Feature 2: Vos appareils préférés (Text Left, Visual Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Text Left (col-span-5) */}
          <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
              02 — ECOSYSTÈME FLUIDE
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Vos appareils préférés
            </h3>
            <p className="text-gray-300 leading-relaxed text-base">
              Que vous préfériez regarder sur votre Smart TV dans le salon, sur votre Fire TV Stick ou sur votre smartphone en déplacement, STREAMORA s'adapte sans effort.
            </p>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                <span>Applications officielles téléchargeables en quelques clics</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                <span>Synchronisation fluide entre vos différents supports</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                <span>Guides d'installation illustrés pour chaque marque de TV</span>
              </li>
            </ul>
            <Link
              href="/compatibilite"
              className="inline-flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 pt-2"
            >
              <span>Découvrir la compatibilité complète</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Visual Right (col-span-7) */}
          <div className="lg:col-span-7 relative order-1 lg:order-2">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-600/20 rounded-full blur-3xl" />

              <div className="grid grid-cols-2 gap-4 relative z-10">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <Tv className="w-8 h-8 text-cyan-400" />
                  <h4 className="text-base font-bold text-white">Smart TV</h4>
                  <p className="text-xs text-gray-400">Samsung Tizen, LG webOS, Android TV</p>
                </div>
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <Zap className="w-8 h-8 text-purple-400" />
                  <h4 className="text-base font-bold text-white">Boîtiers Streaming</h4>
                  <p className="text-xs text-gray-400">Fire TV Stick, Chromecast, Nvidia Shield</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 3: Une activation simple (Centered Visual) */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10 text-center max-w-4xl mx-auto space-y-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-blue-900/10" />

          <div className="space-y-4 relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-purple-400">
              03 — MISE EN ROUTE RAPIDE
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
              Une activation simple et guidée
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto text-base">
              Pas de démarches complexes. Sélectionnez votre abonnement, recevez vos instructions d'accès et profitez immédiatement de votre contenu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 relative z-10 text-left">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-2">
              <span className="text-2xl font-black text-purple-400">Étape 1</span>
              <h4 className="text-sm font-bold text-white">Choix de l'offre</h4>
              <p className="text-xs text-gray-400">Choisissez le pass 1, 6 ou 12 mois adapté à vos besoins.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-2">
              <span className="text-2xl font-black text-cyan-400">Étape 2</span>
              <h4 className="text-sm font-bold text-white">Réception des accès</h4>
              <p className="text-xs text-gray-400">Vos liens et identifiants sécurisés sont envoyés instantanément.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-2">
              <span className="text-2xl font-black text-blue-400">Étape 3</span>
              <h4 className="text-sm font-bold text-white">Profitez du direct</h4>
              <p className="text-xs text-gray-400">Configurez votre application en 2 minutes et profitez du service.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
