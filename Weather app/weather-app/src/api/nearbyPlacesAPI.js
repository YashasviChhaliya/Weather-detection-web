import axios from 'axios';

const API_KEY = 'YOUR_GOOGLE_PLACES_API_KEY';
const API_URL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json`;

async function getNearbyPlaces(lat, lng) {
    const response = await axios.get(`${API_URL}?location=${lat},${lng}&radius=1000&type=restaurant|clothing_store|hotel&key=${API_KEY}`);
    return response.data.results;
}

export default getNearbyPlaces;