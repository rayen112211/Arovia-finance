const fs = require('fs');
const sharp = require('sharp');

sharp('public/favicon.svg')
  .resize(64, 64)
  .png()
  .toFile('public/favicon.png')
  .then(() => {
    fs.copyFileSync('public/favicon.png', 'public/favicon.ico');
    console.log('Successfully created favicon.ico for Vercel fallback');
  })
  .catch(err => {
    console.error('Error generating favicon:', err);
    process.exit(1);
  });
