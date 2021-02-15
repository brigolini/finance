import React from "react";
import "./HeaderBar.styles.css";
import AppLogo from "../../components/AppBar/AppLogo/AppLogo.component";

const HeaderBar = () => {
  return (
    <header className="appbar">
      <AppLogo width="8rem" height="7.9rem" />
    </header>
  );
};

export default HeaderBar;
