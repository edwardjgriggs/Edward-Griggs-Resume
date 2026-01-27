# Edward Griggs - Resume Website

A modern, production-ready resume website built with Next.js, featuring a dark techy theme with fluid animations and responsive design.

## Features

- **Dark Theme**: Deep navy blues with cyan/teal accents
- **Fluid Animations**: Smooth transitions powered by Framer Motion
- **Responsive Design**: Mobile-first approach with desktop enhancements
- **Accessibility**: WCAG-minded contrast, reduced motion support, keyboard navigation
- **SEO Optimized**: Meta tags, Open Graph, and semantic HTML
- **PDF Resume**: Downloadable resume with embedded PDF viewer

## Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
├── public/
│   └── resume.pdf          # Your resume PDF (replace this)
├── src/
│   ├── app/
│   │   ├── globals.css     # Global styles and Tailwind config
│   │   ├── layout.tsx      # Root layout with fonts and metadata
│   │   ├── page.tsx        # Home page
│   │   └── resume/
│   │       └── page.tsx    # PDF viewer page
│   └── components/
│       ├── ui/             # Reusable UI components
│       │   ├── Button.tsx
│       │   ├── Card.tsx
│       │   └── Section.tsx
│       ├── sections/       # Page sections
│       │   ├── Hero.tsx
│       │   ├── About.tsx
│       │   ├── Experience.tsx
│       │   ├── Skills.tsx
│       │   ├── Certifications.tsx
│       │   ├── Education.tsx
│       │   ├── Contact.tsx
│       │   └── Footer.tsx
│       └── Navigation.tsx  # Sticky nav with mobile drawer
├── tailwind.config.ts      # Tailwind theme configuration
└── package.json
```

## Customization

### Replacing the Resume PDF

Replace the placeholder PDF with your actual resume:

```bash
# Copy your resume to the public folder
cp /path/to/your/resume.pdf public/resume.pdf
```

### Updating Content

Content is defined in each section component:

- **Personal Info**: `src/components/sections/Hero.tsx` and `src/components/sections/Contact.tsx`
- **Experience**: `src/components/sections/Experience.tsx` (update the `experiences` array)
- **Skills**: `src/components/sections/Skills.tsx` (update the `skillCategories` array)
- **Certifications**: `src/components/sections/Certifications.tsx`
- **Education**: `src/components/sections/Education.tsx`

### Customizing Colors

Edit the color palette in `tailwind.config.ts`:

```typescript
colors: {
  navy: {
    950: '#020617',  // Darkest background
    900: '#0a1628',
    800: '#0f1f3d',
    // ... more shades
  },
  accent: {
    400: '#22d3ee',  // Primary accent (cyan)
    500: '#06b6d4',
    600: '#0891b2',
  },
}
```

### Adding Analytics

Uncomment and configure analytics in `src/app/layout.tsx`:

```typescript
// Example: Add your analytics component
{/* <Analytics /> */}
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Deploy!

### Static Export

For static hosting (GitHub Pages, Netlify, etc.):

1. Uncomment `output: 'export'` in `next.config.js`
2. Run `npm run build`
3. Deploy the `out` folder

## Accessibility

- Respects `prefers-reduced-motion` for users who prefer minimal animations
- Proper heading hierarchy and semantic HTML
- Focus-visible states for keyboard navigation
- WCAG AA contrast ratios

## Performance

- Font optimization with `next/font`
- Lazy loading for off-screen sections
- Minimal JavaScript bundle
- CSS-based animations where possible

## License

MIT License - Feel free to use this template for your own resume website.

---

**Edward Griggs**
Systems Administrator | IT & Cybersecurity
edwardjgriggs@gmail.com | 276-701-1863
