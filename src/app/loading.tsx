import { Container } from "@/components/layout";

export default function Loading() {
  return (
    <main id="main-content" className="min-h-screen bg-background text-foreground">
      <Container className="py-16 sm:py-20">
        <div className="animate-pulse space-y-4">
          <div className="h-8 w-48 rounded-xl bg-zinc-200" />
          <div className="h-5 w-full max-w-2xl rounded-xl bg-zinc-200" />
          <div className="h-5 w-full max-w-xl rounded-xl bg-zinc-200" />
        </div>
      </Container>
    </main>
  );
}
