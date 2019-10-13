self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('video-store').then(function(cache) {
     return cache.addAll([
       '/pwa2/index.html',
       '/pwa2/index.js',
       '/pwa2/style.css',
       '/pwa2/images/img1.jpg',
       '/pwa2/images/img2.jpg',
       '/pwa2/images/img3.jpg',
       '/pwa2/images/img4.jpg'
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
