# Implementation Plan — Analytics Portfolio

## Mission

Build a light, modern, recruiter-friendly analytics portfolio for **Lochanreddy Mallakunta**, positioning for Data Analyst, BI/Reporting, Business, Operations, Marketing, Product, RevOps, and Financial Data Analyst roles.

Primary headline: *Turning data into decisions across BI, business, operations, marketing, and product.*

Founder experience (CEIVIS / DigiPae) supports product thinking and ownership; analyst career positioning remains primary.

## Repository baseline

- Git: initialized on `main`
- npm: not previously initialized (scaffolded during implementation)
- Remote: https://github.com/lochanreddym/Portfolio
- Deployment target: Netlify (no custom domain assumed)
- Site URL env: `NEXT_PUBLIC_SITE_URL` (local fallback `http://localhost:3000`)

## Locked decisions

| Decision | Choice |
|----------|--------|
| Framework | Next.js App Router + TypeScript strict + Tailwind |
| Content | Local MDX + Zod frontmatter validation |
| Experience route | Not created; covered on Home + About |
| Font | Geist via `next/font` |
| Dialog | `@radix-ui/react-dialog` for gallery lightbox |
| Resume/headshot missing | Config flags + placeholders; no fake PDF/portrait |
| Tax project title | Tax Filing Process and Customer Analytics (no H&R Block until confirmed) |
| DigiPae URL | Active — may be exposed |
| Tableau | Omitted until evidenced |

## Routes

- `/` Homepage
- `/projects` Filterable library
- `/projects/[slug]` Case studies
- `/about`
- `/resume`
- `/contact`
- `/contact/success`

## Homepage order

1. Skip link → Header
2. Hero
3. Title map
4. Credibility strip
5. Featured projects (4)
6. Skills by analytical function
7. Founder section
8. Experience & education summary
9. Analytical approach
10. Contact CTA
11. Footer

## Seven projects

1. `digipae-payment-product-analytics` (featured)
2. `smart-city-research-analytics` (featured)
3. `tax-filing-process-analytics` (featured)
4. `ai-driven-healthcare-analysis` (featured)
5. `saas-revenue-operations-analytics`
6. `marketing-attribution-customer-segmentation`
7. `operations-inventory-performance-analytics`

## Quality gates

1. `npm install`
2. Lint
3. TypeScript check
4. Production build
5. Playwright smoke + axe accessibility tests
6. Manual keyboard / reduced-motion / responsive checks documented

## Definition of done

- Builds successfully
- Recruiter can grasp role in first viewport
- Founder content supports, does not overshadow, analyst positioning
- Case studies within one click from home
- No fabricated metrics
- Missing assets documented
- Filters, keyboard nav, metadata, sitemap/robots ready
- Netlify deployment docs complete
- Contact form structure ready; live form success not claimed until Netlify preview test

## Out of scope

Testimonials, awards, logos, press, invented metrics, full-text search, auth, theme switch, blog, CMS, comments, newsletter.
