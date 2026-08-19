"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/config/site";
import { Menu, X, Tv, ChevronRight } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScrollToPlans = (e: React.MouseEvent) => {
    if (pathname === "/") {
      const el = document.getElementById("abonnements") || document.getElementById("offres");
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4 transition-all duration-300"
      suppressHydrationWarning
    >
      <div
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
          isScrolled
            ? "glass-nav shadow-lg shadow-slate-900/5 py-3 px-5 border border-slate-200"
            : "bg-white/70 backdrop-blur-md py-4 px-6 border border-slate-200/60 shadow-sm"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-red-500 rounded-lg p-1"
          >
            <div className="relative w-9 h-9 rounded-xl overflow-hidden bg-white border border-slate-200 p-0.5 shadow-md shadow-red-600/10 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
              <Image
                src="/apple-touch-icon.png"
                alt="STRONG4K Logo"
                width={36}
                height={36}
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <span className="text-xl font-black tracking-tight text-slate-900 flex items-center gap-1">
              STRONG<span className="text-rose-700 font-extrabold">4K</span>
              <span className="w-1.5 h-1.5 rounded-full bg-rose-700 animate-pulse"></span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-rose-500"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/#abonnements"
              onClick={handleScrollToPlans}
              className="inline-flex items-center justify-center px-5.5 py-2.5 rounded-xl bg-rose-700 hover:bg-rose-800 text-white font-extrabold text-sm shadow-md shadow-rose-700/25 transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-rose-500 cursor-pointer"
            >
              <span>Voir les offres</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-slate-950 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors"
              aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 z-50 p-6 bg-white rounded-2xl border border-slate-200 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                Menu de Navigation
              </span>
              <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                <Tv className="w-3.5 h-3.5 text-red-600" /> France
              </span>
            </div>

            <nav className="flex flex-col gap-2">
              {siteConfig.navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-base font-semibold text-slate-800 hover:text-slate-950 hover:bg-slate-100 rounded-xl transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/a-propos"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-semibold text-slate-800 hover:text-slate-950 hover:bg-slate-100 rounded-xl transition-colors"
              >
                À propos
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-semibold text-slate-800 hover:text-slate-950 hover:bg-slate-100 rounded-xl transition-colors"
              >
                Contact
              </Link>
            </nav>

            <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
              <Link
                href="/#abonnements"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleScrollToPlans(e);
                }}
                className="w-full text-center py-3 rounded-xl bg-rose-700 hover:bg-rose-800 text-white font-extrabold text-sm shadow-md shadow-rose-700/25 cursor-pointer"
              >
                Voir les offres
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
