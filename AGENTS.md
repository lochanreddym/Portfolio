<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

Single-service app: a Next.js 16 (App Router) analytics portfolio. No backend, database, or external services. Standard commands live in `package.json` and `README.md` (`dev`, `build`, `start`, `lint`, `typecheck`, `test:e2e`).

- Node: `.nvmrc` pins 20; the VM ships Node 22, which also works for Next.js 16. `npm install` is the only dependency step.
- Env: copy `.env.example` to `.env.local` (only `NEXT_PUBLIC_SITE_URL`, defaults to `http://localhost:3000`). The app runs fine without it.
- E2E gotcha: run Playwright against the production build, not `next dev`. `playwright.config.ts` uses `baseURL` `http://127.0.0.1:3000` and its `webServer` runs `npm run build && npm run start`. If a `next dev` server is already listening on port 3000, Playwright reuses it (`reuseExistingServer` is on when `CI` is unset), and Next.js 16 then blocks cross-origin dev-resource chunks (127.0.0.1 vs localhost), breaking client JS so interactive tests (mobile menu) fail. Stop any dev server first, or run `CI=1 npm run test:e2e` so Playwright builds and starts its own production server.
- Playwright browser: `npx playwright install --with-deps chromium` is required once before `test:e2e` (not covered by `npm install`).
- `AGENTS.md` / `CLAUDE.md` are auto-generated/re-added by `next dev`; keep them committed so the working tree stays clean.
