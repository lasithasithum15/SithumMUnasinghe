// MathLab service worker — app-shell caching so the portal still opens
// (from cache) when a student's connection drops mid-session. All actual
// student data already lives in localStorage / Firestore sync, this SW
// only makes the shell (HTML/CSS/JS/icons) available offline.
//
// Bump CACHE_NAME whenever index.html changes so old caches don't serve
// stale app code after an update.
const CACHE_NAME = 'mathlab-shell-v1';
const APP_SHELL = [
    './',
    './index.html',
    './manifest.json',
    './icon-192.png',
    './icon-512.png'
];

self.addEventListener('install', (event) => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL).catch(() => {
            // Ignore individual failures (e.g. running from file:// during dev)
            // so one missing asset doesn't block the whole install.
        }))
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
        ).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    const req = event.request;
    if (req.method !== 'GET') return; // never intercept Firestore/API writes

    // Page navigations: try the network first (so students always get the
    // latest content/questions when online), fall back to the cached shell
    // the moment the network fails.
    if (req.mode === 'navigate') {
        event.respondWith(
            fetch(req).then((res) => {
                caches.open(CACHE_NAME).then((cache) => cache.put('./index.html', res.clone()));
                return res;
            }).catch(() => caches.match('./index.html'))
        );
        return;
    }

    // Everything else (CDN scripts, fonts, icons): cache-first, refresh the
    // cache in the background when possible (stale-while-revalidate).
    event.respondWith(
        caches.match(req).then((cached) => {
            const networkFetch = fetch(req).then((res) => {
                if (res && res.status === 200) {
                    caches.open(CACHE_NAME).then((cache) => cache.put(req, res.clone()));
                }
                return res;
            }).catch(() => cached);
            return cached || networkFetch;
        })
    );
});
