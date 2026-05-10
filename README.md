# Runze (Auen) Gao Academic Website

Bilingual static academic website for Runze (Auen) Gao / 高润泽, built with Next.js, TypeScript, and Tailwind CSS.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build for Deployment

```bash
npm run build
```

The site is configured with `output: "export"` in `next.config.mjs`, so the static export will be generated in `out/`.

Recommended deployment targets:

- Vercel: import the repository and use the default Next.js settings.
- Netlify: build command `npm run build`, publish directory `out`.
- GitHub Pages: build with `npm run build` and publish the `out` folder.

## Where to Update Content

- Profile, affiliation, tagline, biography: `data/profile.ts`
- Publication metadata, DOI links, statuses, highlights: `data/publications.ts`
- Research stream structure: `data/researchAgenda.ts`
- Featured research projects: `data/projects.ts`
- Academic timeline: `data/timeline.ts`
- Awards: `data/awards.ts`
- Gallery captions and alt text: `data/gallery.ts`
- Google Scholar, ORCID, email, CV link: `data/links.ts` (replace the current Google Scholar search URL with the exact profile URL when available)
- Navigation labels and language type: `data/i18n.ts`

## Where to Place Files

- CV PDF: `public/cv/Runze_Gao_CV.pdf`
- Main profile photo: `public/images/profile/runze-gao-corridor-portrait.jpg`
- Gallery photos: `public/images/gallery/`
- Optional publication images or screenshots: `public/images/publications/`
- Publication PDFs, if you have permission to share them publicly: `public/papers/`
- Google Scholar screenshot reference: `public/images/publications/google-scholar-reference.png`

## Current Asset Choices

- Hero portrait: `public/images/profile/runze-gao-corridor-portrait.jpg`
- Gallery includes academic portrait, childhood/origins photo, cultural experience, and outdoor recreation.
- The photo with children was not used by default because public consent is unclear.
- The Google Scholar screenshot is stored only as a reference and is not displayed as a main public metric image.

## Editing Publications

Edit `data/publications.ts`.

Use these status labels only when accurate:

- `Published`
- `Major Revision`
- `Submitted`
- `Under Review`
- `Working Paper`
- `Research Note`

Published articles can include a `doi`. Manuscripts under review and working papers should not include fake DOI or paper links.

## Editing Bilingual Text

Most text uses this pattern:

```ts
{
  en: "English text",
  zh: "中文文本"
}
```

English is the default language in the website UI. Chinese is available through the `EN / 中文` switcher.

## Image Guidance

Use compressed JPG or WebP images where possible. Keep filenames stable after adding them to `data/gallery.ts`. Add meaningful alt text in both English and Chinese.

## Notes

This first version uses the content supplied in the project brief and local materials. After you provide final Google Scholar, ResearchGate, LinkedIn, and any public paper links, update `data/links.ts` and `data/publications.ts`.
