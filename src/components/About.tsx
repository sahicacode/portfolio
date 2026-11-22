const pildoras = {
  "Front end": [
    ["HTML & CSS", "#e34f26"],
    ["JavaScript", "#f7df1e"],
  ],
  "Back end & CMS": [
    ["PHP", "#777bb4"],
    ["WordPress", "#3b9ad9"],
    ["MySQL", "#4479a1"],
  ],
  "Systems & tools": [
    ["Git & GitHub", "#f05032"],
    ["Plesk & hosting", "#52bbe6"],
    ["Networks", "#6fcf8f"],
    ["SAP", "#0a6ed1"],
    ["GA4", "#f9ab00"],
  ],
  "Learning now": [
    ["React", "#61dafb"],
    ["Next.js", "#ededed"],
    ["TypeScript", "#3178c6"],
    ["Astro", "#ff5d01"],
    ["Tailwind CSS", "#38bdf8"],
    ["Laravel", "#ff2d20"],
    ["Node.js", "#5fa04e"],
    ["Prisma", "#5a67d8"],
    ["PostgreSQL", "#4169e1"],
    ["WooCommerce", "#96588a"],
    ["C# / .NET", "#9b4f96"],
  ],
};

export default function About() {
  return (
    <section className="s wrap" id="about">
      <div className="sh">
        <div>
          <span className="k mono">About</span>
          <h2>
            From IT systems <em>to the web.</em>
          </h2>
        </div>
      </div>
      <div className="two">
        <div>
          <div className="prose">
            <p>
              My background is in <b>IT systems</b>: support, servers, hosting and website migrations, in Spain and
              abroad. That gave me a solid base that most front-end developers don&apos;t have.
            </p>
            <p>
              Today I build websites and I also work as a <b>quality inspector of Airbus parts</b>, where every
              detail is checked and documented. I bring the same habit to code: <b>accessible</b>, <b>fast</b> pages,
              tested on a real phone before they go live.
            </p>
            <p>I have lived and worked in four countries, so I am used to international teams and working in English.</p>
          </div>
          <div className="nums">
            <div>
              <b data-contar="6">6</b>
              <span>live projects</span>
            </div>
            <div>
              <b data-contar="4">4</b>
              <span>countries worked in</span>
            </div>
            <div>
              <b data-contar="2">2</b>
              <span>languages</span>
            </div>
          </div>
        </div>
        <div className="stack">
          {Object.entries(pildoras).map(([grupo, lista]) => (
            <div key={grupo}>
              <h3>{grupo}</h3>
              <div className="pills">
                {lista.map(([nombre, color]) => (
                  <span key={nombre}>
                    <i style={{ background: color }}></i>
                    {nombre}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
