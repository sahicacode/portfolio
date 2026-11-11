import Image from "next/image";
import ProjectCard from "./ProjectCard";
import { proyectos, otrosProyectos } from "@/data/proyectos";

export default function Projects() {
  return (
    <section className="s wrap" id="work">
      <div className="sh">
        <div>
          <span className="k mono">Selected work</span>
          <h2>
            Live projects, <em>real users.</em>
          </h2>
        </div>
        <p>Everything here is online. Click any card to open the real site.</p>
      </div>

      <div className="projects">
        {proyectos.map((p) => (
          <ProjectCard key={p.nombre} proyecto={p} />
        ))}
      </div>

      <h3 className="sub">More projects and demos</h3>
      <ul className="more">
        {otrosProyectos.map((p) => (
          <li key={p.nombre}>
            <a href={p.url} target="_blank" rel="noopener">
              <Image src={p.imagen} alt="" width={1200} height={750} />
              <div>
                <span className="mono">{p.etiqueta}</span>
                <b>{p.nombre}</b>
                <p>{p.descripcion}</p>
                <small className="mono">{p.tecnologias.join(" · ")}</small>
              </div>
            </a>
          </li>
        ))}
      </ul>

      <div className="github mono">
        <span>Code and experiments on GitHub</span>
        <a className="u" href="https://github.com/sahicacode" target="_blank" rel="noopener">
          github.com/sahicacode ↗
        </a>
      </div>
    </section>
  );
}
