import { FileText, ImageIcon, Sparkles } from "lucide-react";

export function HeroIllustration() {
  return (
    <div className="hero-illustration relative mx-auto w-full max-w-md rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-sky-100" aria-hidden="true" />
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
          <FileText className="mb-2 size-5 text-sky-500" aria-hidden="true" />
          <p className="text-sm font-medium text-zinc-800">Merge PDFs</p>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
          <ImageIcon className="mb-2 size-5 text-sky-500" aria-hidden="true" />
          <p className="text-sm font-medium text-zinc-800">Image to PDF</p>
        </div>
      </div>
      <div className="mt-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
        <div className="mb-2 flex items-center gap-2 text-sky-600">
          <Sparkles className="size-4" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-[0.12em]">Coming next</span>
        </div>
        <p className="text-sm text-zinc-700">Split, compress, and optimize files with the same simple flow.</p>
      </div>
    </div>
  );
}
