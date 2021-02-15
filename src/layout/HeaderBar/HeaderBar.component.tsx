import React from "react";
import "./HeaderBar.styles.css";
import AppLogo from "../../components/AppBar/AppLogo/AppLogo.component";
import AppSearchBar from "../../components/AppBar/AppSearchBar/AppSearchBar.component";
import AppUserPreference from "../../components/AppBar/AppUserPreference/AppUserPreference.component";

const HeaderBar = () => {
  return (
    <header className="appbar">
      <div className="app-bar__icon">
        <AppLogo width="8rem" height="8rem" />
      </div>
      <div className="app-bar__search">
        <AppSearchBar />
      </div>
      <div className="app-bar__user-preference">
        <AppUserPreference />
      </div>
    </header>
  );
};

export default HeaderBar;
