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
    <div className="pt-28 pb-16 space-y-16 bg-white">
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
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Retour aux articles</span>
        </Link>

        {/* Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="font-bold text-red-700 uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full border border-red-200">
              {post.category}
            </span>
            <div className="flex items-center gap-1 text-slate-500 font-mono font-medium">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-1 text-slate-500 font-mono font-medium">
              <Calendar className="w-3.5 h-3.5 text-red-600" />
              <span>Publié le {post.publishedAt}</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-2 text-xs text-slate-500 pt-2 border-b border-slate-200 pb-6 font-medium">
            <User className="w-4 h-4 text-red-600" />
            <span>Par <strong className="text-slate-900 font-bold">{post.author}</strong></span>
          </div>
        </div>

        {/* Content Body */}
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-md shadow-slate-200/50 prose prose-slate max-w-none space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>

      <FinalCta />
    </div>
  );
}
