import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getBlogSlugs } from "@/lib";
import { tools } from "@/config/tools";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/contact", "/blog"];

  const blogRoutes = getBlogSlugs().map((slug) => `/blog/${slug}`);
  const toolRoutes = tools.map((tool) => tool.href);

  return [...staticRoutes, ...blogRoutes, ...toolRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
