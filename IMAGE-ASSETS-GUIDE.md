# 🎨 Image Assets Needed for SEO

## Required Files for `/public/` Directory

### 1. favicon.ico
- **Size**: 16x16, 32x32, 48x48 (multi-resolution)
- **Format**: ICO
- **Purpose**: Browser tab icon
- **Tool**: https://favicon.io/favicon-converter/

### 2. apple-touch-icon.png
- **Size**: 180x180 pixels
- **Format**: PNG
- **Purpose**: iOS home screen icon
- **Background**: Should NOT be transparent

### 3. og-image.jpg
- **Size**: 1200x630 pixels
- **Format**: JPG or PNG
- **Purpose**: Social media preview (Facebook, LinkedIn, Twitter)
- **Content Ideas**:
  - Creative Job Hub logo
  - Tagline: "Field Service Software That Doesn't Cost More Than Your Truck Payment"
  - Price: "$89/month - Everything Included"
  - Background: Professional, clean design

---

## Quick Creation Guide

### Option 1: Use Existing Logo
If you have a Creative Job Hub logo:

1. **For favicon.ico**:
   - Go to https://favicon.io/favicon-converter/
   - Upload your logo
   - Download the generated files
   - Copy `favicon.ico` to `/public/`

2. **For apple-touch-icon.png**:
   - Resize logo to 180x180
   - Add padding if needed
   - Save as PNG in `/public/`

3. **For og-image.jpg**:
   - Use Canva (free): https://www.canva.com/
   - Template: "Facebook Post" (1200x630)
   - Add logo + text
   - Export as JPG
   - Save in `/public/`

### Option 2: Quick Placeholders
Until you have proper designs, use text-based placeholders:

**For favicon**: Use a simple "C" or "CJH" monogram
**For OG image**: Screenshot of your homepage hero section

---

## Where to Place Files

```
/public/
  ├── favicon.ico           ← Browser tab icon
  ├── apple-touch-icon.png  ← iOS home screen icon
  └── og-image.jpg          ← Social media preview
```

These files will automatically be accessible at:
- https://creativejobhub.com/favicon.ico
- https://creativejobhub.com/apple-touch-icon.png
- https://creativejobhub.com/og-image.jpg

---

## Testing After Upload

1. **Favicon**: Load site in new browser tab, check tab icon
2. **Apple Touch Icon**: On iPhone, add site to home screen
3. **OG Image**: Test social sharing:
   - Facebook: https://developers.facebook.com/tools/debug/
   - Twitter: https://cards-dev.twitter.com/validator
   - LinkedIn: https://www.linkedin.com/post-inspector/

---

## Current Status

The HTML already references these files:
```html
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
```

And the SEO component references:
```tsx
ogImage = 'https://creativejobhub.com/og-image.jpg'
```

**Just need to create and upload the actual image files!**
