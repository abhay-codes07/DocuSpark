import type { ComponentType } from "react";

export type BlogPostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readTime: string;
  keywords: string[];
};

export type BlogPostModule = {
  default: ComponentType;
  meta: Omit<BlogPostMeta, "slug">;
};
