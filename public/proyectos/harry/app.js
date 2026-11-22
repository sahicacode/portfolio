// Harry Photographer · demo: portada con fotos que cambian, galería con visor, efecto de profundidad y formulario de prueba
(function () {
  var doc = document.documentElement;
  doc.classList.add('js');
  var quieto = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Portada: fotos que se van cambiando
  var pases = [].slice.call(document.querySelectorAll('.pases img')), actual = 0;
  pases[0].classList.add('activa');
  if (!quieto && pases.length > 1) setInterval(function () {
    pases[actual].classList.remove('activa');
    actual = (actual + 1) % pases.length;
    pases[actual].classList.add('activa');
  }, 6000);

  // Frase: la foto se mueve más despacio que la página
  var frase = document.querySelector('.frase'), fondo = frase && frase.querySelector('img');
  if (fondo && !quieto) {
    var mover = function () {
      var r = frase.getBoundingClientRect();
      if (r.bottom < 0 || r.top > innerHeight) return;
      var p = (r.top + r.height / 2 - innerHeight / 2) / innerHeight;
      fondo.style.transform = 'translateY(' + (p * -12).toFixed(2) + '%)';
    };
    addEventListener('scroll', function () { requestAnimationFrame(mover); }, { passive: true }); mover();
  }

  // Visor de la galería (teclado: flechas y Escape)
  var fotos = [].slice.call(document.querySelectorAll('.foto')), visor = document.querySelector('.visor'),
      img = visor.querySelector('img'), pie = visor.querySelector('.visor-pie'), idx = 0, origen = null;
  function ver(i) {
    idx = (i + fotos.length) % fotos.length;
    var f = fotos[idx], mini = f.querySelector('img');
    img.src = f.dataset.grande; img.alt = mini.alt; pie.textContent = mini.alt + ' · ' + (idx + 1) + '/' + fotos.length;
  }
  function abrir(i) { origen = document.activeElement; ver(i); visor.hidden = false; document.body.style.overflow = 'hidden'; visor.querySelector('.visor-cerrar').focus(); }
  function cerrar() { visor.hidden = true; document.body.style.overflow = ''; if (origen) origen.focus(); }
  fotos.forEach(function (f, i) { f.addEventListener('click', function () { abrir(i); }); });
  visor.querySelector('.visor-cerrar').addEventListener('click', cerrar);
  visor.querySelector('.visor-ant').addEventListener('click', function () { ver(idx - 1); });
  visor.querySelector('.visor-sig').addEventListener('click', function () { ver(idx + 1); });
  visor.addEventListener('click', function (e) { if (e.target === visor) cerrar(); });
  document.addEventListener('keydown', function (e) {
    if (visor.hidden) return;
    if (e.key === 'Escape') cerrar();
    if (e.key === 'ArrowLeft') ver(idx - 1);
    if (e.key === 'ArrowRight') ver(idx + 1);
    if (e.key === 'Tab') { var b = [].slice.call(visor.querySelectorAll('button')), a = b.indexOf(document.activeElement); e.preventDefault(); b[(a + (e.shiftKey ? -1 : 1) + b.length) % b.length].focus(); }
  });

  // Formulario de prueba
  var form = document.querySelector('.form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var aviso = form.querySelector('.form-aviso');
    if (!form.checkValidity()) { aviso.textContent = 'Rellena todos los campos con un correo válido.'; form.querySelector(':invalid').focus(); return; }
    aviso.textContent = '¡Gracias! Es una web de prueba, así que el mensaje no se envía a ningún sitio.';
    form.reset();
  });

  // Aparecer al bajar
  var cosas = document.querySelectorAll('.aparece, .galeria li');
  if ('IntersectionObserver' in window && !quieto) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('visto'); io.unobserve(e.target); } }); }, { rootMargin: '0px 0px -6% 0px' });
    [].forEach.call(cosas, function (c) { io.observe(c); });
  } else { [].forEach.call(cosas, function (c) { c.classList.add('visto'); }); }
})();
