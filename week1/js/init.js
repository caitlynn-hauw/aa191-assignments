// Initialize the map

const map = new maplibregl.Map({
    container: 'map', // container ID
    style: 'https://api.maptiler.com/maps/winter-v2/style.json?key=vNy2aoqVADfzjG2R0VzQ', // Your style URL
    center: [-117.15317985545794, 32.72814214441167], // Starting position [lng, lat]
    zoom: 10 // Starting zoom level
});

// Add a marker to the map
new maplibregl.Marker()
    .setLngLat([-117.27168114653144, 32.85006077929251])
    .setPopup(new maplibregl.Popup({ offset: 25 }) // Add popups
        .setHTML('This is Harumama. They have cute character buns!'))
    .addTo(map);

new maplibregl.Marker()
    .setLngLat([-117.14957958298702, 32.917481241854674])
    .setPopup(new maplibregl.Popup({ offset: 25 }) // Add popups
        .setHTML('This is Menya Ultra. They have excellent karage chicken!'))
    .addTo(map);

    new maplibregl.Marker()
    .setLngLat([-117.15850617798843, 32.83323174065526])
    .setPopup(new maplibregl.Popup({ offset: 25 }) // Add popups
        .setHTML('This is Raki Raki Ramen. They have mochi noodles in their ramen!'))
    .addTo(map);