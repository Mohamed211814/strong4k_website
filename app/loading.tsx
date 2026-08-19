import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-[70vh] bg-white flex flex-col items-center justify-center space-y-4">
      <Loader2 className="w-10 h-10 text-red-600 animate-spin" />
      <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
        Chargement de STRONG4K...
      </p>
    </div>
  );
}
