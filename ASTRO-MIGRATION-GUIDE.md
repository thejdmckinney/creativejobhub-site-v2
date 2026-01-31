# Astro Migration Guide - React SPA to SSG

## 🎯 Goal
Convert the React SPA to Astro with Static Site Generation (SSG) to fix SEO issues where all pages show identical meta tags to crawlers.

## 📋 Prerequisites
- Node.js 18+ installed
- Current site backed up
- Git repository clean (commit current changes)

---

## Step 1: Install Astro & Dependencies

### 1.1 Install Core Astro Packages

```bash
npm install astro @astrojs/react @astrojs/tailwind @astrojs/vercel
```

### 1.2 Update Package.json Scripts

Replace your current scripts with:

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "studio": "sanity dev",
    "lint": "eslint ."
  }
}
```

### 1.3 Dependencies to KEEP
- ✅ `react` & `react-dom` (for React islands)
- ✅ `@sanity/client`, `@sanity/image-url`, `sanity` (Sanity integration)
- ✅ `@portabletext/react` (for blog content)
- ✅ `@supabase/supabase-js` (if using Supabase)
- ✅ `@vercel/speed-insights`
- ✅ `tailwindcss`, `@tailwindcss/postcss`

### 1.4 Dependencies to REMOVE
- ❌ `react-router-dom` (Astro handles routing)
- ❌ `react-helmet-async` (Astro has built-in SEO)
- ❌ `@vitejs/plugin-react` (Astro has own React integration)
- ❌ `vite` (Astro includes Vite internally)

```bash
npm uninstall react-router-dom react-helmet-async @vitejs/plugin-react vite
```

---

## Step 2: Create Astro Configuration

### 2.1 Create `astro.config.mjs`

```javascript
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';

