import React, { useState, useEffect } from "react";
import Search from "./searchBar";
import Map from "./map";

const GetLocations = () => {
  // initialize the stae of iss lat and long
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  // initialize states for user lat and long
  const [userlatitude, setUserLat] = useState(0);
  const [userlongitude, setUserLong] = useState(0);

  // retrive location of the international space station
  async function getISS() {
    console.log("calling getISS");
    let response = await fetch("http://api.open-notify.org/iss-now.json");
    let data = await response.json();
    setLatitude(Number(data.iss_position.latitude));
    setLongitude(Number(data.iss_position.longitude));
  }

  // convert user innput to lat and long coordinates
  async function locateUser(receivedValue) {
    console.log("calling locateUser");
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
  }

  // handle processing the user location when the search button is clicked
  const onSearch = (value) => {
    locateUser(value);
  };

  // get iss location on initial load and when the user locaiton is changed
  useEffect(() => {
    getISS();
  }, [userlongitude]);

  //console.log("ISS Lattidue : ", latitude);
  //console.log("ISS Longtitude :", longitude);
  //console.log("userLat: ", userlatitude);
  //console.log("userLong: ", userlongitude);

  return (
    <div>
      <Search onSearch={onSearch} />
      <Map
        userlat={userlatitude}
        userlong={userlongitude}
        isslat={latitude}
        isslong={longitude}
      />
    </div>
  );
};

export default GetLocations;
