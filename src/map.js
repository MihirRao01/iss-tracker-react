import React from "react";
import {
  GoogleMap,
  Marker,
  LoadScript,
  Polyline,
} from "@react-google-maps/api";
import "./map.css";

function Map({ userlat, userlong, isslat, isslong }) {
  // set the position of the markers to the iss location and user location
  const markers = [
    { lat: isslat, lng: isslong },
    { lat: userlat, lng: userlong },
  ];

  const options = {
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: 30000,
    paths: [
      { lat: 37.772, lng: -122.214 },
      { lat: 21.291, lng: -157.821 },
      { lat: -18.142, lng: 178.431 },
      { lat: -27.467, lng: 153.027 },
    ],
    zIndex: 1,
  };

  return (
    <div className="Map">
      <LoadScript googleMapsApiKey={process.env.REACT_APP_API_KEY}>
        <GoogleMap
          mapContainerClassName="map-container"
          center={{ lat: isslat, lng: isslong }}
          zoom={2}
        >
          {markers.map(({ lat, lng }) => (
            <Marker position={{ lat, lng }} />
          ))}

          <Polyline path={markers} options={options} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default Map;
