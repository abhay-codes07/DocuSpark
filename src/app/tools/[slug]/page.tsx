import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout";
import { tools } from "@/config/tools";

type ToolPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.href.split("/").pop() ?? "" }));
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = tools.find((item) => item.href.endsWith(`/${slug}`));

  if (!tool) {
    notFound();
  }

  return (
    <main id="main-content" className="page-fade-in min-h-screen bg-background text-foreground">
      <Container className="py-16 sm:py-20">
        <div className="max-w-3xl space-y-5 rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
          <p className="inline-flex rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-600">
            Tool Preview
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">{tool.title}</h1>
          <p className="text-base leading-7 text-zinc-600">
            {tool.description} Full functionality for this tool will be implemented in Phase 9.
          </p>
          <Link
            href="/#tools"
            className="focus-ring ui-transition inline-flex rounded-xl bg-sky-500 px-4 py-2 text-sm font-medium text-white hover:bg-sky-600"
          >
            Back to all tools
          </Link>
        </div>
      </Container>
    </main>
  );
}
