"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RefreshCw, Home } from "lucide-react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-24 pb-16 px-4 bg-white">
      <div className="bg-white p-10 rounded-3xl border-2 border-slate-200 text-center max-w-lg space-y-6 shadow-xl">
        <h1 className="text-3xl font-black text-slate-900">Une erreur s'est produite</h1>
        <p className="text-xs sm:text-sm text-slate-600 font-medium">
          Nous n'avons pas pu charger cette page. Veuillez réessayer.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs shadow-md shadow-red-600/30 transition-all"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Réessayer</span>
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs border border-slate-200"
          >
            <Home className="w-4 h-4" />
            <span>Accueil</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
