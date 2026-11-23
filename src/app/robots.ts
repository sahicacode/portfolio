import type { MetadataRoute } from "next";

export const dynamic = "force-static";

// Buscadores e IA que pueden leer el portfolio (las que citan fuentes y llevan visitas)
const ia = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "Claude-User", "PerplexityBot", "Perplexity-User", "Google-Extended", "Applebot-Extended", "Bingbot"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }, ...ia.map((userAgent) => ({ userAgent, allow: "/" }))],
    sitemap: "https://portfolio.sahica.com/sitemap.xml",
  };
}
