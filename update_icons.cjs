const fs = require('fs');
const path = require('path');
const pagesDir = './src/pages';
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

files.forEach(file => {
  // Skip HomePage and HowWeWorkPage as we manually updated them (or maybe run on them but be careful)
  if (file === 'HomePage.tsx' || file === 'HowWeWorkPage.tsx') return;

  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Find icon wrappers: w-12 h-12 or w-14 h-14 with bg-gold/10 or bg-primary
  content = content.replace(/w-12 h-12/g, 'w-16 h-16');
  content = content.replace(/w-14 h-14/g, 'w-20 h-20');
  content = content.replace(/w-10 h-10/g, 'w-14 h-14');
  
  // Update icon sizes inside those pages:
  content = content.replace(/size=\{20\}/g, 'size={28}');
  content = content.replace(/size=\{22\}/g, 'size={32}');
  content = content.replace(/size=\{24\}/g, 'size={36}');
  content = content.replace(/size=\{26\}/g, 'size={40}');

  // Update contrast: bg-gold/10 -> bg-gold/15
  content = content.replace(/bg-gold\/10/g, 'bg-gold/15');

  fs.writeFileSync(filePath, content);
  console.log('Updated icons in: ' + file);
});
