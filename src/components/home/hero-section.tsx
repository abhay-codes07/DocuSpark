import Link from "next/link";
import { ArrowRight, FileStack } from "lucide-react";
import { Button } from "@/components/ui";
import { heroContent } from "@/config/home";
import { HeroIllustration } from "./hero-illustration";

export function HeroSection() {
  return (
    <section aria-labelledby="hero-heading" className="hero-surface rounded-3xl px-4 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto grid w-full max-w-5xl items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="text-center lg:text-left">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-sky-700">
            <FileStack className="size-3.5" aria-hidden="true" />
            {heroContent.eyebrow}
          </p>
          <h1 id="hero-heading" className="text-balance text-3xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
            {heroContent.title}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-7 text-zinc-600 lg:mx-0 sm:text-lg">
            {heroContent.description}
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row lg:justify-start">
            <Button asChild size="lg">
              <Link href={heroContent.primaryCta.href}>
                {heroContent.primaryCta.label}
                <ArrowRight className="ml-2 size-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href={heroContent.secondaryCta.href}>{heroContent.secondaryCta.label}</Link>
            </Button>
          </div>
        </div>
        <HeroIllustration />
      </div>
    </section>
  );
}
