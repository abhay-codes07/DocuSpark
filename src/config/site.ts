import type { SiteConfig } from "@/types";

export const SITE_NAME = "DocuSpark";
export const SITE_DESCRIPTION = "Modern document tools for everyday workflows.";

export const siteConfig: SiteConfig = {
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: "https://docspark.app",
  ogImage: "/og-docspark.png",
  links: {
    github: "https://github.com/abhay-codes07/DocuSpark",
    contact: "/contact",
  },
};
