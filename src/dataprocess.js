import React, { useState } from "react";
import Search from "./search";
import App from "./App";

const Sendinput = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [userlatitude, setUserLat] = useState(0);
  const [userlongitude, setUserLong] = useState(0);

  // retrive location of the international space station
  async function getISS() {
    let response = await fetch("http://api.open-notify.org/iss-now.json");
    let data = await response.json();
    setLatitude(Number(data.iss_position.latitude));
    setLongitude(Number(data.iss_position.longitude));
    //console.log("ISS Lattidue ", latitude);
    //console.log("ISS Longtitude ", longitude);
  }

  //const [receivedValue, setReceivedValue] = useState("");

  const handleValueChange = (value) => {
    locateUser(value);
  };

  // convert user input to lat and long

  async function locateUser(receivedValue) {
    console.log("user input", receivedValue);
    let response = await fetch(
      "https://maps.googleapis.com/maps/api/geocode/json?address=" +
        receivedValue +
        "&key=" +
        process.env.REACT_APP_API_KEY
    );
    let userLocation = await response.json();
    setUserLat(Number(userLocation.results[0].geometry.location.lat));
    setUserLong(Number(userLocation.results[0].geometry.location.lng));
    //console.log(userlatitude);
    //console.log(userlongitude);
  }
  getISS();

  return (
    <div>
      <Search onValueChange={handleValueChange} />
      <App
        uslat={userlatitude}
        uslong={userlongitude}
        isslat={latitude}
        isslong={longitude}
      />
    </div>
  );
};

export default Sendinput;