export default defineConfig({
  output: 'static', // SSG mode
  adapter: vercel(),
  
  integrations: [
    react(), // Enables React components
    tailwind({
      applyBaseStyles: false, // We have custom Tailwind setup
    }),
  ],
  
  vite: {
    ssr: {
      noExternal: ['@sanity/client', '@portabletext/react'],
    },
  },
  
  // Preserve your API routes
  redirects: {
    '/api/*': '/api/*',
  },
});
```

### 2.2 Create `tsconfig.json` for Astro

Replace your existing `tsconfig.json` with:

```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "react",
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@components/*": ["./src/components/*"],
      "@layouts/*": ["./src/layouts/*"],
      "@pages/*": ["./src/pages/*"]
    }
  }
}
```

---

## Step 3: New Project Structure

```
/
├── public/              # Static assets (unchanged)
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/      # React components (mostly unchanged)
│   │   ├── Header.tsx   # Convert to .astro or keep as React island
│   │   ├── Footer.tsx
│   │   └── ...
│   ├── layouts/
│   │   └── MainLayout.astro  # NEW: Astro layout
│   ├── pages/           # Convert React pages to .astro files
│   │   ├── index.astro  # Home page
│   │   ├── pricing.astro
│   │   ├── blog/
│   │   │   ├── index.astro      # Blog listing
│   │   │   └── [slug].astro     # Dynamic blog posts
│   │   └── studio.astro # Special handling for Sanity Studio
│   ├── lib/             # Utilities (unchanged)
│   │   └── sanity.ts
│   └── styles/
│       └── global.css   # Tailwind imports
├── sanity/              # Sanity schemas (unchanged)
├── api/                 # Vercel serverless functions (unchanged)
├── astro.config.mjs     # NEW: Astro config
└── package.json
```

---

## Step 4: Convert React Router Routes to Astro Pages

Astro uses **file-based routing**. Each `.astro` file in `src/pages/` becomes a route.

### 4.1 Routing Conversion Table

| React Router Path | Astro File Path |
|------------------|-----------------|
| `/` | `src/pages/index.astro` |
| `/pricing` | `src/pages/pricing.astro` |
| `/blog` | `src/pages/blog/index.astro` |
| `/blog/:slug` | `src/pages/blog/[slug].astro` |
| `/vs-jobber` | `src/pages/vs-jobber.astro` |
| `/studio/*` | `src/pages/studio/[...path].astro` (special) |

### 4.2 Example: Convert Home Page

**Before (React):** `src/pages/Home.tsx`
```tsx
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <div>
      <SEO 
        title="Creative Job Hub | Job Management Software"
        description="All-in-one job management..."
      />
      <h1>Welcome</h1>
      <Link to="/pricing">View Pricing</Link>
    </div>
  );
}
```

**After (Astro):** `src/pages/index.astro`
```astro
---
// Frontmatter (runs at BUILD TIME on server)
import MainLayout from '../layouts/MainLayout.astro';

const title = "Creative Job Hub | Job Management Software";
const description = "All-in-one job management...";
---

<MainLayout title={title} description={description}>
  <h1>Welcome</h1>
  <a href="/pricing">View Pricing</a>
</MainLayout>
```

**Key Changes:**
- ✅ Meta tags in layout, not separate component
- ✅ Use `<a href>` instead of `<Link to>`
- ✅ Frontmatter (---) runs at BUILD time
- ✅ HTML rendered below frontmatter

---

## Step 5: Create Astro Layout

### 5.1 Main Layout Template

Create `src/layouts/MainLayout.astro`:

```astro
---
import Header from '../components/Header.astro'; // or .tsx if keeping React
import Footer from '../components/Footer.astro';
import '../styles/global.css';

interface Props {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  noIndex?: boolean;
}

const { 
  title, 
  description, 
  keywords = 'field service management, contractor software, job management',
  ogImage = 'https://www.creativejobhub.com/cjh-og-image.png',
  noIndex = false
} = Astro.props;

const fullTitle = title.includes('Creative Job Hub') ? title : `${title} | Creative Job Hub`;
const canonicalURL = new URL(Astro.url.pathname, Astro.site);
---

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- Primary Meta Tags -->
    <title>{fullTitle}</title>
    <meta name="title" content={fullTitle} />
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    {noIndex && <meta name="robots" content="noindex, nofollow" />}
    
    <!-- Canonical URL -->
    <link rel="canonical" href={canonicalURL} />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content={canonicalURL} />
    <meta property="og:title" content={fullTitle} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={ogImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content={canonicalURL} />
    <meta name="twitter:title" content={fullTitle} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={ogImage} />
    
    <!-- Additional Meta -->
    <meta name="robots" content="index, follow" />
    <meta name="theme-color" content="#2563eb" />
    
    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  </head>
  <body>
    <Header />
    <main>
      <slot /> <!-- Page content goes here -->
    </main>
    <Footer />
    
    <!-- Speed Insights -->
    <script>
      import { injectSpeedInsights } from '@vercel/speed-insights';
      injectSpeedInsights();
    </script>
  </body>
</html>
```

**Key Points:**
- ✅ Meta tags are server-rendered at BUILD time
- ✅ Each page gets unique HTML with correct tags
- ✅ `<slot />` is where page content renders
- ✅ No React Helmet needed

---

## Step 6: Handle React Components

You have 3 options for React components:

### Option A: Keep as React (Recommended for Interactive Components)

For components with state/effects (like forms, calculators):

```astro
---
// In your .astro page
import SavingsCalculator from '../components/SavingsCalculator.tsx';
---

<SavingsCalculator client:load />
```

**Client Directives:**
- `client:load` - Load immediately
- `client:idle` - Load when browser is idle
- `client:visible` - Load when visible (best for below-fold)
- `client:only="react"` - No SSR, client-only

### Option B: Convert to Astro (Recommended for Static Components)

Convert simple components to `.astro`:

**Before:** `Header.tsx` (React)
```tsx
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/pricing">Pricing</Link>
      </nav>
    </header>
  );
}
```

**After:** `Header.astro`
```astro
---
// No imports needed for simple HTML
---

<header>
  <nav>
    <a href="/">Home</a>
    <a href="/pricing">Pricing</a>
  </nav>
</header>
```

### Option C: Hybrid Approach (Recommended)

- ✅ Convert **static components** to `.astro` (Header, Footer, etc.)
- ✅ Keep **interactive components** as React (forms, calculators, etc.)

---

## Step 7: Handle Dynamic Routes (Blog)

### 7.1 Blog Listing Page

Create `src/pages/blog/index.astro`:

```astro
---
import MainLayout from '../../layouts/MainLayout.astro';
import { sanityClient } from '../../lib/sanity';

// Fetch at BUILD time
const posts = await sanityClient.fetch(`
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    "mainImageUrl": mainImage.asset->url
  }
`);

const title = "Blog | Creative Job Hub";
const description = "Tips, guides, and insights for field service businesses";
---

<MainLayout title={title} description={description}>
  <div class="max-w-7xl mx-auto px-4 py-20">
    <h1 class="text-4xl font-bold mb-12">Blog</h1>
    
    <div class="grid md:grid-cols-3 gap-8">
      {posts.map((post) => (
        <article class="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={post.mainImageUrl} alt={post.title} />
          <div class="p-6">
            <h2 class="text-2xl font-bold mb-2">{post.title}</h2>
            <p class="text-gray-600 mb-4">{post.excerpt}</p>
            <a href={`/blog/${post.slug.current}`} class="text-blue-600 hover:underline">
              Read More →
            </a>
          </div>
        </article>
      ))}
    </div>
  </div>
</MainLayout>
```

### 7.2 Dynamic Blog Post Page

Create `src/pages/blog/[slug].astro`:

```astro
---
import MainLayout from '../../layouts/MainLayout.astro';
import { sanityClient } from '../../lib/sanity';
import { PortableText } from '@portabletext/react';

// This function tells Astro which paths to generate at BUILD time
export async function getStaticPaths() {
  const posts = await sanityClient.fetch(`
    *[_type == "blogPost"] {
      "slug": slug.current
    }
  `);
  
  return posts.map((post) => ({
    params: { slug: post.slug },
  }));
}

// Get the current post data
const { slug } = Astro.params;

const post = await sanityClient.fetch(`
  *[_type == "blogPost" && slug.current == $slug][0] {
    title,
    excerpt,
    body,
    publishedAt,
    "mainImageUrl": mainImage.asset->url,
    seo
  }
`, { slug });

if (!post) {
  return Astro.redirect('/404');
}

const title = post.seo?.metaTitle || post.title;
const description = post.seo?.metaDescription || post.excerpt;
---

<MainLayout title={title} description={description} ogImage={post.mainImageUrl}>
  <article class="max-w-4xl mx-auto px-4 py-20">
    <img src={post.mainImageUrl} alt={post.title} class="w-full h-96 object-cover rounded-lg mb-8" />
    
    <h1 class="text-5xl font-bold mb-4">{post.title}</h1>
    
    <time class="text-gray-500 mb-8 block">
      {new Date(post.publishedAt).toLocaleDateString()}
    </time>
    
    <div class="prose prose-lg max-w-none">
      <PortableText value={post.body} client:load />
    </div>
  </article>
</MainLayout>
```

**Key Concepts:**
- `getStaticPaths()` - Tells Astro which routes to pre-generate
- `[slug].astro` - Dynamic route parameter
- All posts generated at BUILD time with correct meta tags

---

## Step 8: Handle Sanity Studio Route

The `/studio` route needs special handling since it's a React app.

### 8.1 Create Studio Page

Create `src/pages/studio/[...path].astro`:

```astro
---
// This route catches all /studio/* paths
import StudioWrapper from '../../components/StudioWrapper';
---

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sanity Studio</title>
    <meta name="robots" content="noindex, nofollow" />
  </head>
  <body>
    <StudioWrapper client:only="react" />
  </body>
</html>
```

### 8.2 Create Studio Wrapper

Rename `src/pages/Studio.tsx` to `src/components/StudioWrapper.tsx`:

```tsx
import { Studio } from 'sanity';
import config from '../../sanity.config';

export default function StudioWrapper() {
  return <Studio config={config} />;
}
```

---

## Step 9: Update Vercel Configuration

Replace your `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "astro",
  "redirects": [
    {
      "source": "/:path*",
      "has": [
        {
          "type": "host",
          "value": "creativejobhub.com"
        }
      ],
      "destination": "https://www.creativejobhub.com/:path*",
      "permanent": true
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Permissions-Policy",
          "value": "camera=(), microphone=(), geolocation=()"
        }
      ]
    }
  ]
}
```

**Key Changes:**
- ✅ `framework: "astro"` (was "vite")
- ❌ Removed SPA rewrite (no longer needed)
- ✅ Keep API routes
- ✅ Keep headers

---

## Step 10: Create Global Styles

Create `src/styles/global.css`:

```css
@import 'tailwindcss';

/* Your existing custom styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: system-ui, -apple-system, sans-serif;
}
```

---

## Step 11: Migration Checklist

### Phase 1: Setup (Day 1)
- [ ] Backup current site
- [ ] Install Astro dependencies
- [ ] Create `astro.config.mjs`
- [ ] Create `MainLayout.astro`
- [ ] Create `src/styles/global.css`

### Phase 2: Convert Pages (Days 2-3)
- [ ] Convert `Home.tsx` → `index.astro`
- [ ] Convert `Pricing.tsx` → `pricing.astro`
- [ ] Convert all static pages to `.astro`
- [ ] Test each page locally

### Phase 3: Dynamic Routes (Day 4)
- [ ] Create `blog/index.astro`
- [ ] Create `blog/[slug].astro`
- [ ] Implement `getStaticPaths()` for blog
- [ ] Test blog pages

### Phase 4: Components (Day 5)
- [ ] Convert static components to `.astro`
- [ ] Keep interactive components as React
- [ ] Add appropriate `client:*` directives
- [ ] Test interactivity

### Phase 5: Studio & Special Cases (Day 6)
- [ ] Setup Studio route
- [ ] Test Studio functionality
- [ ] Handle any special routes

### Phase 6: Testing & Deployment (Day 7)
- [ ] Test all pages locally (`npm run dev`)
- [ ] Build site (`npm run build`)
- [ ] Preview build (`npm run preview`)
- [ ] Test meta tags with Screaming Frog
- [ ] Deploy to Vercel
- [ ] Verify production site

---

## Step 12: Testing Your SEO Fix

### 12.1 Local Testing

After building (`npm run build`), check the `dist/` folder:

```bash
npm run build
```

You should see individual HTML files:
```
dist/
├── index.html          # Home page with unique meta tags
├── pricing/
│   └── index.html      # Pricing page with unique meta tags
├── blog/
│   ├── index.html
│   └── my-first-post/
│       └── index.html  # Blog post with unique meta tags
```

### 12.2 Verify Meta Tags

Open `dist/pricing/index.html` in a text editor. You should see:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Pricing | Creative Job Hub</title>
    <meta name="description" content="Pricing page description" />
    <meta property="og:title" content="Pricing | Creative Job Hub" />
    <!-- etc. -->
  </head>
  <body>
    <!-- Page content -->
  </body>
</html>
```

✅ **Success**: Each HTML file has unique, baked-in meta tags

### 12.3 Test with Screaming Frog

1. Run `npm run preview` (serves the built site)
2. Open Screaming Frog
3. Crawl `http://localhost:4321`
4. Check "Page Titles" tab - should show unique titles for each page

---

## Step 13: Common Pitfalls & Solutions

### Issue: "window is not defined"

**Cause**: Code trying to access browser APIs at build time

**Solution**: Use `client:*` directive or check for browser:

```astro
---
// In frontmatter (build time)
// ❌ const width = window.innerWidth; // Error!
---

<script>
  // In <script> tag (browser time)
  // ✅ const width = window.innerWidth; // Works!
</script>
```

### Issue: Styles not loading

**Cause**: Missing Tailwind import

**Solution**: Import in layout:

```astro
---
import '../styles/global.css';
---
```

### Issue: Images not loading

**Cause**: Incorrect paths

**Solution**: Use `/` prefix for public assets:

```astro
<img src="/cjh-og-image.png" alt="..." />
```

### Issue: React component not interactive

**Cause**: Missing `client:*` directive

**Solution**: Add directive:

```astro
<MyComponent client:load />
```

---

## Step 14: Performance Benefits

After migration, you'll gain:

✅ **SEO Fixed**: Each page has unique meta tags baked into HTML  
✅ **Faster Load**: No React bundle on static pages  
✅ **Better Core Web Vitals**: Static HTML = instant FCP  
✅ **Reduced JS**: Only ship React where needed  
✅ **Easier Crawling**: Search engines see content immediately  

---

## Step 15: Rollback Plan

If something goes wrong:

1. Keep your React SPA in a separate branch:
   ```bash
   git checkout -b react-spa-backup
   git push origin react-spa-backup
   ```

2. Work on migration in main branch

3. If needed, revert:
   ```bash
   git checkout react-spa-backup
   git branch -D main
   git checkout -b main
   git push -f origin main
   ```

---

## Need Help?

- Astro Docs: https://docs.astro.build
- Astro Discord: https://astro.build/chat
- React Integration: https://docs.astro.build/en/guides/integrations-guide/react/

---

## Summary

**Before**: React SPA → All routes serve `index.html` → Crawlers see same meta tags

**After**: Astro SSG → Each route has unique HTML file → Crawlers see correct meta tags

**Timeline**: ~7 days for full migration (can be faster for experienced devs)

**Risk**: Low - Can keep React components, migrate incrementally

**Payoff**: Fixed SEO + Better performance + Lower JS bundle size

Good luck! 🚀
