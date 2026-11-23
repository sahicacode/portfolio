import type { MetadataRoute } from "next";

export const dynamic = "force-static";

// Google y Bing pueden leer el portfolio (para salir al buscar «Sara Hidalgo Caro»).
// Las IA no: decisión de Sara por privacidad (23/11/2026). robots.txt es una petición:
// las empresas serias lo respetan, pero no es un candado.
const ia = [
  "GPTBot", "OAI-SearchBot", "ChatGPT-User",
  "ClaudeBot", "Claude-SearchBot", "Claude-User", "anthropic-ai",
  "PerplexityBot", "Perplexity-User",
  "Google-Extended", "Applebot-Extended",
  "CCBot", "meta-externalagent", "Bytespider", "Amazonbot", "cohere-ai", "Diffbot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }, { userAgent: ia, disallow: "/" }],
    sitemap: "https://portfolio.sahica.com/sitemap.xml",
  };
}
