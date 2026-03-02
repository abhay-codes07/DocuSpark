import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPreviewPost } from "@/types";

type BlogPreviewCardProps = {
  post: BlogPreviewPost;
};

export function BlogPreviewCard({ post }: BlogPreviewCardProps) {
  return (
    <article className="group rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
      <p className="mb-2 text-xs uppercase tracking-[0.12em] text-zinc-500">{post.publishedAt}</p>
      <h3 className="text-lg font-semibold tracking-tight text-zinc-900">{post.title}</h3>
      <p className="mt-2 text-sm leading-6 text-zinc-600">{post.excerpt}</p>
      <div className="mt-4 flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">{post.readTime}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="focus-ring ui-transition inline-flex items-center gap-1 rounded-xl px-2 py-1 text-sm font-medium text-sky-700 hover:bg-sky-50"
        >
          Read
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
