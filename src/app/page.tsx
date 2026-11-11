import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TechStrip from "@/components/TechStrip";
import Now from "@/components/Now";
import Projects from "@/components/Projects";
import AiWork from "@/components/AiWork";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Checks from "@/components/Checks";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Animaciones from "@/components/Animaciones";

// Datos para Google (schema.org)
const persona = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sara Hidalgo Caro",
  jobTitle: "Front-End Developer",
  url: "https://portfolio.sahica.com",
  address: { "@type": "PostalAddress", addressLocality: "Seville", addressCountry: "ES" },
  sameAs: ["https://github.com/sahicacode", "https://www.linkedin.com/in/sara-hidalgo-caro/"],
  knowsAbout: ["React", "Next.js", "TypeScript", "JavaScript", "WordPress", "PHP"],
};

export default function Home() {
  return (
    <>
      <a className="skip" href="#work">
        Skip to projects
      </a>
      <Header />
      <main id="top">
        <Hero />
        <TechStrip />
        <Now />
        <Projects />
        <AiWork />
        <About />
        <Experience />
        <Checks />
        <Contact />
      </main>
      <Footer />
      <Animaciones />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(persona) }} />
    </>
  );
}
