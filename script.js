
const shareLocationBtn = document.getElementById('share-location-btn');
const mapContainer = document.getElementById('map-container');


let map;


function getUserLocation() {
   
    if (navigator.geolocation) {
       
        navigator.geolocation.getCurrentPosition(position => {
           
            map = new google.maps.Map(mapContainer, {
                center: { lat: position.coords.latitude, lng: position.coords.longitude },
                zoom: 15
            });

           
            new google.maps.Marker({
                position: { lat: position.coords.latitude, lng: position.coords.longitude },
                map: map
            });
        }, error => {
            console.error(error);
        });
    } else {
        console.log('Geolocation is not supported by this browser.');
    }
}


shareLocationBtn.addEventListener('click', getUserLocation);


function loadGoogleMaps() {
    const script = document.createElement('script');
    script.src = `im going to put the maps api here...`;
    document.body.appendChild(script);
}


function initMap() {
   
    map = new google.maps.Map(mapContainer, {
        center: { lat: 37.7749, lng: -122.4194 },
        zoom: 15
    });
}


loadGoogleMaps();