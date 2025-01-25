import axios from 'axios';

const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY';
const API_URL = `http://api.openweathermap.org/data/2.5/weather`;

async function getWeatherData() {
    const response = await axios.get(`${API_URL}?q=London,UK&units=metric&appid=${API_KEY}`);
    return response.data;
}

export default getWeatherData;