import React from 'react';
import { addMarker } from '../utils/mapUtils';

const NearbyPlaces = ({ places }) => {
    return (
        <div>
            {places.map((place) => (
                <div key={place.id} className="place">
                    <h3>{place.name}</h3>
                    <p>{place.address}</p>
                    <p>{place.distance} km away</p>
                    <button onClick={() => addMarker(place.lat, place.lng, place.name)}>Show on map</button>
                </div>
            ))}
        </div>
    );
};

export default NearbyPlaces;