declare module "*.mdx" {
  import type { ComponentType } from "react";

  export const meta: {
    title: string;
    excerpt: string;
    publishedAt: string;
    readTime: string;
    keywords: string[];
  };

  const MDXComponent: ComponentType;
  export default MDXComponent;
}
