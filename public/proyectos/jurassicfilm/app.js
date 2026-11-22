// Jurassic Film · demo: apertura de cine, contador de grabación, vídeo y formulario de prueba
(function () {
  var doc = document.documentElement;
  doc.classList.add('js');
  var quieto = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Apertura: las franjas negras se abren como en el cine
  requestAnimationFrame(function () { requestAnimationFrame(function () { doc.classList.add('abierta'); }); });
  var hv = document.querySelector('.hero-video');
  if (quieto && hv) { hv.removeAttribute('autoplay'); hv.pause(); }

  // Contador de grabación: avanza con el tiempo y con lo que bajas
  var tc = document.querySelector('.tc'), inicio = performance.now();
  function dos(n) { return String(n).padStart(2, '0'); }
  function tic() {
    var seg = (performance.now() - inicio) / 1000 + scrollY / 40;
    tc.textContent = dos(Math.floor(seg / 3600)) + ':' + dos(Math.floor(seg / 60) % 60) + ':' + dos(Math.floor(seg) % 60) + ':' + dos(Math.floor(seg * 24) % 24);
    requestAnimationFrame(tic);
  }
  if (!quieto) tic();

  // Vídeos de fondo: aparecen al llegar a su sección y se paran al salir
  var fondos = document.querySelectorAll('.con-video');
  if ('IntersectionObserver' in window && !quieto) {
    var iov = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        var v = e.target.querySelector('.fondo-video');
        if (e.isIntersecting) { v.preload = 'auto'; var pr = v.play(); if (pr) pr.catch(function () {}); e.target.classList.add('activo'); }
        else { v.pause(); e.target.classList.remove('activo'); }
      });
    }, { threshold: .2 });
    [].forEach.call(fondos, function (f) { iov.observe(f); });
  }

  // Formulario de prueba
  var form = document.querySelector('.form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var aviso = form.querySelector('.form-aviso');
    if (!form.checkValidity()) { aviso.textContent = 'Rellena tu nombre, un correo válido y tu idea.'; form.querySelector(':invalid').focus(); return; }
    aviso.textContent = '¡Corten! Es una web de prueba, así que el mensaje no se envía a ningún sitio.';
    form.reset();
  });

  // Aparecer al bajar
  var cosas = document.querySelectorAll('.aparece');
  if ('IntersectionObserver' in window && !quieto) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('visto'); io.unobserve(e.target); } }); }, { rootMargin: '0px 0px -8% 0px' });
    [].forEach.call(cosas, function (c) { io.observe(c); });
  } else { [].forEach.call(cosas, function (c) { c.classList.add('visto'); }); }
})();
