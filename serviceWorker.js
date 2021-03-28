const cacheName = "project2"
const assets = [
    "./",
    "./index.html",
    "./gameImages/aeroplane-plane.png",
    "./gameImages/ali.png",
    "./gameImages/dia.png",
    "./gameImages/space1.jpg",
    "./gameImages/ufo.jpg",
    "./gameImages/unnamed.jpg",
    "./gameImages/zomb.jpg"
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(cacheName).then(cache => {
            cache.addAll(assets)
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})
