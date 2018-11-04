/**
 * Display service worker registration
 */
console.log('Service Worker: Registered');


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

self.addEventListener('install', function (evt) {
	evt.waitUntil(
		 caches.open('v1').then(function(cache) {
		   		return cache.addAll(cachedUrls);
		 })
	);
});