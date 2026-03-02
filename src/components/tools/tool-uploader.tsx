"use client";

import { UploadCloud } from "lucide-react";

type ToolUploaderProps = {
  accept: string;
  maxFiles: number;
  files: File[];
  onFilesChange: (files: File[]) => void;
};

export function ToolUploader({ accept, maxFiles, files, onFilesChange }: ToolUploaderProps) {
  function onInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const pickedFiles = Array.from(event.target.files ?? []).slice(0, maxFiles);
    onFilesChange(pickedFiles);
  }

  return (
    <section className="space-y-3" aria-labelledby="tool-upload-heading">
      <h2
        id="tool-upload-heading"
        className="text-sm font-semibold uppercase tracking-[0.12em] text-zinc-500"
      >
        Upload files
      </h2>

      <label className="focus-ring ui-transition block cursor-pointer rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 p-6 text-center hover:border-sky-300 hover:bg-sky-50/40">
        <input type="file" accept={accept} multiple className="sr-only" onChange={onInputChange} />
        <UploadCloud className="mx-auto mb-2 size-6 text-sky-600" aria-hidden="true" />
        <p className="text-sm font-medium text-zinc-800">Click to select files</p>
        <p className="mt-1 text-xs text-zinc-500">Accepted: {accept.replaceAll(",", ", ")}</p>
      </label>

      {files.length > 0 ? (
        <ul className="space-y-2" aria-label="Selected files">
          {files.map((file) => (
            <li
              key={file.name}
              className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-700"
            >
              {file.name}
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
