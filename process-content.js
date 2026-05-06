const fs = require('fs');
const path = require('path');

const inputPath = 'C:/Users/LOQ/.gemini/antigravity/brain/4ce70214-ea41-4767-ab08-36b58d06d470/.system_generated/steps/299/output.txt';
const outputPath = path.join(__dirname, 'src/data/contentMap.json');

const raw = fs.readFileSync(inputPath, 'utf8');
const data = JSON.parse(raw);

const contentMap = {};

data.data.forEach(item => {
  if (item.metadata && item.metadata.url) {
    let url = item.metadata.url;
    // Extract slug from URL e.g., http://kolkatachristianfellowship.net/history.php -> history
    let slug = url.split('/').pop().replace('.php', '');
    if (slug === 'index' || slug === '') slug = 'home';
    
    // Store markdown
    if (item.markdown) {
      contentMap[slug] = {
        title: item.metadata.title || slug,
        markdown: item.markdown
      };
    }
  }
});

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(contentMap, null, 2));
console.log(`Saved ${Object.keys(contentMap).length} pages to contentMap.json`);
