// Initialize the map
let mapOptions = {
    "zoomRange":15, 
    "centerLatLong":[-95.7129, 37.0902]
}

const map = new maplibregl.Map({
    container: 'map', // container ID
    style: 'https://api.maptiler.com/maps/winter-v2/style.json?key=vNy2aoqVADfzjG2R0VzQ', // Your style URL
    center: mapOptions.centerLatLong, // Starting position [lng, lat]
    zoom: mapOptions.zoomRange // Starting zoom level
});

function addMarker(data){
    let lng = data.lng;
    let lat = data.lat;
    let title = data["do you like albert's puns?"];
    let name = data["what is your first name?"]
    let message = data['why do you feel this way about his puns?'];
    if(title == 'Yes'){
        message = 'They are not allowed to speak.'
    }
    new maplibregl.Marker()
        .setLngLat([lng, lat])
        .setPopup(new maplibregl.Popup()
            .setHTML((`<h3>${title}</h3><h4>${message}</h4>`))
            )
        .addTo(map)
    createButtons(lat, lng, name)
}

function createButtons(lat,lng, name){
    const newButton = document.createElement("button");
    newButton.id = "button"+ name;
    newButton.innerHTML = name;
    newButton.setAttribute("lat",lat);
    newButton.setAttribute("lng",lng);
    newButton.addEventListener('click', function(){
        map.flyTo({
            center: [lng,lat],
        })
    })
    document.getElementById("contents").appendChild(newButton);
}

const dataUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTpsewoXFJKo86082mZh6viy0mkF2xWKzD2rwPDQDMzVkaDiLoeJYHijw5bMhHpn7_Ho4pQa9DhBmrB/pub?output=csv";

// When the map is fully loaded, start adding GeoJSON data
map.on('load', function() {
    // Use PapaParse to fetch and parse the CSV data from a Google Forms spreadsheet URL
    Papa.parse(dataUrl, {
        download: true, // Tells PapaParse to fetch the CSV data from the URL
        header: true, // Assumes the first row of your CSV are column headers
        complete: results => {
            // Process the parsed data
           console.log(results)
           processData(results.data)
        }
    });
});

function processData(results){
    console.log(results) //for debugging: this can help us see if the results are what we want
    results.forEach(feature => {
        //console.log(feature) // for debugging: are we seeing each feature correctly?
        // assumes your geojson has a "title" and "message" attribute
        // let coordinates = feature.geometry.coordinates;
        addMarker(feature);
    });
};