# Sanity Blog Setup - Creative Job Hub

## ✅ Setup Complete!

Your Sanity blog is now fully integrated with Creative Job Hub!

## 🎯 Accessing Your Admin Panel

**Local Development:**
- Go to: http://localhost:5173/studio
- Sign in with your Sanity account

**Production (after deployment):**
- Go to: https://www.creativejobhub.com/studio
- Sign in with your Sanity account

## 📝 Creating Your First Blog Post

1. **Open Studio** at `http://localhost:5173/studio`
2. Click **"Create"** button (top left)
3. Select **"Blog Post"**
4. Fill in the fields:
   - **Title**: Your blog post title
   - **Slug**: Click "Generate" (auto-creates from title)
   - **Author**: Default is "Jeremy McKinney - Creative Job Hub"
   - **Featured Image**: Upload your hero image
   - **Category**: Choose from:
     - Product Updates
     - Customer Stories
     - Integration Guides
     - Business Tips
     - Industry News
     - BYOT Philosophy
   - **Description**: Short summary (max 160 characters for SEO)
   - **Content**: Write your blog post with rich text editor
   - **Read Time**: Estimate (e.g., "5 min read")
   - **Featured Post**: Toggle if you want it highlighted
   - **Published At**: Date/time (defaults to now)

5. Click **"Publish"** when ready!

## 🎨 Content Editor Features

- **Text Formatting**: Bold, italic, code
- **Headings**: H2, H3 for sections
- **Lists**: Bullet points and numbered lists
- **Links**: Add hyperlinks
- **Images**: Drag and drop images directly into content
- **Quotes**: Use blockquote style for callouts

## 🔗 URLs

### Your Blog URLs:
- Blog listing: `https://www.creativejobhub.com/blog`
- Individual posts: `https://www.creativejobhub.com/blog/your-post-slug`
- Studio admin: `https://www.creativejobhub.com/studio`

### Already in Navigation:
- ✅ Header "Blog" link added
- ✅ Mobile menu "Blog" link added
- ✅ Footer "Blog" link added
- ✅ Sitemap updated

## 📊 Project Details

- **Project ID**: `bb2zybf9`
- **Dataset**: `production`
- **Organization**: `oXmVKwYS0`

## 🚀 Next Steps

### 1. Write Your First Post
Create a launch post like:
- "Introducing Creative Job Hub: Built by Contractors, for Contractors"
- "Why We're Different: The BYOT Philosophy"
- "How Joe's HVAC Saved $3,600/Year with Creative Job Hub"

### 2. Link from Field Service Playbook
In your FSP blog posts, add contextual links to Creative Job Hub:
- Example: "Looking for software that doesn't mark up integrations? Check out [Creative Job Hub](https://creativejobhub.com)"
- Use dofollow links (default)
- Add in relevant sections of your FSP content

### 3. After Deployment
- Submit sitemap to Google Search Console: `https://www.creativejobhub.com/sitemap.xml`
- Request indexing for `/blog` page
- Add blog posts to social media when published

## 💡 Content Ideas for Creative Job Hub Blog

### Product Updates:
- "New Feature: AI-Powered Scheduling"
- "Integration Update: Slack Support Now Live"
- "Introducing: Custom Reporting Dashboard"

### Customer Stories:
- "How ABC Plumbing Cut Software Costs by 70%"
- "Case Study: 5-Star Electric's Switch to BYOT"
- "Customer Spotlight: Mike's HVAC Success Story"

### Integration Guides:
- "Advanced Twilio Tips for Contractors"
- "Getting the Most from Your Stripe Integration"
- "Mapbox Routing Tricks You Should Know"

### BYOT Philosophy:
- "The Hidden Markup: What FSM Companies Don't Tell You"
- "Why You Should Own Your Tools"
- "The True Cost of 'All-in-One' Software"

### Business Tips:
- "10 Ways to Improve Customer Retention"
- "Pricing Strategies for Field Service Businesses"
- "How to Hire and Train Great Technicians"

## 🔧 Troubleshooting

### Can't Access Studio?
- Make sure dev server is running: `npm run dev`
- Go to: `http://localhost:5173/studio`
- Clear browser cache if needed

### Schema Changes?
After modifying `sanity/schemas/blogPost.ts`, run:
```bash
npx sanity schema deploy
```

### Images Not Showing?
- Images are hosted on Sanity's CDN
- Check that `featuredImage` field is filled in
- Verify image uploaded successfully in Studio

## 📈 SEO Best Practices

1. **Title**: 50-60 characters, include target keyword
2. **Description**: 150-160 characters, compelling summary
3. **Slug**: Short, keyword-rich, hyphen-separated
4. **Images**: Always add alt text
5. **Content**: 1,000+ words for best ranking
6. **Links**: Add internal links to other CJH pages
7. **CTAs**: Always end with call-to-action to trial/pricing

## 🎁 What You Got

✅ Full Sanity Studio integration
✅ Blog listing page with grid layout
✅ Individual blog post pages with rich text
✅ Image upload to Sanity CDN
✅ Category filtering ready
✅ SEO optimized pages
✅ Mobile responsive design
✅ Navigation links added everywhere
✅ Sitemap updated

---

**You're all set!** Go to http://localhost:5173/studio and start writing your first post! 🚀
