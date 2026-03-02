import type { ToolMode } from "@/types";

export function getToolActionLabel(mode: ToolMode) {
  switch (mode) {
    case "merge_pdf":
      return "Merge files";
    case "split_pdf":
      return "Split file";
    case "compress_pdf":
      return "Compress file";
    case "image_to_pdf":
      return "Convert images";
    case "word_to_pdf":
      return "Convert document";
    case "protect_pdf":
      return "Protect file";
    default:
      return "Process file";
  }
}

export function getMockResultName(mode: ToolMode) {
  switch (mode) {
    case "merge_pdf":
      return "merged-output.pdf";
    case "split_pdf":
      return "split-pages.zip";
    case "compress_pdf":
      return "compressed-output.pdf";
    case "image_to_pdf":
      return "images-converted.pdf";
    case "word_to_pdf":
      return "converted-document.pdf";
    case "protect_pdf":
      return "protected-output.pdf";
    default:
      return "processed-output.pdf";
  }
}

export function getMockDurationMs(mode: ToolMode) {
  switch (mode) {
    case "merge_pdf":
      return 3200;
    case "split_pdf":
      return 2600;
    case "compress_pdf":
      return 2800;
    case "image_to_pdf":
      return 3000;
    case "word_to_pdf":
      return 2400;
    case "protect_pdf":
      return 2300;
    default:
      return 2500;
  }
}

type BuildMockOutputParams = {
  mode: ToolMode;
  files: File[];
  splitRange?: string;
  compressionLevel?: string;
  pageSize?: string;
  hasPassword?: boolean;
};

export function buildMockOutputBlob({
  mode,
  files,
  splitRange,
  compressionLevel,
  pageSize,
  hasPassword,
}: BuildMockOutputParams) {
  const lines = [
    "DocuSpark Mock Output",
    `Mode: ${mode}`,
    `Generated: ${new Date().toISOString()}`,
    `Files: ${files.map((file) => file.name).join(", ") || "none"}`,
  ];

  if (splitRange) {
    lines.push(`Split Range: ${splitRange}`);
  }

  if (compressionLevel) {
    lines.push(`Compression: ${compressionLevel}`);
  }

  if (pageSize) {
    lines.push(`Page Size: ${pageSize}`);
  }

  if (typeof hasPassword === "boolean") {
    lines.push(`Password Set: ${hasPassword ? "yes" : "no"}`);
  }

  const mimeType = mode === "split_pdf" ? "application/zip" : "application/pdf";

  return new Blob([lines.join("\n")], { type: mimeType });
}
