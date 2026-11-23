"use client";

import { useEffect, useRef, useState } from "react";

// Clave del SITIO de Cloudflare Turnstile (pública). La secreta está en config-sahica.php del servidor.
const TURNSTILE = "0x4AAAAAAGPGHqi3w7hxGUvt";

type Turnstile = { render: (el: HTMLElement, o: Record<string, unknown>) => string; reset: (id: string) => void };
declare global {
  interface Window {
    turnstile?: Turnstile;
    portfolioTS?: () => void;
  }
}

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const caja = useRef<HTMLDivElement>(null);
  const widget = useRef<string | null>(null);
  const [estado, setEstado] = useState<"" | "enviando" | "ok" | "error">("");
  const [msg, setMsg] = useState("");

  // Turnstile se carga solo cuando el formulario va a verse (no al abrir la página)
  useEffect(() => {
    const el = form.current;
    if (!el || !TURNSTILE) return;
    const io = new IntersectionObserver(
      (es) => {
        if (!es.some((e) => e.isIntersecting)) return;
        io.disconnect();
        window.portfolioTS = () => {
          if (caja.current && window.turnstile)
            widget.current = window.turnstile.render(caja.current, { sitekey: TURNSTILE, theme: "dark", size: "flexible" });
        };
        const s = document.createElement("script");
        s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=portfolioTS";
        s.async = true;
        s.defer = true;
        document.head.appendChild(s);
      },
      { rootMargin: "400px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  async function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget;
    if (!f.checkValidity()) {
      f.reportValidity();
      return;
    }
    setEstado("enviando");
    setMsg("Sending…");
    try {
      const r = await fetch("/contacto.php", { method: "POST", body: new FormData(f), headers: { Accept: "application/json" } });
      const j = await r.json().catch(() => ({ ok: false }));
      if (j.ok) {
        setEstado("ok");
        setMsg(j.msg);
        f.reset();
      } else {
        setEstado("error");
        setMsg(j.msg || "The message could not be sent. Please try again in a moment.");
      }
    } catch {
      setEstado("error");
      setMsg("No connection. Please try again in a moment.");
    }
    if (widget.current && window.turnstile) window.turnstile.reset(widget.current);
  }

  return (
    <form ref={form} className="cform" action="/contacto.php" method="post" onSubmit={enviar} noValidate>
      <div className="cform-row">
        <label>
          Name
          <input name="name" required maxLength={120} autoComplete="name" />
        </label>
        <label>
          Email
          <input name="email" type="email" required maxLength={160} autoComplete="email" />
        </label>
      </div>
      <label>
        Company <span>(optional)</span>
        <input name="company" maxLength={160} autoComplete="organization" />
      </label>
      <label>
        Message
        <textarea name="message" required minLength={10} maxLength={4000} rows={5} />
      </label>
      <div className="trampa" aria-hidden="true">
        <label>
          Leave this empty
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <label className="cform-check">
        <input type="checkbox" name="privacy" required />
        <span>
          I agree that Sara uses my details only to reply to this message. <a href="/cookies/#contact-form">Privacy</a>.
        </span>
      </label>
      {TURNSTILE && <div ref={caja} className="cform-ts" />}
      <div className="cform-send">
        <button className="btn primary" type="submit" disabled={estado === "enviando"}>
          Send message
        </button>
        <p className={`cform-msg ${estado}`} role="status" aria-live="polite">
          {msg}
        </p>
      </div>
    </form>
  );
}
