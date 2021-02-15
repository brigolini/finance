import React, { useState } from "react";
import { ReactComponent as ShowDataIcon } from "images/eye.svg";
import { ReactComponent as HideDataIcon } from "images/eye-blocked.svg";
import "./AppUserPreference.styles.css";

const AppUserPreference = () => {
  const [hide, setHide] = useState(false);
  const handleChangePreference = () => {
    setHide((prevState) => !prevState);
  };
  return (
    <div className="app-user-preference">
      {hide ? (
        <HideDataIcon onClick={handleChangePreference} />
      ) : (
        <ShowDataIcon onClick={handleChangePreference} />
      )}
    </div>
  );
};

export default AppUserPreference;
