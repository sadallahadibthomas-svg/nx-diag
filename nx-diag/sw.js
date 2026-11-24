// NX Diagnostic - mise en cache pour fonctionner sans internet
const V = "nx-20261124-205325";
const FICHIERS = ["./", "index.html", "contenu.js", "manifest.webmanifest", "icone-192.png", "icone-512.png", "icone-maskable-512.png", "polices/Barlow-400-latin-ext.woff2", "polices/Barlow-400-latin.woff2", "polices/Barlow-500-latin-ext.woff2", "polices/Barlow-500-latin.woff2", "polices/Barlow-600-latin-ext.woff2", "polices/Barlow-600-latin.woff2", "polices/Barlow-700-latin-ext.woff2", "polices/Barlow-700-latin.woff2", "polices/Barlow-800-latin-ext.woff2", "polices/Barlow-800-latin.woff2", "polices/BarlowCondensed-500-latin-ext.woff2", "polices/BarlowCondensed-500-latin.woff2", "polices/BarlowCondensed-600-latin-ext.woff2", "polices/BarlowCondensed-600-latin.woff2", "polices/BarlowCondensed-700-latin-ext.woff2", "polices/BarlowCondensed-700-latin.woff2", "polices/BebasNeue-400-latin-ext.woff2", "polices/BebasNeue-400-latin.woff2", "polices/Caveat-500-latin-ext.woff2", "polices/Caveat-500-latin.woff2", "polices/Caveat-700-latin-ext.woff2", "polices/Caveat-700-latin.woff2", "polices/polices.css"];
// fichier par fichier (un fichier manquant ne bloque pas l'installation)
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(V).then((c) => Promise.all(FICHIERS.map((f) =>
    fetch(f, {cache: "reload"}).then((r) => r.ok ? c.put(f, r) : null).catch(() => null)))));
  self.skipWaiting();
});
self.addEventListener("activate", (e) => { e.waitUntil(caches.keys().then((k) => Promise.all(k.filter((n) => n !== V).map((n) => caches.delete(n)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(caches.match(e.request, {ignoreSearch: true}).then((r) => r || fetch(e.request)));
});
