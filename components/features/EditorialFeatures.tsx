import Link from "next/link";
import { CheckCircle2, ArrowRight, Tv, ShieldCheck, Zap, Layers, Sparkles } from "lucide-react";

export function EditorialFeatures() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-24">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-rose-700" />
            <span>FONCTIONNALITÉS CLÉS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
            Une expérience TV 4K sur tous vos appareils
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            Découvrez pourquoi STRONG4K transforme la façon dont vous accédez à votre divertissement au quotidien.
          </p>
        </div>

        {/* Feature 1: Une expérience pensée pour vous (Visual Left, Text Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Visual Left (col-span-7) */}
          <div className="lg:col-span-7 relative">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 relative overflow-hidden shadow-xl shadow-slate-200/50">
              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center">
                      <Layers className="w-5 h-5 text-rose-700" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Qualité & Performance</h4>
                      <p className="text-xs text-slate-500 font-medium">Optimisation 60 FPS & 4K Ultra HD</p>
                    </div>
                  </div>
                  <span className="text-xs text-rose-800 font-bold bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
                    SANS RAME
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1">
                    <p className="text-xs text-rose-700 font-extrabold uppercase tracking-wider">Qualité Vidéo</p>
                    <p className="text-lg font-black text-slate-900">FHD & 4K UHD</p>
                    <p className="text-[11px] text-slate-500 font-medium">Fluidité sur grand écran</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1">
                    <p className="text-xs text-rose-700 font-extrabold uppercase tracking-wider">Serveurs</p>
                    <p className="text-lg font-black text-slate-900">Haut Débit</p>
                    <p className="text-[11px] text-slate-500 font-medium">Temps de réponse minimal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Right (col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-black uppercase tracking-widest text-rose-700">
              01 ERGONOMIE SOIGNÉE
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Une expérience pensée pour vous
            </h3>
            <p className="text-slate-600 leading-relaxed text-base font-medium">
              Accédez instantanément à vos flux en direct avec une interface claire, réactive et agréable à utiliser au quotidien sur votre téléviseur ou mobile.
            </p>
            <ul className="space-y-3 text-sm font-semibold text-slate-700">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-rose-700 shrink-0" />
                <span>Guide des programmes (EPG) structuré et rapide</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-rose-700 shrink-0" />
                <span>Qualité d'image adaptée automatiquement à votre connexion</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-rose-700 shrink-0" />
                <span>Compatibilité multi écrans selon l'offre choisie</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Feature 2: Vos appareils préférés (Text Left, Visual Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Text Left (col-span-5) */}
          <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
            <span className="text-xs font-black uppercase tracking-widest text-rose-700">
              02 ECOSYSTÈME FLUIDE
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Vos appareils préférés
            </h3>
            <p className="text-slate-600 leading-relaxed text-base font-medium">
              Que vous préfériez regarder sur votre Smart TV dans le salon, sur votre Fire TV Stick ou sur votre smartphone en déplacement, STRONG4K s'adapte sans effort.
            </p>
            <ul className="space-y-3 text-sm font-semibold text-slate-700">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-rose-700 shrink-0" />
                <span>Applications officielles téléchargeables en quelques clics</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-rose-700 shrink-0" />
                <span>Synchronisation fluide entre vos différents supports</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-rose-700 shrink-0" />
                <span>Guides d'installation illustrés pour chaque marque de TV</span>
              </li>
            </ul>
            <Link
              href="/compatibilite"
              className="inline-flex items-center gap-2 text-sm font-bold text-rose-700 hover:text-rose-800 pt-2"
            >
              <span>Découvrir la compatibilité complète</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Visual Right (col-span-7) */}
          <div className="lg:col-span-7 relative order-1 lg:order-2">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 relative overflow-hidden shadow-xl shadow-slate-200/50">
              <div className="grid grid-cols-2 gap-4 relative z-10">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                  <Tv className="w-8 h-8 text-rose-700" />
                  <h4 className="text-base font-bold text-slate-900">Smart TV</h4>
                  <p className="text-xs text-slate-500 font-medium">Samsung Tizen, LG webOS, Android TV</p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                  <Zap className="w-8 h-8 text-rose-700" />
                  <h4 className="text-base font-bold text-slate-900">Boîtiers Streaming</h4>
                  <p className="text-xs text-slate-500 font-medium">Fire TV Stick, Chromecast, Nvidia Shield</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 3: Une activation simple (Centered Visual) */}
        <div className="bg-rose-50/60 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-8 relative overflow-hidden border-2 border-rose-200 shadow-xl text-slate-900">
          <div className="space-y-4 relative z-10">
            <span className="text-xs font-black uppercase tracking-widest text-rose-700">
              03 MISE EN ROUTE RAPIDE
            </span>
            <h3 className="text-3xl sm:text-4xl font-black text-slate-900">
              Une activation simple et guidée
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto text-base font-medium">
              Pas de démarches complexes. Sélectionnez votre abonnement, recevez vos instructions d'accès et profitez immédiatement de votre contenu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 relative z-10 text-left">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <span className="text-2xl font-black text-rose-700">Étape 1</span>
              <h4 className="text-sm font-bold text-slate-900">Choix de l'offre</h4>
              <p className="text-xs text-slate-600 font-medium">Choisissez le pass 1, 6 ou 12 mois adapté à vos besoins.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <span className="text-2xl font-black text-rose-700">Étape 2</span>
              <h4 className="text-sm font-bold text-slate-900">Réception des accès</h4>
              <p className="text-xs text-slate-600 font-medium">Vos liens et identifiants sécurisés sont envoyés instantanément.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <span className="text-2xl font-black text-rose-700">Étape 3</span>
              <h4 className="text-sm font-bold text-slate-900">Profitez du direct</h4>
              <p className="text-xs text-slate-600 font-medium">Configurez votre application en 2 minutes et profitez du service.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
