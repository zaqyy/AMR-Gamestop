const CACHE_NAME = 'test'
const urlsToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/images/icon512_maskable.png',
    '/images/icon512_rounded.png'
];

self.addEventListener('install' , (event)=> {
    event.waitUntil (
        caches.open(CACHE_NAME)
        .then((cache) =>
        cache.addAll(urlsToCache)
        )
    );
});


self.addEventListener('fetch' , (event) =>{
    event.respondWith(
        caches.match(event.request)
        .then((respose) => response || fetch(event.request))
    );

});