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

- `main`: production
- `develop`: integration
- `phase-X`: implementation branches for each project phase

## Contributing

1. Create a branch from `develop`.
2. Keep commits small and scoped.
3. Use conventional commit messages (`feat:`, `fix:`, `refactor:`, `style:`, `chore:`, `docs:`).
4. Open a PR to `develop` after validation checks pass.

## Phase Delivery Rules

- Implement work one phase at a time.
- Keep the app buildable after every commit.
- Push after each commit while working on a phase branch.
- Merge phase branch into `develop` before starting the next phase.

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
- Mobile navigation uses a right-side slide panel with overlay, Escape close, and route-change close.
- Skip link support is enabled for keyboard users.
