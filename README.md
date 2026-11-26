# Portfolio

Source for [amoddhopavkar.com](https://amoddhopavkar.com): a single-page, minimal portfolio built with [Astro](https://astro.build) and plain CSS, deployed on Netlify.

## Stack

- **Astro**: static HTML at build time; no client-side JavaScript is shipped.
- **Plain CSS**: design tokens and automatic light/dark mode in `src/styles/global.css`.
- **Self-hosted fonts**: Source Serif 4 and Inter via Fontsource, so there are no third-party requests.
- **Netlify**: builds from `main`; every pull request gets a deploy preview. Settings live in `netlify.toml`.

## Editing content

All content lives in [`src/data/profile.ts`](src/data/profile.ts): hero, impact numbers, experience, projects and skills. Edit that file; the markup doesn't need to change. Keep it consistent with LinkedIn and the resume.

Other files:

| Path | What it is |
| --- | --- |
| `src/pages/index.astro` | The home page layout |
| `src/pages/404.astro` | Not-found page |
| `src/layouts/Base.astro` | `<head>`: SEO, link-preview tags, structured data |
| `public/resume.pdf` | Resume linked from the site |
| `public/og-image.png` | 1200×630 link-preview card for LinkedIn, Slack and X |

## Local development

Requires Node.js 22.23.4 or later.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serves dist/ locally
```

After a deploy that changes the title, description or preview card, run the URL through [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) to refresh LinkedIn's cache.
