#!/usr/bin/env node

/**
 * Update imports to use .webp instead of .png
 * Usage: node update-imports-to-webp.js
 * 
 * This script:
 * 1. Finds all .tsx/.ts/.jsx/.js files
 * 2. Replaces .png/.jpg/.jpeg imports with .webp
 * 3. Creates a backup before modifying
 */

import fs from 'fs';
import path from 'path';

const directories = ['./src'];
const fileExtensions = ['.tsx', '.ts', '.jsx', '.js'];

let filesModified = 0;
let importsUpdated = 0;

function updateImportsInFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Regex to match image imports
  const imageImportRegex = /(['"])([^'"]*\.(png|jpg|jpeg))(['"])/gi;
  
  let newContent = content;
  let matches = 0;
  
  newContent = newContent.replace(imageImportRegex, (match, quote1, imagePath, ext, quote2) => {
    matches++;
    const webpPath = imagePath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
    return `${quote1}${webpPath}${quote2}`;
  });
  
  if (matches > 0) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`✅ ${path.relative('.', filePath)} - ${matches} import(s) updated`);
    filesModified++;
    importsUpdated += matches;
  }
}

function processDirectory(dir) {
  if (!fs.existsSync(dir)) {
    return;
  }
  
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== 'dist') {
        processDirectory(filePath);
      }
    } else {
      const ext = path.extname(file);
      if (fileExtensions.includes(ext)) {
        updateImportsInFile(filePath);
      }
    }
  }
}

console.log('🚀 Updating imports to use WebP...\n');

for (const dir of directories) {
  processDirectory(dir);
}

console.log(`\n✨ Complete!`);
console.log(`📊 ${filesModified} file(s) modified`);
console.log(`🖼️  ${importsUpdated} import(s) updated to .webp\n`);
console.log('⚠️  Manual checks needed:');
console.log('1. Check index.html for any hardcoded image paths');
console.log('2. Verify Open Graph images in SEO.tsx');
console.log('3. Test the site thoroughly');
