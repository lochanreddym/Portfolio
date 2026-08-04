# Content Authoring Guide

## Where project content lives

Project entries are TypeScript modules in:

```text
src/content/projects/
```

Each file exports a project object that must satisfy the Zod schema in `src/types/project.ts`. The loader in `src/content/projects/index.ts` validates every project at import/build time.

## Add or update a project

1. Create or edit `src/content/projects/<slug>.ts`
2. Register the export in `src/content/projects/index.ts`
3. Add media under `public/projects/<slug>/`
4. Run `npm run typecheck` and `npm run build`

## Required integrity rules

- Never invent metrics, employers, clients, or traction numbers
- Leave `verifiedResults[].value` as `null` until verified
- Hide missing links by omitting them; never use `"#"`
- Set `dataClassification` honestly (`Pending confirmation` when unsure)
- Label synthetic/demo evidence clearly
- Keep DigiPae founder content supportive of analyst positioning

## Media conventions

| Asset | Path |
|-------|------|
| Cover | `public/projects/<slug>/cover.svg` or `.webp` |
| Figures | `public/projects/<slug>/figure-1.webp` … |
| Resume | `public/resume/Lochanreddy-Mallakunta-Resume.pdf` |
| Headshot | `public/images/lochanreddy-headshot.webp` |

Update `coverImage`, `coverAlt`, and gallery `src`/`alt` fields when replacing placeholders.

## Resume and headshot toggles

`src/data/site.ts` checks whether the resume PDF and headshot exist under `public/`.

- Missing resume → download disabled, resume page explains the path
- Missing headshot → initials placeholder

## Site URL

Set `NEXT_PUBLIC_SITE_URL` for canonical URLs, sitemap, and social metadata. Local fallback is `http://localhost:3000`.
