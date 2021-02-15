import React, { PropsWithChildren } from "react";
import { ReactComponent as AppLogoImg } from "../../../images/logo.svg";
import "./AppLogo.styles.css";

interface AppLogoProps {
  width: string;
  height: string;
}
const AppLogo: React.FC<AppLogoProps> = ({
  width,
  height,
}: PropsWithChildren<AppLogoProps>) => {
  return <AppLogoImg className="app-logo__img" style={{ width, height }} />;
};

export default AppLogo;
