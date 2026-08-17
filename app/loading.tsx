import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-4">
      <Loader2 className="w-10 h-10 text-purple-400 animate-spin" />
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
        Chargement de STREAMORA...
      </p>
    </div>
  );
}
