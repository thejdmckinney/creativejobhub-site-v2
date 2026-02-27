#!/usr/bin/env node

/**
 * Convert PNG/JPG images to WebP format
 * Usage: node convert-to-webp.js
 * 
 * This script:
 * 1. Finds all PNG/JPG files in src/assets and public
 * 2. Converts them to WebP format
 * 3. Keeps original files (you can delete them manually after verifying)
 * 4. Creates .webp versions alongside originals
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directories to process
const directories = [
  './src/assets',
  './public'
];

// Image extensions to convert
const imageExtensions = ['.png', '.jpg', '.jpeg'];

// WebP quality (0-100, higher = better quality but larger file)
const WEBP_QUALITY = 85;

async function convertToWebP(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  
  if (!imageExtensions.includes(ext)) {
    return;
  }

  const outputPath = filePath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  
  // Skip if WebP already exists
  if (fs.existsSync(outputPath)) {
    console.log(`⏭️  Skipping ${path.basename(filePath)} - WebP already exists`);
    return;
  }

  try {
    const stats = fs.statSync(filePath);
    const originalSize = stats.size;

    await sharp(filePath)
      .webp({ quality: WEBP_QUALITY })
      .toFile(outputPath);

    const newStats = fs.statSync(outputPath);
    const newSize = newStats.size;
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);

    console.log(`✅ ${path.basename(filePath)} → ${path.basename(outputPath)}`);
    console.log(`   ${(originalSize / 1024).toFixed(1)}KB → ${(newSize / 1024).toFixed(1)}KB (${savings}% smaller)`);
  } catch (error) {
    console.error(`❌ Error converting ${filePath}:`, error.message);
  }
}

async function processDirectory(dir) {
  if (!fs.existsSync(dir)) {
    console.log(`⚠️  Directory not found: ${dir}`);
    return;
  }

  console.log(`\n📁 Processing ${dir}...`);
  
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      await processDirectory(filePath);
    } else {
      await convertToWebP(filePath);
    }
  }
}

async function main() {
  console.log('🚀 Starting WebP conversion...\n');
  console.log(`Quality: ${WEBP_QUALITY}%\n`);

  for (const dir of directories) {
    await processDirectory(dir);
  }

  console.log('\n✨ Conversion complete!');
  console.log('\n📝 Next steps:');
  console.log('1. Update your imports to use .webp instead of .png');
  console.log('2. Test the site to make sure images load correctly');
  console.log('3. Delete original PNG files if everything works');
  console.log('\n💡 Tip: Use <picture> tags with fallbacks for best browser support');
}

main().catch(console.error);
