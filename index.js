var mymap = L.map('mapid').setView([51.519532, -0.127718], 2); //51.519532, -0.127718
var markers = [];

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.pirates',
    accessToken: 'pk.eyJ1Ijoic2FhbGlrbG9rIiwiYSI6ImNqbDN0NGI4NDI0dXAzd241ODBqOWI3N2MifQ.l3qMZ_L-n1eLpkvBSeamyQ'
}).addTo(mymap);

for(var i = 0; i<locations.length; i++){
    console.log("run loop");
    markers[i] = L.marker(locations[i].LatLng).addTo(mymap);
    markers[i].bindPopup("<b>" + locations[i].name + "</b><br>" + locations[i].stay);
    markers[i].on('click', onMapClick);
}

function onMapClick(e) {
    mymap.setView(e.latlng, 10);
    mymap.setZoom(10);
}
