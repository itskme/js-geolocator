const locateBtn = document.getElementById('locate-btn');
const mapContainer = document.getElementById('map');

let map;

map = L.map(mapContainer).setView([145.1111, -145.1111], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
  subdomains: ['a', 'b', 'c']
}).addTo(map);


map.setMaxBounds([
  [-90, -180],
  [90, 180]
]);


locateBtn.addEventListener('click', locateUser);


function locateUser() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      console.log('Received location:', position.coords.latitude, position.coords.longitude);
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const accuracy = position.coords.accuracy;

     
      map.setView([lat, lon], 15);

   
      const marker = L.marker([lat, lon]).addTo(map);
      marker.bindPopup(`You are here! (Accuracy: ${accuracy}m)`).openPopup();
    }, error => {
      console.error(error);
    });
  } else {
    console.log('Geolocation is not supported by this browser.');
  }
}
