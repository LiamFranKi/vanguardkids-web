# Web Vanguard Kids

A beautiful, modern website for Vanguard Kids Preschool and Academy - an early childhood education center in the United States.

## Features

- 🎨 Beautiful, modern design with pastel colors
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Built with Next.js 14 and TypeScript
- 🎯 SEO optimized
- ♿ Accessible design
- 🌈 Smooth animations and transitions

## Pages

- **Home** - Welcome page with hero section, values, programs, and call-to-action
- **About Us** - Information about Vanguard Kids, mission, vision, and both locations
- **Work with Us** - Career opportunities and application process
- **Teacher Training** - Professional development programs
- **Forms** - Downloadable forms and documents
- **Contact** - Contact form and location information

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Icons** - Icon library
- **Framer Motion** - Animations (optional)

## Project Structure

```
web-vanguardkids/
├── app/                    # Next.js app directory
│   ├── aboutus/           # About Us page
│   ├── work-with-us/      # Work with Us page
│   ├── teacher-training/  # Teacher Training page
│   ├── forms/             # Forms page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Footer component
│   ├── Button.tsx         # Button component
│   ├── Card.tsx           # Card component
│   └── Section.tsx        # Section wrapper
├── public/                # Static assets
└── package.json           # Dependencies
```

## Color Palette

The website uses a beautiful pastel color scheme:
- **Pastel Pink** - Primary accent
- **Pastel Purple** - Secondary accent
- **Pastel Blue** - Tertiary accent
- **Pastel Green** - Success/positive elements
- **Pastel Yellow** - Highlights
- **Pastel Peach** - Warm accents

## Deployment

This project is designed to be deployed on a VPS with:
- Node.js runtime
- PM2 process manager
- Nginx reverse proxy
- SSL certificates (Let's Encrypt)

See `CONTEXTO_NUEVA_WEB.md` for detailed deployment instructions.

## License

© 2024 Vanguard Kids. All rights reserved.


