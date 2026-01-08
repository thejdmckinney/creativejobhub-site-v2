#!/bin/bash

# Quick script to add SEO component import to all page files
# This adds the import statement but you'll still need to add the <SEO /> component in each page's return statement

echo "📝 Adding SEO import to all page files..."

pages=(
  "src/pages/Features.tsx"
  "src/pages/Pricing.tsx"
  "src/pages/HowItWorks.tsx"
  "src/pages/Competitors.tsx"
  "src/pages/VsJobber.tsx"
  "src/pages/VsHousecallPro.tsx"
  "src/pages/VsServiceTitan.tsx"
  "src/pages/VsWorkiz.tsx"
  "src/pages/VsFieldEdge.tsx"
  "src/pages/VsServiceM8.tsx"
  "src/pages/WhyIBuiltThis.tsx"
  "src/pages/Signup.tsx"
  "src/pages/Login.tsx"
)

for page in "${pages[@]}"; do
  if [ -f "$page" ]; then
    # Check if SEO is already imported
    if ! grep -q "import SEO from" "$page"; then
      echo "  ✅ Adding import to $page"
      # Add import after first import statement
      sed -i '' "1a\\
import SEO from '../components/SEO';\\
" "$page"
    else
      echo "  ⏭️  $page already has SEO import"
    fi
  else
    echo "  ⚠️  $page not found"
  fi
done

echo ""
echo "✅ Done! Now manually add <SEO /> component to each page's return statement."
echo "📖 See DEPLOYMENT-GUIDE.md for the exact SEO props for each page."
