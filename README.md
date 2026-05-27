# Floor Supervisor — Portfolio Site

> **Work in progress.** The site is in a demo-able state but not yet complete. Features, content, and polish are still being actively developed.

Portfolio and promotional website for Chicago DJ Floor Supervisor. Built as a headless CMS-driven single-page app with a persistent music player, content feed, and category filtering.

**Live demo:** [demo.floorsupervisor.com](https://demo.floorsupervisor.com)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend framework | [Astro 5](https://astro.build) with React 19 islands |
| CMS | [Sanity v5](https://www.sanity.io) (hosted Studio + GROQ) |
| State management | [Nanostores](https://github.com/nanostores/nanostores) |
| Styling | CSS Modules + CSS custom properties |
| Language | TypeScript |
| Hosting | [Cloudflare Pages](https://pages.cloudflare.com) |
| Asset CDN | Sanity CDN |

---

## Architecture

Monorepo with two npm workspaces:

```
/
├── web/            # Astro frontend (deployed to Cloudflare Pages)
└── sanity-studio/  # Sanity Studio CMS (deployed separately)
```

Content is authored in Sanity Studio, fetched at build time via GROQ queries, and rendered as a vertical card feed. A custom deploy tool in the Studio lets the content author trigger Cloudflare Pages builds directly.

### Content Block Types

Each post in the feed is composed of configurable blocks:

- **Music** — cover art, audio tracks, playback integration
- **Photo** — single image or gallery
- **Text** — styled multi-line text
- **Events** — date, venue, location, ticket links
- **Contact Form** — name, email, subject, message

---

## Features

- Persistent bottom music player with play/pause, skip, progress scrubbing
- Category filter menu with Nanostore-based state shared across islands
- Sticky header with frosted-glass blur
- Mobile-first responsive layout using `dvh` units for viewport stability
- Custom Sanity Studio deploy tool for triggering preview and live Cloudflare builds

---

## Dev Environment Setup

### Prerequisites

- Node.js 18+
- A [Sanity](https://www.sanity.io) account and project

### 1. Install dependencies

From the repo root (installs both workspaces):

```sh
npm install
```

### 2. Configure environment variables

**`web/.env.development`**
```
PUBLIC_SANITY_PROJECT_ID=your_project_id
PUBLIC_SANITY_DATASET=dev
```

**`sanity-studio/.env.development`**
```
SANITY_STUDIO_PROJECT_ID=your_project_id
SANITY_STUDIO_DATASET=dev
SANITY_STUDIO_PREVIEW_DEPLOY_HOOK=your_cloudflare_deploy_hook_url
SANITY_STUDIO_LIVE_DEPLOY_HOOK=your_cloudflare_deploy_hook_url
```

### 3. Run

```sh
npm run dev          # runs both web (localhost:4321) and studio (localhost:3333) concurrently
npm run dev:web      # web only
npm run dev:studio   # studio only
```

### Other commands

| Command | Action |
|---|---|
| `npm run build` | Build both web and studio |
| `npm run build:web` | Build web to `web/dist/` |
| `npm run build:studio` | Build Sanity Studio |
| `npm run dev --workspace=sanity-studio -- gen` | Regenerate Sanity TypeScript types |
