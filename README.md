# DocuSpark

DocuSpark is a modern document tools web app built with Next.js App Router, TypeScript, and Tailwind CSS.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Inter font
- Lucide icons

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
