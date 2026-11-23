import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy & cookies · Sara Hidalgo Caro",
  description: "What the contact form does with your data, which cookies this portfolio uses and how to change your choice.",
  alternates: { canonical: "/cookies/" },
  robots: { index: false, follow: true },
};

// Página de cookies (LSSI): qué se usa y cómo cambiar la elección.
// El botón «Change my choice» lo maneja public/analitica.js.
export default function Cookies() {
  return (
    <main className="legal wrap">
      <span className="mono k">Privacy</span>
      <h1>Privacy &amp; cookies</h1>
      <h2 id="contact-form">Contact form</h2>
      <p>
        If you write to me through the form, I receive your name, email, company (if you add it) and message by email at
        my personal inbox. I only use them to answer you, and I delete them when they&apos;re no longer needed. Nothing
        is added to a mailing list or shared with anyone. The site is hosted by Hostinger (EU), which sends the email.
      </p>
      <p>
        To stop spam, the form uses <b>Cloudflare Turnstile</b>, which checks you&apos;re a person without cookies for
        advertising.{" "}
        <a href="https://www.cloudflare.com/turnstile-privacy-policy/" rel="noopener">Turnstile privacy</a>. You can ask
        me to see or delete your data at any time by email.
      </p>
      <h2>Visit counts</h2>
      <p>
        To know how many people visit, this site uses <b>Cloudflare Web Analytics</b>. It sets no cookies, stores nothing
        in your browser and doesn&apos;t follow you across sites: it only gives me totals, without knowing who you are.{" "}
        <a href="https://www.cloudflare.com/privacypolicy/" rel="noopener">Cloudflare privacy</a>.
      </p>
      <h2>Cookies</h2>
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
