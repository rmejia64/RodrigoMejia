# rodrigomejia.com (v2)

Portfolio site for Rodrigo Mejia, built with Next.js and exported as static HTML for Firebase Hosting.

## Run it

```bash
cd v2
npm install
npm run dev      # http://localhost:3000
npm run build    # writes the static site to v2/out
npm run deploy   # build, then firebase deploy from the repo root
```

## Where things live

| What | File |
| --- | --- |
| Name, email, links, jobs, skills | `src/content/site.ts` |
| Projects and case studies, design gallery | `src/content/projects.ts` |
| Home page layout | `src/app/page.tsx` |
| Case study template | `src/app/work/[slug]/page.tsx` |
| All styles and color tokens | `src/app/globals.css` |
| Hero animation | `src/components/Flock.tsx` |
| Resume PDF | `public/Rodrigo_Mejia_CV.pdf` |
| Link preview image | `public/og.png` |

Most updates are content-only: edit `site.ts` or `projects.ts` and redeploy. A new project needs an entry in
`projects` (its case study page, sitemap entry and home-page row are generated from it) and, optionally, a WebP
screenshot in `public/images/work/`.

## Notes

- **Static export.** `next.config.ts` sets `output: "export"`, so there is no server. Features that need one
  (API routes, image optimization, middleware) are off.
- **Fonts.** Headings use OCR-A from the Adobe Fonts kit `agq7tel`; the kit must allow the `rodrigomejia.com`
  domain. Body text is Atkinson Hyperlegible Next, self-hosted in `src/fonts` (SIL Open Font License).
- **Images.** Screenshots are pre-converted to WebP (originals were 1.5 to 6 MB PNGs). Keep new ones under about
  1800 px wide.
- **Lighthouse** (static build, simulated mobile): 99 performance, 100 accessibility, 100 best practices, 100 SEO.
