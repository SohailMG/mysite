self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("v1").then((cache) => {
      return cache.addAll([
        "/",
        "/index.html",
        "/manifest.json",
        "/public/favicon.ico",
        "/public/sw.js",
        "/public/service-registery.js",
        "/_next/static/chunks/pages/_app.js",
        "/_next/static/chunks/pages/index.js",
      ]);
    })
  );
});
