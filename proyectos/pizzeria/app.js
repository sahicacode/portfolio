// Pizzería Demogorgon · demo: pestañas de la carta, botón «El revés», esporas y aparecer al bajar
(function () {
  var doc = document.documentElement;
  doc.classList.add('js');
  var quieto = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Pestañas de la carta (con flechas del teclado)
  var tabs = [].slice.call(document.querySelectorAll('[role="tab"]'));
  function abrir(tab) {
    tabs.forEach(function (t) {
      var sel = t === tab;
      t.setAttribute('aria-selected', sel);
      t.tabIndex = sel ? 0 : -1;
      var panel = document.getElementById(t.getAttribute('aria-controls'));
      panel.hidden = !sel;
      if (sel) {
        panel.classList.remove('entra');
        [].forEach.call(panel.querySelectorAll('.plato'), function (p, n) { p.style.setProperty('--n', n); });
        void panel.offsetWidth;
        panel.classList.add('entra');
      }
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { abrir(t); });
    t.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return;
      var sig = tabs[(i + d + tabs.length) % tabs.length];
      abrir(sig); sig.focus();
    });
  });

  // Botón «El revés»
  var boton = document.querySelector('.reves');
  var meta = document.querySelector('meta[name="theme-color"]');
  boton.addEventListener('click', function () {
    var on = !doc.classList.contains('al-reves');
    doc.classList.toggle('al-reves', on);
    boton.setAttribute('aria-pressed', on);
    boton.title = on ? 'Volver al mundo normal' : 'Pasar al revés';
    if (meta) meta.content = on ? '#0a0f16' : '#07080c';
  });

  // Aparecer al bajar
  var cosas = document.querySelectorAll('.sec-cab, .esp, .postre-img, .postre-txt, .casa-txt, .casa-fotos');
  [].forEach.call(cosas, function (c) { c.classList.add('aparece'); });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('visto'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -10% 0px' });
    [].forEach.call(cosas, function (c) { io.observe(c); });
  } else {
    [].forEach.call(cosas, function (c) { c.classList.add('visto'); });
  }

  // Esporas flotando en la portada (más en El revés)
  var lienzo = document.querySelector('.esporas');
  if (!lienzo || quieto) return;
  var ctx = lienzo.getContext('2d');
  var motas = [], w = 0, h = 0, ratio = Math.min(window.devicePixelRatio || 1, 2);
  function medir() {
    w = lienzo.clientWidth; h = lienzo.clientHeight;
    lienzo.width = w * ratio; lienzo.height = h * ratio;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    motas = [];
    var n = Math.round(w * h / 9000);
    for (var i = 0; i < n; i++) motas.push({ x: Math.random() * w, y: Math.random() * h, r: Math.random() * 1.8 + .4, v: Math.random() * .3 + .08, f: Math.random() * 6.28 });
  }
  medir();
  window.addEventListener('resize', medir);
  var visible = true;
  new IntersectionObserver(function (e) { visible = e[0].isIntersecting; }).observe(lienzo);
  (function pinta(t) {
    requestAnimationFrame(pinta);
    if (!visible) return;
    ctx.clearRect(0, 0, w, h);
    var reves = doc.classList.contains('al-reves');
    ctx.fillStyle = reves ? 'rgba(200,225,255,.75)' : 'rgba(255,190,150,.35)';
    var tope = reves ? motas.length : Math.round(motas.length * .4);
    for (var i = 0; i < tope; i++) {
      var m = motas[i];
      m.y -= m.v * (reves ? 1.6 : 1); m.x += Math.sin(t / 1600 + m.f) * .25;
      if (m.y < -4) { m.y = h + 4; m.x = Math.random() * w; }
      ctx.beginPath(); ctx.arc(m.x, m.y, m.r, 0, 6.283); ctx.fill();
    }
  })(0);
})();
