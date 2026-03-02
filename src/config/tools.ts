import type { ToolItem } from "@/types";

export const tools: ToolItem[] = [
  {
    title: "Merge PDF",
    description: "Combine multiple PDF files into one organized document.",
    href: "/tools/merge-pdf",
    badge: "Popular",
    icon: "merge",
  },
  {
    title: "Split PDF",
    description: "Extract selected pages or split by custom ranges.",
    href: "/tools/split-pdf",
    badge: "Fast",
    icon: "split",
  },
  {
    title: "Compress PDF",
    description: "Reduce file size for quick sharing without heavy quality loss.",
    href: "/tools/compress-pdf",
    badge: "Light",
    icon: "compress",
  },
  {
    title: "Image to PDF",
    description: "Convert JPG and PNG images into a clean PDF in seconds.",
    href: "/tools/image-to-pdf",
    badge: "Simple",
    icon: "image",
  },
  {
    title: "Word to PDF",
    description: "Turn DOC and DOCX files into print-ready PDF format.",
    href: "/tools/word-to-pdf",
    badge: "Reliable",
    icon: "word",
  },
  {
    title: "Protect PDF",
    description: "Add password protection to keep sensitive files private.",
    href: "/tools/protect-pdf",
    badge: "Secure",
    icon: "secure",
  },
];
