// Initialize the map
let mapOptions = {
    "zoomRange":16, 
    "centerLatLong":[-117.14786733592904, 32.91432072259446]
}

const map = new maplibregl.Map({
    container: 'map', // container ID
    style: 'https://api.maptiler.com/maps/winter-v2/style.json?key=vNy2aoqVADfzjG2R0VzQ', // Your style URL
    center: mapOptions.centerLatLong, // Starting position [lng, lat]
    zoom: mapOptions.zoomRange // Starting zoom level
});

function addMarker(lat, lng, title, message){
    let popup_message = `<h2>${title}</h2> <h3>${message}</h3>`
    new maplibregl.Marker()
        .setLngLat([lng, lat])
        .setPopup(new maplibregl.Popup()
            .setHTML(popup_message))
        .addTo(map)
    createButtons(lat,lng,title);
    return message
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

map.on('load', function() {
    console.log("Yay! The map is loaded!")
    fetch("map.geojson") //(1)! 
    .then(response => response.json()) //arrow gets rid of the function name and gives you just the data
        //you can then use those results in the next then function
    .then(data =>{ //(3)!
        // do something with the data
        processData(data)
    });
});

function processData(data){
    console.log(data)
    data.features.forEach(feature =>{
        console.log(feature)
        let coordinates = feature.geometry.coordinates;
        let longitude = coordinates[0];
        let latitude = coordinates[1];
        let title = feature.properties.title;
        let message = feature.properties.message;
        addMarker(latitude,longitude,title,message);
    })
}