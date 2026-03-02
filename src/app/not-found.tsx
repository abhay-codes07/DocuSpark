import Link from "next/link";
import { Container } from "@/components/layout";

export default function NotFound() {
  return (
    <main id="main-content" className="page-fade-in min-h-screen bg-background text-foreground">
      <Container className="flex min-h-[70vh] items-center justify-center py-16 sm:py-20">
        <section className="max-w-lg space-y-4 rounded-3xl border border-zinc-200 bg-white p-8 text-center shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">404</p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">Page not found</h1>
          <p className="text-sm leading-6 text-zinc-600">
            The page you requested does not exist or may have moved.
          </p>
          <Link
            href="/"
            className="focus-ring ui-transition inline-flex rounded-xl bg-sky-500 px-4 py-2 text-sm font-medium text-white hover:bg-sky-600"
          >
            Go home
          </Link>
        </section>
      </Container>
    </main>
  );
}
