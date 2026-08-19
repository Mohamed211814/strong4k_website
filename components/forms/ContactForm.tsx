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
    <div className="bg-white p-8 rounded-3xl border-2 border-slate-200 shadow-xl shadow-slate-200/50 space-y-6">
      {status === "success" ? (
        <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
          <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">Message bien reçu !</h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed font-medium">
            Merci de nous avoir contactés. Notre équipe d'assistance client examinera votre demande et vous répondra sous quelques heures par e-mail.
          </p>
          <button
            onClick={() => {
              setStatus("idle");
              setFormData({ firstName: "", lastName: "", email: "", subject: "support", message: "" });
            }}
            className="mt-4 px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-900 transition-colors"
          >
            Envoyer un autre message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="firstName" className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                Prénom <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                required
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                placeholder="Votre prénom"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white text-sm transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="lastName" className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                Nom
              </label>
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                placeholder="Votre nom"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white text-sm transition-all"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="email" className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
              Adresse E-mail <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="exemple@domaine.fr"
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white text-sm transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="subject" className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
              Sujet de la demande
            </label>
            <select
              id="subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white text-sm transition-all"
            >
              <option value="support">Assistance & Aide à l'installation</option>
              <option value="commercial">Question sur les abonnements</option>
              <option value="payment">Question sur le paiement</option>
              <option value="other">Autre demande</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="message" className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
              Votre Message <span className="text-red-600">*</span>
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Décrivez votre question ou l'appareil à configurer..."
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white text-sm resize-none transition-all"
            />
          </div>

          {status === "error" && (
            <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-bold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-700 hover:to-rose-700 text-white font-extrabold text-sm shadow-md shadow-red-600/25 transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-red-500"
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
