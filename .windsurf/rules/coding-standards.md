# Coding Standards

## TypeScript Standards
- **Always use TypeScript** - no JavaScript files
- **Never use `any` type** - use proper typing or `unknown` if necessary
- **Define interfaces** for all props, data structures, and API responses
- **Use strict TypeScript config** with proper type checking

## CSS and Styling
- **Use CSS Modules** for component-specific styles
- **CSS Variables** for all design tokens (colors, fonts, sizes, spacing)
- **Global CSS file** (`src/styles/global.css`) for:
  - CSS reset properties (`box-sizing: border-box`, `margin: 0`, `padding: 0`)
  - CSS variables defined in `:root`
- **Accessibility first** - ensure proper contrast, semantic HTML, keyboard navigation
- **Mobile-first responsive design** - start with mobile styles, then enhance for larger screens
- **Use CSS Grid and Flexbox** for layout systems
- **Max width**: 1280px for main content container
- **Breakpoints**: Focus on 768px (tablet) and 1024px (desktop) for media queries

## Code Organization
- **Prioritize simplicity and readability** over clever solutions
- **Reuse code** wherever possible:
  - Shared components for common UI patterns
  - Utility functions for repeated logic
  - Common types and interfaces
- **Component structure**:
  - One component per file
  - Co-locate styles with components using CSS Modules
  - Clear, descriptive naming

## File Structure
```
root/
├── package.json (workspace root)
├── web/ (Astro frontend)
│   ├── src/
│   │   ├── components/
│   │   │   ├── ComponentName/
│   │   │   │   ├── ComponentName.tsx
│   │   │   │   ├── ComponentName.module.css
│   │   │   │   └── index.ts
│   │   ├── styles/
│   │   │   └── global.css
│   │   ├── types/
│   │   │   └── index.ts
│   │   └── utils/
│   │       └── helpers.ts
│   ├── astro.config.mjs
│   └── package.json
└── sanity-studio/ (Sanity CMS)
    ├── schemaTypes/
    │   └── index.ts
    ├── sanity.config.ts
    ├── sanity.cli.ts
    └── package.json
```

## CSS Variables Example
```css
/* global.css */
:root {
	/* Colors */
	--color-primary: #2563eb;
	--color-secondary: #64748b;
	--color-background: #ffffff;
	--color-text: #1e293b;

	/* Typography */
	--font-family-sans: "Inter", system-ui, sans-serif;
	--font-family-mono: "JetBrains Mono", monospace;
	--font-size-xs: 0.75rem;
	--font-size-sm: 0.875rem;
	--font-size-base: 1rem;
	--font-size-lg: 1.125rem;
	--font-size-xl: 1.25rem;

	/* Spacing */
	--spacing-xs: 0.25rem;
	--spacing-sm: 0.5rem;
	--spacing-md: 1rem;
	--spacing-lg: 1.5rem;
	--spacing-xl: 2rem;

	/* Layout */
	--max-width: 1280px;
	--breakpoint-tablet: 768px;
	--breakpoint-desktop: 1024px;
}
```

## Accessibility Guidelines
- Use semantic HTML elements (`<main>`, `<nav>`, `<section>`, `<article>`)
- Provide proper ARIA labels and roles
- Ensure keyboard navigation works for all interactive elements
- Maintain proper heading hierarchy (h1 → h2 → h3)
- Use sufficient color contrast ratios
- Provide alt text for images
- Use focus indicators for interactive elements
