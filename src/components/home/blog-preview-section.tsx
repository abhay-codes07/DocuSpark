import Link from "next/link";
import { blogPreviewPosts } from "@/config/blog-preview";
import { BlogPreviewCard } from "./blog-preview-card";

export function BlogPreviewSection() {
  return (
    <section aria-labelledby="blog-preview-heading" className="space-y-6 py-16 sm:py-20">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-3">
          <p className="inline-flex rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-600">
            Blog
          </p>
          <h2
            id="blog-preview-heading"
            className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl"
          >
            Learn practical document workflows.
          </h2>
          <p className="max-w-2xl text-base leading-7 text-zinc-600">
            Quick guides and tips to speed up your PDF and file handling tasks.
          </p>
        </div>
        <Link
          href="/blog"
          className="focus-ring ui-transition inline-flex rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100"
        >
          View all posts
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {blogPreviewPosts.map((post) => (
          <BlogPreviewCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
