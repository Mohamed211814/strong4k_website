import { Metadata } from "next";
import { siteConfig, getWhatsAppUrl } from "@/lib/config/site";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContactForm } from "@/components/forms/ContactForm";
import { Mail, Clock, Headphones, MessageCircle, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Nous Contacter | Support Client STRONG4K",
  description:
    "Un doute ou une question sur la configuration ? Contactez notre équipe d'assistance client réactive 7j/7 par e-mail ou sur WhatsApp.",
  alternates: {
    canonical: `${siteConfig.domain}/contact`,
  },
};

export default function ContactPage() {
  const whatsAppContactUrl = getWhatsAppUrl("Contact direct");

  return (
    <div className="pt-28 pb-16 space-y-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        <Breadcrumbs items={[{ name: "Contact", url: "/contact" }]} />

        <div className="py-6 text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-800 bg-rose-50 px-4 py-1.5 rounded-full border border-rose-200 shadow-sm">
            ASSISTANCE À VOTRE ÉCOUTE
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 leading-tight">
            Nous Contacter
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto leading-relaxed font-medium">
            Notre équipe française de support est à votre disposition 7j/7 pour vous assister et répondre à toutes vos interrogations par e-mail et sur WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Info Side Column (col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp VIP Direct Chat Card */}
            <div className="bg-slate-50 p-6 rounded-2xl border-2 border-emerald-200 shadow-md space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 fill-emerald-600 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Support Direct WhatsApp</h4>
                  <p className="text-xs text-slate-600 font-medium">Réponse instantanée en direct</p>
                </div>
              </div>

              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Besoin d'une réponse immédiate ou d'aide pour votre commande ? Échangez directement en temps réel avec notre équipe de conseiller VIP.
              </p>

              <a
                href={whatsAppContactUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold transition-all flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                <span>Discuter sur WhatsApp</span>
              </a>
            </div>

            {/* Email & Info Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md shadow-slate-200/50 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-rose-700" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">E-mail de support</h4>
                  <p className="text-xs text-rose-700 font-mono font-bold">{siteConfig.supportEmail}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-rose-700" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Horaires de réponse</h4>
                  <p className="text-xs text-slate-500 font-medium">7 jours sur 7 (09h00 à 23h00)</p>
                </div>
              </div>

              <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center">
                  <Headphones className="w-5 h-5 text-rose-700" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Accompagnement personnalisé</h4>
                  <p className="text-xs text-slate-500 font-medium">Assistance gratuite pour la mise en route</p>
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
