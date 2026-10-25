// ZESZYT — praca bez internetu (od 1.13.0). Strony i pliki zawsze najpierw z sieci (po „Scal” od razu najnowsza wersja),
// kopia zapisana w telefonie; bez internetu — kopia. Wystarczy raz otworzyć aplikację z internetem.
// Bierzemy wszystko z tego samego adresu (strony, silnik, ikony, baza kodów z MOJE) i pismo Caveat z Google.
const C = 'zeszyt-offline-v1';
const NA_START = ['./', './t60.html', './modele/', './modele/t60.html', './silnik.js', './silnik60.js', './zeszyt.webmanifest', './zeszyt-192.png', './modele/modele.webmanifest'];
self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(C).then(c => Promise.all(NA_START.map(u => c.add(new Request(u, { cache: 'no-store' })).catch(() => {})))));
});
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  const r = e.request; if (r.method !== 'GET') return;
  const u = new URL(r.url), swoj = u.origin === location.origin, pismo = /^fonts\.(googleapis|gstatic)\.com$/.test(u.hostname);
  if (!swoj && !pismo) return;
  const nav = r.mode === 'navigate', klucz = nav ? u.origin + u.pathname : r;
  e.respondWith((async () => {
    const c = await caches.open(C);
    try {
      const res = nav ? await fetch(r.url, { cache: 'no-store' }) : await fetch(r, swoj ? { cache: 'no-store' } : {});
      if (res.ok || res.type === 'opaque') c.put(klucz, res.clone()).catch(() => {});
      return res;
    } catch (err) {
      const m = await c.match(klucz, { ignoreSearch: true });
      if (m) return m;
      throw err;
    }
  })());
});
