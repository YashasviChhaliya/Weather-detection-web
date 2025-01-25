import { Map } from 'leaflet';

const mapElement = document.getElementById('map');

const map = L.map(mapElement).setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
    subdomains: ['a', 'b', 'c']
}).addTo(map);

export function addMarker(lat, lng, title) {
    const marker = L.marker([lat, lng]).addTo(map);
    marker.bindPopup(title);
}

export function getMap() {
    return map;
}