"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  ExternalLink,
  Bot,
  User,
  ChevronRight,
  Headphones,
  CheckCircle2,
} from "lucide-react";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
  showWhatsAppButton?: boolean;
}

const WHATSAPP_NUMBER = "212779395271";
const WHATSAPP_DISPLAY = "+212 779-395271";

function getWhatsAppLink(customText?: string) {
  const msg = customText
    ? customText
    : "Bonjour ! Je vous contacte depuis le site STRONG4K pour avoir plus d'informations.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

const QUICK_QUESTIONS = [
  {
    id: "compatibility",
    label: "📱 Appareils compatibles ?",
    answer:
      "STRONG4K est 100% compatible avec Smart TV (Samsung, LG, Sony), Android TV, Fire TV Stick, iPhone/iPad, Smartphones Android, PC/Mac, Mag et boîtiers IPTV (IPTV Smarters Pro, IBO Player, TiviMate, etc.).",
    showWhatsApp: false,
  },
  {
    id: "activation",
    label: "⚡ Délai d'activation ?",
    answer:
      "L'activation de votre abonnement STRONG4K est quasi instantanée. Dès la confirmation de votre demande, nos équipes activent vos accès en moins de 5 minutes.",
    showWhatsApp: false,
  },
  {
    id: "catalog",
    label: "📺 Chaînes & Contenu 4K ?",
    answer:
      "Notre abonnement inclut plus de 20 000 chaînes en direct HD & 4K (Sports, Cinéma, Événements en direct) ainsi qu'une vaste bibliothèque VOD (films et séries) mise à jour régulièrement.",
    showWhatsApp: false,
  },
  {
    id: "order",
    label: "🛒 Comment commander ?",
    answer:
      "Pour commander votre abonnement STRONG4K, choisissez simplement la formule souhaitée (1, 6 ou 12 mois), puis finalisez en direct avec notre équipe sur WhatsApp.",
    showWhatsApp: true,
  },
  {
    id: "whatsapp",
    label: "💬 Parler avec un conseiller WhatsApp",
    answer:
      "Notre équipe de support VIP est disponible 7j/7 sur WhatsApp pour vous accompagner et répondre à toutes vos questions en direct.",
    showWhatsApp: true,
  },
];

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [unreadCount, setUnreadCount] = useState(1);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-1",
      sender: "bot",
      text: "Bonjour ! 👋 Bienvenue sur STRONG4K. Je suis votre assistant virtuel VIP.",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
    {
      id: "welcome-2",
      sender: "bot",
      text: "Comment puis-je vous aider aujourd'hui ? Posez votre question ci-dessous ou cliquez sur l'une des options rapides.",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      showWhatsAppButton: false,
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setUnreadCount(0);
    }
  }, [isOpen, messages]);

  const handleSendMessage = (textToSend?: string) => {
    const query = textToSend || inputMessage;
    if (!query.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage("");

    // Generate intelligent bot answer
    setTimeout(() => {
      let botResponseText = "";
      let shouldShowWA = false;

      const lower = query.toLowerCase();

      if (lower.includes("tv") || lower.includes("android") || lower.includes("firestick") || lower.includes("samsung") || lower.includes("lg") || lower.includes("smarters") || lower.includes("app") || lower.includes("appareil") || lower.includes("compatible")) {
        botResponseText =
          "STRONG4K fonctionne parfaitement sur Smart TV (Samsung, LG), Fire TV Stick, Android TV, iPhone, PC et Mac. Un tutoriel d'installation guidé de 2 minutes vous est fourni.";
        shouldShowWA = false;
      } else if (lower.includes("chaine") || lower.includes("chaîne") || lower.includes("film") || lower.includes("serie") || lower.includes("sport") || lower.includes("4k") || lower.includes("vod")) {
        botResponseText =
          "Notre catalogue comprend plus de 20 000 chaînes en direct HD/4K (Sports, Cinéma, Documentaires) et une vaste bibliothèque VOD mise à jour quotidiennement.";
        shouldShowWA = false;
      } else if (lower.includes("delai") || lower.includes("délai") || lower.includes("temps") || lower.includes("activation") || lower.includes("minute")) {
        botResponseText =
          "L'activation est très rapide (moins de 5 minutes). Vos identifiants et votre guide de configuration vous sont transmis dès la validation de votre accès.";
        shouldShowWA = false;
      } else if (lower.includes("prix") || lower.includes("tarif") || lower.includes("combien") || lower.includes("offre") || lower.includes("pass")) {
        botResponseText =
          "Nos formules sont disponibles en pass 1 Mois, 6 Mois et 12 Mois. Le Pass 12 Mois reste notre formule la plus avantageuse et la plus recommandée.";
        shouldShowWA = false;
      } else if (lower.includes("commander") || lower.includes("acheter") || lower.includes("payer") || lower.includes("whatsapp") || lower.includes("support") || lower.includes("contact") || lower.includes("conseiller")) {
        botResponseText =
          "Vous souhaitez échanger directement avec notre équipe ou valider votre commande ? Cliquez sur le bouton ci-dessous pour ouvrir la discussion WhatsApp :";
        shouldShowWA = true;
      } else {
        // Fallback if the bot doesn't know the exact answer: provide WhatsApp button!
        botResponseText =
          "Je n'ai pas la réponse exacte à votre question spécifique. Cliquez ci-dessous pour discuter directement avec notre conseiller sur WhatsApp !";
        shouldShowWA = true;
      }

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: botResponseText,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        showWhatsAppButton: shouldShowWA,
      };

      setMessages((prev) => [...prev, botMsg]);
    }, 500);
  };

  const handleQuickQuestionClick = (q: (typeof QUICK_QUESTIONS)[0]) => {
    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: q.label,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);

    setTimeout(() => {
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: q.answer,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        showWhatsAppButton: q.showWhatsApp,
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 400);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 font-sans">
      {/* Floating Launcher Button */}
      {!isOpen && (
        <div className="relative group">
          {/* Tooltip Pill */}
          <div className="hidden sm:flex items-center gap-2 absolute right-16 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-extrabold px-3.5 py-2 rounded-xl shadow-xl whitespace-nowrap border border-slate-700 pointer-events-none animate-pulse">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Une question ? Assistant 24/7</span>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            aria-label="Ouvrir le chat assistant STRONG4K"
            className="w-14 h-14 rounded-2xl bg-rose-700 hover:bg-rose-800 text-white flex items-center justify-center shadow-2xl shadow-rose-700/40 transition-all duration-300 hover:scale-105 relative focus:outline-none focus:ring-4 focus:ring-rose-500/40"
          >
            <MessageSquare className="w-7 h-7" />
            {unreadCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-emerald-500 text-white text-[11px] font-black flex items-center justify-center border-2 border-white animate-bounce">
                {unreadCount}
              </span>
            )}
          </button>
        </div>
      )}

      {/* Chat Window Panel */}
      {isOpen && (
        <div className="w-[calc(100vw-2.5rem)] sm:w-[380px] h-[520px] max-h-[80vh] bg-white rounded-3xl border border-slate-200 shadow-2xl flex flex-col overflow-hidden transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
          {/* Header */}
          <div className="bg-slate-900 text-white p-4 flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-rose-700 flex items-center justify-center text-white font-black overflow-hidden border border-rose-600">
                  <Image
                    src="/apple-touch-icon.png"
                    alt="STRONG4K Assistant"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="w-3 h-3 rounded-full bg-emerald-500 border-2 border-slate-900 absolute -bottom-0.5 -right-0.5"></span>
              </div>
              <div>
                <h3 className="text-sm font-black tracking-tight text-white flex items-center gap-1.5">
                  Assistant STRONG4K <Sparkles className="w-3.5 h-3.5 text-rose-500" />
                </h3>
                <p className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                  <span>En ligne</span> • <span>Réponse rapide</span>
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Fermer le chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div className="flex items-end gap-2 max-w-[85%]">
                  {msg.sender === "bot" && (
                    <div className="w-7 h-7 rounded-lg bg-rose-700 text-white flex items-center justify-center shrink-0 mb-1">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}
                  <div
                    className={`p-3.5 rounded-2xl text-xs leading-relaxed font-medium ${
                      msg.sender === "user"
                        ? "bg-rose-700 text-white rounded-br-none shadow-sm font-semibold"
                        : "bg-white text-slate-800 border border-slate-200 rounded-bl-none shadow-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>

                <span className="text-[10px] text-slate-400 font-mono mt-1 px-1">
                  {msg.timestamp}
                </span>

                {/* WhatsApp Direct Action Button inside Bot Message */}
                {msg.sender === "bot" && msg.showWhatsAppButton && (
                  <div className="mt-2 ml-9">
                    <a
                      href={getWhatsAppLink(msg.text)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black shadow-md shadow-emerald-600/20 transition-all hover:scale-[1.02]"
                    >
                      <Headphones className="w-4 h-4" />
                      <span>Discuter sur WhatsApp</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                    </a>
                  </div>
                )}
              </div>
            ))}

            {/* Quick Questions Pills */}
            <div className="pt-2 space-y-2">
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider px-1">
                Questions Fréquentes :
              </p>
              <div className="flex flex-col gap-1.5">
                {QUICK_QUESTIONS.map((q) => (
                  <button
                    key={q.id}
                    onClick={() => handleQuickQuestionClick(q)}
                    className="text-left text-xs font-semibold px-3 py-2 rounded-xl bg-white hover:bg-rose-50 hover:text-rose-800 border border-slate-200 hover:border-rose-200 text-slate-700 transition-all flex items-center justify-between shadow-xs group"
                  >
                    <span>{q.label}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-rose-700 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                ))}
              </div>
            </div>

            <div ref={messagesEndRef} />
          </div>

          {/* Footer Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-white border-t border-slate-200 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Posez votre question..."
              className="flex-1 bg-slate-100 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 font-medium focus:outline-none focus:ring-2 focus:ring-rose-500 focus:bg-white transition-all"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim()}
              className="w-9 h-9 rounded-xl bg-rose-700 hover:bg-rose-800 disabled:opacity-40 text-white flex items-center justify-center shrink-0 transition-colors shadow-sm"
              aria-label="Envoyer le message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          {/* WhatsApp Direct Footer Link */}
          <div className="bg-slate-100 border-t border-slate-200 px-3 py-2 text-center text-[10px] text-slate-600 font-bold flex items-center justify-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Besoin d'aide ? <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline hover:text-emerald-800 font-black">Discuter sur WhatsApp</a></span>
          </div>
        </div>
      )}
    </div>
  );
}
