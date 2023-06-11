import React, { useState } from "react";
import "./searchbar.css";

function Search({ onSearch }) {
  // initialize the stae of the input in the input form
  const [inputValue, setInputValue] = useState("");

  // set the value of the input field when the user types in it
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // send the input value to getLocaiton to calculate lat and long when the user
  // clicks on the seach icon
  const handleButtonClick = (e) => {
    e.preventDefault();
    onSearch(inputValue);
  };

  return (
    <div className="container">
      <form action="" className="searchbar">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="user location"
          name="q"
          className="searchfield"
        />
        <button className="searchbutton" onClick={handleButtonClick}>
          <img src="./search.png" alt="seach icon" className="searchicon" />
        </button>
      </form>
    </div>
  );
}

export default Search;
