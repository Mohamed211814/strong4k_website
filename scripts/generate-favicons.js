const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcPath = 'C:/Users/Simo/.gemini/antigravity-ide/brain/e2c9e80a-b6bb-44ae-b5c9-b9a9bae3011e/.user_uploaded/media_1787155566128.png';

async function createIco(pngBuffers) {
  const count = pngBuffers.length;
  const headerSize = 6 + (16 * count);
  let currentOffset = headerSize;
  
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);
  
  const entries = [];
  const datas = [];
  
  for (const img of pngBuffers) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(img.width >= 256 ? 0 : img.width, 0);
    entry.writeUInt8(img.height >= 256 ? 0 : img.height, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(img.buffer.length, 8);
    entry.writeUInt32LE(currentOffset, 12);
    
    entries.push(entry);
    datas.push(img.buffer);
    currentOffset += img.buffer.length;
  }
  
  return Buffer.concat([header, ...entries, ...datas]);
}

async function generateAllIcons() {
  console.log('Generating browser icons from high-res source:', srcPath);
  
  // Ensure directories exist
  const publicDir = path.join(__dirname, '..', 'public');
  const imagesDir = path.join(publicDir, 'images');
  const appDir = path.join(__dirname, '..', 'app');
  
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  // 1. Generate PNG sizes
  const b16 = await sharp(srcPath).resize(16, 16).png().toBuffer();
  const b32 = await sharp(srcPath).resize(32, 32).png().toBuffer();
  const b48 = await sharp(srcPath).resize(48, 48).png().toBuffer();
  const b180 = await sharp(srcPath).resize(180, 180).png().toBuffer();
  const b192 = await sharp(srcPath).resize(192, 192).png().toBuffer();
  const b512 = await sharp(srcPath).resize(512, 512).png().toBuffer();

  // Write PNG icons to public/ and app/
  fs.writeFileSync(path.join(publicDir, 'favicon-16x16.png'), b16);
  fs.writeFileSync(path.join(publicDir, 'favicon-32x32.png'), b32);
  fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), b180);
  fs.writeFileSync(path.join(publicDir, 'android-chrome-192x192.png'), b192);
  fs.writeFileSync(path.join(publicDir, 'android-chrome-512x512.png'), b512);
  fs.writeFileSync(path.join(imagesDir, 'logo-og.png'), b512);

  // App router icons
  fs.writeFileSync(path.join(appDir, 'icon.png'), b32);
  fs.writeFileSync(path.join(appDir, 'apple-icon.png'), b180);

  // 2. Generate multi-resolution ICO file
  const icoBuffer = await createIco([
    { width: 16, height: 16, buffer: b16 },
    { width: 32, height: 32, buffer: b32 },
    { width: 48, height: 48, buffer: b48 },
  ]);

  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(appDir, 'favicon.ico'), icoBuffer);

  // 3. Generate site.webmanifest
  const webManifest = {
    name: "STRONG4K - Abonnement IPTV France",
    short_name: "STRONG4K",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ],
    theme_color: "#050507",
    background_color: "#050507",
    display: "standalone"
  };

  fs.writeFileSync(
    path.join(publicDir, 'site.webmanifest'),
    JSON.stringify(webManifest, null, 2)
  );

  console.log('Successfully generated all icon assets and site.webmanifest!');
}

generateAllIcons().catch(err => {
  console.error('Error generating icons:', err);
  process.exit(1);
});
