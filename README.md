# Technical Blog

A modern, elegant technical blog built with Next.js 16, featuring a dark Vercel-inspired design system. This blog showcases best practices for 2025 web development with a focus on performance, typography, and user experience.

## Tech Stack

### Core Framework
- **Next.js 16** - Latest version with App Router and Server Components
- **React 19.2** - Latest React with improved performance
- **TypeScript 5** - Strict mode for type safety

### Styling & Design
- **Tailwind CSS v4** - Latest version with CSS-first configuration
- **Shadcn/ui** - High-quality, customizable component library
- **Geist Fonts** - Vercel's beautiful sans-serif and monospace fonts

### Content & Features
- **MDX** - Rich content with React components
- **gray-matter** - Frontmatter parsing for blog metadata
- **next-mdx-remote** - Server-side MDX rendering
- **Shiki** - Beautiful syntax highlighting via rehype-pretty-code
- **Framer Motion 12** - Subtle, elegant animations (React 19 compatible alpha)

## Design System

### Color Palette

**Foundation:**
- Background Primary: `#0A0A0A` (near black)
- Background Elevated: `#111111` (cards, surfaces)
- Foreground Primary: `#FAFAFA` (main text)
- Foreground Secondary: `#888888` (muted text)
- Foreground Tertiary: `#666666` (metadata)

**Accent Colors:**
- Primary Accent: `#5B8DBE` (muted blue-gray)
- Secondary Accent: `#E67E50` (persimmon/amber)
- Border Subtle: `#2D3748` (slate)

**Semantic:**
- Success: `#10B981`
- Warning: `#F59E0B`
- Error: `#EF4444`

### Typography

**Fonts:**
- Sans-serif: Geist (18px base, 1.75 line-height)
- Monospace: Geist Mono (for code)

**Scale:**
- Display: 60px, 48px
- Headings: 36px (h1), 30px (h2), 24px (h3), 20px (h4)
- Body: 18px (primary), 16px (base), 14px (small)

**Philosophy:**
- Generous line-height (1.75) following Japanese Ma principle
- Letter-spacing of 0.025em on headings for elegance
- Content-first hierarchy

### Spacing & Layout
- Embraces generous whitespace (Ma principle)
- 4px base unit for consistent spacing
- Clean, minimal Vercel-inspired layout

## Project Structure

```
blog/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── blog/              # Blog routes
│   │   │   ├── [slug]/        # Dynamic blog post pages
│   │   │   └── page.tsx       # Blog listing page
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles & design tokens
│   ├── components/
│   │   ├── blog/              # Blog-specific components
│   │   │   ├── blog-card.tsx
│   │   │   ├── mdx-components.tsx
│   │   │   └── page-header.tsx
│   │   └── ui/                # Reusable UI components
│   │       ├── container.tsx
│   │       └── navigation.tsx
│   ├── content/
│   │   └── posts/             # MDX blog posts
│   │       └── welcome.mdx
│   ├── lib/
│   │   ├── posts.ts           # Blog post utilities
│   │   └── utils.ts           # Shadcn utilities
│   └── mdx-components.tsx     # MDX component mapping
├── next.config.ts             # Next.js configuration
├── tailwind.config.js         # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
└── package.json
```

## Getting Started

### Prerequisites
- Node.js 20 or later
- npm, yarn, pnpm, or bun

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the blog.

## Creating Blog Posts

Blog posts are written in MDX and stored in `src/content/posts/`. Each post requires frontmatter:

```mdx
---
title: "Your Post Title"
date: "2025-10-27"
description: "A brief description of your post"
tags: ["tag1", "tag2", "tag3"]
---

# Your content here

Write your post using Markdown and React components...
```

### Frontmatter Fields
- `title` (required): Post title
- `date` (required): Publication date in YYYY-MM-DD format
- `description` (required): Brief post description
- `tags` (optional): Array of tags

### Features in Posts

**Syntax Highlighting:**
```typescript
const example = "Shiki provides beautiful highlighting";
```

**Links:** `[text](url)` with accent color hover
**Inline Code:** Use backticks with accent color styling
**Blockquotes:** Styled with accent border and elevated background
**Tables:** Properly styled with borders
**Lists:** Both ordered and unordered with proper spacing

## Configuration

### Tailwind CSS v4
This project uses Tailwind CSS v4 with CSS-first configuration. All design tokens are defined in `src/app/globals.css` using CSS custom properties and the `@theme inline` directive.

### MDX Components
Custom MDX components are defined in `src/components/blog/mdx-components.tsx` and follow the design system for consistent styling.

### Syntax Highlighting
Shiki is configured via `rehype-pretty-code` in the MDX rendering pipeline. It provides build-time syntax highlighting with zero client-side JavaScript.

## Best Practices Implemented

1. **Server Components by Default** - Optimal performance and SEO
2. **Tailwind v4 CSS-first Config** - Modern, simplified approach
3. **Type Safety** - Strict TypeScript throughout
4. **Build-time Syntax Highlighting** - Zero client JS for code blocks
5. **Responsive Design** - Mobile-first approach
6. **Accessibility** - Semantic HTML and proper ARIA labels
7. **Performance** - Static generation for blog posts
8. **Clean Code** - No unnecessary comments, self-documenting code

## Design Philosophy

This blog embodies:
- **Ma (間)** - Japanese principle of negative space and breathing room
- **Typography Excellence** - Proper hierarchy, spacing, and readability
- **Subtle Animations** - Enhance UX without distraction
- **Color Restraint** - Dark theme with sparing accent use
- **Content-First** - Design serves the content, not the other way around

## Development

### Adding Components
Use Shadcn/ui CLI to add components:
```bash
npx shadcn@latest add button
```

### Updating Design Tokens
Modify CSS custom properties in `src/app/globals.css` to change colors, typography, or spacing.

### TypeScript
The project uses strict TypeScript mode. Ensure all components and utilities are properly typed.

## Production Deployment

The blog is optimized for deployment on Vercel:

```bash
# Build
npm run build

# Test production build locally
npm start
```

### Vercel Deployment
1. Push to GitHub
2. Import repository in Vercel
3. Deploy automatically

## License

This project is a personal blog template. Feel free to use and modify for your own projects.

## Acknowledgments

- Design inspired by [Vercel](https://vercel.com)
- Typography philosophy from Japanese Ma principle
- Fonts: [Geist](https://vercel.com/font) by Vercel
- Component library: [Shadcn/ui](https://ui.shadcn.com)

---

Built with attention to detail and a passion for elegant, minimalist design.
