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


self.addEventListener('instal', function(event) {
  event.waitUntil(
    caches.open('restaurant-review-cache').then(function(cache){
        return cache.addAll(
          [
            '/css/styles.css',
            '/js/dbhelper.js',
            '/js/main.js',
            '/js/restaurant_info.js',
            '/data/restaurants.json',
            '/index.html',
            '/restaurant.html',
            '/img/1.jpg',
            '/img/2.jpg',
            '/img/3.jpg',
            '/img/4.jpg',
            '/img/5.jpg',
            '/img/6.jpg',
            '/img/7.jpg',
            '/img/8.jpg',
            '/img/9.jpg',
            '/img/10.jpg'
          ]
        );
      }));
      });
