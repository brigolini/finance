import React from "react";
import { ReactComponent as SearchIcon } from "images/search.svg";
import "./SearchBar.styles.css";

const AppSearchBar = () => {
  return (
    <>
      <span className="app-search-bar">
        <input type="text" className="app-search-bar__input" />
        <SearchIcon className="app-search-bar__icon" />
      </span>
    </>
  );
};

export default AppSearchBar;
