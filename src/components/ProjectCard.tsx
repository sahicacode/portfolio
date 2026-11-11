import Image from "next/image";
import type { Proyecto } from "@/data/proyectos";

function quitarProtocolo(url: string) {
  return url.replace("https://", "");
}

export default function ProjectCard({ proyecto }: { proyecto: Proyecto }) {
  return (
    <a
      className="pj"
      href={proyecto.url}
      target="_blank"
      rel="noopener"
    >
      <div className="stage">
        <div className="win">
          <div className="tb">
            <i></i>
            <i></i>
            <i></i>
            <span>{quitarProtocolo(proyecto.url)}</span>
          </div>
          <Image src={proyecto.imagen} alt={`Home page of ${proyecto.nombre}`} width={1200} height={750} />
        </div>
      </div>
      <div className="info">
        <div className="row">
          <span className="mono">{proyecto.etiqueta}</span>
          <span className="go" aria-hidden="true">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M4 12L12 4M6 4h6v6" />
            </svg>
          </span>
        </div>
        <h3>{proyecto.nombre}</h3>
        <p>{proyecto.descripcion}</p>
        <div className="tags">
          {proyecto.tecnologias.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <span className="url">{quitarProtocolo(proyecto.url)}</span>
      </div>
    </a>
  );
}
