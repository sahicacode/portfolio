// Mis proyectos. Las capturas las hace GitHub Actions (scripts/capturas.mjs)

export type Proyecto = {
  nombre: string;
  url: string;
  imagen: string;
  etiqueta: string; // tipo de proyecto y año
  descripcion: string;
  tecnologias: string[];
};

// Proyectos destacados: 6 tarjetas grandes (3 columnas x 2 filas en el ordenador)
export const proyectos: Proyecto[] = [
  {
    nombre: "Los Jipis",
    url: "https://losjipis.com",
    imagen: "/proyectos/losjipis.webp",
    etiqueta: "Personal project · 2025",
    descripcion:
      "My partner and I are visiting all 106 towns in the province of Seville. I designed and built the site: a page with the history, sources and video of each town, search, and 11 regions.",
    tecnologias: ["Astro", "Markdown", "SEO", "Accessibility"],
  },
  {
    nombre: "ConquistaSevilla",
    url: "https://conquistasevilla.com",
    imagen: "/proyectos/conquistasevilla.webp",
    etiqueta: "Final degree project · 2026",
    descripcion:
      "A free web game: mark the towns you have visited and watch the map turn green. User accounts, six levels and a trophy for each of the 11 regions.",
    tecnologias: ["PHP", "MySQL", "JavaScript", "OpenStreetMap"],
  },
  {
    nombre: "SAHICA",
    url: "https://sahica.com",
    imagen: "/proyectos/sahica-web.webp",
    etiqueta: "My web agency · 2026",
    descripcion:
      "My own brand: websites for small businesses in Seville that show up on Google, in AI search and on mobile. With a free guide and a step-by-step brief.",
    tecnologias: ["Astro", "PHP", "SEO"],
  },
  {
    nombre: "Reformas 10 de Abril",
    url: "https://reformas.sahica.com",
    imagen: "/proyectos/reformas.webp",
    etiqueta: "Business website · 2026",
    descripcion:
      "Four-page website for a renovation company in Seville: painting, floors and kitchens, with before-and-after photos and quotes by WhatsApp.",
    tecnologias: ["Astro", "SEO", "Animations"],
  },
  {
    nombre: "Licencias Una Vez",
    url: "https://licenciasunavez.sahica.com",
    imagen: "/proyectos/licenciasunavez.webp",
    etiqueta: "Directory · 2026",
    descripcion:
      "A directory of software you pay for once, not every month. Real prices, how long updates last and alternatives to popular subscriptions.",
    tecnologias: ["Directory", "Filters", "SEO", "Newsletter"],
  },
  {
    nombre: "AtmosferaDev",
    url: "https://atmosferadev.sahica.com",
    imagen: "/proyectos/atmosferadev.webp",
    etiqueta: "Social app · 2026",
    descripcion:
      "A social network for developers in Spain. Find devs in your city by stack, join a project or meet for a coffee. Profiles can import projects from GitHub.",
    tecnologias: ["Next.js", "TypeScript", "GitHub API"],
  },
];

// Más proyectos y demos
export const otrosProyectos: Proyecto[] = [
  {
    nombre: "Choresia",
    url: "https://choresia.sahica.com",
    imagen: "/proyectos/choresia-app.webp",
    etiqueta: "Web app · 2025",
    descripcion:
      "Household chores as a game. Create a home, share tasks, earn points and see the daily ranking.",
    tecnologias: ["Laravel", "Inertia", "React", "Tailwind"],
  },
  {
    nombre: "NovaBank",
    url: "https://novabank-prestamos.vercel.app",
    imagen: "/proyectos/novabank-panel.webp",
    etiqueta: "Full-stack app · 2025",
    descripcion:
      "A loan manager for people and businesses: clients, instalment calculations, reports and Excel export, behind a login.",
    tecnologias: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
  },
  {
    nombre: "Pizzería Demogorgon",
    url: "/proyectos/pizzeria/",
    imagen: "/proyectos/pizzeria-demo.webp",
    etiqueta: "Demo site · 2026",
    descripcion: "Themed 80s pizzeria: full menu with tabs, neon titles and an «upside down» mode with floating spores.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
  },
  {
    nombre: "DJ Willy El Tuerto",
    url: "/proyectos/djwilly/",
    imagen: "/proyectos/djwilly-demo.webp",
    etiqueta: "Demo site · 2026",
    descripcion: "DJ website with prices, a live countdown to the next party and a beat made in the browser that drives the equalizer.",
    tecnologias: ["HTML", "CSS", "JavaScript", "Web Audio"],
  },
  {
    nombre: "Harry Photographer",
    url: "/proyectos/harry/",
    imagen: "/proyectos/harry-demo.webp",
    etiqueta: "Demo site · 2026",
    descripcion: "Wildlife photographer: rotating hero photos, parallax and a 25-photo gallery with a keyboard-friendly lightbox.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
  },
  {
    nombre: "Jurassic Film",
    url: "/proyectos/jurassicfilm/",
    imagen: "/proyectos/jurassicfilm-demo.webp",
    etiqueta: "Demo site · 2026",
    descripcion: "Film crew website: video hero with a cinema opening, film grain and a recording timecode that runs as you scroll.",
    tecnologias: ["HTML", "CSS", "JavaScript", "Video"],
  },
];
