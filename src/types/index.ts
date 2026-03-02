export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    github: string;
    contact: string;
  };
};

export * from "./navigation";
export * from "./tools";
export * from "./how-it-works";
export * from "./testimonial";
export * from "./blog";
