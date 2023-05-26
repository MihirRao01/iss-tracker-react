import React, { useState } from "react";
import "./searchbar.css";

function Search({ onValueChange }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();

    onValueChange(inputValue);
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
