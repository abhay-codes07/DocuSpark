import { Sparkles } from "lucide-react";
import { Container } from "@/components/layout";
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui";

export default function Home() {
  return (
    <main className="page-fade-in min-h-screen bg-background text-foreground">
      <Container className="space-y-12 py-16 sm:py-20">
        <section aria-labelledby="hero-heading" className="space-y-4">
          <h1 id="hero-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
            DocuSpark
          </h1>
          <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg">
            Fast, clean, and reliable document tools. Phase 1 sets the foundation for the full
            product.
          </p>
          <Button className="ui-transition" size="lg">
            <Sparkles className="mr-2 size-4" aria-hidden="true" />
            Explore Tools
          </Button>
        </section>

        <section aria-labelledby="foundation-heading">
          <h2 id="foundation-heading" className="sr-only">
            Foundation status
          </h2>
          <Card>
            <CardHeader>
              <CardTitle>Foundation Ready</CardTitle>
              <CardDescription>
                Next.js, TypeScript, Tailwind, reusable UI primitives, and baseline SEO are in
                place.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-6 text-zinc-600">
                Upcoming phases will add navigation, tools, blog content, and file workflows.
              </p>
            </CardContent>
          </Card>
        </section>
      </Container>
    </main>
  );
}
