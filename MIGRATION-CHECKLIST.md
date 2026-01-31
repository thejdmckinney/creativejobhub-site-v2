# Astro Migration Checklist

## ✅ Pre-Migration (Complete Before Starting)

- [ ] **Backup everything**
  - [ ] Create git backup branch: `git checkout -b react-spa-backup`
  - [ ] Push backup to remote: `git push -u origin react-spa-backup`
  - [ ] Return to main: `git checkout main`

- [ ] **Environment check**
  - [ ] Node.js version 18+ installed
  - [ ] npm or yarn working correctly
  - [ ] Git repository is clean (no uncommitted changes)
  - [ ] Vercel account accessible

---

## 📦 Phase 1: Dependencies & Configuration (Day 1)

### Install Astro
- [ ] Run: `npm install astro @astrojs/react @astrojs/tailwind @astrojs/vercel`
- [ ] Verify installation: Check `package.json` for new dependencies

### Remove Old Dependencies
- [ ] Run: `npm uninstall react-router-dom react-helmet-async @vitejs/plugin-react vite`
- [ ] Clean npm cache: `npm cache clean --force`
- [ ] Delete `node_modules` and `package-lock.json`
- [ ] Run: `npm install` (fresh install)

### Configuration Files
- [ ] Create `astro.config.mjs` (use provided example)
- [ ] Update `tsconfig.json` (use provided example)
- [ ] Update `vercel.json`:
  - [ ] Change `"framework": "vite"` to `"framework": "astro"`
  - [ ] Remove SPA rewrite rules (lines with `"destination": "/index.html"`)
- [ ] Update `package.json` scripts:
  ```json
  {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "studio": "sanity dev"
  }
  ```

### Directory Setup
- [ ] Create `src/layouts/` directory
- [ ] Create `src/styles/` directory
- [ ] Keep existing `src/components/`, `src/pages/`, `src/lib/`

### Test Setup
- [ ] Run: `npm run dev`
- [ ] Verify Astro dev server starts (port 4321)
- [ ] Stop server: `Ctrl+C`

---

## 🎨 Phase 2: Layouts & Styles (Day 1-2)

### Create Main Layout
- [ ] Create `src/layouts/MainLayout.astro` (use provided example)
- [ ] Add meta tags (title, description, OG tags, Twitter cards)
- [ ] Include Header and Footer slots
- [ ] Add Speed Insights script

### Global Styles
- [ ] Create `src/styles/global.css` (use provided example)
- [ ] Import Tailwind: `@import 'tailwindcss';`
- [ ] Copy any custom global styles from `src/index.css`
- [ ] Import `global.css` in `MainLayout.astro`

### Test Layout
- [ ] Create temporary `src/pages/index.astro` with MainLayout
- [ ] Run: `npm run dev`
- [ ] Visit: `http://localhost:4321`
- [ ] Verify styles load correctly

---

## 📄 Phase 3: Static Pages (Day 2-3)

### Priority: High-Traffic Pages First
Convert these pages in order:

1. **Home Page** (`/`)
   - [ ] Create `src/pages/index.astro`
   - [ ] Copy content from `src/pages/Home.tsx`
   - [ ] Remove React Router imports (`Link`, `useLocation`)
   - [ ] Replace `<Link to="">` with `<a href="">`
   - [ ] Move meta tags to MainLayout props
   - [ ] Keep React components with `client:*` directives
   - [ ] Test: Visit `http://localhost:4321/`

2. **Pricing Page** (`/pricing`)
   - [ ] Create `src/pages/pricing.astro`
   - [ ] Follow same conversion pattern as Home
   - [ ] Test: Visit `http://localhost:4321/pricing`

3. **How It Works** (`/how-it-works`)
   - [ ] Create `src/pages/how-it-works.astro`
   - [ ] Convert to Astro
   - [ ] Test

4. **Contact Page** (`/contact`)
   - [ ] Create `src/pages/contact.astro`
   - [ ] Keep form as React component with `client:load`
   - [ ] Test form submission

5. **Industry Pages** (High SEO value)
   - [ ] `src/pages/hvac-software.astro`
   - [ ] `src/pages/plumbing-software.astro`
   - [ ] `src/pages/electrical-software.astro`
   - [ ] `src/pages/landscaping-software.astro`
   - [ ] `src/pages/chimney-sweep-software.astro`
   - [ ] `src/pages/handyman-software.astro`
   - [ ] `src/pages/pool-service-software.astro`
   - [ ] `src/pages/painting-software.astro`
   - [ ] `src/pages/general-contractors-software.astro`

