// Initialize the map
var map = L.map('map').setView([21.2514, 81.6296], 13); // Raipur's latitude and longitude coordinates and zoom level

// Add a tile layer (you can use various map providers, like OpenStreetMap, Mapbox, etc.)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker for Raipur
var raipurMarker = L.marker([21.2514, 81.6296]).addTo(map); // Raipur's latitude and longitude
raipurMarker.bindPopup("Welcome to Raipur!").openPopup();
