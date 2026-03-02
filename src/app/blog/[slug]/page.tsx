import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout";
import { formatBlogDate, getBlogPostBySlug, getBlogSlugs } from "@/lib";
import { siteConfig } from "@/config/site";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {};
  }

  const title = post.meta.title;
  const description = post.meta.excerpt;
  const url = `${siteConfig.url}/blog/${post.meta.slug}`;

  return {
    title,
    description,
    keywords: post.meta.keywords,
    alternates: {
      canonical: `/blog/${post.meta.slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      url,
      images: [{ url: siteConfig.ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const Content = post.Content;

  return (
    <main id="main-content" className="page-fade-in min-h-screen bg-background text-foreground">
      <Container className="py-16 sm:py-20">
        <article className="mx-auto max-w-3xl space-y-5 rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm sm:p-10">
          <p className="inline-flex rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-600">
            {post.meta.readTime}
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">{post.meta.title}</h1>
          <p className="text-sm uppercase tracking-[0.12em] text-zinc-500">
            {formatBlogDate(post.meta.publishedAt)}
          </p>
          <div className="mdx-content">
            <Content />
          </div>
          <Link
            href="/blog"
            className="focus-ring ui-transition inline-flex rounded-xl bg-sky-500 px-4 py-2 text-sm font-medium text-white hover:bg-sky-600"
          >
            Back to blog
          </Link>
        </article>
      </Container>
    </main>
  );
}
