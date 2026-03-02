# DocuSpark

DocuSpark is a modern document tools web app built with Next.js App Router, TypeScript, and Tailwind CSS.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Inter font
- Lucide icons
- MDX (blog content)

## Development

```bash
npm install
npm run dev
```

## Quality Checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Branch Workflow

- `main`: single production branch (Phase 3 onward)

## Contributing

1. Commit directly to `main` in small scoped changes.
2. Keep commits clean and conventional (`feat:`, `fix:`, `refactor:`, `style:`, `chore:`, `docs:`).
3. Run quality checks before pushing.

## Commit Convention

- `feat:` new user-facing capability
- `fix:` bug fix or accessibility correction
- `refactor:` structural improvement without behavior change
- `style:` visual or styling-only updates
- `chore:` tooling, config, or maintenance
- `docs:` documentation changes

## Phase 2 Notes

- Navbar is globally rendered from `src/app/layout.tsx`.
- Desktop navigation appears at `md` and above.
- Mobile navigation uses a right-side slide panel with overlay and Escape close.
- Skip link support is enabled for keyboard users.

## Phase 3 Notes

- Homepage now uses a centered hero section component.
- Hero includes two CTAs, subtle motion, and a dedicated illustration placeholder.
- Responsive tuning ensures clean layout from small mobile screens to desktop.

## Phase 4 Notes

- Added a reusable `ToolCard` component with keyboard-friendly interactions.
- Added a six-card tools grid section on the homepage with icon mapping from Lucide.
- Added dynamic placeholder pages for each tool route to avoid broken links.

## Phase 5 Notes

- Added a 3-step �How It Works� section with icon + text cards.
- Included scroll-triggered reveal animation using `IntersectionObserver`.
- Added reduced-motion support and graceful fallback for non-supporting environments.

## Phase 6 Notes

- Added an auto-scrolling testimonials section with subtle motion and hover pause.
- Added a responsive 4-card blog preview section on the homepage.
- Added initial `/blog` and `/blog/[slug]` routes for preview navigation.

## Phase 7 Notes

- Implemented a true MDX-backed blog system with 4 pre-filled posts in `src/content/blog`.
- Added a blog loader utility for slug generation, sorting, previews, and post fetching.
- Added static dynamic routing for posts and per-post SEO metadata generation.
- Homepage blog previews now read from real blog metadata instead of hardcoded placeholders.

## Phase 8 Notes

- Added `/about` page with product story, highlights, and guiding principles.
- Added `/contact` page with responsive layout and support information cards.
- Implemented an accessible frontend-only contact form with client-side validation and success state.
