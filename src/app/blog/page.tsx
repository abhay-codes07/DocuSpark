import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/layout";
import { formatBlogDate, getAllBlogPosts } from "@/lib";

export const metadata: Metadata = {
  title: "Blog",
  description: "Document workflow tips, guides, and best practices from DocuSpark.",
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <main id="main-content" className="page-fade-in min-h-screen bg-background text-foreground">
      <Container className="space-y-8 py-16 sm:py-20">
        <div className="space-y-3">
          <p className="inline-flex rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-600">
            Blog
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Tips and guides for document workflows.
          </h1>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
            >
              <p className="text-xs uppercase tracking-[0.12em] text-zinc-500">
                {formatBlogDate(post.publishedAt)}
              </p>
              <h2 className="mt-2 text-lg font-semibold tracking-tight text-zinc-900">
                {post.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="focus-ring ui-transition mt-4 inline-flex rounded-xl bg-sky-500 px-3 py-2 text-sm font-medium text-white hover:bg-sky-600"
              >
                Read post
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </main>
  );
}
