"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { products, getProductById, ProductPlan } from "@/lib/config/products";
import { CheckCircle2, ShieldCheck, Lock, CreditCard, ArrowRight, Loader2, ArrowLeft } from "lucide-react";

export function CheckoutFlow() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialPlanId = searchParams?.get("plan") || "plan-12-months";

  const [selectedPlanId, setSelectedPlanId] = useState<string>(initialPlanId);
  const [step, setStep] = useState<number>(1);

  // Customer Form State
  const [customer, setCustomer] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "France",
    termsAccepted: false,
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const currentPlan: ProductPlan =
    getProductById(selectedPlanId) || products.find((p) => p.featured) || products[0];

  const handleNextToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!customer.firstName || !customer.email) {
      setErrorMsg("Veuillez renseigner votre prénom et adresse e-mail.");
      return;
    }

    if (!customer.email.includes("@")) {
      setErrorMsg("Veuillez saisir une adresse e-mail valide.");
      return;
    }

    if (!customer.termsAccepted) {
      setErrorMsg("Veuillez accepter les Conditions Générales de Vente.");
      return;
    }

    setStep(2);
  };

  const handleSimulatePayment = () => {
    setIsProcessing(true);

    // In a real production deployment, this invokes the Payment Gateway API (Stripe/PayPal)
    setTimeout(() => {
      setIsProcessing(false);
      router.push(`/commande-confirmee?order=STR-${Math.floor(100000 + Math.random() * 900000)}&plan=${currentPlan.id}`);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Progress Steps Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-6">
        <div className="flex items-center gap-3">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
              step >= 1 ? "bg-purple-600 text-white" : "bg-white/10 text-gray-400"
            }`}
          >
            1
          </div>
          <span className={`text-xs font-semibold ${step >= 1 ? "text-white" : "text-gray-400"}`}>
            Offre & Informations
          </span>
        </div>

        <div className="h-0.5 w-12 bg-white/10 hidden sm:block" />

        <div className="flex items-center gap-3">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
              step >= 2 ? "bg-purple-600 text-white" : "bg-white/10 text-gray-400"
            }`}
          >
            2
          </div>
          <span className={`text-xs font-semibold ${step >= 2 ? "text-white" : "text-gray-400"}`}>
            Paiement Sécurisé
          </span>
        </div>

        <div className="h-0.5 w-12 bg-white/10 hidden sm:block" />

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white/10 text-gray-400 flex items-center justify-center font-bold text-xs">
            3
          </div>
          <span className="text-xs font-semibold text-gray-400">Confirmation</span>
        </div>
      </div>

      {step === 1 ? (
        <form onSubmit={handleNextToPayment} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Customer Info (col-span-7) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Plan Selection Box */}
            <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider text-purple-400">
                Étape 1 : Choix de votre formule
              </h3>

              <div className="space-y-3">
                {products.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => setSelectedPlanId(p.id)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                      p.id === currentPlan.id
                        ? "border-purple-500 bg-purple-950/30 text-white"
                        : "border-white/10 hover:border-white/20 bg-white/5 text-gray-300"
                    }`}
                  >
                    <div>
                      <h4 className="font-bold text-sm text-white">{p.name} ({p.duration})</h4>
                      <p className="text-xs text-purple-300">{p.monthlyEquivalent}</p>
                    </div>
                    <span className="font-extrabold text-base text-white">{p.priceFormatted}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Customer Details Form */}
            <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider text-purple-400">
                Étape 2 : Vos Coordonnées
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-300">Prénom *</label>
                  <input
                    type="text"
                    required
                    value={customer.firstName}
                    onChange={(e) => setCustomer({ ...customer, firstName: e.target.value })}
                    placeholder="Jean"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-300">Nom</label>
                  <input
                    type="text"
                    value={customer.lastName}
                    onChange={(e) => setCustomer({ ...customer, lastName: e.target.value })}
                    placeholder="Dupont"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-300">Adresse E-mail *</label>
                <input
                  type="email"
                  required
                  value={customer.email}
                  onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                  placeholder="jean.dupont@exemple.fr"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <p className="text-[11px] text-gray-400">Vos identifiants d'accès seront envoyés à cette adresse.</p>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-300">Pays de résidence</label>
                <select
                  value={customer.country}
                  onChange={(e) => setCustomer({ ...customer, country: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0b0c12] border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                >
                  <option value="France">France</option>
                  <option value="Belgique">Belgique</option>
                  <option value="Suisse">Suisse</option>
                  <option value="Luxembourg">Luxembourg</option>
                  <option value="Autre">Autre Pays</option>
                </select>
              </div>

              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={customer.termsAccepted}
                    onChange={(e) => setCustomer({ ...customer, termsAccepted: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded border-gray-700 bg-white/10 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="text-xs text-gray-300 leading-normal">
                    J'accepte les{" "}
                    <a href="/conditions-generales" target="_blank" className="text-purple-400 underline">
                      Conditions Générales de Vente
                    </a>{" "}
                    et la Politique de Confidentialité.
                  </span>
                </label>
              </div>

              {errorMsg && (
                <div className="p-3 rounded-xl bg-red-950/60 border border-red-500/30 text-red-300 text-xs">
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2 transition-all"
              >
                <span>Continuer vers le paiement</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: Order Summary Sidebar (col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-white/10 pb-3">
                Récapitulatif de la commande
              </h3>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between text-gray-300">
                  <span>Produit sélectionné :</span>
                  <span className="font-bold text-white">{currentPlan.name}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Durée de validité :</span>
                  <span className="font-semibold text-white">{currentPlan.duration}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Mise en service :</span>
                  <span className="text-emerald-400 font-semibold">Instantanée / Rapide</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Frais de dossier :</span>
                  <span className="text-emerald-400 font-semibold">Offerts (0,00 €)</span>
                </div>

                <div className="border-t border-white/10 pt-3 flex justify-between items-baseline">
                  <span className="text-sm font-bold text-white">Total à régler :</span>
                  <span className="text-3xl font-black text-purple-400">{currentPlan.priceFormatted}</span>
                </div>
              </div>

              <div className="pt-2 space-y-2">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-[11px] text-gray-400 space-y-1">
                  <div className="flex items-center gap-1.5 text-white font-bold">
                    <ShieldCheck className="w-4 h-4 text-purple-400" />
                    <span>Garantie & Tranquillité</span>
                  </div>
                  <p>Aucune reconduction automatique cachée. Vous conservez le contrôle total de vos renouvellements.</p>
                </div>
              </div>
            </div>
          </div>
        </form>
      ) : (
        /* Step 2: Payment Provider Interface */
        <div className="glass-card p-8 rounded-3xl border border-purple-500/30 space-y-6 max-w-2xl mx-auto">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <button
              onClick={() => setStep(1)}
              className="text-xs font-bold text-gray-400 hover:text-white flex items-center gap-1"
            >
              <ArrowLeft className="w-4 h-4" /> Retour
            </button>
            <div className="flex items-center gap-1.5 text-xs text-emerald-400">
              <Lock className="w-3.5 h-3.5" /> Paiement Crypté SSL
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white">Interface de Paiement Sécurisée</h3>
            <p className="text-xs text-gray-300">
              Pass sélectionné : <span className="font-bold text-white">{currentPlan.name} ({currentPlan.priceFormatted})</span>
            </p>
          </div>

          {/* Integration Point Box for Payment Gateway */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
            <div className="flex items-center gap-3 text-sm font-bold text-white border-b border-white/10 pb-3">
              <CreditCard className="w-5 h-5 text-purple-400" />
              <span>Module de Règlement Certifié (Passerelle Carte Bancaire)</span>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed">
              [Intégration Stripe / PayPal / Merchant API ready. Aucune donnée bancaire n'est conservée par STREAMORA. Les transactions sont traitées par le processeur certifié PCI-DSS.]
            </p>

            <div className="space-y-3 pt-2">
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-300">Titulaire de la carte (Démo)</label>
                <input
                  type="text"
                  readOnly
                  value={`${customer.firstName} ${customer.lastName}`}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-gray-400 text-sm cursor-not-allowed"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-300">Numéro de carte (Démo sécurisée)</label>
                <input
                  type="text"
                  readOnly
                  value="•••• •••• •••• 4242"
                  className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-gray-400 text-sm cursor-not-allowed"
                />
              </div>
            </div>
          </div>

          <button
            onClick={handleSimulatePayment}
            disabled={isProcessing}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-base shadow-xl shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all"
          >
            {isProcessing ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Traitement sécurisé de votre commande...</span>
              </>
            ) : (
              <>
                <ShieldCheck className="w-5 h-5" />
                <span>Payer {currentPlan.priceFormatted} en toute sécurité</span>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
