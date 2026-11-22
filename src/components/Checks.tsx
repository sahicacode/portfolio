// Notas de Lighthouse de esta web, medidas en móvil (actualizar después de cada cambio grande)
const notas = [
  { nombre: "Performance", valor: 95, texto: "Static export, WebP images, fonts served locally" },
  { nombre: "Accessibility", valor: 100, texto: "Keyboard, contrast and screen reader checked" },
  { nombre: "Best practices", valor: 100, texto: "HTTPS, clean console and modern code" },
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
        <p>Lighthouse scores on mobile and a security headers check. Run them on this page yourself.</p>
      </div>
      <div className="checks">
        {notas.map((n) => (
          <div className="ck" key={n.nombre}>
            <div className="gauge" style={{ "--v": n.valor } as React.CSSProperties}>
              <span data-contar={n.valor}>{n.valor}</span>
            </div>
            <b>{n.nombre}</b>
            <small>{n.texto}</small>
          </div>
        ))}
        <div className="ck">
          <div className="gauge b" style={{ "--v": 100 } as React.CSSProperties}>
            <span>A</span>
          </div>
          <b>Security headers</b>
          <small>CSP, HSTS and more, graded A on securityheaders.com</small>
        </div>
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
