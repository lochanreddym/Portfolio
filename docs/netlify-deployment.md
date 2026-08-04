# Netlify Deployment Guide

## Prerequisites

- Repository on GitHub: https://github.com/lochanreddym/Portfolio
- Node.js 20+ locally (Netlify should use Node 20)
- Resume PDF and headshot optional for first deploy (site degrades safely)

## 1. Push the repository

Ensure the implementation branch is merged to `main` (owner approval required) or connect Netlify to the feature branch for preview.

```bash
git push -u origin main
```

## 2. Connect to Netlify

1. Open [Netlify](https://app.netlify.com/)
2. **Add new site → Import an existing project**
3. Select the GitHub repository `lochanreddym/Portfolio`
4. Branch: `main` (or a preview branch)

## 3. Build settings

Netlify should auto-detect Next.js. Prefer:

| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Publish directory | Leave to Next.js runtime (do **not** force `out` or a wrong folder) |
| Node version | `20` (via `NODE_VERSION` env or `.nvmrc`) |

Do **not** enable `output: 'export'` unless a static-only requirement appears later.

## 4. Environment variables

Set in **Site configuration → Environment variables**:

| Name | Value |
|------|-------|
| `NEXT_PUBLIC_SITE_URL` | `https://<your-site>.netlify.app` |

Local development fallback (`.env.local`):

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

After the first production deploy, copy the Netlify URL into `NEXT_PUBLIC_SITE_URL` and redeploy so canonical URLs, sitemap, and Open Graph tags are correct.

If you later buy a custom domain, update `NEXT_PUBLIC_SITE_URL` to that domain and redeploy.

## 5. Contact form (Netlify Forms)

The contact page uses a Netlify-compatible form (`data-netlify="true"`, honeypot field, POST to `/contact/success`).

**Important:** Do not claim the form works until you:

1. Deploy a Netlify preview or production build
2. Submit a test message
3. Confirm it appears under **Forms** in the Netlify UI
4. Confirm success redirect/page renders

Until then, the visible email (`lochanreddy.m64@gmail.com`) remains the reliable contact path.

## 6. Post-deploy verification checklist

- [ ] Homepage loads over HTTPS
- [ ] `/projects` filters update URL and results
- [ ] A featured case study loads
- [ ] Unknown slug returns 404
- [ ] Resume download works **or** remains correctly disabled if PDF absent
- [ ] Email mailto link works; copy-email control works
- [ ] Contact form tested on Netlify
- [ ] `/sitemap.xml` lists major routes
- [ ] `/robots.txt` references sitemap
- [ ] Open Graph preview (LinkedIn / opengraph.xyz) shows expected image/title
- [ ] Keyboard navigation through header and gallery
- [ ] Mobile menu open/close + Escape
- [ ] No broken `#` links
- [ ] Accessibility spot-check (axe DevTools)

## 7. Optional: `netlify.toml`

A minimal config may pin Node and document the build command. Avoid incorrect publish directories. Prefer Netlify’s automatic Next.js runtime over pinning `@netlify/plugin-nextjs` unless you need a specific version.

## 8. After custom domain purchase

1. Add domain in Netlify DNS
2. Set `NEXT_PUBLIC_SITE_URL=https://yourdomain.com`
3. Redeploy
4. Re-check canonical tags, sitemap, and social previews
