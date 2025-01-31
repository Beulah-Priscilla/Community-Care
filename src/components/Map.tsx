import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import React from "react";

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

const locations = [
  { lat: 37.7749, lng: -122.4194, title: 'San Francisco' },
  { lat: 34.0522, lng: -118.2437, title: 'Los Angeles' },
];

const Map: React.FC = () => {
  return (
    <LoadScript googleMapsApiKey="">
      <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      >
        {locations.map((location, index) => (
          <Marker key={index} position = {{ lat: location.lat, lng:location.lng}} title={location.title} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;