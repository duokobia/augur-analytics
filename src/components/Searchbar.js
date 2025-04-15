import React from "react";
import { IoSearchSharp } from "react-icons/io5";

const Searchbar = () => {
  return (
    <div className="search-container">
      <IoSearchSharp className="search-icon" />
      <input
        type="text"
        placeholder="Search distributors..."
        className="search-input"
      />
    </div>
  );
};

export default Searchbar;
