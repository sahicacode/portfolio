export type Puesto = {
  fechas: string;
  actual?: boolean;
  puesto: string;
  empresa: string;
  lugar: string;
  detalle: string;
  area: "Web" | "Quality" | "IT" | "Operations";
};

export const experiencia: Puesto[] = [
  {
    fechas: "2026 – now",
    actual: true,
    puesto: "Web Developer (internship)",
    empresa: "Tutrocito",
    lugar: "Seville",
    detalle: "WordPress and WooCommerce shops, PHP and JavaScript, UX/UI, and AI automations for daily tasks.",
    area: "Web",
  },
  {
    fechas: "2025 – now",
    actual: true,
    puesto: "Quality Inspector, Airbus parts",
    empresa: "Rhenus LTK",
    lugar: "Seville",
    detalle: "Quality inspection of A400M aircraft parts before they ship. Nothing leaves without being checked.",
    area: "Quality",
  },
  {
    fechas: "2024 – 2025",
    puesto: "Documentation Technician, Airbus parts",
    empresa: "Kuehne+Nagel",
    lugar: "Seville",
    detalle: "Documentation of aircraft parts for Airbus: part number, batch and serial checks, EASA Form 1 and SAP.",
    area: "Quality",
  },
  {
    fechas: "2023",
    puesto: "Warehouse Operative",
    empresa: "Bleckmann",
    lugar: "Netherlands",
    detalle: "Picking, packing, shipping and palletising in an international team, working in English.",
    area: "Operations",
  },
  {
    fechas: "2022",
    puesto: "Hosting Technician",
    empresa: "Netebu (Indelsur)",
    lugar: "Seville",
    detalle: "Website migrations in Plesk, servers and email.",
    area: "IT",
  },
  {
    fechas: "2022",
    puesto: "Lenovo Repair Technician",
    empresa: "Éxxita",
    lugar: "Seville",
    detalle: "Diagnosis and repair of Lenovo laptops and desktops.",
    area: "IT",
  },
  {
    fechas: "2021 – 2022",
    puesto: "Production Operative",
    empresa: "Hassett's Bakery",
    lugar: "Ireland",
    detalle: "Food production in an English-speaking team.",
    area: "Operations",
  },
  {
    fechas: "2021",
    puesto: "IT Support & Systems Technician",
    empresa: "Indelsur",
    lugar: "Seville",
    detalle: "Helpdesk with GLPI, website and email migrations, systems administration.",
    area: "IT",
  },
  {
    fechas: "2018 – 2020",
    puesto: "IT Support Technician",
    empresa: "PCPaCo",
    lugar: "Seville",
    detalle: "On-site support, NAS, backups, CCTV and point-of-sale systems.",
    area: "IT",
  },
  {
    fechas: "2018",
    puesto: "IT Support Technician (Erasmus+)",
    empresa: "Digital System",
    lugar: "Italy",
    detalle: "Tech support and WooCommerce product pages.",
    area: "IT",
  },
  {
    fechas: "2017",
    puesto: "IT Support Technician",
    empresa: "Sermicro",
    lugar: "Seville",
    detalle: "User support, hardware and equipment setup.",
    area: "IT",
  },
];

export const educacion = [
  {
    fechas: "2024 – 2027",
    titulo: "Higher Technician in Web Application Development (DAW)",
    centro: "Ilerna",
    nota: "Comparable to NFQ Level 6",
  },
  {
    fechas: "2015 – 2017",
    titulo: "Technician in Microcomputer Systems and Networks (SMR)",
    centro: "IES Hermanos Machado, Seville",
    nota: "Comparable to QQI Level 5",
  },
];

export const certificados = ["Cisco CCNA 1 & 2", "Cisco Cybersecurity Essentials"];

export const idiomas = ["Spanish (native)", "English (intermediate)"];
