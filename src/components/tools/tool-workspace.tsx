"use client";

import { useMemo, useState } from "react";
import type { ToolItem } from "@/types";
import { getMockDurationMs, getMockResultName, getToolActionLabel } from "@/lib";
import { ToolProgress, ToolUploader } from "@/components/tools";

type ToolWorkspaceProps = {
  tool: ToolItem;
};

export function ToolWorkspace({ tool }: ToolWorkspaceProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [progress, setProgress] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [splitRange, setSplitRange] = useState("1-3");
  const [compressionLevel, setCompressionLevel] = useState("balanced");
  const [pageSize, setPageSize] = useState("a4");
  const [password, setPassword] = useState("");

  const actionLabel = useMemo(() => getToolActionLabel(tool.mode), [tool.mode]);

  const canProcess = files.length >= tool.minFiles && files.length <= tool.maxFiles && !isProcessing;

  function runMockProcess() {
    if (!canProcess) {
      return;
    }

    setIsProcessing(true);
    setProgress(0);
    setResult(null);

    const durationMs = getMockDurationMs(tool.mode);
    const startedAt = Date.now();

    const interval = window.setInterval(() => {
      const elapsed = Date.now() - startedAt;
      const nextValue = Math.min(100, Math.floor((elapsed / durationMs) * 100));

      setProgress(nextValue);

      if (nextValue >= 100) {
        window.clearInterval(interval);
        setIsProcessing(false);
        setResult(getMockResultName(tool.mode));
      }
    }, 120);
  }

  function renderModeOptions() {
    if (tool.mode === "split_pdf") {
      return (
        <div className="space-y-1.5">
          <label htmlFor="split-range" className="text-sm font-medium text-zinc-800">
            Page range
          </label>
          <input
            id="split-range"
            type="text"
            value={splitRange}
            onChange={(event) => setSplitRange(event.target.value)}
            className="form-input"
            placeholder="e.g. 1-3, 7-9"
          />
        </div>
      );
    }

    if (tool.mode === "compress_pdf") {
      return (
        <div className="space-y-1.5">
          <label htmlFor="compression-level" className="text-sm font-medium text-zinc-800">
            Compression level
          </label>
          <select
            id="compression-level"
            value={compressionLevel}
            onChange={(event) => setCompressionLevel(event.target.value)}
            className="form-input"
          >
            <option value="light">Light</option>
            <option value="balanced">Balanced</option>
            <option value="strong">Strong</option>
          </select>
        </div>
      );
    }

    if (tool.mode === "image_to_pdf") {
      return (
        <div className="space-y-1.5">
          <label htmlFor="page-size" className="text-sm font-medium text-zinc-800">
            Output page size
          </label>
          <select
            id="page-size"
            value={pageSize}
            onChange={(event) => setPageSize(event.target.value)}
            className="form-input"
          >
            <option value="a4">A4</option>
            <option value="letter">Letter</option>
            <option value="fit">Fit to image</option>
          </select>
        </div>
      );
    }

    if (tool.mode === "protect_pdf") {
      return (
        <div className="space-y-1.5">
          <label htmlFor="pdf-password" className="text-sm font-medium text-zinc-800">
            Set password
          </label>
          <input
            id="pdf-password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="form-input"
            placeholder="Enter password"
          />
        </div>
      );
    }

    return null;
  }

  return (
    <div className="space-y-6 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">{tool.title}</h1>
        <p className="text-base leading-7 text-zinc-600">{tool.description}</p>
      </div>

      <ToolUploader accept={tool.accept} maxFiles={tool.maxFiles} files={files} onFilesChange={setFiles} />

      <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-600">
        Upload between {tool.minFiles} and {tool.maxFiles} file(s) to run this tool.
      </div>

      {renderModeOptions()}

      <button
        type="button"
        disabled={!canProcess}
        onClick={runMockProcess}
        className="focus-ring ui-transition inline-flex rounded-xl bg-sky-500 px-5 py-2.5 text-sm font-medium text-white enabled:hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {actionLabel}
      </button>

      <ToolProgress value={progress} isProcessing={isProcessing} />

      {result ? (
        <p className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
          Mock complete. Output ready: <strong>{result}</strong>
        </p>
      ) : null}
    </div>
  );
}
