# Testing Summary

## Commands

```bash
npm install
npm run lint
npm run typecheck
npm run build
npx playwright install chromium
npm run test:e2e
```

## Automated coverage

- Homepage load and analyst positioning
- Projects library + URL filter update
- Featured project detail page
- Unknown slug 404
- Resume missing-PDF behavior
- Contact form required fields / Netlify form markers
- Mobile menu open/close
- Evidence gallery dialog Escape close
- axe accessibility checks on home and a project page

## Manual checks still recommended before recruiter outreach

- Keyboard-only pass of header, filters, gallery, and contact form
- Reduced-motion visual check
- Mobile / tablet / laptop / wide breakpoints
- Broken-link review after real evidence URLs are added
- Netlify preview form submission
- Open Graph preview after setting production `NEXT_PUBLIC_SITE_URL`
