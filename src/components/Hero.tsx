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
            Hi, I&apos;m Sara.
            <br />
            <em>Front&#8209;end developer.</em>
          </h1>
          <p className="intro">
            I&apos;m a <b>web developer</b> from Seville. I build apps with <b>React, Next.js and TypeScript</b>, and my
            background in IT support and
            quality control for <b>Airbus</b> means I care about the details, from the code to the last pixel.
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
