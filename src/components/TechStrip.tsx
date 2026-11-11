const tecnologias = ["React", "TypeScript", "Next.js", "JavaScript", "Astro", "PHP", "MySQL", "Laravel", "WordPress", "Git"];

export default function TechStrip() {
  return (
    <div className="strip" aria-label="Technologies">
      <div className="track">
        {tecnologias.map((t) => (
          <span key={t}>{t}</span>
        ))}
        {/* repetidas para que la animación no tenga corte */}
        {tecnologias.map((t) => (
          <span key={t + "-2"} aria-hidden="true">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
