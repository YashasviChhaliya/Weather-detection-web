import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import mapUtils from './utils/mapUtils';
import getNearbyPlaces from './api/nearbyPlacesAPI';
import yourModule from './your-module.js';

const rootElement = document.getElementById('root');
const mapElement = document.getElementById('map');
const nearbyPlacesElement = document.getElementById('nearby-places');

mapUtils.initMap(mapElement);

async function getNearbyPlaces() {
  const lat = 51.505;
  const lng = -0.09;
  const nearbyPlaces = await getNearbyPlaces(lat, lng);
  displayNearbyPlaces(nearbyPlaces);
}

function displayNearbyPlaces(nearbyPlaces) {
  nearbyPlacesElement.innerHTML = '';
  const nearbyPlacesHTML = nearbyPlaces.map((place) => {
    return `
      <div>
        <h3>${place.name}</h3>
        <p>${place.address}</p>
        <p>${place.distance} km away</p>
        <button onClick={() => mapUtils.addMarker(place.lat, place.lng, place.name)}>Show on map</button>
      </div>
    `;
  }).join('');
  nearbyPlacesElement.innerHTML = nearbyPlacesHTML;
}

getNearbyPlaces();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

reportWebVitals();
