# Personal Portfolio

This is a static-exportable Next.js portfolio generated from the v0/Vercel download.

## Run Locally

Install Node.js first if it is not already installed: https://nodejs.org

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

If you prefer npm:

```bash
npm install
npm run dev
```

## Build A Free-Hostable Static Site

```bash
pnpm build
```

The finished site is generated in `out/`. That folder can be hosted on free static hosts such as Cloudflare Pages, Netlify, GitHub Pages, or Firebase Hosting.

Recommended free hosting setup:

- Build command: `pnpm build`
- Output directory: `out`
- Node version: 24 or newer

## Edit Content

Most portfolio content lives in:

- `components/hero-section.tsx`
- `components/experience-section.tsx`
- `components/competencies-section.tsx`
- `components/education-section.tsx`
- `components/contact-section.tsx`
- `public/images/swajit-photo.png`

The site is no longer dependent on Vercel Analytics or Vercel deployment.
