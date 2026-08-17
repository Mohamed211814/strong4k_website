import { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/lib/config/site";
import { blogPosts, getBlogPostBySlug } from "@/lib/config/blog";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { getArticleSchema } from "@/lib/seo/schema";
import { FinalCta } from "@/components/cta/FinalCta";
import Link from "next/link";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article non trouvé",
    };
  }

  return {
    title: post.seoTitle,
    description: post.seoDescription,
    alternates: {
      canonical: `${siteConfig.domain}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = getArticleSchema({
    title: post.title,
    description: post.excerpt,
    slug: post.slug,
    datePublished: post.publishedAt,
    authorName: post.author,
  });

  return (
    <div className="pt-28 pb-16 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        <Breadcrumbs
          items={[
            { name: "Blog", url: "/blog" },
            { name: post.title, url: `/blog/${post.slug}` },
          ]}
        />

        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Retour aux articles</span>
        </Link>

        {/* Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="font-bold text-purple-400 uppercase tracking-wider bg-purple-950/60 px-3 py-1 rounded-full border border-purple-500/30">
              {post.category}
            </span>
            <div className="flex items-center gap-1 text-gray-400 font-mono">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-1 text-gray-400 font-mono">
              <Calendar className="w-3.5 h-3.5 text-cyan-400" />
              <span>Publié le {post.publishedAt}</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-2 text-xs text-gray-400 pt-2 border-b border-white/10 pb-6">
            <User className="w-4 h-4 text-purple-400" />
            <span>Par <strong className="text-white">{post.author}</strong></span>
          </div>
        </div>

        {/* Content Body */}
        <div className="glass-card p-8 sm:p-10 rounded-3xl border border-white/10 prose prose-invert max-w-none space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>

      <FinalCta />
    </div>
  );
}
