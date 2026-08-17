"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "support",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.firstName || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMessage("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    if (!formData.email.includes("@")) {
      setStatus("error");
      setErrorMessage("Veuillez saisir une adresse e-mail valide.");
      return;
    }

    setStatus("loading");

    // Simulate clean contact submission
    setTimeout(() => {
      setStatus("success");
    }, 1000);
  };

  return (
    <div className="glass-card p-8 rounded-3xl border border-white/10 space-y-6">
      {status === "success" ? (
        <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
          <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-white">Message bien reçu !</h3>
          <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
            Merci de nous avoir contactés. Notre équipe d'assistance client examinera votre demande et vous répondra sous quelques heures par e-mail.
          </p>
          <button
            onClick={() => {
              setStatus("idle");
              setFormData({ firstName: "", lastName: "", email: "", subject: "support", message: "" });
            }}
            className="mt-4 px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-bold text-white transition-colors"
          >
            Envoyer un autre message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="firstName" className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                Prénom <span className="text-purple-400">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                required
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                placeholder="Votre prénom"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="lastName" className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                Nom
              </label>
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                placeholder="Votre nom"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="email" className="text-xs font-bold text-gray-300 uppercase tracking-wider">
              Adresse E-mail <span className="text-purple-400">*</span>
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="exemple@domaine.fr"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="subject" className="text-xs font-bold text-gray-300 uppercase tracking-wider">
              Sujet de la demande
            </label>
            <select
              id="subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-[#0b0c12] border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
            >
              <option value="support">Assistance & Aide à l'installation</option>
              <option value="commercial">Question sur les abonnements</option>
              <option value="payment">Question sur le paiement</option>
              <option value="other">Autre demande</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="message" className="text-xs font-bold text-gray-300 uppercase tracking-wider">
              Votre Message <span className="text-purple-400">*</span>
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Décrivez votre question ou l'appareil à configurer..."
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm resize-none"
            />
          </div>

          {status === "error" && (
            <div className="p-3 rounded-xl bg-red-950/60 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-purple-600/30 transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Envoi en cours...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Envoyer le message</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
