import React from "react";
import { ReactComponent as SearchIcon } from "images/search.svg";
import "./SearchBar.styles.css";

const AppSearchBar = () => {
  return (
    <>
      <div className="app-search-bar">
        <input type="text" className="app-search-bar__input" />
        <SearchIcon className="app-search-bar__icon" />
      </div>
    </>
  );
};

export default AppSearchBar;
