import { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { blogPosts } from "@/lib/config/blog";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog & Guides Streaming TV | Actualités & Tutoriels",
  description:
    "Découvrez nos articles, conseils d'experts et tutoriels pour optimiser votre expérience TV sur Smart TV, Fire TV et Android TV.",
  alternates: {
    canonical: `${siteConfig.domain}/blog`,
  },
};

export default function BlogIndexPage() {
  return (
    <div className="pt-28 pb-16 space-y-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={[{ name: "Blog", url: "/blog" }]} />

        <div className="py-8 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider shadow-sm">
            <BookOpen className="w-3.5 h-3.5 text-red-600" />
            <span>ARTICLES & CONSEILS</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 leading-tight">
            Le Blog <span className="text-gradient-red">STRONG4K</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            Retrouvez tous nos guides pratiques pour tirer le meilleur parti de vos équipements connectés.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-6">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-3xl border border-slate-200 shadow-md shadow-slate-200/50 overflow-hidden flex flex-col justify-between hover:border-red-500/40 hover:shadow-xl transition-all duration-300"
            >
              {post.image && (
                <div className="relative w-full h-48 overflow-hidden bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-red-700 uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full border border-red-200">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-slate-400 font-mono font-semibold">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h2 className="text-xl font-extrabold text-slate-900 leading-snug hover:text-red-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                <p className="text-xs text-slate-600 font-medium leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-semibold">
                <div className="flex items-center gap-1.5">
                  {post.publishedAt ? (
                    <>
                      <Calendar className="w-3.5 h-3.5 text-red-600" />
                      <span>{post.publishedAt}</span>
                    </>
                  ) : (
                    <span className="text-red-700 font-bold bg-red-50 px-2.5 py-0.5 rounded-full border border-red-200">Guide Spécial</span>
                  )}
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 font-bold text-red-600 hover:text-red-700 transition-colors"
                >
                  <span>Lire la suite</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
