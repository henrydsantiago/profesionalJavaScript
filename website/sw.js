const VERSION = 'v1'

self.addEventListener('install', event =>{
    event.waitUntil( precache() )
})

self.addEventListener('fetch', event =>{
    const request = event.request
    //get 
    if(request.method !== 'GET'){
        return
    }
    //buscar en caché
    event.respondWith(cachedResponse(request))

    //actualizar el caché
    event.waitUntil(updateCache)
})


async function precache() {
    const cache = await caches.open(VERSION)
    return cache.addAll([
/*         './',
        './index.html',
        './assets/plugins/AutoPlay.js',
        './assets/plugins/AutoPause.js',
        './assets/BigBuckBunny.mp4',
        './assets/clase01.js',
        './assets/MediaPlayer.js',
        './assets/index.css' */
    ])
}

async function cachedResponse(request) {
    const cache = await caches.open(VERSION)
    const response = await cache.match(request)
    return response || fetch(request)
}

async function updateCache(request) {
    const cache = await caches.open(VERSION)
    const response = await fetch(request)
    return cache.put(request, response)
}