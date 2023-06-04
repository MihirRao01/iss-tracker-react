/* global google */
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import "./App.css";

// script to load the map from google api
function App({ uslat, uslong, isslat, isslong }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
  });

  const markers = [
    { lat: isslat, lng: isslong },
    { lat: uslat, lng: uslong },
  ];

  const onLoad = (map) => {
    const bounds = new google.maps.LatLngBounds();

    markers.forEach(({ lat, lng }) => {
      const markerPosition = new google.maps.LatLng(lat, lng);
      bounds.extend(markerPosition);
    });

    map.fitBounds(bounds);
  };

  return (
    <div className="App">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          onLoad={onLoad}
          zoom={2}
        >
          {markers.map(({ lat, lng }) => (
            <Marker position={{ lat, lng }} />
          ))}
        </GoogleMap>
      )}
    </div>
  );
}

export default App;
