# Facebook Sharing Fix Guide

## The Problem
Facebook caches Open Graph metadata for URLs. Even after you update your meta tags, Facebook will continue showing the old cached data until you manually clear it.

## Solution: Clear Facebook's Cache

### Step 1: Use Facebook's Sharing Debugger

1. **Go to Facebook's Sharing Debugger Tool:**
   - Visit: https://developers.facebook.com/tools/debug/

2. **Enter Your Blog Post URL:**
   - Example: `https://www.crewopspro.com/blog/your-post-slug`
   - You need to do this for **each blog post** you want to share

3. **Click "Scrape Again":**
   - This forces Facebook to fetch the latest metadata
   - You may need to click it 2-3 times to fully clear the cache

4. **Verify the Preview:**
   - You should now see:
     - ✅ Correct blog post title
     - ✅ Blog post description
     - ✅ Featured image from the blog post (not the default site image)

### Step 2: Test the Share

After scraping:
1. Try sharing the blog post URL on Facebook again
2. The preview should now show the blog post's featured image
3. If it still shows the old image, wait 5-10 minutes and scrape again

## How to Ensure Blog Posts Have Featured Images

### In Sanity Studio:

1. Go to your Sanity Studio (https://www.crewopspro.com/studio)
2. Click on "Blog" or "Post" in the sidebar
3. Open each blog post
4. Scroll to the "Featured Image" field
5. **Make sure each post has an image uploaded**
   - If blank, click "Select" or "Upload" to add an image
   - Recommended size: 1200x630px for best Facebook display
6. Click "Publish" to save changes

## Bulk Refresh All Blog Posts

If you have multiple blog posts to refresh, here's a quick way:

### Using a Script (Optional):

You can visit each blog post URL in the Facebook debugger. Here are your blog post URLs:

1. Find all your blog slugs in Sanity
2. For each slug, visit:
   ```
   https://developers.facebook.com/tools/debug/?q=https://www.crewopspro.com/blog/SLUG-HERE
   ```
3. Click "Scrape Again" for each one

## Technical Details (What We Fixed)

The code now includes:
- ✅ Article-specific Open Graph tags (`article:author`, `article:published_time`, etc.)
- ✅ Optimized image dimensions (1200x630px - Facebook's recommended size)
- ✅ Proper image URLs from Sanity with optimization parameters
- ✅ All required meta tags for rich social media previews

## Quick Checklist

Before sharing a blog post on Facebook:
- [ ] Blog post has a featured image uploaded in Sanity
- [ ] Featured image is at least 1200x630px (or will be auto-optimized)
- [ ] Ran the URL through Facebook's Sharing Debugger
- [ ] Clicked "Scrape Again" to clear cache
- [ ] Verified the preview shows the correct image
- [ ] Waited 5 minutes if cache hasn't cleared yet

## Still Having Issues?

If Facebook still shows the wrong image:
1. Make sure the blog post is **published** in Sanity (not just a draft)
2. Check that the featured image field is actually filled in Sanity
3. Try scraping the URL 2-3 times in the debugger
4. Wait 10-15 minutes for Facebook's servers to fully update
5. Clear your browser cache and try again

## Common Facebook Caching Times

- **Initial cache**: Can last 24-48 hours
- **After scraping**: Usually updates within 5-10 minutes
- **Sometimes**: May need to scrape multiple times

Remember: This is a Facebook limitation, not an issue with your site! The meta tags are now correct.
