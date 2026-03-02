import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout";
import { blogPreviewPosts } from "@/config/blog-preview";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPreviewPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPreviewPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main id="main-content" className="page-fade-in min-h-screen bg-background text-foreground">
      <Container className="py-16 sm:py-20">
        <article className="max-w-3xl space-y-5 rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
          <p className="inline-flex rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-600">
            Article Preview
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">{post.title}</h1>
          <p className="text-sm uppercase tracking-[0.12em] text-zinc-500">{post.publishedAt}</p>
          <p className="text-base leading-7 text-zinc-600">
            {post.excerpt} Full article content and dynamic blog system will be expanded in Phase 7.
          </p>
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