6. **Comparison Pages** (High SEO value)
   - [ ] `src/pages/vs-jobber.astro`
   - [ ] `src/pages/vs-housecall-pro.astro`
   - [ ] `src/pages/vs-servicetitan.astro`
   - [ ] `src/pages/vs-workiz.astro`
   - [ ] `src/pages/vs-fieldedge.astro`
   - [ ] `src/pages/vs-servicem8.astro`

7. **Other Pages**
   - [ ] `src/pages/competitors.astro`
   - [ ] `src/pages/bring-your-own-tools.astro`
   - [ ] `src/pages/terms-of-service.astro`
   - [ ] `src/pages/privacy-policy.astro`

### Conversion Checklist (Per Page)
For each page, ensure:
- [ ] File created in correct location
- [ ] Frontmatter includes imports and data
- [ ] MainLayout wrapper with correct props
- [ ] React components have `client:*` directives
- [ ] Links use `<a href="">` not `<Link to="">`
- [ ] Images use correct paths (with `/` prefix)
- [ ] Test page loads correctly
- [ ] Test all links on page work
- [ ] Test any interactive components

---

## 📝 Phase 4: Blog & Dynamic Routes (Day 4)

### Blog Listing Page
- [ ] Create `src/pages/blog/index.astro`
- [ ] Fetch posts from Sanity in frontmatter
- [ ] Display posts in grid
- [ ] Test: Visit `http://localhost:4321/blog`
- [ ] Verify all posts display

### Dynamic Blog Posts
- [ ] Create `src/pages/blog/[slug].astro`
- [ ] Implement `getStaticPaths()` function
- [ ] Fetch individual post data
- [ ] Render PortableText with `client:load`
- [ ] Add article schema.org markup
- [ ] Test: Visit a blog post URL
- [ ] Verify content renders correctly

### Setup Guides (If Applicable)
- [ ] `src/pages/setup-guides/index.astro`
- [ ] `src/pages/setup-guides/twilio.astro`
- [ ] `src/pages/setup-guides/resend.astro`
- [ ] `src/pages/setup-guides/mapbox.astro`
- [ ] `src/pages/setup-guides/stripe.astro`

---

## 🧩 Phase 5: Components (Day 5)

### Static Components (Convert to .astro)
Components without state/interactivity:

- [ ] `src/components/Header.astro`
  - Remove React Router imports
  - Use `<a>` instead of `<Link>`
  - Keep mobile menu as simple script

- [ ] `src/components/Footer.astro`
  - Convert to pure Astro
  - Update all links

- [ ] `src/components/Breadcrumbs.astro` (if static)

### Interactive Components (Keep as React)
Components with state, effects, or interactivity:

- [ ] `src/components/SavingsCalculator.tsx` ✓ (Keep React)
- [ ] `src/components/StarRating.tsx` ✓ (Keep React)
- [ ] `src/components/NewsletterSignup.tsx` ✓ (Keep React)
- [ ] `src/components/Comments.tsx` ✓ (Keep React)
- [ ] `src/components/ContactForm.tsx` (if exists) ✓ (Keep React)

### Schema Components (Keep as React)
- [ ] `src/components/OrganizationSchema.tsx` ✓
- [ ] `src/components/FAQSchema.tsx` ✓
- [ ] `src/components/SoftwareApplicationSchema.tsx` ✓
- [ ] `src/components/LocalBusinessSchema.tsx` ✓
- [ ] `src/components/ProductSchema.tsx` ✓
- [ ] `src/components/BreadcrumbSchema.tsx` ✓

### Add Client Directives
For each React component used in .astro files:

- [ ] Add `client:load` for above-the-fold components
- [ ] Add `client:idle` for below-the-fold, low-priority
- [ ] Add `client:visible` for components far down page
- [ ] Add `client:only="react"` for full React apps (Studio)

---

## 🎭 Phase 6: Sanity Studio (Day 6)

### Studio Route
- [ ] Create `src/pages/studio/[...path].astro`
- [ ] Import StudioWrapper component
- [ ] Use `client:only="react"` directive
- [ ] Add noindex meta tag

### Studio Wrapper Component
- [ ] Rename `src/pages/Studio.tsx` to `src/components/StudioWrapper.tsx`
- [ ] Keep as pure React component
- [ ] Test: Visit `http://localhost:4321/studio`
- [ ] Verify Studio loads and functions normally
- [ ] Test creating/editing content

