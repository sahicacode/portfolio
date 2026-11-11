# Portfolio · Sara Hidalgo

My personal portfolio: [portfolio.sahica.com](https://portfolio.sahica.com)

Built with **Next.js**, **React** and **TypeScript**, exported as a static site.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # creates the out/ folder
```

## How it is organised

- `src/app/` – the page, layout, styles, sitemap and robots
- `src/components/` – one component per section (Hero, Projects, Experience…)
- `src/data/` – projects, experience and AI work. To add a project, edit `proyectos.ts`
- `public/proyectos/` – screenshots of each project

## Deploy

1. Push to GitHub.
2. GitHub Actions runs `npm run build` and puts `out/` in the `web` branch.
3. Hostinger is connected to the `web` branch and publishes it automatically.

Project screenshots are taken by `scripts/capturas.mjs` (workflow "Capturas de proyectos"). Run it again from the Actions tab when a project changes.
