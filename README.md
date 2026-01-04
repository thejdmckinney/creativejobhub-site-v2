# Creative Job Hub - New Site (Vite + React + TypeScript)

Modern rebuild of the Creative Job Hub website using Vite, React, and TypeScript.

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Deployment**: Vercel

## Getting Started

### Installation

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173/`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/     # Reusable components
├── layouts/        # Layout components
├── pages/          # Page components
├── utils/          # Utility functions
├── App.tsx         # Main app with routing
└── index.css       # Global styles
```

## Deployment to Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Vercel auto-detects Vite
4. Deploy!

Build command: `npm run build`
Output directory: `dist`

## License

Copyright © 2026 Creative Job Hub
