import type { Metadata } from "next";
import { Container } from "@/components/layout";
import { aboutHighlights, aboutPrinciples } from "@/config/about";

export const metadata: Metadata = {
  title: "About",
  description: "Learn what guides DocuSpark and how the product is being built.",
};

export default function AboutPage() {
  return (
    <main id="main-content" className="page-fade-in min-h-screen bg-background text-foreground">
      <Container className="space-y-12 py-16 sm:space-y-16 sm:py-20">
        <section className="space-y-4">
          <p className="inline-flex rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-600">
            About
          </p>
          <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Building practical document tools that feel fast, calm, and dependable.
          </h1>
          <p className="max-w-2xl text-base leading-7 text-zinc-600">
            DocuSpark is inspired by the need for lightweight file workflows that focus on what users
            actually need day to day.
          </p>
        </section>

        <section aria-labelledby="about-highlights-heading" className="space-y-5">
          <h2 id="about-highlights-heading" className="text-2xl font-semibold tracking-tight text-zinc-900">
            What we optimize for
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {aboutHighlights.map((item) => (
              <article key={item.title} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-semibold tracking-tight text-zinc-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="about-principles-heading" className="space-y-5">
          <h2 id="about-principles-heading" className="text-2xl font-semibold tracking-tight text-zinc-900">
            Guiding principles
          </h2>
          <ul className="grid gap-4 md:grid-cols-3">
            {aboutPrinciples.map((item) => (
              <li key={item.title} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-zinc-500">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-zinc-700">{item.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </main>
  );
}
