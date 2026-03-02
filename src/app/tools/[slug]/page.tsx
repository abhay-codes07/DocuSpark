import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ToolWorkspace } from "@/components/tools";
import { Container } from "@/components/layout";
import { tools } from "@/config/tools";

type ToolPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.href.split("/").pop() ?? "" }));
}

export async function generateMetadata({ params }: ToolPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = tools.find((item) => item.href.endsWith(`/${slug}`));

  if (!tool) {
    return {};
  }

  return {
    title: tool.title,
    description: tool.description,
    alternates: {
      canonical: tool.href,
    },
  };
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = tools.find((item) => item.href.endsWith(`/${slug}`));

  if (!tool) {
    notFound();
  }

  return (
    <main id="main-content" className="page-fade-in min-h-screen bg-background text-foreground">
      <Container className="space-y-6 py-16 sm:py-20">
        <Link
          href="/#tools"
          className="focus-ring ui-transition inline-flex rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100"
        >
          Back to all tools
        </Link>
        <ToolWorkspace tool={tool} />
      </Container>
    </main>
  );
}
