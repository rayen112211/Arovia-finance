const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const images = ['anna.jpg', 'anna_and_robbie.jpg', 'anna_and_robbie1.jpg', 'robbie.jpg'];

async function optimizeImages() {
  for (const img of images) {
    const inputPath = path.join(publicDir, img);
    const outputPath = path.join(publicDir, 'opt_' + img);
    
    if (!fs.existsSync(inputPath)) {
      console.log(`Skipping ${img}, not found`);
      continue;
    }
    
    console.log(`Optimizing ${img}...`);
    await sharp(inputPath)
      .resize({ width: 1600, withoutEnlargement: true })
      .jpeg({ quality: 80, progressive: true })
      .toFile(outputPath);
      
    // Replace original with optimized
    fs.renameSync(outputPath, inputPath);
    console.log(`Optimized ${img}`);
  }
}

optimizeImages().catch(console.error);
