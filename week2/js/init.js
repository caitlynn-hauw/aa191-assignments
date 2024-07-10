// Initialize the map

const map = new maplibregl.Map({
    container: 'map', // container ID
    style: 'https://api.maptiler.com/maps/winter-v2/style.json?key=vNy2aoqVADfzjG2R0VzQ', // Your style URL
    center: [-117.27168114653144, 32.85006077929251], // Starting position [lng, lat]
    zoom: 14 // Starting zoom level
});

/*
// Add a marker to the map
let harumama = new maplibregl.Marker()
    .setLngLat([-117.27168114653144, 32.85006077929251])
    .setPopup(new maplibregl.Popup({ offset: 25 }) // Add popups
        .setHTML('This is Harumama. They have cute character buns!'))
    .addTo(map);

let menya = new maplibregl.Marker()
    .setLngLat([-117.14957958298702, 32.917481241854674])
    .setPopup(new maplibregl.Popup({ offset: 25 }) // Add popups
        .setHTML('This is Menya Ultra. They have excellent karage chicken!'))
    .addTo(map);

let raki = new maplibregl.Marker()
    .setLngLat([-117.15850617798843, 32.83323174065526])
    .setPopup(new maplibregl.Popup({ offset: 25 }) // Add popups
        .setHTML('This is Raki Raki Ramen. They have mochi noodles in their ramen!'))
    .addTo(map);
    */

function ourFirst(){
    //y = mx + b
}

let result = 10; 

function aParameter(param1, param2){
    let result = param1 + param2
    console.log(result)
}

function createButtons(latitude,longitude,title){
    const newButton = document.createElement("button"); 
    newButton.id = "button"+title; 
    newButton.innerHTML = title; 
    newButton.setAttribute("latitude",latitude); 
    newButton.setAttribute("longitude",longitude); 
    newButton.addEventListener('click', function(){
        map.flyTo({
            center: [longitude,latitude], 
        })
    })
    document.getElementById("contents").appendChild(newButton); 
}

function addMarker(latitude, longitude, title, message){
    new maplibregl.Marker()
        .setLngLat([longitude, latitude])
        .setPopup(new maplibregl.Popup()
            .setHTML((`<h2>${title}</h2><h3>${message}</h3>`))
            )
        .addTo(map)
    createButtons(latitude, longitude, title)
}

addMarker(32.85006077929251, -117.27168114653144, 'Harumama', 'This is Harumama. They have cute character buns!')
addMarker(32.83323174065526, -117.15850617798843, 'Raki Raki', 'This is Raki Raki Ramen. They have mochi noodles in their ramen!')
addMarker(32.917481241854674, -117.14957958298702, 'Menya Ultra', 'This is Menya Ultra. They have excellent karage chicken!')
