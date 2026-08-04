# Lochanreddy Mallakunta · Analytics Portfolio

Recruiter-friendly analytics portfolio for Data Analyst, BI/Reporting, Business, Operations, Marketing, Product, RevOps, and Financial Data Analyst roles.

**Primary headline:** Turning data into decisions across BI, business, operations, marketing, and product.

## Stack

- Next.js App Router
- TypeScript (strict)
- Tailwind CSS
- Zod-validated project content
- Playwright + axe smoke tests
- Netlify deployment target

## Quick start

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

| Variable | Purpose | Local fallback |
|----------|---------|----------------|
| `NEXT_PUBLIC_SITE_URL` | Canonical URLs, sitemap, Open Graph, JSON-LD | `http://localhost:3000` |

After the first Netlify deploy, set this to `https://<site>.netlify.app` and redeploy. If you later add a custom domain, update the same variable.

## Scripts

```bash
npm run dev          # local development
npm run build        # production build
npm run start        # serve production build
npm run lint         # ESLint
npm run typecheck    # TypeScript
npm run test:e2e     # Playwright smoke + accessibility tests
```

## Content

- Site identity: `src/data/site.ts`
- Skills / approach: `src/data/skills.ts`
- Experience placeholders: `src/data/experience.ts`
- Projects: `src/content/projects/`
- Authoring guide: `docs/content-authoring-guide.md`
- Evidence checklist: `docs/project-evidence-checklist.md`
- Content inventory: `docs/content-inventory.md`

## Missing assets (add before recruiter outreach)

1. `public/resume/Lochanreddy-Mallakunta-Resume.pdf`
2. `public/images/lochanreddy-headshot.webp`
3. Real project evidence images under `public/projects/<slug>/`
4. Verified metrics, dates, dataset sources, and cleared external links

Until those exist, the site uses clearly labeled placeholders and disables resume download automatically.

## Netlify

See [`docs/netlify-deployment.md`](docs/netlify-deployment.md).

Important: the contact form is Netlify-compatible, but do **not** claim it works until tested in a deployed Netlify preview.

## Quality gates

```bash
npm run lint
npm run typecheck
npm run build
npx playwright install chromium
npm run test:e2e
```

## Contact

- Email: lochanreddy.m64@gmail.com
- GitHub: https://github.com/lochanreddym
- LinkedIn: https://www.linkedin.com/in/lochanreddy64m/
- DigiPae: https://digipae.com
