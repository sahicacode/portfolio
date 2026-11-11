import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-l">
          <span className="hello mono">
            <i></i>Open to work<span className="largo"> · Front-end roles</span>
          </span>
          <h1>
            Front-end developer who builds things that <em>pass inspection.</em>
          </h1>
          <p className="intro">
            I&apos;m Sara, a web developer from Seville. I build with <b>React, Next.js and TypeScript</b>, and I
            check my work the way I check <b>Airbus parts</b> as a quality inspector: every detail, before it ships.
          </p>
          <div className="ctas">
            <a className="btn primary" href="#work">
              See my work ↓
            </a>
            <a className="btn" href="#contact">
              Get in touch
            </a>
          </div>
        </div>
        <div className="photo">
          <Image src="/sara-hidalgo.webp" alt="Sara Hidalgo" width={900} height={895} priority />
          <div className="code" aria-hidden="true">
            <header>
              <i></i>
              <i></i>
              <i></i>
              <span>sara.ts</span>
            </header>
            <pre>
              <span className="k">const</span> <span className="p">sara</span> = {"{"}
              {"\n  "}role: <span className="s">&quot;Front-End Dev&quot;</span>,
              {"\n  "}stack: [<span className="s">&quot;React&quot;</span>, <span className="s">&quot;TS&quot;</span>,{" "}
              <span className="s">&quot;Next.js&quot;</span>],
              {"\n  "}qualityCheck: <span className="k">true</span>,
              {"\n  "}openToWork: <span className="k">true</span>,
              {"\n"}
              {"};"}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
