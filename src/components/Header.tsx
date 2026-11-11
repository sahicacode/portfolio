export default function Header() {
  return (
    <header className="top">
      <div className="wrap">
        <a className="name" href="#top">
          <i></i>Sara Hidalgo
        </a>
        <nav className="navl" aria-label="Main">
          <a href="#work">Work</a>
          <a href="#ai">AI</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
          <a className="cv" href="/docs/CV-Sara-Hidalgo-Caro.pdf" target="_blank" rel="noopener">
            CV
          </a>
        </nav>
      </div>
    </header>
  );
}
