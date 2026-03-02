# DocuSpark

**DocuSpark is a fast, minimal document-tools web app for everyday file workflows.**

Think: merge, split, compress, and convert files in a clean UI without SaaS clutter.

## Why This Exists

Most PDF/file tools are either:

- overloaded with upsells and distractions, or
- functional but visually outdated and slow.

DocuSpark is built to be the opposite: simple, modern, and fast by default.

## What It Does Today

- Modern homepage with structured sections:
  - Hero
  - Tools Grid
  - How It Works
  - Testimonials
  - Blog Preview
- Tool pages with client-side mock workflows:
  - Merge PDF
  - Split PDF
  - Compress PDF
  - Image to PDF
  - Word to PDF
  - Protect PDF
- Progress + loading states for tool actions
- MDX-powered blog system with dynamic routing (`/blog/[slug]`)
- About + Contact pages
- Accessible frontend-only contact form with validation
- SEO hardening:
  - Metadata
  - `sitemap.xml`
  - `robots.txt`
  - Manifest route

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Inter font
- Lucide icons
- MDX

## Product Principles

- **Clarity first**: each screen should be obvious in under 3 seconds
- **Fast interactions**: no heavy UI or unnecessary dependencies
- **Accessible by default**: keyboard navigation, semantic HTML, visible focus
- **Useful motion only**: subtle animations that support comprehension

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality Checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Project Structure

```text
src/
  app/                 # Routes (home, blog, tools, about, contact)
  components/          # UI + feature components
  config/              # Static config/content maps
  content/blog/        # MDX posts
  lib/                 # Utilities + blog/tool helpers
  types/               # Shared TypeScript types
```

## Branching

- Single branch workflow: `main`

## Status

Phase 1 through Phase 10 are implemented on `main`.

## Next Focus

- Replace tool mocks with real processing pipeline where feasible
- Add analytics + real user feedback loop
- Continue performance and accessibility tuning based on Lighthouse + usage data
