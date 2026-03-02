import JSZip from "jszip";
import { PDFDocument } from "pdf-lib";
import type { ToolMode } from "@/types";

type RealEngineParams = {
  mode: ToolMode;
  files: File[];
  splitRange?: string;
  compressionLevel?: string;
  pageSize?: string;
  onProgress?: (value: number) => void;
};

type EngineResult = {
  blob: Blob;
  filename: string;
};

function toOwnedBytes(bytes: Uint8Array) {
  return Uint8Array.from(bytes);
}

async function readAsArrayBuffer(file: File) {
  return await file.arrayBuffer();
}

function parseSplitRange(input: string, maxPages: number) {
  const segments = input
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean);

  if (segments.length === 0) {
    return Array.from({ length: maxPages }, (_, index) => index + 1);
  }

  const values = new Set<number>();

  for (const segment of segments) {
    if (segment.includes("-")) {
      const [startRaw, endRaw] = segment.split("-");
      const start = Number(startRaw);
      const end = Number(endRaw);

      if (!Number.isInteger(start) || !Number.isInteger(end) || start < 1 || end < start) {
        throw new Error("Invalid split range.");
      }

      for (let page = start; page <= end; page += 1) {
        if (page <= maxPages) {
          values.add(page);
        }
      }
    } else {
      const page = Number(segment);
      if (!Number.isInteger(page) || page < 1 || page > maxPages) {
        throw new Error("Invalid split range.");
      }
      values.add(page);
    }
  }

  const sorted = Array.from(values).sort((a, b) => a - b);

  if (sorted.length === 0) {
    throw new Error("Split range does not match any page.");
  }

  return sorted;
}

function getPageSize(pageSize: string) {
  switch (pageSize) {
    case "letter":
      return { width: 612, height: 792 };
    case "a4":
    default:
      return { width: 595.28, height: 841.89 };
  }
}

export async function runRealToolEngine({
  mode,
  files,
  splitRange = "",
  compressionLevel,
  pageSize = "a4",
  onProgress,
}: RealEngineParams): Promise<EngineResult> {
  if (mode === "merge_pdf") {
    const merged = await PDFDocument.create();

    for (let index = 0; index < files.length; index += 1) {
      const file = files[index];
      const src = await PDFDocument.load(await readAsArrayBuffer(file));
      const copied = await merged.copyPages(src, src.getPageIndices());
      copied.forEach((page) => merged.addPage(page));
      onProgress?.(Math.floor(((index + 1) / files.length) * 90));
    }

    const bytes = await merged.save({ useObjectStreams: true });
    onProgress?.(100);
    return {
      blob: new Blob([toOwnedBytes(bytes)], { type: "application/pdf" }),
      filename: "merged-output.pdf",
    };
  }

  if (mode === "split_pdf") {
    const src = await PDFDocument.load(await readAsArrayBuffer(files[0]));
    const selectedPages = parseSplitRange(splitRange, src.getPageCount());
    const zip = new JSZip();

    for (let i = 0; i < selectedPages.length; i += 1) {
      const pageNumber = selectedPages[i];
      const out = await PDFDocument.create();
      const [copied] = await out.copyPages(src, [pageNumber - 1]);
      out.addPage(copied);
      const bytes = await out.save({ useObjectStreams: true });
      zip.file(`page-${pageNumber}.pdf`, toOwnedBytes(bytes));
      onProgress?.(Math.floor(((i + 1) / selectedPages.length) * 90));
    }

    const blob = await zip.generateAsync({ type: "blob" });
    onProgress?.(100);
    return { blob, filename: "split-pages.zip" };
  }

  if (mode === "compress_pdf") {
    const src = await PDFDocument.load(await readAsArrayBuffer(files[0]));
    onProgress?.(40);
    const bytes = await src.save({
      useObjectStreams: true,
      objectsPerTick: compressionLevel === "strong" ? 50 : compressionLevel === "light" ? 300 : 150,
    });
    onProgress?.(100);
    return {
      blob: new Blob([toOwnedBytes(bytes)], { type: "application/pdf" }),
      filename: "compressed-output.pdf",
    };
  }

  if (mode === "image_to_pdf") {
    const pdf = await PDFDocument.create();

    for (let index = 0; index < files.length; index += 1) {
      const file = files[index];
      const bytes = new Uint8Array(await readAsArrayBuffer(file));
      const isJpeg = /jpe?g/i.test(file.type) || /\.jpe?g$/i.test(file.name);
      const image = isJpeg ? await pdf.embedJpg(bytes) : await pdf.embedPng(bytes);

      if (pageSize === "fit") {
        const page = pdf.addPage([image.width, image.height]);
        page.drawImage(image, { x: 0, y: 0, width: image.width, height: image.height });
      } else {
        const size = getPageSize(pageSize);
        const page = pdf.addPage([size.width, size.height]);
        const margin = 24;
        const scale = Math.min(
          (size.width - margin * 2) / image.width,
          (size.height - margin * 2) / image.height,
        );
        const width = image.width * scale;
        const height = image.height * scale;
        page.drawImage(image, {
          x: (size.width - width) / 2,
          y: (size.height - height) / 2,
          width,
          height,
        });
      }

      onProgress?.(Math.floor(((index + 1) / files.length) * 90));
    }

    const bytes = await pdf.save({ useObjectStreams: true });
    onProgress?.(100);
    return {
      blob: new Blob([toOwnedBytes(bytes)], { type: "application/pdf" }),
      filename: "images-converted.pdf",
    };
  }

  throw new Error(
    "This tool requires server-side processing and is not available client-side yet.",
  );
}
