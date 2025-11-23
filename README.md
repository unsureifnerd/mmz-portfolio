# MMZ Portfolio

A clean, modern, and timeless portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Getting Started

### Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view your portfolio.

### Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
mmz-portfolio/
├── app/
│   ├── about/          # About/Contact page
│   ├── projects/       # Projects directory
│   │   └── [id]/       # Dynamic project detail pages
│   ├── globals.css     # Global styles with Tailwind
│   ├── layout.tsx      # Root layout with navigation
│   └── page.tsx        # Home page with project showcase
├── public/             # Static assets (create this folder for images)
└── package.json
```

## Customizing Your Portfolio

### 1. Update Personal Information

**app/layout.tsx**: Update the site title and your name in the navigation

**app/page.tsx**: Update the hero section with your name and description

**app/about/page.tsx**: Update your bio, skills, and contact information

### 2. Add Your Projects

Edit `app/page.tsx` to add your projects to the home page:

```typescript
const projects: Project[] = [
  {
    id: "my-awesome-project",  // URL-friendly ID
    title: "My Awesome Project",
    description: "A brief description of your project",
    tags: ["React", "TypeScript", "Tailwind"],
    featured: true,
  },
  // Add more projects...
];
```

Then add the project details in `app/projects/[id]/page.tsx`:

```typescript
const projectsData: Record<string, ProjectData> = {
  "my-awesome-project": {
    id: "my-awesome-project",
    title: "My Awesome Project",
    description: "A brief description",
    longDescription: "A detailed description of your project...",
    tags: ["React", "TypeScript"],
    demoUrl: "https://your-demo-url.com",
    githubUrl: "https://github.com/yourusername/project",
    features: [
      "Feature 1 description",
      "Feature 2 description",
    ],
  },
  // Add more projects...
};
```

### 3. Add Images

Create a `public/` folder to store project images:

```bash
mkdir public
mkdir public/projects
```

Add images and reference them in your project data or components using `/projects/image.png`.

### 4. Customize Styling

The design uses Tailwind CSS with a clean, minimal aesthetic. Colors and theme settings are in:

- `app/globals.css` - Global styles and CSS variables
- `tailwind.config.ts` - Tailwind configuration

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and deploy
5. Connect your custom domain in the Vercel dashboard

### Other Platforms

This Next.js app can be deployed to:
- Netlify
- Railway
- Render
- Any platform that supports Node.js

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React** - UI library

## Features

- Clean, modern, and timeless design
- Fully responsive layout
- Dark mode support (automatic based on system preference)
- Type-safe with TypeScript
- Fast page navigation with Next.js
- SEO-friendly with metadata support
- Easy to customize and extend
