import { testimonials } from "@/config/testimonials";

const duplicatedTestimonials = [...testimonials, ...testimonials];

export function TestimonialsSection() {
  return (
    <section aria-labelledby="testimonials-heading" className="space-y-6 py-16 sm:py-20">
      <div className="space-y-3">
        <p className="inline-flex rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-600">
          Testimonials
        </p>
        <h2 id="testimonials-heading" className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
          Loved by people who work with files every day.
        </h2>
      </div>

      <div className="testimonials-marquee-mask overflow-hidden">
        <div className="testimonials-marquee-track flex gap-4 py-1">
          {duplicatedTestimonials.map((item, index) => (
            <article
              key={`${item.name}-${index}`}
              className="w-[18rem] shrink-0 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
            >
              <p className="text-sm leading-6 text-zinc-700">“{item.quote}”</p>
              <p className="mt-4 text-sm font-semibold text-zinc-900">{item.name}</p>
              <p className="text-xs uppercase tracking-[0.12em] text-zinc-500">{item.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
