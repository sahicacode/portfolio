import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Web estática: "npm run build" crea la carpeta out/ que se sube a Hostinger
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
