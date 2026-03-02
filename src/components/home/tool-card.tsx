import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ToolItem } from "@/types";

type ToolCardProps = {
  tool: ToolItem;
  icon: React.ReactNode;
};

export function ToolCard({ tool, icon }: ToolCardProps) {
  return (
    <Link
      href={tool.href}
      className="tool-card focus-ring ui-transition group block rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm hover:-translate-y-0.5 hover:shadow-md focus-visible:-translate-y-0.5 focus-visible:shadow-md"
      aria-label={`${tool.title}: ${tool.description}`}
    >
      <div className="mb-4 inline-flex rounded-xl border border-sky-100 bg-sky-50 p-2 text-sky-600">
        {icon}
      </div>
      <div className="mb-2 flex items-center justify-between gap-3">
        <h3 className="text-base font-semibold tracking-tight text-zinc-900">{tool.title}</h3>
        <ArrowUpRight
          className="size-4 text-zinc-400 ui-transition group-hover:text-zinc-700"
          aria-hidden="true"
        />
      </div>
      <p className="text-sm leading-6 text-zinc-600">{tool.description}</p>
      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-sky-700">
        {tool.badge}
      </p>
    </Link>
  );
}
