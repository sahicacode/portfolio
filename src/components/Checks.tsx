// Notas de Lighthouse de esta web (medidas en móvil)
const notas = [
  { nombre: "Performance", valor: 100, texto: "Static export, WebP images, fonts served locally" },
  { nombre: "Accessibility", valor: 100, texto: "Keyboard, contrast and screen reader checked" },
  { nombre: "Best practices", valor: 100, texto: "HTTPS and security headers" },
  { nombre: "SEO", valor: 100, texto: "Metadata, Open Graph and sitemap" },
];

export default function Checks() {
  return (
    <section className="s wrap" id="checked">
      <div className="sh">
        <div>
          <span className="k mono">This site</span>
          <h2>
            Built to be <em>checked.</em>
          </h2>
        </div>
        <p>Open DevTools and run Lighthouse on this page yourself. These are its scores.</p>
      </div>
      <div className="checks">
        {notas.map((n) => (
          <div className="ck" key={n.nombre}>
            <div className="gauge" style={{ "--v": n.valor } as React.CSSProperties}>
              <span>{n.valor}</span>
            </div>
            <b>{n.nombre}</b>
            <small>{n.texto}</small>
          </div>
        ))}
        <div className="ck">
          <div className="gauge b" style={{ "--v": 100 } as React.CSSProperties}>
            <span className="ci">CI</span>
          </div>
          <b>Auto deploy</b>
          <small>GitHub Actions builds it, Hostinger publishes it on every push</small>
        </div>
      </div>
    </section>
  );
}
