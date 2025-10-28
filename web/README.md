# AI DevKit Website

This is the source code for the AI DevKit static website built with Next.js.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Building

```bash
npm run build
```

This generates static files in the `out/` directory.

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

### Manual Deployment Setup

1. Go to your repository settings on GitHub
2. Navigate to **Settings > Pages**
3. Under **Source**, select **GitHub Actions**
4. The workflow will run automatically on push to main

## Project Structure

```
web/
├── app/              # Next.js app directory
│   ├── docs/         # Documentation pages
│   ├── roadmap/      # Roadmap page
│   ├── vision/       # Vision page
│   ├── layout.tsx    # Root layout
│   └── page.tsx      # Landing page
├── components/       # Reusable components
├── content/          # Markdown content
│   ├── docs/         # Documentation files
│   ├── pages/        # Static pages
│   └── roadmap/      # Roadmap items
├── lib/              # Utilities and helpers
│   └── content/      # Content loading utilities
└── public/           # Static assets
```

## Content Management

All content is managed via Markdown files with frontmatter:

- Documentation: `content/docs/*.md`
- Pages (vision, etc): `content/pages/*.md`
- Roadmap items: `content/roadmap/*.md`

### Adding New Documentation

Create a new file in `content/docs/`:

```markdown
---
title: Your Doc Title
description: Brief description
slug: your-doc-slug
order: 1
---

# Your content here...
```

### Adding Roadmap Items

Create a new file in `content/roadmap/`:

```markdown
---
title: Feature Name
status: planned | in-progress | completed | on-hold
timeframe: Q1 2026
priority: high | medium | low
order: 1
---

Feature description...
```

## SEO

The site includes:

- Comprehensive metadata
- Sitemap at `/sitemap.xml`
- Robots.txt at `/robots.txt`
- Open Graph tags for social sharing
- Semantic HTML and ARIA labels
