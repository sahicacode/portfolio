// DJ Willy El Tuerto · demo: ritmo hecho en el navegador, ecualizador, cuenta atrás, vídeo y formulario de prueba
(function () {
  var doc = document.documentElement;
  doc.classList.add('js');
  var quieto = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Ecualizador
  var eq = document.querySelector('.eq');
  var N = window.innerWidth < 600 ? 24 : 48, barras = [];
  for (var i = 0; i < N; i++) {
    var b = document.createElement('i');
    b.style.setProperty('--i', i);
    b.style.setProperty('--h', (0.18 + Math.random() * 0.5).toFixed(2));
    eq.appendChild(b); barras.push(b);
  }
  eq.classList.add('reposo');

  // Ritmo de prueba con Web Audio (sin archivos de audio)
  var boton = document.querySelector('.btn-musica'), ctx, analizador, datos, timer, paso = 0, siguiente = 0, sonando = false;
  function bombo(t) { var o = ctx.createOscillator(), g = ctx.createGain(); o.frequency.setValueAtTime(140, t); o.frequency.exponentialRampToValueAtTime(40, t + .18); g.gain.setValueAtTime(.9, t); g.gain.exponentialRampToValueAtTime(.001, t + .3); o.connect(g).connect(analizador); o.start(t); o.stop(t + .3); }
  function ruido(t, dur, vol, hp) { var len = ctx.sampleRate * dur, buf = ctx.createBuffer(1, len, ctx.sampleRate), d = buf.getChannelData(0); for (var i = 0; i < len; i++) d[i] = Math.random() * 2 - 1; var s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain(); s.buffer = buf; f.type = 'highpass'; f.frequency.value = hp; g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(.001, t + dur); s.connect(f).connect(g).connect(analizador); s.start(t); }
  var notas = [55, 55, 65.4, 55, 73.4, 55, 65.4, 49];
  function bajo(t, f) { var o = ctx.createOscillator(), fl = ctx.createBiquadFilter(), g = ctx.createGain(); o.type = 'sawtooth'; o.frequency.value = f; fl.type = 'lowpass'; fl.frequency.setValueAtTime(900, t); fl.frequency.exponentialRampToValueAtTime(200, t + .2); g.gain.setValueAtTime(.22, t); g.gain.exponentialRampToValueAtTime(.001, t + .22); o.connect(fl).connect(g).connect(analizador); o.start(t); o.stop(t + .25); }
  function programar() {
    var semi = 60 / 124 / 4;
    while (siguiente < ctx.currentTime + .12) {
      if (paso % 4 === 0) bombo(siguiente);
      if (paso % 4 === 2) { ruido(siguiente, .06, .25, 7000); bajo(siguiente, notas[(paso / 2 | 0) % 8]); }
      if (paso % 8 === 4) ruido(siguiente, .18, .35, 1500);
      siguiente += semi; paso++;
    }
  }
  function pintar() {
    if (!sonando) return;
    analizador.getByteFrequencyData(datos);
    for (var i = 0; i < N; i++) { var v = datos[Math.floor(i * datos.length / N * .7)] / 255; barras[i].style.transform = 'scaleY(' + Math.max(.04, v).toFixed(3) + ')'; }
    requestAnimationFrame(pintar);
  }
  boton.addEventListener('click', function () {
    if (!ctx) {
      var AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
      ctx = new AC(); analizador = ctx.createAnalyser(); analizador.fftSize = 256; datos = new Uint8Array(analizador.frequencyBinCount);
      var vol = ctx.createGain(); vol.gain.value = .5; analizador.connect(vol).connect(ctx.destination);
    }
    sonando = !sonando;
    boton.setAttribute('aria-pressed', sonando);
    boton.querySelector('.txt').textContent = sonando ? 'Parar la música' : 'Pon la música';
    if (sonando) { ctx.resume(); siguiente = ctx.currentTime + .05; timer = setInterval(programar, 25); eq.classList.remove('reposo'); pintar(); }
    else { clearInterval(timer); eq.classList.add('reposo'); barras.forEach(function (b) { b.style.transform = ''; }); }
  });

  // Cuenta atrás
  var cuenta = document.querySelector('.cuenta');
  if (cuenta) {
    var fin = new Date(cuenta.dataset.fecha).getTime();
    var celdas = {}; ['d', 'h', 'm', 's'].forEach(function (u) { celdas[u] = cuenta.querySelector('[data-u="' + u + '"]'); });
    var tic = function () {
      var r = Math.max(0, fin - Date.now()) / 1000;
      celdas.d.textContent = Math.floor(r / 86400);
      celdas.h.textContent = String(Math.floor(r % 86400 / 3600)).padStart(2, '0');
      celdas.m.textContent = String(Math.floor(r % 3600 / 60)).padStart(2, '0');
      celdas.s.textContent = String(Math.floor(r % 60)).padStart(2, '0');
    };
    tic(); setInterval(tic, 1000);
  }

  // Vídeo
  var caja = document.querySelector('.video');
  if (caja) {
    var play = caja.querySelector('.video-play');
    play.addEventListener('click', function (e) {
      e.preventDefault();
      if (boton.getAttribute('aria-pressed') === 'true') boton.click();
      var f = document.createElement('iframe');
      f.src = 'https://www.youtube-nocookie.com/embed/' + play.dataset.yt + '?autoplay=1&rel=0';
      f.title = 'Vídeo de YouTube';
      f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
      f.allowFullscreen = true;
      caja.appendChild(f);
      caja.classList.add('sonando');
    });
  }

  // Formulario de prueba
  var form = document.querySelector('.form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var aviso = form.querySelector('.form-aviso');
    if (!form.checkValidity()) { aviso.textContent = 'Rellena tu nombre y un correo válido.'; form.querySelector(':invalid').focus(); return; }
    aviso.textContent = '¡Gracias! Es una web de prueba, así que el mensaje no se envía a ningún sitio.';
    form.reset();
  });

  // Aparecer al bajar
  var cosas = document.querySelectorAll('.aparece');
  if ('IntersectionObserver' in window && !quieto) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('visto'); io.unobserve(e.target); } }); }, { rootMargin: '0px 0px -8% 0px' });
    [].forEach.call(cosas, function (c) { io.observe(c); });
  } else { [].forEach.call(cosas, function (c) { c.classList.add('visto'); }); }
})();
