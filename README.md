# Lochanreddy Mallakunta · Analytics Portfolio

Recruiter-friendly analytics portfolio for Data Analyst, BI/Reporting, Business, Operations, Marketing, Product, RevOps, and related roles.

**Primary headline:** Turning data into decisions across BI, business, operations, marketing, and product.

## Stack

- Next.js App Router + TypeScript
- Tailwind CSS
- Playwright + axe smoke tests
- Netlify deployment

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
| `NEXT_PUBLIC_SITE_URL` | Canonical URLs, sitemap, Open Graph | `http://localhost:3000` |

After the first Netlify deploy, set this to `https://<site>.netlify.app` and redeploy. Update again if you add a custom domain.

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

| File | Purpose |
|------|---------|
| `src/data/site.ts` | Identity, skills, role map, analytical approach |
| `src/data/experience.ts` | Experience, education, certifications |
| `src/data/projects.ts` | All project case studies |
| `src/types/project.ts` | Project TypeScript model |

## Assets

| Path | Status |
|------|--------|
| `public/resume/Lochanreddy-Mallakunta-Resume.pdf` | Present |
| `public/images/lochanreddy-headshot.webp` | Optional — initials placeholder until added |
| `public/images/project-placeholder.svg` | Shared fallback for project evidence |
| Real evidence under `public/images/projects/` | Add when cleared for public use |

## Netlify deployment

1. Connect the GitHub repo in Netlify (`Add new site → Import an existing project`).
2. Build command: `npm run build`. Leave the Next.js runtime publish settings alone (do not force `out`).
3. Node version: `20` (`.nvmrc` is included).
4. Set `NEXT_PUBLIC_SITE_URL` to the Netlify URL, then redeploy.
5. Contact form uses Netlify Forms (`data-netlify="true"`, honeypot, POST to `/contact/success`). Do **not** claim it works until tested in a deployed preview.
6. Verify homepage, project filters, a case study, 404, resume download, contact markup, sitemap, and robots after deploy.

Config lives in `netlify.toml`.

## Structure

```
src/
  app/           # routes
  components/    # Header, Footer, HomeSections, Project*, ContactForm
  data/          # site, projects, experience
  types/         # Project interface
public/
  resume/        # PDF
  images/        # headshot + shared project placeholder
  social/        # Open Graph image
```

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
- DigiPae: https://www.digipae.com
