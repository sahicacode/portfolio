// Mis proyectos. Las capturas las hace GitHub Actions (scripts/capturas.mjs)

export type Proyecto = {
  nombre: string;
  url: string;
  imagen: string;
  etiqueta: string; // tipo de proyecto y año
  descripcion: string;
  tecnologias: string[];
};

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
    nombre: "AtmosferaDev",
    url: "https://atmosferadev.sahica.com",
    imagen: "/proyectos/atmosferadev.webp",
    etiqueta: "Social app · 2026",
    descripcion:
      "A social network for developers in Spain. Find devs in your city by stack, join a project or meet for a coffee. Profiles can import projects from GitHub.",
    tecnologias: ["Next.js", "TypeScript", "GitHub API"],
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
    nombre: "SAHICA",
    url: "https://sahica.com",
    imagen: "/proyectos/sahica.webp",
    etiqueta: "My web agency",
    descripcion:
      "My own brand for web design, SEO and tech support for small businesses in Seville, with landing pages for each type of client.",
    tecnologias: ["WordPress", "Elementor", "SEO"],
  },
  {
    nombre: "Choresia",
    url: "https://choresia.sahica.com",
    imagen: "/proyectos/choresia.webp",
    etiqueta: "Web app · 2025",
    descripcion:
      "Household chores as a game. Create a home, share tasks, earn points and see the daily ranking.",
    tecnologias: ["Laravel", "Inertia", "React", "Tailwind"],
  },
  {
    nombre: "NovaBank",
    url: "https://novabank-prestamos.vercel.app",
    imagen: "/proyectos/novabank.webp",
    etiqueta: "Full-stack app · 2025",
    descripcion:
      "A loan manager for people and businesses: clients, instalment calculations, reports and Excel export, behind a login.",
    tecnologias: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
  },
  {
    nombre: "Imageformatx",
    url: "https://imageformatx.vercel.app",
    imagen: "/proyectos/imageformatx.webp",
    etiqueta: "Web tool · 2025",
    descripcion:
      "A free online converter for images, documents, audio and video. No sign-up needed.",
    tecnologias: ["Next.js", "TypeScript"],
  },
];

// Proyectos más pequeños y demos
export const otrosProyectos: Proyecto[] = [
  {
    nombre: "FakeCheckIA",
    url: "https://noticiasfalsas.vercel.app",
    imagen: "/proyectos/fakecheckia.webp",
    etiqueta: "AI tool",
    descripcion: "Checks headlines and links against scientific sources with AI and gives a truth score.",
    tecnologias: ["Next.js", "FastAPI", "OpenAI"],
  },
  {
    nombre: "Codemetry",
    url: "/proyectos/ITConsulting/index.html",
    imagen: "/proyectos/codemetry.webp",
    etiqueta: "Demo site",
    descripcion: "Website for an IT consultancy: development, cloud and cybersecurity.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
  },
  {
    nombre: "Pizzería Demogorgon",
    url: "https://pizzeriademogorgon.sahica.com",
    imagen: "/proyectos/pizzeria.webp",
    etiqueta: "WordPress demo",
    descripcion: "Themed pizzeria website with a menu inspired by a TV series.",
    tecnologias: ["WordPress"],
  },
  {
    nombre: "DJ Willy El Tuerto",
    url: "https://djwillyeltuerto.sahica.com",
    imagen: "/proyectos/djwilly.webp",
    etiqueta: "WordPress demo",
    descripcion: "DJ website with gallery, events and a booking form.",
    tecnologias: ["WordPress"],
  },
  {
    nombre: "Jurassic Film",
    url: "https://jurassicfilm.sahica.com",
    imagen: "/proyectos/jurassicfilm.webp",
    etiqueta: "WordPress demo",
    descripcion: "Website for a film and video production agency.",
    tecnologias: ["WordPress"],
  },
  {
    nombre: "Harry Photographer",
    url: "https://harryphotographer.sahica.com",
    imagen: "/proyectos/harryphotographer.webp",
    etiqueta: "WordPress demo",
    descripcion: "Portfolio for a wildlife photographer who runs safaris.",
    tecnologias: ["WordPress"],
  },
];
