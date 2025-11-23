# MMZ Portfolio - Chaos by Design

An experimental, chaotic portfolio website that rejects traditional design rules. Built with Next.js, TypeScript, and Tailwind CSS.

**Philosophy:** This is not a traditional portfolio. It's a playground for creation without restraint.

## Live Site

🌐 [Your Portfolio URL Here]

## Features

- **Chaotic Aesthetic** - Intentionally misaligned, tilted elements with random animations
- **Dynamic Typing Header** - Name variations that type/delete with dynamic nav tilt
- **Scattered Elements** - Floating emojis, shapes, and text with slow animations
- **Name Scrambling** - Homepage name with random chromatic/bounce/glitch effects
- **Manifesto-Style About** - Philosophical "chaos by design" approach
- **Real Projects** - Showcase actual work (PWAs, web apps, demos)
- **Responsive Design** - Works on all screen sizes, overflow-contained
- **Static Export** - Deployed as static site to Netlify

## Projects Showcased

### Accha Chai ☕
- **Type:** Progressive Web App
- **Tech:** React 19, Firebase, Google Maps API, Vite
- **Features:** Community-driven chai stall discovery, interactive maps, ratings, photo uploads
- **Status:** v0.4.0 - Private Beta
- **URL:** https://accha-chai.web.app

### KKU University Demo Site
- **Type:** Demo Website
- **Tech:** React, Animations, CSS
- **Features:** Scroll-triggered animations, number counters, form handling, accessibility
- **URL:** https://kku-site.netlify.app/

## Tech Stack

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom animations
- **Deployment:** Netlify (static export)
- **Config:** Static export mode for edge deployment

## Getting Started

### Development Server

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

Generates static output in `/out` folder.

## Project Structure

```
mmz-portfolio/
├── app/
│   ├── components/
│   │   ├── DynamicNav.tsx      # Nav with dynamic tilt
│   │   └── TypingHeader.tsx    # Typing animation
│   ├── about/
│   │   └── page.tsx            # Manifesto-style about page
│   ├── globals.css             # Custom animations & styles
│   ├── layout.tsx              # Root layout with overflow handling
│   └── page.tsx                # Chaotic homepage with projects
├── .claude/
│   └── session-memory.md       # AI context continuity (gitignored)
├── next.config.mjs             # Static export config
└── tailwind.config.ts          # Tailwind configuration
```

## Key Components

### DynamicNav
- Navigation bar that tilts based on typing header length
- Tilt range: 0deg (empty) → -5deg (max length)
- Smooth 0.6s transition

### TypingHeader
- Types/deletes random name variations
- 11 variations including typos (MMZ, Mozammil, M0z@mm!l, etc.)
- Reports text length to parent for nav tilt

### Animations
All animations intentionally slowed (2x slower) for reduced distraction:
- `float-random`: 12s
- `wobble`: 8s
- `shake`: 6s
- `tilt-shake`: 10s
- `wind`: 8s
- `chromatic-shift`: 2-3s
- `glitch`: 0.5s

## Design Philosophy

**From about-me.md:**
> Mozammil does not work in straight lines. He moves between ideas unpredictably, driven by impulse, curiosity, and experimentation. Projects appear, shift direction, collide into each other, or vanish without warning. To him, that is not chaos by accident — it is chaos by design.

**Visual Elements:**
- Yellow diagonal striped background
- Comic-style boxes with thick borders
- Random tilts and rotations
- Chromatic aberration effects
- Selection color: Pink (#ff6b9d) with black shadow
- No cursive fonts (readability maintained)

## Deployment

### Netlify

1. Push to GitHub
2. Connect repository to Netlify
3. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `out`
4. Netlify auto-deploys on push

### Configuration

`next.config.mjs`:
```javascript
const nextConfig = {
  output: 'export',
};
```

## Customization

### Adding Projects

Edit `app/page.tsx`:

```typescript
const projects: Project[] = [
  {
    id: "project-id",
    title: "Project Title",
    description: "Brief description...",
    tags: ["React", "TypeScript"],
    featured: true,
    url: "https://live-url.com"  // External URL (opens in new tab)
  },
];
```

### Updating About Page

Edit `app/about/page.tsx`:
- Update bio paragraphs
- Modify skills array
- Change contact links

### Color Palette

Defined in `globals.css`:
- Pink: `#ff6b9d`
- Green: `#4ade80`
- Purple: `#818cf8`
- Yellow: `#fbbf24`
- Dark: `#1e293b`
- Background: `#fef3c7` / `#fde68a` (stripes)

## Known Features

- Homepage name constrained to 120px height to prevent vertical expansion
- Overflow hidden on layout to prevent animated elements from expanding page
- All scattered elements use `pointer-events-none`
- About page: "organized chaos" with fewer elements than homepage
- Session memory maintained in `.claude/session-memory.md` (gitignored)

## License

Personal portfolio - All rights reserved © 2025 Mozammil Sheikh

---

*This is not a portfolio in the traditional sense. It is a playground for creation without restraint.*
