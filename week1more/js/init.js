// Initialize the map
const map = new maplibregl.Map({
    container: 'map', // container ID
    style: 'https://api.maptiler.com/maps/winter-v2/style.json?key=vNy2aoqVADfzjG2R0VzQ', // Your style URL
    center: [-118.444, 34.0709], // Starting position [lng, lat]
    zoom: 13 // Starting zoom level
});

// Add a marker to the map
new maplibregl.Marker()
    .setLngLat([-118.444, 34.0709])
    .setPopup(new maplibregl.Popup({ offset: 25 }) // Add popups
        .setHTML('Math Sciences 4328 aka the Technology Sandbox<br> is the lab where I used to work in '))
    .addTo(map);

let longitude = -118.45;
let latitude = 34.05;
    
    // Add a marker to the map
const roccosMarker = new maplibregl.Marker()
    .setLngLat([-118.44770, 34.06193])
    .setPopup(new maplibregl.Popup({offset: 25})
        .setHTML('This is the bar that students go to and legally drink'))
    .addTo(map);
