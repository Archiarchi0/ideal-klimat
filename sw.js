// Network-only service worker. No caching of financial or authentication data.
self.addEventListener('install', event => { self.skipWaiting(); });
self.addEventListener('activate', event => { event.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', event => { if (event.request.method === 'GET' && new URL(event.request.url).origin === self.location.origin) { event.respondWith(fetch(event.request)); } });
