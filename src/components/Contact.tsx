import CopyEmail from "./CopyEmail";

const email = "sarahidalgocaro97@gmail.com";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <span className="mono k">Contact</span>
        <h2>
          Let&apos;s talk. <em>In English or Spanish.</em>
        </h2>
        <p>Open to front-end roles. Tell me about your team and what you are building.</p>
        <div className="mailrow">
          <a className="mail" href={`mailto:${email}`}>
            {email}
          </a>
          <CopyEmail email={email} />
        </div>
        <div className="ctas">
          <a className="btn primary" href="/docs/CV-Sara-Hidalgo-Caro.pdf" target="_blank" rel="noopener">
            Download CV
          </a>
          <a className="btn" href="https://github.com/sahicacode" target="_blank" rel="noopener">
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
