// Tiger PWL - Minimal Service Worker (Installable Only, No Offline Cache)

self.addEventListener("install", () => {
  // Activate immediately
  self.skipWaiting();
});

self.addEventListener("activate", () => {
  // Take control of any existing clients immediately
  self.clients.claim();
});

// NO fetch handler → nothing is cached.
// Forces browser to fetch latest index.html every load.
