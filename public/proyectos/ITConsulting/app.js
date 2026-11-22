// Codemetry IT Consulting · demo: menú del móvil, consola que se escribe sola, aparecer al bajar, volver arriba y formulario de prueba
(function () {
  var doc = document.documentElement;
  doc.classList.add('js');
  var quieto = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Menú del móvil
  var nav = document.querySelector('.nav'), btn = document.querySelector('.menu-btn');
  function cerrar() { nav.classList.remove('abierto'); btn.setAttribute('aria-expanded', 'false'); }
  btn.addEventListener('click', function () {
    var abre = !nav.classList.contains('abierto');
    nav.classList.toggle('abierto', abre);
    btn.setAttribute('aria-expanded', String(abre));
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && nav.classList.contains('abierto')) { cerrar(); btn.focus(); } });
  document.addEventListener('click', function (e) { if (!nav.contains(e.target)) cerrar(); });

  // Consola de la portada: escribe línea a línea
  var lineas = document.querySelectorAll('.consola-lineas li');
  if (lineas.length) {
    if (quieto) { [].forEach.call(lineas, function (li) { li.textContent = li.dataset.t; }); }
    else {
      var cursor = document.createElement('span'); cursor.className = 'cursor';
      var i = 0, c = 0;
      (function escribir() {
        if (i >= lineas.length) { lineas[lineas.length - 1].appendChild(cursor); return; }
        var li = lineas[i], t = li.dataset.t, orden = t.charAt(0) === '$';
        if (!orden) { li.textContent = t; i++; c = 0; setTimeout(escribir, 380); return; }
        c++; li.textContent = t.slice(0, c); li.appendChild(cursor);
        if (c >= t.length) { i++; c = 0; setTimeout(escribir, 420); } else setTimeout(escribir, 28 + Math.random() * 40);
      })();
    }
  }

  // Aparecer al bajar
  var cosas = document.querySelectorAll('.aparece');
  if ('IntersectionObserver' in window && !quieto) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('visto'); io.unobserve(e.target); } }); }, { rootMargin: '0px 0px -8% 0px' });
    [].forEach.call(cosas, function (el) { io.observe(el); });
  } else { [].forEach.call(cosas, function (el) { el.classList.add('visto'); }); }

  // Volver arriba
  var arriba = document.querySelector('.arriba');
  window.addEventListener('scroll', function () { arriba.classList.toggle('ver', scrollY > 500); }, { passive: true });
  arriba.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: quieto ? 'auto' : 'smooth' }); });

  // Formulario de prueba
  var form = document.querySelector('.form');
  if (form) form.addEventListener('submit', function (e) {
    e.preventDefault();
    var aviso = form.querySelector('.form-aviso');
    if (!form.checkValidity()) { aviso.style.color = '#b42318'; aviso.textContent = 'Rellena tu nombre, un correo válido y tu mensaje.'; form.querySelector(':invalid').focus(); return; }
    aviso.style.color = ''; aviso.textContent = '¡Gracias! Es una web de prueba, así que el mensaje no se envía a ningún sitio.';
    form.reset();
  });
})();
