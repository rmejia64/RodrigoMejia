# rodrigomejia.com

Portfolio site for Rodrigo Mejia, full-stack software engineer.

The site lives in [`v2/`](v2/): a Next.js app exported as static HTML and served by Firebase Hosting (`firebase.json` at the repo root points at `v2/out`).

```bash
cd v2
npm install
npm run dev      # http://localhost:3000
npm run deploy   # build, then firebase deploy --only hosting
```

Content is in `v2/src/content/` (`site.ts` for experience and skills, `projects.ts` for client work and builds). Screenshots live in `v2/public/images/work/`, each with an 800px `-sm` variant.

The previous Create React App version of the site is in git history before the October 2026 refresh.
