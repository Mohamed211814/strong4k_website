import {
  CheckCircle2,
  Tv,
  ShieldCheck,
  Zap,
  Server,
  Cpu,
  Sparkles,
  MapPin,
  Trophy,
  Smartphone,
  Wifi,
  Globe2,
  Film,
  CreditCard,
  Layers,
  Search,
} from "lucide-react";

export function SeoKeywordsSection() {
  const keywordCategories = [
    {
      title: "Recherches d'Achat & Fournisseur IPTV France",
      icon: ShieldCheck,
      description: "Mots-clés transactionnels pour trouver le fournisseur IPTV n°1 en France avec paiement sécurisé et activation immédiate.",
      tags: [
        "Meilleur abonnement IPTV France",
        "Abonnement IPTV France Sans Coupure",
        "Fournisseur IPTV France Fiable",
        "Acheter Abonnement IPTV France CB",
        "Abonnement IPTV Officiel France",
        "Abonnement IPTV Pas Cher 12 mois",
        "Test IPTV 24h Gratuit France",
        "IPTV Premium France 4K Ultra HD",
        "IPTV France Sans Freeze",
        "IPTV France Anti-Coupure",
        "IPTV France Avis Forum",
        "IPTV France Réception Instantanée",
        "IPTV France Support Francophone 7j/7",
        "Code IPTV France Actif",
        "Renouvellement Abonnement IPTV France",
        "Abonnement IPTV 1 mois Sans Engagement",
        "Abonnement IPTV 6 mois France",
        "Abonnement IPTV 12 mois France",
        "Fournisseur IPTV Serveur Privé France",
        "Abonnement IPTV Haute Qualité France",
        "Activation IPTV Immédiate WhatsApp",
      ],
    },
    {
      title: "Sports Direct & Événements 4K en France",
      icon: Trophy,
      description: "Diffusion 4K 60FPS de tous les championnats et coupes retransmis en direct en France.",
      tags: [
        "IPTV DAZN Ligue 1 France",
        "IPTV DAZN France Pas Cher",
        "Pass Ligue 1 IPTV France 4K",
        "IPTV Champions League UEFA 4K",
        "IPTV Canal Plus Foot 4K France",
        "IPTV Canal Plus Sport 360",
        "IPTV beIN Sports France 1 2 3",
        "IPTV RMC Sport 1 2 UHD France",
        "IPTV Eurosport France 4K",
        "IPTV Formule 1 F1 Canal+ 4K",
        "IPTV MotoGP France Direct 4K",
        "IPTV Top 14 Rugby France 4K",
        "IPTV Roland Garros 4K France",
        "IPTV Tour de France Cyclisme 4K",
        "IPTV UFC Paris RMC Combat 4K",
        "IPTV Coupe de France Foot",
        "IPTV Ligue 2 BKT Direct",
        "IPTV Premier League UK Direct",
        "IPTV NBA Basket France Direct",
        "IPTV NFL Super Bowl France Direct",
        "IPTV Boxe & MMA France 4K",
      ],
    },
    {
      title: "Île-de-France & Région Parisienne (75, 92, 93, 94, 78, 91, 77, 95)",
      icon: MapPin,
      description: "Serveurs à très faible latence optimisés pour les abonnés d'Île-de-France et de la métropole du Grand Paris.",
      tags: [
        "IPTV Paris 75",
        "IPTV Paris 1er au 20ème arrondissement",
        "IPTV Île-de-France 4K",
        "IPTV Hauts-de-Seine 92",
        "IPTV Boulogne-Billancourt 92",
        "IPTV Nanterre Courbevoie 92",
        "IPTV Seine-Saint-Denis 93",
        "IPTV Saint-Denis Montreuil 93",
        "IPTV Val-de-Marne 94",
        "IPTV Créteil Vitry-sur-Seine 94",
        "IPTV Yvelines 78",
        "IPTV Versailles Saint-Germain-en-Laye 78",
        "IPTV Essonne 91",
        "IPTV Évry-Courcouronnes Corbeil 91",
        "IPTV Seine-et-Marne 77",
        "IPTV Meaux Chelles Melun 77",
        "IPTV Val-d'Oise 95",
        "IPTV Argenteuil Cergy 95",
      ],
    },
    {
      title: "Grandes Métropoles & Villes de France Ciblées",
      icon: MapPin,
      description: "Connexion ultra-rapide optimisée pour les abonnés dans toutes les grandes villes de France métropolitaine.",
      tags: [
        "IPTV Lyon 69 & Rhône-Alpes",
        "IPTV Villeurbanne 69",
        "IPTV Marseille 13 & PACA",
        "IPTV Aix-en-Provence 13",
        "IPTV Toulouse 31 & Occitanie",
        "IPTV Nice 06 & Côte d'Azur",
        "IPTV Cannes Antibes 06",
        "IPTV Bordeaux 33 & Nouvelle-Aquitaine",
        "IPTV Lille 59 & Hauts-de-France",
        "IPTV Roubaix Tourcoing Dunkerque 59",
        "IPTV Strasbourg 67 & Grand Est",
        "IPTV Nantes 44 & Pays de la Loire",
        "IPTV Saint-Nazaire 44",
        "IPTV Rennes 35 & Bretagne",
        "IPTV Saint-Malo 35",
        "IPTV Montpellier 34 Hérault",
        "IPTV Béziers Sète 34",
        "IPTV Toulon 83 Var",
        "IPTV Grenoble 38 Isère",
        "IPTV Dijon 21 Bourgogne",
        "IPTV Angers 49 Maine-et-Loire",
        "IPTV Nîmes 30 Gard",
        "IPTV Saint-Étienne 42 Loire",
        "IPTV Le Havre 76 Normandie",
        "IPTV Rouen 76 Seine-Maritime",
        "IPTV Reims 51 Marne",
        "IPTV Clermont-Ferrand 63",
        "IPTV Brest 29 Finistère",
        "IPTV Tours 37 Indre-et-Loire",
        "IPTV Amiens 80 Somme",
        "IPTV Limoges 87 Haute-Vienne",
        "IPTV Annecy 74 Haute-Savoie",
        "IPTV Perpignan 66 Pyrénées-Orientales",
        "IPTV Metz 57 Moselle",
        "IPTV Besançon 25 Doubs",
        "IPTV Orléans 45 Loiret",
        "IPTV Mulhouse 68 Haut-Rhin",
        "IPTV Caen 14 Calvados",
        "IPTV Nancy 54 Meurthe-et-Moselle",
        "IPTV Avignon 84 Vaucluse",
        "IPTV Poitiers 86 Vienne",
        "IPTV La Rochelle 17 Charente-Maritime",
        "IPTV Pau 64 Pyrénées-Atlantiques",
        "IPTV Chambéry 73 Savoie",
        "IPTV Valence 26 Drôme",
        "IPTV Lorient 56 Morbihan",
        "IPTV Troyes 10 Aube",
        "IPTV Ajaccio 2A Corse",
        "IPTV Bastia 2B Corse",
      ],
    },
    {
      title: "France d'Outre-Mer (DOM-TOM)",
      icon: MapPin,
      description: "Réseaux CDN à très haut débit optimisés pour les départements et collectivités d'Outre-mer français.",
      tags: [
        "IPTV DOM-TOM Guadeloupe Martinique Réunion",
        "IPTV Guadeloupe Pointe-à-Pitre 971",
        "IPTV Guadeloupe Les Abymes Basse-Terre 971",
        "IPTV Martinique Fort-de-France 972",
        "IPTV Martinique Le Lamentin 972",
        "IPTV La Réunion Saint-Denis 974",
        "IPTV La Réunion Saint-Paul Saint-Pierre 974",
        "IPTV Guyane Cayenne Matoury Kourou 973",
        "IPTV Mayotte Mamoudzou 976",
        "IPTV Nouvelle-Calédonie Nouméa 988",
        "IPTV Polynésie Française Tahiti Papeete 987",
      ],
    },
    {
      title: "Smart TV, Firestick & Passerelles en France",
      icon: Tv,
      description: "Compatibilité universelle native sans matériel additionnel sur tous vos téléviseurs et boîtiers.",
      tags: [
        "IPTV Smart TV Samsung Tizen France",
        "IPTV Smart TV LG webOS France",
        "IPTV Smart TV Sony Bravia Google TV",
        "IPTV Smart TV Hisense VIDAA",
        "IPTV Smart TV TCL Android TV",
        "IPTV Smart TV Philips Saphi Android",
        "IPTV Amazon Firestick 4K Max France",
        "Amazon Fire TV Stick IPTV",
        "Amazon Fire TV Cube 4K",
        "Meilleur Boîtier IPTV 4K France",
        "IPTV Apple TV 4K France",
        "IPTV Formuler Z11 Pro Max France",
        "IPTV Formuler Z10 Pro",
        "IPTV Xiaomi TV Box S 2nd Gen 4K",
        "IPTV Nvidia Shield TV Pro France",
        "IPTV MAG 524 322 Infomir",
        "IPTV Chromecast avec Google TV",
        "IPTV Box Android 12 & 13 4K",
      ],
    },
    {
      title: "Applications IPTV Préférées des Utilisateurs Français",
      icon: Smartphone,
      description: "Paramétrage instantané avec vos applications favorites et protocoles de diffusion standards.",
      tags: [
        "IPTV Smarters Pro France",
        "IPTV Smarters Pro Windows PC",
        "Smarters Player Lite IPTV",
        "Tivimate IPTV 4K France",
        "Tivimate Premium Code d'activation France",
        "IBO Player IPTV France",
        "IBO Player Pro Activation France",
        "XCIPTV Player 4K France",
        "Flix IPTV France Activation",
        "Bob Player IPTV 4K",
        "OTT Navigator IPTV",
        "Room IPTV Player",
        "Smart STB IPTV App",
        "STB Emu Pro IPTV",
        "SET IPTV Activation France",
        "NET IPTV Activation France",
        "GSE Smart IPTV Pro",
        "Serveur Xtream Codes IPTV France",
        "Lien Playlist M3U France",
        "Activation Adresse MAC MAG",
      ],
    },
    {
      title: "Opérateurs FAI & Box Internet Fibre en France",
      icon: Wifi,
      description: "Optimisation du flux vidéo adaptée aux réseaux Fibre et ADSL de tous les opérateurs français.",
      tags: [
        "IPTV Livebox Orange Fibre 6 & 7",
        "IPTV Freebox Pop Ultra Revolution",
        "IPTV Freebox Delta One Mini 4K",
        "IPTV SFR Box 7 & 8 Fibre",
        "IPTV Bbox Bouygues Must & Ultym",
        "IPTV Sosh Fibre France",
        "IPTV RED by SFR Fibre",
        "IPTV Connexion Fibre 1 Gbps & 2 Gbps France",
        "IPTV Connexion ADSL & 4G/5G Box France",
        "IPTV Sans Blocage Opérateur FAI",
        "IPTV Compatible VPN France",
      ],
    },
    {
      title: "Bouquets TV & Chaînes Françaises Direct 4K",
      icon: Tv,
      description: "Accès instantané à l'ensemble des chaînes nationales, régionales et thématiques françaises.",
      tags: [
        "IPTV Chaînes Françaises 4K HEVC",
        "IPTV TNT France TF1 M6 France 2 France 3",
        "IPTV France 5 Arte C8 W9 TMC TFX",
        "IPTV Bouquet Canal+ France 4K",
        "IPTV Bouquet Ciné+ OCS France",
        "IPTV beIN Sports France 1 2 3",
        "IPTV DAZN France 1",
        "IPTV RMC Découverte BFM TV CNews",
        "IPTV L'Équipe 21 France Direct",
        "IPTV Chaînes Régionales France 3",
      ],
    },
    {
      title: "Chaînes Étrangères Prisées par les Communautés en France",
      icon: Globe2,
      description: "Accès aux chaînes internationales les plus demandées par les résidents en France.",
      tags: [
        "IPTV Chaînes Arabes Nilesat en France",
        "IPTV Chaînes Marocaines France 2M Al Aoula Arryadia",
        "IPTV Chaînes Algériennes France ENTV Canal Algérie",
        "IPTV Chaînes Tunisiennes France Wataniya",
        "IPTV Chaînes Portugaises France RTP SIC TVI Sport TV",
        "IPTV Chaînes Espagnoles France Movistar LaLiga",
        "IPTV Chaînes Italiennes France Rai Mediaset Sky",
        "IPTV Chaînes UK Sky Sports BT TNT en France",
        "IPTV Chaînes USA NBC CBS ESPN en France",
        "IPTV Chaînes Africaines France Canal+ Afrique",
        "IPTV Chaînes Turques France TRT",
      ],
    },
    {
      title: "Cinéma, Séries VOD & Replay 4K France",
      icon: Film,
      description: "Vidéothèque colossale de films récents, séries en VF et VOSTFR avec fonction Replay 7 jours.",
      tags: [
        "IPTV VOD Films 4K Ultra HD",
        "IPTV Séries Françaises & Internationales VF",
        "IPTV Séries VOSTFR Sous-Titrées",
        "IPTV Netflix Prime Video Disney+ Séries",
        "IPTV HBO Max Apple TV+ Séries",
        "IPTV Replay 7 Jours Catch-Up TV France",
        "IPTV Chaînes Cinéma Premium France",
        "IPTV Chaînes Jeunesse Dessins Animés France",
        "IPTV Chaînes Documentaires Découverte France",
        "IPTV EPG Grille Télévisée France",
      ],
    },
    {
      title: "Formules, Abonnements & Sécurité Paiement France",
      icon: CreditCard,
      description: "Tarifs avantageux en euros et options multi-écrans avec paiement sécurisé par carte bancaire en France.",
      tags: [
        "Abonnement IPTV 1 Mois Test France",
        "Abonnement IPTV 6 Mois Promotion France",
        "Abonnement IPTV 12 Mois Meilleur Prix France",
        "IPTV 2 Connexions Simultanées France",
        "IPTV Multiposte Famille France",
        "Abonnement IPTV Sans Engagement France",
        "Paiement IPTV Sécurisé Carte Bancaire 3D Secure",
        "Activation Immédiate sous 5 Minutes France",
        "Garantie Stabilité Serveur 99.9% France",
        "Fournisseur IPTV Recommandé Forum France",
        "Avis IPTV France 2026 Positifs",
      ],
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-rose-700" />
            <span>RÉFÉRENCE IPTV FRANCE 4K ULTRA HD</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Le Meilleur Abonnement IPTV en France Sans Coupure
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
            Profitez de l'offre télévisuelle la plus complète et la plus stable avec <strong>STRONG4K</strong>. Des milliers de chaînes directes en qualité 4K Ultra HD & 60 FPS, une large bibliothèque de films et séries VOD récents, et une compatibilité garantie sur l'ensemble de vos appareils.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center">
              <Server className="w-5 h-5 text-rose-700" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Serveurs Dédiés Europe</h3>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Infrastructure européenne équilibrée garantissant un zapping ultra-rapide et une diffusion <strong>sans coupure</strong> lors des grands événements sportifs en direct (Ligue 1, Champions League).
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center">
              <Tv className="w-5 h-5 text-rose-700" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Smart TV & Firestick</h3>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Compatible directement sur <strong>Smart TV Samsung (Tizen)</strong>, <strong>LG (webOS)</strong>, <strong>Amazon Firestick</strong>, Android TV Box, Apple TV et smartphones iOS/Android.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center">
              <Cpu className="w-5 h-5 text-rose-700" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Toutes Vos Applications</h3>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Prend en charge l'ensemble des lecteurs majeurs : <strong>IPTV Smarters Pro</strong>, <strong>Tivimate Premium</strong>, <strong>IBO Player</strong>, <strong>XCIPTV</strong> et BOSTV.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center">
              <Zap className="w-5 h-5 text-rose-700" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Xtream Codes & M3U</h3>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Recevez instantanément vos identifiants <strong>Xtream API</strong>, votre playlist <strong>M3U</strong> personnalisée ou l'activation par adresse <strong>MAC MAG</strong> sous 5 minutes.
            </p>
          </div>
        </div>

        {/* Categorized High-Intent Search Tag Clusters */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl font-black text-slate-900">
              Guide Des Recherches Populaires & Mots-Clés IPTV France
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Explorez les requêtes les plus recherchées par les utilisateurs en France pour commander leur abonnement IPTV 4K haute performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keywordCategories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-200 space-y-4 shadow-sm hover:border-rose-200 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-700">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-slate-900">{cat.title}</h4>
                      <p className="text-xs text-slate-500 font-medium">{cat.description}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {cat.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-[11px] font-semibold text-slate-700 hover:border-rose-300 hover:bg-rose-50 hover:text-rose-800 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

