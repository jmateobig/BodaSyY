const CACHE_NAME = "boda-v1";
const urlsToCache = [
  "/BodaSyY/",
  "/BodaSyY/index.html",
  "/BodaSyY/styles.css",
  "/BodaSyY/scripts.js",
  "/BodaSyY/audio.mp3",
  "/BodaSyY/image1.jpg",
  "/BodaSyY/image2.jpg",
  "/BodaSyY/image3.jpg",
  "/BodaSyY/image5.jpg",
  "/BodaSyY/pin.png",
  "/BodaSyY/anillos.png",
  "/BodaSyY/copas.png",
  "/BodaSyY/pareja.png",
  "/BodaSyY/favicon.ico",
  "/BodaSyY/prueba.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return Promise.all(
        urlsToCache.map((url) =>
          fetch(url).then((response) => {
            if (!response.ok) {
              throw new Error(`Fallo al obtener: ${url} - ${response.statusText}`);
            }
            return cache.put(url, response.clone());
          })
        )
      );
    }).catch((error) => {
      console.error("Error cacheando archivos:", error);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
