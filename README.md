# Genie 3 Landing Page

A high-conversion, SEO-optimized landing page for **Genie 3**, the revolutionary AI world model by Google DeepMind.

## Tech Stack

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS + Shadcn UI
- **Deployment**: OpenNext on Cloudflare Workers
- **Package Manager**: pnpm

## Features

- SEO-optimized with focus on "Genie 3" keyword
- Responsive design with modern UI components
- High-performance landing page with all essential sections
- Privacy Policy and Terms of Service pages
- Ready for Cloudflare Workers deployment

## Installation

1. Install dependencies:
```bash
pnpm install
```

2. Run development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deployment to Cloudflare Workers

### Prerequisites

1. Install Wrangler CLI (already included as dev dependency):
```bash
pnpm install
```

2. Login to Cloudflare:
```bash
wrangler login
```

3. Create R2 bucket for caching (optional):
```bash
wrangler r2 bucket create genie3-vip-cache
```

### Deploy

Build and deploy to Cloudflare Workers:
```bash
pnpm deploy
```

Or preview locally before deploying:
```bash
pnpm preview
```

### Custom Domain Setup

1. Add your domain (genie3.vip) to Cloudflare
2. Update DNS settings to point to your Cloudflare Pages project
3. Configure SSL/TLS settings in Cloudflare dashboard

## Project Structure

```
├── app/
│   ├── page.tsx          # Landing page
│   ├── privacy/
│   │   └── page.tsx      # Privacy Policy
│   ├── terms/
│   │   └── page.tsx      # Terms of Service
│   ├── layout.tsx        # Root layout with SEO metadata
│   └── globals.css       # Global styles
├── components/
│   └── ui/              # Shadcn UI components
├── lib/
│   └── utils.ts         # Utility functions
├── public/
│   ├── robots.txt       # SEO robots file
│   └── sitemap.xml      # SEO sitemap
├── open-next.config.ts  # OpenNext configuration
└── wrangler.toml        # Cloudflare Workers config
```

## SEO Features

- Optimized meta tags and Open Graph data
- Structured data for search engines
- Sitemap.xml for better indexing
- Robots.txt for crawler guidance
- Semantic HTML structure
- Fast loading times with edge deployment

## Performance Optimization

- Server-side rendering with Next.js
- Edge deployment on Cloudflare Workers
- Optimized images and assets
- Minimal JavaScript bundle
- Tailwind CSS for efficient styling

## License

© 2025 Genie 3. All rights reserved.