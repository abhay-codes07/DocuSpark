import {
  Combine,
  FileLock,
  FileMinus2,
  FileText,
  FileType,
  ImageUp,
  type LucideIcon,
} from "lucide-react";
import { tools } from "@/config/tools";
import type { ToolItem } from "@/types";
import { ToolCard } from "./tool-card";

const iconByType: Record<ToolItem["icon"], LucideIcon> = {
  merge: Combine,
  split: FileMinus2,
  compress: FileType,
  image: ImageUp,
  word: FileText,
  secure: FileLock,
};

export function ToolsGridSection() {
  return (
    <section id="tools" aria-labelledby="tools-heading" className="space-y-6 py-16 sm:py-20">
      <div className="space-y-3">
        <p className="inline-flex rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-600">
          Tools
        </p>
        <h2 id="tools-heading" className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
          Choose a tool and get to work instantly.
        </h2>
        <p className="max-w-2xl text-base leading-7 text-zinc-600">
          Built for quick, focused tasks with clean interactions on desktop and mobile.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => {
          const Icon = iconByType[tool.icon];
          return <ToolCard key={tool.title} tool={tool} icon={<Icon className="size-5" aria-hidden="true" />} />;
        })}
      </div>
    </section>
  );
}
