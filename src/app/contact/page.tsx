import type { Metadata } from "next";
import { Mail, MessageSquare, TimerReset } from "lucide-react";
import { ContactForm } from "@/components/contact";
import { Container } from "@/components/layout";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach out to the DocuSpark team with feedback, ideas, or product questions.",
};

export default function ContactPage() {
  return (
    <main id="main-content" className="page-fade-in min-h-screen bg-background text-foreground">
      <Container className="space-y-10 py-16 sm:space-y-14 sm:py-20">
        <section className="space-y-4">
          <p className="inline-flex rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-600">
            Contact
          </p>
          <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Send feedback, report issues, or share ideas for new document workflows.
          </h1>
          <p className="max-w-2xl text-base leading-7 text-zinc-600">
            We read every message and use it to improve DocuSpark’s usability and roadmap.
          </p>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-semibold tracking-tight text-zinc-900">Message us</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-600">
              Fill the form below and we will get back to you by email.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </article>

          <aside className="space-y-4">
            <article className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <div className="mb-3 inline-flex rounded-xl border border-sky-100 bg-sky-50 p-2 text-sky-600">
                <Mail className="size-5" aria-hidden="true" />
              </div>
              <h3 className="text-base font-semibold tracking-tight text-zinc-900">Email updates</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Product feedback and support questions are tracked through a simple email flow.
              </p>
            </article>

            <article className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <div className="mb-3 inline-flex rounded-xl border border-sky-100 bg-sky-50 p-2 text-sky-600">
                <TimerReset className="size-5" aria-hidden="true" />
              </div>
              <h3 className="text-base font-semibold tracking-tight text-zinc-900">Response window</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Typical response time is within 1-2 working days depending on message volume.
              </p>
            </article>

            <article className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <div className="mb-3 inline-flex rounded-xl border border-zinc-200 bg-white p-2 text-zinc-700">
                <MessageSquare className="size-5" aria-hidden="true" />
              </div>
              <h3 className="text-base font-semibold tracking-tight text-zinc-900">What to include</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-700">
                Share the tool name, expected outcome, and current issue for faster support.
              </p>
            </article>
          </aside>
        </section>
      </Container>
    </main>
  );
}
