const CACHE_NAME = "tiger-pwl-cache-v1";
const urlsToCache = [
  "/tiger.pwl/",
  "/tiger.pwl/index.html",
  "/tiger.pwl/manifest.json",
  "/tiger.pwl/icon-192.png",
  "/tiger.pwl/icon-512.png"
];

// Install SW
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

// Serve from cache when offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
