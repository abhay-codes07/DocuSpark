export type ToolMode =
  | "merge_pdf"
  | "split_pdf"
  | "compress_pdf"
  | "image_to_pdf"
  | "word_to_pdf"
  | "protect_pdf";

export type ToolImplementation = "real_client" | "mock";

export type ToolItem = {
  title: string;
  description: string;
  href: string;
  badge: string;
  icon: "merge" | "split" | "compress" | "image" | "word" | "secure";
  mode: ToolMode;
  implementation: ToolImplementation;
  accept: string;
  minFiles: number;
  maxFiles: number;
};
