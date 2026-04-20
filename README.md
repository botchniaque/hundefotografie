# Anna Bochniak - Pet Photography Portfolio

A modern, bright portfolio website for pet photographer Anna Bochniak, built with Next.js and Tailwind CSS.

## Features

- **Hero Section**: Eye-catching introduction with call-to-action
- **Gallery**: Responsive image gallery with lightbox modal
- **Offers**: Pricing and service packages
- **About Section**: Professional bio
- **Responsive Design**: Mobile-first, works on all devices
- **Fast**: Optimized images and Next.js performance

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Adding Your Photos

1. Create a `public/gallery/` directory
2. Add your pet photos as: `1.jpg`, `2.jpg`, `3.jpg`, etc. (up to 6 photos)
3. The gallery automatically displays them in a grid

## Customization

- **Colors**: Edit Tailwind classes in components (look for `bg-blue-600`, `border-blue-600`, etc.)
- **Text**: Update text in each component file (`app/components/`)
- **Instagram Link**: Change `hundephotographberlin` in `Offers.tsx` and `Footer.tsx`
- **Pricing**: Update prices in `Offers.tsx`

## Deploy on Vercel

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" and select your repo
4. Deploy (no configuration needed!)

Your site will be live at `your-username.vercel.app`

## Project Structure

```
app/
├── components/          # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Gallery.tsx
│   ├── Offers.tsx
│   ├── About.tsx
│   └── Footer.tsx
├── globals.css          # Global styles
├── layout.tsx           # Root layout
└── page.tsx             # Home page
public/
└── gallery/             # Your photos go here
```
