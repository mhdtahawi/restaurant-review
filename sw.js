self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open('restaurant-review-cache').then(function(cache){
        return cache.match(event.request).then(function (cachedResponse){
            return cachedResponse || fetch(event.request).then(function(networkResponse) {
              cache.put(event.request, networkResponse.clone());
              return networkResponse;
            });
          });
        }));
      });
