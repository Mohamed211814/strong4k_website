import { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { blogPosts } from "@/lib/config/blog";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog & Guides Streaming TV - Actualités & Tutoriels",
  description:
    "Découvrez nos articles, conseils d'experts et tutoriels pour optimiser votre expérience TV sur Smart TV, Fire TV et Android TV.",
  alternates: {
    canonical: `${siteConfig.domain}/blog`,
  },
};

export default function BlogIndexPage() {
  return (
    <div className="pt-28 pb-16 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={[{ name: "Blog", url: "/blog" }]} />

        <div className="py-8 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-purple-400" />
            <span>ARTICLES & CONSEILS</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Le Blog STREAMORA
          </h1>
          <p className="text-gray-300 text-base sm:text-lg">
            Retrouvez tous nos guides pratiques pour tirer le meilleur parti de vos équipements connectés.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-6">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="glass-card rounded-3xl border border-white/10 overflow-hidden flex flex-col justify-between glass-card-hover"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-purple-400 uppercase tracking-wider bg-purple-950/60 px-3 py-1 rounded-full border border-purple-500/20">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-gray-400 font-mono">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-white leading-snug hover:text-purple-300 transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="p-6 pt-0 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{post.publishedAt}</span>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 font-bold text-purple-400 hover:text-purple-300 transition-colors"
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
