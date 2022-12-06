import React from "react";
import "./styles.css";
import SearchIcon from "@mui/icons-material/Search";

function Search({ handleChange }) {
  return (
    <div className="search-wrapper">
      <div className="search-input">
        <SearchIcon />
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Search;
