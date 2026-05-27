# DJ Portfolio Website

A single-page portfolio website for DJs built with Astro and Sanity CMS. Features a vertical feed of customizable cards for showcasing music, events, press materials, and more.

## Features

- **Flexible Content Management**: Create Custom Posts with modular content blocks
- **Multiple Card Types**: Custom Posts, Event Cards, Contact Forms, and EPK (Electronic Press Kit)
- **Music Integration**: Embedded audio player with track streaming
- **Responsive Design**: Mobile-first design with CSS Grid and Flexbox
- **Real-time Preview**: Sanity Studio with live preview functionality
- **Automated Deployment**: Webhook-triggered builds on content changes

## Tech Stack

- **Frontend**: Astro 4.x with TypeScript
- **CMS**: Sanity.io v3
- **Styling**: CSS Modules with CSS Variables
- **Hosting**: Cloudflare Pages
- **Audio**: Web Audio API / Howler.js

## Quick Start

### 1. Environment Setup

Copy the environment template and fill in your Sanity project details:

```bash
cp .env.example .env
```

Required environment variables:
- `SANITY_PROJECT_ID`: Your Sanity project ID
- `SANITY_DATASET`: Dataset name (usually 'production')
- `SANITY_API_TOKEN`: API token with read permissions

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Sanity Project

If you don't have a Sanity project yet:

```bash
# Create new Sanity project
npx sanity@latest init

# Or connect to existing project
npx sanity@latest manage
```

### 4. Deploy Sanity Studio

```bash
npm run sanity:deploy
```

### 5. Start Development

```bash
# Start Astro dev server
npm run dev

# Start Sanity Studio (in another terminal)
npm run sanity:dev
```

## Project Structure

```
├── src/
│   ├── components/          # React components (to be created)
│   ├── lib/
│   │   ├── sanity.ts       # Sanity client and queries
│   │   └── transforms.ts   # Data transformation utilities
│   ├── pages/
│   │   └── index.astro     # Main page
│   ├── styles/
│   │   └── global.css      # Global styles and CSS variables
│   └── types/
│       └── index.ts        # TypeScript type definitions
├── sanity/
│   ├── schemas/            # Sanity schema definitions
│   │   ├── blocks/         # Reusable content blocks
│   │   ├── customPost.ts   # Custom Post card schema
│   │   ├── eventCard.ts    # Event Card schema
│   │   ├── contactForm.ts  # Contact Form schema
│   │   ├── epkCard.ts      # EPK Card schema
│   │   └── index.ts        # Schema exports
│   ├── sanity.config.ts    # Sanity Studio configuration
│   └── sanity.cli.ts       # Sanity CLI configuration
├── astro.config.mjs        # Astro configuration
└── package.json
```

## Content Types

### Custom Post Cards
Flexible cards with optional content blocks:
- Title blocks
- Body text (with markdown support)
- Single photos and galleries
- Music tracks and albums
- Event information
- Background styling (image or color)
- Expandable/collapsible content

### Event Cards
Dedicated cards for event listings:
- Multiple events per card
- Chronological ordering
- Past event styling
- Ticket links

### Contact Form Cards
Contact forms with validation:
- Name, email, subject, message fields
- Client-side validation
- Success/error states

### EPK Cards
Electronic Press Kit with:
- Artist bio
- Press photos
- Press links
- Downloadable assets

## Development Workflow

1. **Content Creation**: Use Sanity Studio to create and manage content
2. **Preview**: Real-time preview in Sanity Studio
3. **Development**: Local development with `npm run dev`
4. **Build**: Static site generation with `npm run build`
5. **Deploy**: Automatic deployment via Cloudflare Pages webhooks

## Deployment

### Cloudflare Pages Setup

1. Connect your repository to Cloudflare Pages
2. Set build command: `npm run build`
3. Set build output directory: `dist`
4. Add environment variables in Cloudflare Pages dashboard

### Sanity Webhook

1. In Sanity Studio, go to API settings
2. Create a new webhook pointing to your Cloudflare Pages deploy hook
3. Set triggers for create, update, delete events
4. Add HMAC signature for security

## Customization

### Design System

The project uses CSS variables for consistent theming. Modify `src/styles/global.css` to customize:

- Colors
- Typography
- Spacing
- Border radius
- Shadows
- Breakpoints

### Content Schemas

Add new content blocks or modify existing ones in `sanity/schemas/blocks/`.

### Components

Create React components in `src/components/` for interactive functionality.

## Scripts

- `npm run dev` - Start Astro development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run sanity:dev` - Start Sanity Studio development server
- `npm run sanity:build` - Build Sanity Studio
- `npm run sanity:deploy` - Deploy Sanity Studio

## License

MIT License - see LICENSE file for details.