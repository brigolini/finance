import React from "react";
import banks from "../mock/banks";
import "../styles/reset.style.css";
import "../styles/colors.styles.css";
import "../styles/typography.style.css";
import Table from "./Table/GenericTable/Table.component";
import currencyFormat from "../logic/formats";
import HeaderBar from "../layout/HeaderBar/HeaderBar.component";
import AppLogo from "./AppBar/AppLogo/AppLogo.component";

const App = () => {
  return (
    <>
      <HeaderBar />
    </>
  );
};

export default App;
