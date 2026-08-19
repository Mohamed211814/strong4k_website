const sharp = require('sharp');
const path = require('path');

const srcPath = 'C:/Users/Simo/.gemini/antigravity-ide/brain/e2c9e80a-b6bb-44ae-b5c9-b9a9bae3011e/.user_uploaded/media_1787155566128.png';

async function analyze() {
  const { data, info } = await sharp(srcPath).raw().toBuffer({ resolveWithObject: true });
  const colorMap = {};
  for (let i = 0; i < data.length; i += info.channels) {
    const r = data[i], g = data[i+1], b = data[i+2], a = info.channels === 4 ? data[i+3] : 255;
    if (a < 50) continue;
    // convert to hex
    const hex = '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
    // bucket slightly
    const qr = Math.floor(r / 16) * 16;
    const qg = Math.floor(g / 16) * 16;
    const qb = Math.floor(b / 16) * 16;
    const bucketHex = '#' + [qr, qg, qb].map(x => x.toString(16).padStart(2, '0')).join('');
    colorMap[bucketHex] = (colorMap[bucketHex] || 0) + 1;
  }
  const sorted = Object.entries(colorMap).sort((a,b) => b[1] - a[1]).slice(0, 15);
  console.log('Dominant logo colors:');
  sorted.forEach(([hex, count]) => {
    console.log(`${hex}: ${count} pixels`);
  });
}

analyze();
