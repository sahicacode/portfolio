export default function Footer() {
  return (
    <footer>
      <div className="wrap mono">
        <span>© {new Date().getFullYear()} Sara Hidalgo Caro</span>
        <span>
          Made with Next.js · Seville · <a href="/cookies/">Privacy &amp; cookies</a>
        </span>
      </div>
    </footer>
  );
}
