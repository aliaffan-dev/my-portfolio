# Ali Affan — Portfolio

Static portfolio built with [Astro](https://astro.build). Zero client-side framework; plain CSS.

## Commands

| Command           | What it does                                |
| ----------------- | ------------------------------------------- |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Dev server with hot reload → localhost:4321 |
| `npm run build`   | Production build into `dist/`               |
| `npm run preview` | Serve the built `dist/` locally             |

## Editing content

All personal details live in **`src/data/site.ts`** — name, links, email, résumé path,
availability. Any value set to `null` hides its button/link instead of showing it broken.

- **Résumé:** put the PDF in `public/` and set `resumeUrl: '/your-file.pdf'`.
- **Email:** set `email` — enables the "Email me" button.
- **Sections in the nav:** add `{ id, label }` to `navSections` once a section exists — numbering is automatic.
- **Skills:** edit `skillGroups`. `usedIn` lists the projects where a skill is used (shown on hover/tap).
- **Projects:** `featuredProject` drives the large JobScope block; add entries to `moreProjects`
  for smaller cards (`repo` / `demo` are optional — cards without them say "Code not published").
  Set `featuredProject.demo` to `null` to show "Live demo link pending verification" instead of a button.
- **Experience / Certifications / Achievements / Contact:** edit `experience`, `certifications`,
  `achievements` and `contact`. Certifications accept optional `date` and `credentialUrl` —
  they appear automatically once filled in.
- **Domain:** after deploying, set `site` in `astro.config.mjs` to your real URL.

## Structure

```
src/
  data/site.ts          ← content & config
  styles/global.css     ← design tokens, buttons, animations
  layouts/BaseLayout    ← <head>, SEO meta, fonts
  components/           ← Nav, Hero, NotebookCell, SectionHeader, About, Skills,
                          Projects, FeaturedProject, ScreenshotGallery, ProjectCard,
                          Experience, Certifications, Achievements, Contact, Footer, Icon
public/projects/        ← project screenshots (WebP)
  pages/index.astro     ← assembles the page
```
