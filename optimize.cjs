const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const images = [
  'anna.jpg',
  'anna-hq.jpg',
  'anna_and_robbie.jpg',
  'anna_and_robbie-hq.jpg',
  'anna_and_robbie1.jpg',
  'anna_and_robbie1-hq.jpg',
  'robbie.jpg',
  'robbie-hq.jpg',
  'robbie-solo.jpg',
  'warsaw.jpg',
  'warsaw-night.jpg',
  'contact-office.jpg'
];

async function optimizeImages() {
  for (const img of images) {
    const inputPath = path.join(publicDir, img);
    const outputPath = path.join(publicDir, 'opt_' + img);
    
    if (!fs.existsSync(inputPath)) {
      console.log(`Skipping ${img}, not found`);
      continue;
    }
    
    console.log(`Optimizing ${img}...`);
    // For high quality assets, use 2000px width and 85% quality to ensure perfect clarity.
    // For normal assets, 1600px width and 80% quality.
    const isHq = img.includes('-hq') || img.includes('warsaw');
    const width = isHq ? 2000 : 1600;
    const quality = isHq ? 85 : 80;

    await sharp(inputPath)
      .resize({ width: width, withoutEnlargement: true })
      .jpeg({ quality: quality, progressive: true })
      .toFile(outputPath);
      
    // Replace original with optimized
    fs.renameSync(outputPath, inputPath);
    console.log(`Optimized ${img} (width: ${width}, quality: ${quality}%)`);
  }
}

optimizeImages().catch(console.error);
