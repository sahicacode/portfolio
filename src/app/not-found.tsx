import Link from "next/link";

export default function NotFound() {
  return (
    <main className="nf wrap">
      <span className="mono k">404</span>
      <h1>This page doesn&apos;t exist.</h1>
      <Link className="btn primary" href="/">
        Back to the portfolio
      </Link>
    </main>
  );
}
