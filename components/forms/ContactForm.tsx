"use client";

import { useState, useEffect } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2, Mail, ExternalLink } from "lucide-react";
import { siteConfig } from "@/lib/config/site";

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "support",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [isSentQuery, setIsSentQuery] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.search.includes("sent=true")) {
      setIsSentQuery(true);
      setStatus("success");
    }
  }, []);

  const mailtoLink = `mailto:${siteConfig.supportEmail}?subject=${encodeURIComponent(
    `[STRONG4K] ${formData.subject.toUpperCase()} | ${formData.firstName}`
  )}&body=${encodeURIComponent(
    `Bonjour,\n\nNom: ${formData.firstName} ${formData.lastName}\nE-mail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 space-y-6">
      {status === "success" || isSentQuery ? (
        <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
          <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">Message bien transmis !</h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed font-medium">
            Merci ! Votre message a été transmis à notre adresse officielle (<strong className="text-rose-700 font-mono">{siteConfig.supportEmail}</strong>). Notre équipe d'assistance vous répondra dans les plus brefs délais.
          </p>
          <button
            onClick={() => {
              setStatus("idle");
              setIsSentQuery(false);
              setFormData({ firstName: "", lastName: "", email: "", subject: "support", message: "" });
              if (typeof window !== "undefined" && window.location.search.includes("sent=true")) {
                window.history.replaceState({}, document.title, window.location.pathname);
              }
            }}
            className="mt-4 px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-900 transition-colors cursor-pointer"
          >
            Envoyer un autre message
          </button>
        </div>
      ) : (
        <form
          action={`https://formsubmit.co/${siteConfig.supportEmail}`}
          method="POST"
          onSubmit={() => setStatus("loading")}
          className="space-y-5"
        >
          {/* FormSubmit Configuration Fields */}
          <input
            type="hidden"
            name="_next"
            value={typeof window !== "undefined" ? `${window.location.origin}/contact?sent=true` : "https://strong4k-tv.fr/contact?sent=true"}
          />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input
            type="hidden"
            name="_subject"
            value={`[STRONG4K Formulaire] ${formData.subject.toUpperCase()} | ${formData.firstName || "Client"}`}
          />

          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Envoyez-nous un message</h3>
              <p className="text-xs text-slate-500 font-medium">Message transmis à {siteConfig.supportEmail}</p>
            </div>
            <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-full border border-rose-200 flex items-center gap-1">
              <Mail className="w-3.5 h-3.5 text-rose-700" /> Support E-mail
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="firstName" className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                Prénom <span className="text-rose-700">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="Prénom"
                required
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                placeholder="Votre prénom"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:bg-white text-sm transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="lastName" className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                Nom
              </label>
              <input
                type="text"
                id="lastName"
                name="Nom"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                placeholder="Votre nom"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:bg-white text-sm transition-all"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="email" className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
              Votre Adresse E-mail <span className="text-rose-700">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="EmailClient"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="exemple@domaine.fr"
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:bg-white text-sm transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="subject" className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
              Sujet de la demande
            </label>
            <select
              id="subject"
              name="Sujet"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-rose-500 focus:bg-white text-sm transition-all"
            >
              <option value="support">Assistance & Aide à l'installation</option>
              <option value="commercial">Question sur les abonnements</option>
              <option value="payment">Question sur le paiement</option>
              <option value="other">Autre demande</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="message" className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
              Votre Message <span className="text-rose-700">*</span>
            </label>
            <textarea
              id="message"
              name="Message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Décrivez votre question ou l'appareil à configurer..."
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:bg-white text-sm resize-none transition-all"
            />
          </div>

          <div className="space-y-3 pt-2">
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-4 rounded-xl bg-rose-700 hover:bg-rose-800 disabled:opacity-50 text-white font-extrabold text-sm shadow-md shadow-rose-700/25 transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-rose-500 cursor-pointer"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Envoi du message...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Envoyer mon message</span>
                </>
              )}
            </button>

            <a
              href={mailtoLink}
              className="w-full py-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-bold text-xs transition-all flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              <span>Ou ouvrir directement dans votre application E-mail (Gmail / Outlook)</span>
            </a>
          </div>
        </form>
      )}
    </div>
  );
}
