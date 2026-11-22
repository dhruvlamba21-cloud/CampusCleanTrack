(function () {
  'use strict';
  var BINS = [{ id: 'wet', name: 'Wet Waste Bin' }, { id: 'dry', name: 'Dry Waste Bin' }];
  var levels = { wet: 0, dry: 0 };
  var wrap = document.getElementById('bins');

  BINS.forEach(function (b) {
    var c = document.createElement('article');
    c.className = 'card';
    c.innerHTML =
      '<div class="bin-top"><h3>' + b.name + '</h3><span class="badge" id="b-' + b.id + '"></span></div>' +
      '<div class="tank"><div class="fill" id="f-' + b.id + '"></div><div class="pct" id="p-' + b.id + '"></div></div>' +
      '<label for="r-' + b.id + '">Simulated fill level</label>' +
      '<input type="range" min="0" max="100" value="0" id="r-' + b.id + '">' +
      '<div class="leds"><span class="led g" id="g-' + b.id + '"></span><span class="led y" id="y-' + b.id + '"></span>' +
      '<span class="led r" id="rd-' + b.id + '"></span><span id="bz-' + b.id + '">Buzzer: off</span></div>';
    wrap.appendChild(c);
    document.getElementById('r-' + b.id).addEventListener('input', function (e) {
      levels[b.id] = Number(e.target.value);
      render();
    });
  });

  function status(v) {
    if (v >= 80) return { t: 'Full – Alert', c: 's-bad' };
    if (v >= 50) return { t: 'Filling', c: 's-warn' };
    return { t: 'Normal', c: 's-ok' };
  }

  function render() {
    var msgs = [];
    BINS.forEach(function (b) {
      var v = levels[b.id], s = status(v), id = b.id;
      document.getElementById('f-' + id).style.height = v + '%';
      document.getElementById('p-' + id).textContent = v + '%';
      document.getElementById('r-' + id).value = v;
      var badge = document.getElementById('b-' + id);
      badge.textContent = s.t;
      badge.className = 'badge ' + s.c;
      document.getElementById('g-' + id).classList.toggle('on', v < 50);
      document.getElementById('y-' + id).classList.toggle('on', v >= 50 && v < 80);
      document.getElementById('rd-' + id).classList.toggle('on', v >= 80);
      document.getElementById('bz-' + id).textContent = 'Buzzer: ' + (v >= 80 ? 'ON' : 'off');
      if (v >= 80) msgs.push(b.name + ' is ' + v + '% full. Please empty it soon.');
    });
    var box = document.getElementById('alerts');
    box.innerHTML = msgs.length
      ? msgs.map(function (m) { return '<div class="alert">⚠ ' + m + '</div>'; }).join('')
      : '<div class="alert none">No alerts. All bins are below 80%.</div>';
  }

  document.querySelectorAll('[data-s]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var p = btn.getAttribute('data-s').split(',');
      levels.wet = Number(p[0]); levels.dry = Number(p[1]);
      render();
    });
  });
  document.getElementById('reset').addEventListener('click', function () {
    levels.wet = 0; levels.dry = 0; render();
  });

  var menu = document.querySelector('.menu-btn'), nav = document.getElementById('nav');
  menu.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', open);
  });
  nav.addEventListener('click', function () { nav.classList.remove('open'); menu.setAttribute('aria-expanded', false); });

  render();
})();