---

## 🔒 Phase 7: Auth Pages (Day 6)

If you have login/signup functionality:

- [ ] `src/pages/login.astro`
  - Keep form as React component
  - Use `client:load` for immediate interactivity

- [ ] `src/pages/signup.astro`
  - Keep form as React component
  - Use `client:load`

---

## 🧪 Phase 8: Testing (Day 7)

### Local Testing

#### Development Server
- [ ] Run: `npm run dev`
- [ ] Test all routes manually
- [ ] Check browser console for errors
- [ ] Verify no 404s in network tab

#### Build Testing
- [ ] Run: `npm run build`
- [ ] Check for build errors
- [ ] Inspect `dist/` folder structure
- [ ] Verify individual HTML files exist:
  - [ ] `dist/index.html`
  - [ ] `dist/pricing/index.html`
  - [ ] `dist/blog/index.html`
  - [ ] `dist/blog/[slug]/index.html`

#### Preview Build
- [ ] Run: `npm run preview`
- [ ] Visit: `http://localhost:4321`
- [ ] Test all routes
- [ ] Check that navigation works
- [ ] Verify images load
- [ ] Test forms submit correctly

### SEO Testing

#### Meta Tags Verification
- [ ] Open `dist/index.html` in text editor
- [ ] Verify unique title tag
- [ ] Verify unique description
- [ ] Verify OG tags present
- [ ] Repeat for 3-5 other pages
- [ ] Confirm each page has different meta tags

#### Screaming Frog Test
- [ ] Run: `npm run preview`
- [ ] Open Screaming Frog SEO Spider
- [ ] Crawl: `http://localhost:4321`
- [ ] Check "Page Titles" tab
- [ ] Verify each page shows unique title
- [ ] Check "Meta Description" tab
- [ ] Verify each page shows unique description
- [ ] Export report for comparison

#### Lighthouse Audit
- [ ] Run Lighthouse on key pages:
  - [ ] Home page
  - [ ] Pricing page
  - [ ] Blog post
- [ ] Check SEO score (should be 90+)
- [ ] Check Performance score
- [ ] Fix any critical issues

### Functional Testing

#### Navigation
- [ ] Click through all menu links
- [ ] Test mobile menu
- [ ] Verify footer links work
- [ ] Test breadcrumb navigation (if applicable)

#### Interactive Components
- [ ] Test SavingsCalculator functionality
- [ ] Test newsletter signup form
- [ ] Test contact form submission
- [ ] Test blog comments (if applicable)
- [ ] Test any other interactive features

#### Blog & CMS
- [ ] View blog listing page
- [ ] Click into individual blog posts
- [ ] Verify images load correctly
- [ ] Test PortableText rendering
- [ ] Visit Sanity Studio (`/studio`)
- [ ] Create a test blog post
- [ ] Rebuild site
- [ ] Verify new post appears

---

## 🚀 Phase 9: Deployment (Day 7)

### Pre-Deployment

- [ ] Commit all changes: `git add . && git commit -m "Migration to Astro SSG complete"`
- [ ] Push to GitHub: `git push origin main`
- [ ] Create deployment tag: `git tag v2.0.0-astro && git push --tags`

### Vercel Deployment

- [ ] Go to Vercel dashboard
- [ ] Select your project
- [ ] Verify build settings:
  - [ ] Framework Preset: `Astro`
  - [ ] Build Command: `npm run build`
  - [ ] Output Directory: `dist`
- [ ] Deploy to production
- [ ] Wait for build to complete

### Post-Deployment Testing

#### Production Testing
- [ ] Visit production URL: `https://www.creativejobhub.com`
- [ ] Test all routes:
  - [ ] Home: `/`
  - [ ] Pricing: `/pricing`
  - [ ] Blog: `/blog`
  - [ ] Blog post: `/blog/[any-post-slug]`
  - [ ] Studio: `/studio`
  - [ ] Industry pages
  - [ ] Comparison pages
- [ ] Check browser console for errors
- [ ] Test forms work in production
- [ ] Verify API routes still work

#### SEO Validation (Production)
- [ ] Run Screaming Frog on production URL
- [ ] Verify crawlers see unique meta tags
- [ ] Check Google Search Console (if connected)
- [ ] Submit new sitemap if needed

