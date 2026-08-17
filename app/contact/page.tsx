import { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContactForm } from "@/components/forms/ContactForm";
import { Mail, Clock, Headphones, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Nous Contacter - Support Client STREAMORA",
  description:
    "Un doute ou une question sur la configuration ? Contactez notre équipe d'assistance client réactive 7j/7.",
  alternates: {
    canonical: `${siteConfig.domain}/contact`,
  },
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-16 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        <Breadcrumbs items={[{ name: "Contact", url: "/contact" }]} />

        <div className="py-6 text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-400 bg-purple-950/60 px-3.5 py-1 rounded-full border border-purple-500/30">
            ASSISTANCE À VOTRE ÉCOUTE
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Nous Contacter
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Notre équipe française de support est à votre disposition 7j/7 pour vous assister et répondre à toutes vos interrogations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Info Side Column (col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">E-mail de support</h4>
                  <p className="text-xs text-purple-300 font-mono">{siteConfig.supportEmail}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Horaires de réponse</h4>
                  <p className="text-xs text-gray-400">7 jours sur 7 — 09h00 à 23h00</p>
                </div>
              </div>

              <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center">
                  <Headphones className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Accompagnement personnalisé</h4>
                  <p className="text-xs text-gray-400">Assistance gratuite pour la mise en route</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Column (col-span-7) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
