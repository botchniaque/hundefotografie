# Anna Bochniak Pet Photography Portfolio

## Project Overview
A modern Next.js portfolio website for Anna Bochniak, a pet photographer in Berlin. The site showcases dog photography with a bright, modern aesthetic. Built with Next.js 16.2.4, React 19, Tailwind CSS 4, and TypeScript.

**Live:** https://hundefotografie.vercel.app/

## Tech Stack
- **Framework:** Next.js 16.2.4 (with Turbopack)
- **UI:** React 19.2.4
- **Styling:** Tailwind CSS 4 + PostCSS
- **Language:** TypeScript 5
- **Hosting:** Vercel (auto-deploys on git push)
- **Repository:** https://github.com/botchniaque/hundefotografie

## Project Structure
```
app/
├── components/
│   ├── Navbar.tsx          # Sticky navigation with mobile menu
│   ├── Hero.tsx            # Hero section with CTA button
│   ├── Gallery.tsx         # Image grid with lightbox modal
│   ├── Offers.tsx          # 3 pricing tiers (€150, €200, custom)
│   ├── About.tsx           # Bio section with placeholder photo
│   └── Footer.tsx          # Footer with Instagram link & nav
├── globals.css             # Tailwind CSS imports
├── layout.tsx              # Root layout
└── page.tsx                # Home page (renders all components)
public/
├── gallery/
│   ├── 1.jpeg              # Dog photos (6 total, .jpeg format)
│   ├── 2.jpeg
│   ├── 3.jpeg
│   ├── 4.jpeg
│   ├── 5.jpeg
│   └── 6.jpeg
└── (other assets)
```

## Key Implementation Details

### Gallery Component
- Images must be `.jpeg` format (not `.jpg`)
- Uses Next.js `Image` component with `fill` and `object-cover`
- Lightbox modal on click
- `loading="eager"` for LCP optimization
- Responsive grid: 1 column mobile, 2 tablet, 3 desktop

### Instagram Integration
- Handle: `@hundefotografberlin` (note the 'f' - it's "hundefotograf" not "hundephotograph")
- Links in all 3 offer cards and footer
- Contact method for booking

### Styling
- Color scheme: Bright/modern with blue (#2563eb), pink (#ec4899), purple (#a855f7) accents
- Hero gradient: `from-blue-50 to-pink-50`
- Footer: Dark gray (#111827)
- All spacing uses Tailwind utilities (py-20, px-4, etc.)
- CSS: Uses `@tailwind base/components/utilities` (NOT `@import "tailwindcss"`)

### Pricing
- Portrait Session: €150 (3 photos)
- Multiple Pets: €200 (5 photos)
- Custom Package: Negotiable pricing

## Common Tasks

### Adding/Updating Photos
1. Replace files in `public/gallery/` (must be `.jpeg`, numbered 1-6)
2. Gallery loads automatically; no code changes needed

### Updating Text
- Hero title/subtitle: `app/components/Hero.tsx`
- About section: `app/components/About.tsx`
- Offer descriptions & pricing: `app/components/Offers.tsx`

### Changing Colors
- Search Tailwind color classes (e.g., `bg-blue-600`, `border-pink-600`)
- Replace with desired color (e.g., `bg-green-600`)
- Affects: hero gradient, offer card borders, buttons

### Deployment
- Auto-deploys on `git push` to main branch
- Check deploy status at vercel.com dashboard
- No manual build/deploy needed

## Known Issues & Fixes
- **Tailwind CSS not compiling:** Use `@tailwind base/components/utilities` in globals.css, NOT `@import "tailwindcss"`
- **Images showing as placeholders:** Check file format is `.jpeg` (not `.jpg`), file names are numbered 1-6, paths in Gallery.tsx match
- **Node version:** Requires Node 20.9+. Use `nvm use 20` to set correct version

## Development Workflow

### Local Development
```bash
nvm use 20
npm install
npm run dev
# Open http://localhost:3000
```

### Making Changes
1. Edit components in `app/components/`
2. Test locally (auto-refresh)
3. `git add .`
4. `git commit -m "descriptive message"`
5. `git push origin main`
6. Vercel deploys automatically (~30 seconds)

### Environment
- macOS (Darwin)
- Node 20.20.2 via nvm
- zsh shell
- GitHub user: `botchniaque`
- Vercel project auto-linked to repo

## Next Steps / Future Enhancements
- Add more photos (currently 6 in gallery)
- Add testimonials section
- Implement booking/inquiry form (currently just Instagram links)
- Add SEO metadata
- Consider blog for photography tips
