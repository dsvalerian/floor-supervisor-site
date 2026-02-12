# DJ Portfolio Project Overview

## Project Summary
Single-page portfolio website for a local DJ built with Astro and Sanity.io CMS. The site displays content as a vertical feed of card components resembling a social media timeline.

## Architecture
- **Frontend**: Astro static site generation (in `web/` directory)
- **CMS**: Sanity.io headless CMS (separate hosted studio in `sanity-studio/` directory)
- **Styling**: CSS Modules with CSS variables
- **Language**: TypeScript for type safety
- **Structure**: Monorepo with npm workspaces

## Technology Stack
- Astro 4.x with React/Preact islands
- Sanity.io v3 with GROQ queries
- CSS Modules for styling
- TypeScript for type safety
- Cloudflare Pages for hosting
- Web Audio API for music playback

## Component Hierarchy
```
Feed
├── CustomPostCard (uses shared block components)
├── EventCard (uses EventBlock component)
├── ContactFormCard
├── EPKCard
└── MusicPlayer (persistent across all cards)
```

## Key Features
- **Content Management**: Full CMS integration with real-time preview
- **Card Types**: Custom Posts, Events, Contact Form, EPK
- **Interactive Elements**: Persistent music player, filtering, sorting
- **Responsive**: Mobile-first design with hamburger menu
- **Performance**: Static generation with CDN deployment

## Code Reuse Strategy
- **Shared Sanity schemas**: eventBlock and trackBlock reused across card types
- **Shared React components**: Block components reused between Custom Posts and dedicated cards
- **Common utilities**: Centralized data transformation and validation logic
