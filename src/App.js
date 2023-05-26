import { GoogleMap, LoadScript } from "@react-google-maps/api";

// this is an object that states the width and height of the map element
const mapContainerStyle = {
  width: "100%",
  height: "90vh",
};

// script to load the map from google api
function App({ value }) {
  return (
    <div>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_API_KEY}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={{ lat: 0, lng: 0 }}
          zoom={4}
        />
      </LoadScript>
      <h1>{value}</h1>
    </div>
  );
}

export default App;
