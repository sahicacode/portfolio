import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://portfolio.sahica.com/", lastModified: new Date(), priority: 1 },
    { url: "https://portfolio.sahica.com/proyectos/", lastModified: new Date(), priority: 0.7 },
  ];
}
