import { cleanupOutdatedCaches, createHandlerBoundToURL, precacheAndRoute } from 'workbox-precaching'
import { NavigationRoute, registerRoute } from 'workbox-routing'
import { clientsClaim } from 'workbox-core'

/* self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
	console.log('[ServiceWorker] Skip waiting')
	self.skipWaiting()
  }
}) */

// self.__WB_MANIFEST is default injection point
const FILES_TO_CACHE = self.__WB_MANIFEST
console.log("FILES TO CACHE: ", FILES_TO_CACHE)
precacheAndRoute(FILES_TO_CACHE)

// clean old assets
cleanupOutdatedCaches()

let denylist
if (import.meta.env.DEV)
  denylist = [/^\/manifest.webmanifest$/]

// to allow work offline
registerRoute(new NavigationRoute(
  createHandlerBoundToURL('index.html'),
  { denylist },
))

self.skipWaiting()
clientsClaim()

// Establish a cache name
const CACHE_NAME = 'static-cache-v1';

/* 

// Add list of files to cache here.
const FILES_TO_CACHE = [
	'/',
	'/global.css',
];

// INSTALL ServiceWorker
self.addEventListener('install', event => {
	console.log('[ServiceWorker] Install');

	event.waitUntil(
		caches.open(CACHE_NAME)
		.then(cache => {
			console.log('[ServiceWorker] Pre-caching offline page');
			return cache.addAll(FILES_TO_CACHE);
		})
	);

	self.skipWaiting();
});

// ACTIVATE ServiceWorker
self.addEventListener('activate', event => {
	console.log('[ServiceWorker] Activate');
	// Remove previous cached data from disk.
	event.waitUntil(
		caches.keys()
		.then((keyList) => {
			return Promise.all(keyList.map(key => {
				if (key !== CACHE_NAME) {
					console.log('[ServiceWorker] Removing old cache', key);
					return caches.delete(key);
				}
			}));
		})
	);

	self.clients.claim();
});*/

self.addEventListener('fetch', async (event) => {
	console.log('[ServiceWorker] Fetch', event.request.url);

	// Open the cache
	event.respondWith(
		caches.open(CACHE_NAME)
		.then(cache => {
			// Respond with the file from the cache or from the network
			return cache.match(event.request)
			.then(cachedResponse => {
				return cachedResponse || fetch(event.request.url)
				.then(fetchedResponse => {
					// Add the network response to the cache for future visits.
					// Note: we need to make a copy of the response to save it in the cache and use the original as the request response.
					//cache.put(event.request, fetchedResponse.clone());

					// Return the network response
					return fetchedResponse;
				});
			});
		})
	);
});