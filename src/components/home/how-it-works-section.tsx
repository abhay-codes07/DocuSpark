"use client";

import { Download, SlidersHorizontal, Upload } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useEffect, useRef } from "react";
import { howItWorksSteps } from "@/config/how-it-works";
import type { HowItWorksStep } from "@/types";

const iconByType: Record<HowItWorksStep["icon"], LucideIcon> = {
  upload: Upload,
  configure: SlidersHorizontal,
  download: Download,
};

export function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const target = sectionRef.current;

    if (!target) {
      return;
    }

    const revealCards = () => {
      target.querySelectorAll(".how-step-card").forEach((card) => {
        card.classList.add("how-step-card-visible");
      });
    };

    if (typeof window !== "undefined" && !("IntersectionObserver" in window)) {
      revealCards();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          revealCards();
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="how-it-works-heading"
      className="space-y-6 py-16 sm:py-20"
    >
      <div className="space-y-3">
        <p className="inline-flex rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-600">
          How it works
        </p>
        <h2
          id="how-it-works-heading"
          className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl"
        >
          Three simple steps, from upload to done.
        </h2>
        <p className="max-w-2xl text-base leading-7 text-zinc-600">
          A focused process that keeps your files organized and your actions easy to follow.
        </p>
      </div>

      <ol className="grid gap-4 md:grid-cols-3">
        {howItWorksSteps.map((step, index) => {
          const Icon = iconByType[step.icon];

          return (
            <li
              key={step.title}
              className="how-step-card rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <span className="mb-3 inline-flex rounded-xl border border-sky-100 bg-sky-50 p-2 text-sky-600">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">
                Step {index + 1}
              </p>
              <h3 className="text-base font-semibold tracking-tight text-zinc-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">{step.description}</p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
