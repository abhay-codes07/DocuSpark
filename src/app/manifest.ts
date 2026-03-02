import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DocuSpark",
    short_name: "DocuSpark",
    description: "Modern document tools for everyday workflows.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8fafc",
    theme_color: "#38bdf8",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
