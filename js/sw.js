/*
 * Display service worker urls to be cached
 */

const cachedUrls = [
	'/',
	'/index.html',
	'/restaurant.html',
	'/css/styles.css',
	'/css/responsive.css',
	'/data/restaurants.json',
	'/img/1.jpg',
	'/img/2.jpg',
	'/img/3.jpg',
	'/img/4.jpg',
	'/img/5.jpg',
	'/img/6.jpg',
	'/img/7.jpg',
	'/img/8.jpg',
	'/img/9.jpg',
	'/img/10.jpg',
	'/js/main.js',
	'/js/restaurant_info.js',
	'/js/dbhelper.js',

];

/*
 * Setup install handler
 */

self.addEventListener('install', function (evt) {
	evt.waitUntil(
		 caches.open('v1').then(function(cache) {
		   		return cache.addAll(cachedUrls);
		 })
	);
});

/*
 * Setup fetch handler
 */

self.addEventListener('fetch', function (evt) {
    evt.respondWith(
        caches.match(evt.request).then(function (response) {
            return response || fetch(evt.request);
        })
    );
});