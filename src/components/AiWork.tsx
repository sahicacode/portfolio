import Image from "next/image";
import { herramientasIA, trabajosIA } from "@/data/ia";

export default function AiWork() {
  return (
    <section className="s wrap" id="ai">
      <div className="sh">
        <div>
          <span className="k mono">AI</span>
          <h2>
            I work with <em>AI agents.</em>
          </h2>
        </div>
        <p>AI is part of how I build, research and create. I use agents to code faster and I review everything they write.</p>
      </div>

      <ul className="tools">
        {herramientasIA.map((h) => (
          <li key={h.nombre}>
            <b>{h.nombre}</b>
            <span className="mono">{h.uso}</span>
          </li>
        ))}
      </ul>

      <div className="ai-grid">
        {trabajosIA.map((t) => (
          <a className="ai-card" key={t.titulo} href={t.url} target="_blank" rel="noopener">
            <Image src={t.imagen} alt="" width={600} height={400} />
            <div>
              <b>{t.titulo}</b>
              <p>{t.texto}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
