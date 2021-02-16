import React from "react";
import { ReactComponent as SearchIcon } from "images/search.svg";
import "./SearchBar.styles.css";

const AppSearchBar: React.FC = () => {
  return (
    <>
      <div className="app-search-bar">
        <input
          type="text"
          className="app-search-bar__input"
          placeholder="Search (almost) everything"
        />
        <SearchIcon className="app-search-bar__icon" />
      </div>
    </>
  );
};

export default AppSearchBar;
