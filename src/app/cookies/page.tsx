import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookies · Sara Hidalgo Caro",
  description: "Which cookies this portfolio uses and how to change your choice.",
  alternates: { canonical: "/cookies/" },
  robots: { index: false, follow: true },
};

// Página de cookies (LSSI): qué se usa y cómo cambiar la elección.
// El botón «Change my choice» lo maneja public/analitica.js.
export default function Cookies() {
  return (
    <main className="legal wrap">
      <span className="mono k">Cookies</span>
      <h1>Cookies on this site</h1>
      <p>
        Only if you click <b>Accept</b> in the notice, this site uses <b>Google Analytics</b> to count visits, see where
        they come from and which pages are viewed. If you decline, it doesn&apos;t load and no cookie is set.
      </p>
      <p>
        <button className="btn" type="button" data-cookies="abrir">
          Change my choice
        </button>
      </p>
      <div className="tabla">
        <table>
          <thead>
            <tr>
              <th>Cookie</th>
              <th>Who</th>
              <th>What for</th>
              <th>Lasts</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>_ga</code></td>
              <td>Google</td>
              <td>Tell different visitors apart, without knowing who you are</td>
              <td>2 years</td>
            </tr>
            <tr>
              <td><code>_ga_…</code></td>
              <td>Google</td>
              <td>Know when a visit starts and ends</td>
              <td>2 years</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Google (Google Ireland Ltd.) processes this data for me and may transfer it to the United States, covered by the
        EU‑US Data Privacy Framework.{" "}
        <a href="https://policies.google.com/technologies/partner-sites" rel="noopener">How Google uses this data</a>.
      </p>
      <p>
        Your choice is saved in your browser (not a cookie) so the notice doesn&apos;t appear again. Clearing your
        browser data removes it. Questions: <a href="mailto:admin@sahica.com">admin@sahica.com</a>.
      </p>
      <p>
        <Link className="btn primary" href="/">
          Back to the portfolio
        </Link>
      </p>
    </main>
  );
}
