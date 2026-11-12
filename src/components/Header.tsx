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
          <a className="cv" href="/cv/Sara-Hidalgo-Caro-CV.pdf" download>
            CV
          </a>
        </nav>
      </div>
    </header>
  );
}
