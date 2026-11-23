/* Google Analytics con aviso de cookies (RGPD)
   - Pon aquí el ID de medición de Google Analytics (G-XXXXXXX). Vacío = sin Analytics y sin aviso.
   - Analytics NO se carga hasta que la persona pulsa «Accept». «Decline» es igual de fácil.
   - La elección se guarda en este navegador (portfolio-cookies = si | no).
   - Cualquier botón con data-cookies="abrir" vuelve a enseñar el aviso (está en /cookies/).
   Se usa en la portada (Next.js) y en /proyectos/. Las demos no lo llevan: son webs de prueba. */
(function () {
  var GA_ID = "G-3KSG0NE4XP";
  if (!GA_ID) return;

  var CLAVE = "portfolio-cookies";
  var es = (document.documentElement.lang || "").indexOf("es") === 0;
  var T = es
    ? { t: "¿Me dejas contar las visitas?", p: "Uso Google Analytics para saber cuánta gente entra y desde dónde. Pone cookies, así que solo se activa si aceptas.", mas: "Más información", no: "Rechazar", si: "Aceptar" }
    : { t: "Can I count visits?", p: "I use Google Analytics to see how many people visit and where from. It sets cookies, so it only runs if you accept.", mas: "More info", no: "Decline", si: "Accept" };

  function leer() { try { return localStorage.getItem(CLAVE); } catch (e) { return null; } }
  function guardar(v) { try { localStorage.setItem(CLAVE, v); } catch (e) {} }

  function cargar() {
    if (window.__ga) return; window.__ga = 1;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", GA_ID);
    var s = document.createElement("script"); s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
    document.head.appendChild(s);
  }

  function borrar() {
    // Quitar las cookies de Analytics si se retira el permiso
    document.cookie.split(";").forEach(function (c) {
      var n = c.split("=")[0].trim();
      if (n.indexOf("_ga") === 0) ["", "." + location.hostname, location.hostname, ".sahica.com"].forEach(function (d) {
        document.cookie = n + "=; Max-Age=0; path=/" + (d ? "; domain=" + d : "");
      });
    });
  }

  var caja;
  function crearAviso() {
    if (caja) return caja;
    var css = document.createElement("style");
    css.textContent =
      ".aviso-ck{position:fixed;left:16px;right:16px;bottom:16px;z-index:9999;max-width:440px;margin-left:auto;background:#14171d;color:#edebe6;border:1px solid #323843;border-radius:14px;padding:16px 18px;box-shadow:0 18px 40px rgba(0,0,0,.45);font:15px/1.5 system-ui,-apple-system,'Segoe UI',sans-serif}" +
      ".aviso-ck[hidden]{display:none}.aviso-ck p{margin:0 0 12px}.aviso-ck b{display:block;margin-bottom:2px}" +
      ".aviso-ck a{color:#5aa2ff;text-decoration:underline;text-underline-offset:3px}" +
      ".aviso-ck div{display:flex;gap:10px}.aviso-ck button{flex:1;min-height:44px;border-radius:999px;border:1px solid #323843;background:transparent;color:#edebe6;font:inherit;font-weight:600;cursor:pointer}" +
      ".aviso-ck button:hover{border-color:#5aa2ff}.aviso-ck button:focus-visible{outline:2px solid #5aa2ff;outline-offset:2px}";
    document.head.appendChild(css);
    caja = document.createElement("div");
    caja.className = "aviso-ck"; caja.setAttribute("role", "region"); caja.setAttribute("aria-label", "Cookies"); caja.hidden = true;
    caja.innerHTML = "<p><b>" + T.t + "</b>" + T.p + ' <a href="/cookies/">' + T.mas + "</a>.</p>" +
      '<div><button type="button" data-cookies="no">' + T.no + '</button><button type="button" data-cookies="si">' + T.si + "</button></div>";
    document.body.appendChild(caja);
    return caja;
  }

  function iniciar() {
    var v = leer();
    if (v === "si") cargar(); else if (v !== "no") crearAviso().hidden = false;
    document.addEventListener("click", function (e) {
      var b = e.target.closest && e.target.closest("[data-cookies]"); if (!b) return;
      var q = b.getAttribute("data-cookies");
      if (q === "abrir") { crearAviso().hidden = false; caja.querySelector("button").focus(); return; }
      guardar(q); crearAviso().hidden = true;
      if (q === "si") cargar(); else { var habia = !!window.__ga; borrar(); if (habia) location.reload(); }
    });
  }

  // Se espera a que la página termine de cargar: en la portada (Next.js) React «hidrata» el body
  // y quitaría el aviso si se añadiera antes.
  if (document.readyState === "complete") iniciar(); else window.addEventListener("load", iniciar);
})();
