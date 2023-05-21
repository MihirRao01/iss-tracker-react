import React from "react";
import "./searchbar.css";

function Search() {
  return (
    <div className="container">
      <form action="" className="searchbar">
        <input
          type="text"
          placeholder="user location"
          name="q"
          className="searchfield"
        />
        <button type="submit" className="searchbutton">
          <img src="./search.png" alt="seach icon" className="searchicon" />
        </button>
      </form>
    </div>
  );
}

export default Search;
