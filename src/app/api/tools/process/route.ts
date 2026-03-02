import { execFile } from "node:child_process";
import { promises as fs } from "node:fs";
import os from "node:os";
import path from "node:path";
import { promisify } from "node:util";
import { NextResponse } from "next/server";

const execFileAsync = promisify(execFile);

export const runtime = "nodejs";

function sanitizeFilename(name: string) {
  return name.replace(/[^a-zA-Z0-9._-]/g, "_");
}

async function fileExists(filePath: string) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function resolveBinary(commandCandidates: string[]) {
  for (const candidate of commandCandidates) {
    if (path.isAbsolute(candidate)) {
      if (await fileExists(candidate)) {
        return candidate;
      }
      continue;
    }

    try {
      await execFileAsync(candidate, ["--version"], { windowsHide: true });
      return candidate;
    } catch {
      // try next candidate
    }
  }

  return null;
}

async function runWordToPdf(file: File) {
  const workDir = await fs.mkdtemp(path.join(os.tmpdir(), "docspark-word-"));

  try {
    const inputName = sanitizeFilename(file.name);
    const inputPath = path.join(workDir, inputName);
    const outputName = `${path.parse(inputName).name}.pdf`;
    const outputPath = path.join(workDir, outputName);

    await fs.writeFile(inputPath, Buffer.from(await file.arrayBuffer()));

    const soffice = await resolveBinary(
      process.platform === "win32"
        ? [
            "soffice",
            "C:\\Program Files\\LibreOffice\\program\\soffice.exe",
            "C:\\Program Files (x86)\\LibreOffice\\program\\soffice.exe",
          ]
        : ["soffice", "/usr/bin/soffice", "/snap/bin/libreoffice"],
    );

    if (!soffice) {
      return {
        ok: false,
        error:
          "Word conversion engine not available. Install LibreOffice and ensure `soffice` is on PATH.",
      } as const;
    }

    await execFileAsync(
      soffice,
      ["--headless", "--convert-to", "pdf", "--outdir", workDir, inputPath],
      { windowsHide: true },
    );

    if (!(await fileExists(outputPath))) {
      return { ok: false, error: "Conversion failed: output file was not generated." } as const;
    }

    const bytes = await fs.readFile(outputPath);

    return {
      ok: true,
      filename: `${path.parse(file.name).name}.pdf`,
      contentType: "application/pdf",
      bytes,
    } as const;
  } finally {
    await fs.rm(workDir, { recursive: true, force: true });
  }
}

async function runProtectPdf(file: File, password: string) {
  const workDir = await fs.mkdtemp(path.join(os.tmpdir(), "docspark-protect-"));

  try {
    const inputName = sanitizeFilename(file.name);
    const inputPath = path.join(workDir, inputName);
    const outputPath = path.join(workDir, `${path.parse(inputName).name}-protected.pdf`);

    await fs.writeFile(inputPath, Buffer.from(await file.arrayBuffer()));

    const qpdf = await resolveBinary(
      process.platform === "win32"
        ? ["qpdf", "C:\\Program Files\\qpdf\\bin\\qpdf.exe"]
        : ["qpdf", "/usr/bin/qpdf"],
    );

    if (!qpdf) {
      return {
        ok: false,
        error: "PDF protection engine not available. Install `qpdf` and ensure it is on PATH.",
      } as const;
    }

    await execFileAsync(
      qpdf,
      ["--encrypt", password, password, "256", "--", inputPath, outputPath],
      { windowsHide: true },
    );

    if (!(await fileExists(outputPath))) {
      return { ok: false, error: "Protection failed: output file was not generated." } as const;
    }

    const bytes = await fs.readFile(outputPath);

    return {
      ok: true,
      filename: `${path.parse(file.name).name}-protected.pdf`,
      contentType: "application/pdf",
      bytes,
    } as const;
  } finally {
    await fs.rm(workDir, { recursive: true, force: true });
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const mode = String(formData.get("mode") ?? "");
    const files = formData
      .getAll("files")
      .filter((item): item is File => item instanceof File && item.size > 0);

    if (files.length === 0) {
      return NextResponse.json({ error: "No files uploaded." }, { status: 400 });
    }

    if (mode === "word_to_pdf") {
      const result = await runWordToPdf(files[0]);

      if (!result.ok) {
        return NextResponse.json({ error: result.error }, { status: 422 });
      }

      return new NextResponse(result.bytes, {
        status: 200,
        headers: {
          "content-type": result.contentType,
          "content-disposition": `attachment; filename=\"${result.filename}\"`,
        },
      });
    }

    if (mode === "protect_pdf") {
      const password = String(formData.get("password") ?? "").trim();

      if (password.length < 4) {
        return NextResponse.json(
          { error: "Password must be at least 4 characters." },
          { status: 400 },
        );
      }

      const result = await runProtectPdf(files[0], password);

      if (!result.ok) {
        return NextResponse.json({ error: result.error }, { status: 422 });
      }

      return new NextResponse(result.bytes, {
        status: 200,
        headers: {
          "content-type": result.contentType,
          "content-disposition": `attachment; filename=\"${result.filename}\"`,
        },
      });
    }

    return NextResponse.json({ error: "Unsupported mode for server processing." }, { status: 400 });
  } catch {
    return NextResponse.json({ error: "Unexpected processing error." }, { status: 500 });
  }
}
