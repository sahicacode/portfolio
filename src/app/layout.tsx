import type { Metadata, Viewport } from "next";
import { Inter_Tight, Ubuntu, Ubuntu_Mono } from "next/font/google";
import "./globals.css";

const textoNormal = Inter_Tight({ variable: "--font-sans", subsets: ["latin"] });
const titulos = Ubuntu({ variable: "--font-titulos", subsets: ["latin"], weight: ["500", "700"] });
const mono = Ubuntu_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["400", "700"] });

const descripcion =
  "Front-end developer from Seville. React, Next.js and TypeScript. Projects, experience and contact.";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.sahica.com"),
  title: "Sara Hidalgo · Front-End Developer",
  description: descripcion,
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.png" },
  openGraph: {
    title: "Sara Hidalgo · Front-End Developer",
    description: descripcion,
    url: "https://portfolio.sahica.com",
    siteName: "Sara Hidalgo",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
    locale: "en_GB",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#0b0c0f",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${textoNormal.variable} ${titulos.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
