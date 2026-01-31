#!/bin/bash

# Astro Migration Quick Start Script
# This script helps you set up the initial Astro configuration

echo "🚀 Creative Job Hub - Astro Migration Setup"
echo "=========================================="
echo ""

# Color codes
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Step 1: Backup check
echo -e "${YELLOW}Step 1: Checking for git backup...${NC}"
if git rev-parse --git-dir > /dev/null 2>&1; then
  if [[ -n $(git status -s) ]]; then
    echo -e "${RED}⚠️  You have uncommitted changes. Please commit or stash them first.${NC}"
    echo "Run: git add . && git commit -m 'Pre-migration backup'"
    exit 1
  else
    echo -e "${GREEN}✓ Git repository is clean${NC}"
  fi
else
  echo -e "${RED}⚠️  Not a git repository. Initialize git first for safety.${NC}"
  exit 1
fi

# Step 2: Create backup branch
echo ""
echo -e "${YELLOW}Step 2: Creating backup branch...${NC}"
BACKUP_BRANCH="react-spa-backup-$(date +%Y%m%d)"
git checkout -b "$BACKUP_BRANCH"
git push -u origin "$BACKUP_BRANCH"
git checkout main
echo -e "${GREEN}✓ Backup branch created: $BACKUP_BRANCH${NC}"

# Step 3: Install Astro dependencies
echo ""
echo -e "${YELLOW}Step 3: Installing Astro dependencies...${NC}"
npm install astro @astrojs/react @astrojs/tailwind @astrojs/vercel

if [ $? -eq 0 ]; then
  echo -e "${GREEN}✓ Astro dependencies installed${NC}"
else
  echo -e "${RED}✗ Failed to install dependencies${NC}"
  exit 1
fi

# Step 4: Remove old dependencies
echo ""
echo -e "${YELLOW}Step 4: Removing old SPA dependencies...${NC}"
npm uninstall react-router-dom react-helmet-async @vitejs/plugin-react vite

if [ $? -eq 0 ]; then
  echo -e "${GREEN}✓ Old dependencies removed${NC}"
else
  echo -e "${YELLOW}⚠️  Some dependencies couldn't be removed (this is okay)${NC}"
fi

# Step 5: Create directory structure
echo ""
echo -e "${YELLOW}Step 5: Creating Astro directory structure...${NC}"

# Create examples directory if it doesn't exist
mkdir -p examples

# Create src/styles if it doesn't exist
mkdir -p src/styles

# Move example files if they exist
if [ -f "examples/index.astro.example" ]; then
  echo -e "${GREEN}✓ Example files already exist${NC}"
else
  echo -e "${YELLOW}⚠️  Example files not found. Please check the migration guide.${NC}"
fi

# Step 6: Update package.json scripts
echo ""
echo -e "${YELLOW}Step 6: Updating package.json scripts...${NC}"

# Backup package.json
cp package.json package.json.backup

# Update scripts using Node.js
node -e "
const fs = require('fs');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
pkg.scripts = {
  ...pkg.scripts,
  'dev': 'astro dev',
  'build': 'astro build',
  'preview': 'astro preview',
  'studio': 'sanity dev'
};
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
"

if [ $? -eq 0 ]; then
  echo -e "${GREEN}✓ package.json scripts updated${NC}"
else
  echo -e "${RED}✗ Failed to update package.json${NC}"
  mv package.json.backup package.json
  exit 1
fi

# Step 7: Update vercel.json
echo ""
echo -e "${YELLOW}Step 7: Updating vercel.json...${NC}"

if [ -f "vercel.json" ]; then
  cp vercel.json vercel.json.backup
  
  # Update framework to astro using sed
  if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    sed -i '' 's/"framework": "vite"/"framework": "astro"/g' vercel.json
  else
    # Linux
    sed -i 's/"framework": "vite"/"framework": "astro"/g' vercel.json
  fi
  
  echo -e "${GREEN}✓ vercel.json updated${NC}"
else
  echo -e "${YELLOW}⚠️  vercel.json not found${NC}"
fi

# Step 8: Summary
echo ""
echo -e "${GREEN}=========================================="
echo "✓ Setup Complete!"
echo "==========================================${NC}"
echo ""
echo "Next steps:"
echo "1. Copy example files from examples/ directory:"
echo "   - cp astro.config.mjs (already in place)"
echo "   - cp src/layouts/MainLayout.astro (already in place)"
echo "   - Review examples/index.astro.example for page conversion"
echo ""
echo "2. Start converting your pages from React to Astro:"
echo "   - Begin with simple pages (About, Contact, etc.)"
echo "   - Then tackle dynamic pages (Blog)"
echo "   - Keep interactive components as React islands"
echo ""
echo "3. Test locally:"
echo "   npm run dev"
echo ""
echo "4. Build and preview:"
echo "   npm run build && npm run preview"
echo ""
echo "5. See ASTRO-MIGRATION-GUIDE.md for detailed instructions"
echo ""
echo -e "${YELLOW}Backup branch: $BACKUP_BRANCH${NC}"
echo "To rollback: git checkout $BACKUP_BRANCH"
echo ""
