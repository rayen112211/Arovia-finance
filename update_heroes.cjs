const fs = require('fs');
const path = require('path');
const pagesDir = './src/pages';
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Find the first section (typically the hero)
  const heroMatch = content.match(/<section[^>]*>/);
  if (!heroMatch) return;

  const sectionStart = heroMatch.index;
  const sectionEnd = content.indexOf('</section>', sectionStart) + '</section>'.length;
  if (sectionEnd < sectionStart) return;

  let heroContent = content.substring(sectionStart, sectionEnd);

  // If hero is dark
  if (heroContent.includes('bg-primary')) {
    heroContent = heroContent.replace(/bg-primary/g, 'bg-white border-b border-border/40');
    heroContent = heroContent.replace(/text-primary-foreground/g, 'text-foreground');
    // Remove the radial gradient line if present
    heroContent = heroContent.replace(/<div className="absolute inset-0 bg-\[radial-gradient[^>]*\/>\s*/, '');
    
    // For images, if there is a gradient over the image, change from-primary/70 to from-white
    heroContent = heroContent.replace(/from-primary\/70/g, 'from-white');
  }

  content = content.substring(0, sectionStart) + heroContent + content.substring(sectionEnd);
  fs.writeFileSync(filePath, content);
  console.log('Updated Hero in: ' + file);
});