#### Performance Testing
- [ ] Run PageSpeed Insights on key pages
- [ ] Check Core Web Vitals
- [ ] Verify Speed Insights data in Vercel

---

## 🔍 Phase 10: Monitoring (Week 1-2)

### Immediate Checks (Day 1-3 After Deploy)

- [ ] Monitor Vercel analytics for errors
- [ ] Check Speed Insights metrics
- [ ] Monitor form submissions work
- [ ] Check newsletter signups work
- [ ] Test Studio content creation
- [ ] Verify blog posts display correctly

### SEO Monitoring (Week 1-2)

- [ ] Monitor Google Search Console:
  - [ ] Check for crawl errors
  - [ ] Verify pages are indexed
  - [ ] Check mobile usability
- [ ] Monitor Google Analytics:
  - [ ] Check traffic hasn't dropped
  - [ ] Verify pageviews tracking
  - [ ] Check bounce rate
- [ ] Test rich results in Google:
  - [ ] Use Rich Results Test tool
  - [ ] Verify schema.org markup works

### User Feedback

- [ ] Monitor support emails for issues
- [ ] Check social media for complaints
- [ ] Ask beta users to test
- [ ] Fix any reported bugs immediately

---

## 🔄 Rollback Plan (If Needed)

### If Critical Issues Occur:

1. **Quick rollback in Vercel:**
   - [ ] Go to Vercel dashboard
   - [ ] Find previous deployment (React SPA)
   - [ ] Click "Promote to Production"
   - [ ] Resolve issues locally

2. **Full git rollback:**
   - [ ] Run: `git checkout react-spa-backup`
   - [ ] Run: `git branch -D main`
   - [ ] Run: `git checkout -b main`
   - [ ] Run: `git push -f origin main`
   - [ ] Redeploy in Vercel

---

## ✅ Success Criteria

Your migration is successful when:

- [✓] All pages load without errors
- [✓] Screaming Frog shows unique meta tags per page
- [✓] Google/search crawlers see proper HTML (not SPA shell)
- [✓] Lighthouse SEO score is 90+
- [✓] All forms and interactive features work
- [✓] Sanity Studio is fully functional
- [✓] Blog posts display correctly
- [✓] Site performance is same or better
- [✓] No increase in 404 errors
- [✓] User traffic is stable or improved

---

## 📊 Expected Improvements

After migration, you should see:

- **SEO:**
  - ✓ Each page has unique `<title>` and `<meta description>` in HTML source
  - ✓ Search crawlers index pages correctly
  - ✓ Rich results/snippets appear in Google
  
- **Performance:**
  - ✓ Faster First Contentful Paint (FCP)
  - ✓ Improved Largest Contentful Paint (LCP)
  - ✓ Lower Total Blocking Time (TBT)
  - ✓ Smaller JavaScript bundle size
  
- **Developer Experience:**
  - ✓ Simpler routing (file-based)
  - ✓ No client-side routing bugs
  - ✓ Easier to reason about what's static vs dynamic

---

## 🆘 Troubleshooting

### Common Issues & Solutions

**Issue:** "window is not defined" error
- **Fix:** Move browser code to `<script>` tag or use `client:*` directive

**Issue:** Images not loading
- **Fix:** Use `/` prefix for public assets: `/logo.png` not `logo.png`

**Issue:** Tailwind styles not applying
- **Fix:** Verify `@import 'tailwindcss';` in `global.css`

**Issue:** React component not interactive
- **Fix:** Add `client:load` or appropriate directive

**Issue:** Build fails on Vercel
- **Fix:** Check build logs, verify all imports are correct

**Issue:** 404 on dynamic routes
- **Fix:** Verify `getStaticPaths()` is implemented correctly

**Issue:** Sanity Studio blank screen
- **Fix:** Verify `client:only="react"` is used

---

## 📚 Resources

- **Astro Docs:** https://docs.astro.build
- **React Integration:** https://docs.astro.build/en/guides/integrations-guide/react/
- **Vercel + Astro:** https://vercel.com/docs/frameworks/astro
- **Astro Discord:** https://astro.build/chat

---

## 📝 Notes

Use this space for migration-specific notes:

- Current site stats before migration:
  - Pages: 
  - Blog posts:
  - Lighthouse SEO score:

- Issues encountered:

- Custom solutions:

---

**Last Updated:** [Add date when you start migration]
**Estimated Time:** 7 days (adjust based on your pace)
**Status:** [ ] Not Started | [ ] In Progress | [ ] Complete
