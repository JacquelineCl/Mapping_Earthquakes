// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level standard view
let map = L.map('mapid').setView([34.0522, -118.2437], 14);

//  Add a marker to the map for Los Angeles, California.
// L.circleMarker([34.0522, -118.2437], {
//     color: 'black',
//     fillColor: '#ffffa1',
//     fillOpacity: 0.5,
//     radius: 300
//  }).addTo(map);

 // Get data from cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location, {
        radius: city.population/200000,
        weight: 4,
        color: "orange"
    })
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
    .addTo(map);
});

// We create the tile layer that will be the background of our map.
var outdoorMap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 4,
    id: 'mapbox/outdoors-v11',
    accessToken: API_KEY
});

// Coordinates for each point to be used in the line.
let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
  ];

  // Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "yellow"
  }).addTo(map);

// Then we add our 'graymap' tile layer to the map.
outdoorMap.addTo(map);