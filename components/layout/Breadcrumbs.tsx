import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { getBreadcrumbSchema } from "@/lib/seo/schema";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const fullItems = [{ name: "Accueil", url: "/" }, ...items];
  const schema = getBreadcrumbSchema(fullItems);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Fil d'Ariane" className="py-3 px-1">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500 font-medium">
          {fullItems.map((item, index) => {
            const isLast = index === fullItems.length - 1;
            return (
              <li key={item.url} className="flex items-center gap-1.5">
                {index > 0 && <ChevronRight className="w-3.5 h-3.5 text-slate-400" />}
                {isLast ? (
                  <span className="text-red-600 font-bold cursor-default" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.url}
                    className="hover:text-slate-900 flex items-center gap-1 transition-colors"
                  >
                    {index === 0 && <Home className="w-3.5 h-3.5 text-slate-600" />}
                    <span>{item.name}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
