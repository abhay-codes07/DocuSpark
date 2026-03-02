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
- Tool pages with real and mock workflows:
  - Real client-side: Merge PDF, Split PDF, Compress PDF, Image to PDF
  - Real server-side: Word to PDF, Protect PDF (requires local engines)
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
- pdf-lib
- JSZip

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

## Server Engine Prerequisites (for true Word->PDF + Protect PDF)

Install these on the machine running Next.js:

- LibreOffice (`soffice` on PATH) for Word -> PDF
- qpdf (`qpdf` on PATH) for PDF password protection

If not installed, the app returns clear server error messages for those tools.

## Project Structure

```text
src/
  app/                 # Routes + API routes
  components/          # UI + feature components
  config/              # Static config/content maps
  content/blog/        # MDX posts
  lib/                 # Utilities + blog/tool engines
  types/               # Shared TypeScript types
```

## Branching

- Single branch workflow: `main`

## Status

Phase 1 through Phase 10 are implemented on `main`.

## Next Focus

- Add worker queue and background jobs for large-file server processing
- Add robust file size limits + virus scanning for production upload safety
- Add analytics + real user feedback loop
- Continue Lighthouse + accessibility tuning
