// Hace una captura de la portada de cada proyecto y la guarda en public/proyectos
// Se ejecuta en GitHub Actions (ver .github/workflows/capturas.yml)
import { chromium } from 'playwright';
import sharp from 'sharp';
import fs from 'node:fs';

const webs = [
  ['sahica', 'https://sahica.com/'],
  ['losjipis', 'https://losjipis.com/'],
  ['conquistasevilla', 'https://conquistasevilla.com/'],
  ['atmosferadev', 'https://atmosferadev.sahica.com/'],
  ['licenciasunavez', 'https://licenciasunavez.sahica.com/'],
  ['choresia', 'https://choresia.sahica.com/'],
  ['imageformatx', 'https://imageformatx.vercel.app/'],
  ['novabank', 'https://novabank-prestamos.vercel.app/'],
  ['fakecheckia', 'https://noticiasfalsas.vercel.app/'],
  ['pizzeria', 'https://pizzeriademogorgon.sahica.com/'],
  ['djwilly', 'https://djwillyeltuerto.sahica.com/'],
  ['jurassicfilm', 'https://jurassicfilm.sahica.com/'],
  ['harryphotographer', 'https://harryphotographer.sahica.com/'],
];

fs.mkdirSync('public/proyectos', { recursive: true });
// Uso Google Chrome (no Chromium) para que se vean los vídeos de fondo en mp4
const browser = await chromium.launch({ channel: 'chrome' });

for (const [nombre, url] of webs) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, locale: 'es-ES' });
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 });
  } catch {
    console.log('Tarda mucho, hago la captura igualmente:', url);
  }
  // Intento cerrar el aviso de cookies si sale
  for (const texto of ['Rechazar', 'Solo necesarias', 'Rechazar todo', 'Aceptar', 'Aceptar todo', 'Entendido']) {
    const boton = page.getByRole('button', { name: texto }).first();
    if (await boton.isVisible().catch(() => false)) {
      await boton.click().catch(() => {});
      break;
    }
  }
  // Bajo y subo para que carguen las imágenes y animaciones (Elementor)
  await page.mouse.wheel(0, 1500);
  await page.waitForTimeout(1500);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(5000);
  const png = await page.screenshot();
  await sharp(png).resize(1200).webp({ quality: 78 }).toFile(`public/proyectos/${nombre}.webp`);
  console.log('OK', nombre);
  await page.close();
}

await browser.close();
