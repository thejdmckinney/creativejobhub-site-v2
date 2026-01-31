# 🚀 Astro Migration - Quick Commands Reference

## Setup Commands

```bash
# 1. Create backup
git checkout -b react-spa-backup
git push -u origin react-spa-backup
git checkout main

# 2. Run automated setup
./migrate-to-astro.sh

# 3. Or install manually
npm install astro @astrojs/react @astrojs/tailwind @astrojs/vercel
npm uninstall react-router-dom react-helmet-async @vitejs/plugin-react vite
```

## Development Commands

```bash
# Start dev server (port 4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run Sanity Studio (separate terminal)
npm run studio
```

## Quick File Reference

| File Type | Location | Purpose |
|-----------|----------|---------|
| **Config** | `astro.config.mjs` | Main Astro configuration |
| **Layout** | `src/layouts/MainLayout.astro` | Layout with SEO meta tags |
| **Pages** | `src/pages/*.astro` | Create Astro pages here |
| **Components** | `src/components/*.tsx` | Keep React components here |
| **Styles** | `src/styles/global.css` | Global CSS with Tailwind |

## Conversion Cheat Sheet

### Links
```astro
<!-- ❌ React Router -->
<Link to="/pricing">Pricing</Link>

<!-- ✅ Astro -->
<a href="/pricing">Pricing</a>
```

### Meta Tags
```astro
<!-- ❌ React Helmet -->
<SEO title="Pricing" description="..." />

<!-- ✅ Astro -->
<MainLayout title="Pricing" description="...">
```

### React Components
```astro
<!-- ❌ Without directive -->
<Calculator />

<!-- ✅ With directive -->
<Calculator client:load />
```

### Images
```astro
<!-- ❌ Relative path -->
<img src="logo.png" />

<!-- ✅ Public folder path -->
<img src="/logo.png" />
```

## File Routing

| File | URL |
|------|-----|
| `src/pages/index.astro` | `/` |
| `src/pages/pricing.astro` | `/pricing` |
| `src/pages/blog/index.astro` | `/blog` |
| `src/pages/blog/[slug].astro` | `/blog/:slug` |
| `src/pages/studio/[...path].astro` | `/studio/*` |

## Client Directives

| Directive | When to Use | Example |
|-----------|-------------|---------|
| `client:load` | Load immediately | Forms, calculators |
| `client:idle` | Load when idle | Chatbots, analytics |
| `client:visible` | Load when visible | Below-fold widgets |
| `client:only="react"` | Client-only (no SSR) | Sanity Studio |

## Common Errors & Fixes

### "window is not defined"
```astro
<!-- ❌ In frontmatter -->
---
const width = window.innerWidth; // Error!
---

<!-- ✅ In script tag -->
<script>
  const width = window.innerWidth; // Works!
</script>
```

### "Cannot find module"
```bash
# Make sure imports have correct paths
# ❌ import Layout from 'Layout'
# ✅ import Layout from '../layouts/MainLayout.astro'
```

### Styles not loading
```astro
<!-- In MainLayout.astro -->
---
import '../styles/global.css'; // Make sure this exists
---
```

### React component not interactive
```astro
<!-- ❌ Missing directive -->
<Calculator />

<!-- ✅ Add directive -->
<Calculator client:load />
```

## Testing Checklist

```bash
# 1. Dev mode
npm run dev
# → Visit http://localhost:4321
# → Test all routes

# 2. Build
npm run build
# → Check for errors
# → Inspect dist/ folder

# 3. Preview
npm run preview
# → Test production build locally

# 4. Check HTML source
# → Open dist/pricing/index.html in text editor
# → Verify unique meta tags
```

## Vercel Deployment

```bash
# 1. Update vercel.json
# Change: "framework": "vite"
# To:     "framework": "astro"

# 2. Commit and push
git add .
git commit -m "Migrate to Astro SSG"
git push origin main

# 3. Vercel auto-deploys
# Monitor at: vercel.com/dashboard
```

## Screaming Frog Test

```bash
# 1. Start preview server
npm run preview

# 2. Open Screaming Frog
# 3. Crawl: http://localhost:4321
# 4. Check:
#    - Page Titles (should be unique)
#    - Meta Descriptions (should be unique)
#    - Internal Links (should work)
```

## Emergency Rollback

### Vercel Dashboard Method
1. Go to Vercel dashboard
2. Find previous deployment (React SPA)
3. Click "Promote to Production"

### Git Method
```bash
git checkout react-spa-backup
git branch -D main
git checkout -b main
git push -f origin main
```

## Documentation Quick Links

| Document | Read Time | When to Read |
|----------|-----------|--------------|
| `GETTING-STARTED.md` | 10 min | Start here |
| `ASTRO-MIGRATION-GUIDE.md` | 45 min | Before coding |
| `MIGRATION-CHECKLIST.md` | 15 min | While working |
| `MIGRATION-QUICK-REFERENCE.md` | 10 min | For quick answers |
| `VISUAL-GUIDE.md` | 15 min | For visual learners |

## Example Files

Located in `examples/` directory:
- `index.astro.example` - Home page template
- `blog-index.astro.example` - Blog listing template
- `blog-slug.astro.example` - Blog post template
- `studio-path.astro.example` - Studio route template
- `Header.astro.example` - Header component template
- `global.css.example` - Styles template

## Key Commands Summary

```bash
# Setup
./migrate-to-astro.sh                    # Automated setup

# Development
npm run dev                              # Start dev server
npm run build                            # Build for production
npm run preview                          # Preview build

# Testing
npm run build && npm run preview         # Build + preview
open dist/pricing/index.html             # Check HTML source

# Deployment
git push origin main                     # Deploy to Vercel

# Rollback
git checkout react-spa-backup            # Revert to backup
```

## Hotkeys While Reading Docs

- `Cmd+F` (Mac) / `Ctrl+F` (Windows) - Search within document
- Look for: "TODO", "IMPORTANT", "NOTE", "WARNING"

## Key Concepts (One-Liners)

- **File-based routing:** File name = URL path
- **Frontmatter:** Code between `---` runs at BUILD time
- **Islands:** React components with `client:*` directives
- **SSG:** HTML generated at build time, not runtime
- **Meta tags:** Baked into HTML, not added by JavaScript

## Success Indicators

✅ Build completes without errors
✅ Each page has unique HTML file in `dist/`
✅ Meta tags visible in HTML source
✅ Screaming Frog shows unique titles
✅ Site loads faster (smaller JS bundle)
✅ All interactive features work
✅ Sanity Studio functional

## Common Questions

**Q: Will this break my site?**
A: No. Test locally first, then deploy.

**Q: How long does it take?**
A: 5-7 days part-time, 2-3 days full-time.

**Q: Can I keep React components?**
A: Yes! Use `client:*` directives.

**Q: What about Sanity Studio?**
A: It stays the same, just needs special route config.

**Q: Will my SEO improve?**
A: Yes! That's the whole point. Crawlers will see unique meta tags.

## Resources

- **Astro Docs:** https://docs.astro.build
- **Astro Discord:** https://astro.build/chat
- **React Integration:** https://docs.astro.build/en/guides/integrations-guide/react/
- **Your Docs:** See all `.md` files in project root

## One-Command Deploy

```bash
# After migration is complete and tested:
git add . && \
git commit -m "Migrate to Astro SSG for better SEO" && \
git push origin main
# → Vercel auto-deploys
```

---

**Keep this file open while working for quick reference! 📌**

**Start with:** `./migrate-to-astro.sh` then `npm run dev`
