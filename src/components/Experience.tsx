import { experiencia, educacion, certificados, idiomas } from "@/data/experiencia";

const paises = [
  { pais: "Spain", texto: "Web, quality, IT" },
  { pais: "Italy", texto: "Erasmus+, IT support" },
  { pais: "Netherlands", texto: "Logistics" },
  { pais: "Ireland", texto: "Production" },
];

export default function Experience() {
  return (
    <section className="s wrap" id="experience">
      <div className="sh">
        <div>
          <span className="k mono">Experience</span>
          <h2>
            Four countries, <em>one direction.</em>
          </h2>
        </div>
      </div>

      <div className="route">
        {paises.map((p) => (
          <div className="stop" key={p.pais}>
            <b>{p.pais}</b>
            <span>{p.texto}</span>
          </div>
        ))}
      </div>

      <ul className="exp">
        {experiencia.map((e) => (
          <li key={e.puesto + e.empresa}>
            <span className="yr mono">
              {e.actual ? (
                <>
                  {e.fechas.replace(" now", "")} <span className="on">now</span>
                </>
              ) : (
                e.fechas
              )}
            </span>
            <div>
              <b>{e.puesto}</b>
              <span className="org">
                {e.empresa} · {e.lugar}
              </span>
            </div>
            <p>
              <span className={`area area-${e.area.toLowerCase()}`}>{e.area}</span>
              {e.detalle}
            </p>
          </li>
        ))}
      </ul>

      <div className="edu" id="education">
        <h3 className="sub">Education</h3>
        <ul className="exp">
          {educacion.map((e) => (
            <li key={e.titulo}>
              <span className="yr mono">{e.fechas}</span>
              <div>
                <b>{e.titulo}</b>
                <span className="org">{e.centro}</span>
              </div>
              <p>{e.nota}</p>
            </li>
          ))}
        </ul>
        <div className="extra">
          <div>
            <h3 className="mono">Certifications</h3>
            <p>{certificados.join(" · ")}</p>
          </div>
          <div>
            <h3 className="mono">Languages</h3>
            <p>{idiomas.join(" · ")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
