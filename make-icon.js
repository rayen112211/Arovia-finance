const fs = require('fs');
const sharp = require('sharp');

sharp('public/favicon.svg')
  .resize(64, 64)
  .png()
  .toFile('public/favicon.png')
  .then(() => {
    console.log('Successfully created favicon.png');
    fs.copyFileSync('public/favicon.png', 'public/favicon.ico');
    console.log('Successfully created favicon.ico');
  })
  .catch(err => {
    console.error('Error generating favicon:', err);
    process.exit(1);
  });
