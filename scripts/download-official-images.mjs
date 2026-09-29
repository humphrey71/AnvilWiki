import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

async function download(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buffer);
  console.log(`Saved ${dest} (${buffer.length} bytes)`);
  return buffer;
}

async function main() {
  const imagesDir = path.resolve('public/images');
  const articlesDir = path.resolve('public/images/articles');

  if (!fs.existsSync(articlesDir)) {
    fs.mkdirSync(articlesDir, { recursive: true });
  }

  // 1. Roblox Official Thumbnail 1 & 2
  const thumb1Url = 'https://tr.rbxcdn.com/180DAY-0060d0b84a6a3b4d0a8e30601f466c60/768/432/Image/Png/noFilter';
  const thumb2Url = 'https://tr.rbxcdn.com/180DAY-5a2133a79af9ff6bf43aaa9f2bfae0db/768/432/Image/Png/noFilter';
  const iconUrl = 'https://tr.rbxcdn.com/180DAY-c78412ae8c38e8fc8aa20b5b3906a2d2/512/512/Image/Png/noFilter';

  const thumb1Buf = await download(thumb1Url, path.join(articlesDir, 'official-arena-pvp.png'));
  const thumb2Buf = await download(thumb2Url, path.join(articlesDir, 'official-combat-clash.png'));
  await download(iconUrl, path.join(imagesDir, 'game-icon.png'));

  // 2. Generate Hero.webp from official Thumb 2 (768x432 scaled to high quality webp)
  await sharp(thumb2Buf)
    .webp({ quality: 90 })
    .toFile(path.join(imagesDir, 'hero.webp'));
  console.log('Updated public/images/hero.webp with official combat clash banner');

  // 3. Download high-res in-game real screenshots from verified gameplay videos
  const realGameplays = [
    { id: 'Jst7OojVeEs', name: 'gameplay-battle-arena.jpg' },
    { id: 'tmodQmWWAtc', name: 'gameplay-tier-showcase.jpg' },
    { id: 'ZhedVKwmTH4', name: 'gameplay-special-balls.jpg' },
    { id: 'r3ESunB1jQE', name: 'gameplay-redeem-codes.jpg' }
  ];

  for (const item of realGameplays) {
    // Try maxresdefault first, fallback to hqdefault
    let imgUrl = `https://img.youtube.com/vi/${item.id}/maxresdefault.jpg`;
    let res = await fetch(imgUrl);
    if (!res.ok || res.status === 404) {
      imgUrl = `https://img.youtube.com/vi/${item.id}/hqdefault.jpg`;
    }
    const dest = path.join(articlesDir, item.name);
    await download(imgUrl, dest);
  }

  console.log('All official and in-game real images downloaded successfully!');
}

main().catch(console.error);
