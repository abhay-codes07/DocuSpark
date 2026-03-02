import type { BlogPostMeta, BlogPostModule } from "@/types";

const postLoaders: Record<string, () => Promise<BlogPostModule>> = {
  "merge-pdf-without-format-issues": () => import("@/content/blog/merge-pdf-without-format-issues.mdx"),
  "reduce-pdf-file-size-fast": () => import("@/content/blog/reduce-pdf-file-size-fast.mdx"),
  "image-to-pdf-mobile-scan-tips": () => import("@/content/blog/image-to-pdf-mobile-scan-tips.mdx"),
  "split-pdf-by-chapter": () => import("@/content/blog/split-pdf-by-chapter.mdx"),
};

function toMeta(slug: string, meta: Omit<BlogPostMeta, "slug">): BlogPostMeta {
  return { slug, ...meta };
}

export function getBlogSlugs() {
  return Object.keys(postLoaders);
}

export async function getAllBlogPosts() {
  const entries = await Promise.all(
    getBlogSlugs().map(async (slug) => {
      const post = await postLoaders[slug]();
      return toMeta(slug, post.meta);
    }),
  );

  return entries.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export async function getBlogPostBySlug(slug: string) {
  const loader = postLoaders[slug];

  if (!loader) {
    return null;
  }

  const post = await loader();

  return {
    meta: toMeta(slug, post.meta),
    Content: post.default,
  };
}

export async function getBlogPreviewPosts(count = 4) {
  const posts = await getAllBlogPosts();
  return posts.slice(0, count);
}
