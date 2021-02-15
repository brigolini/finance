import React, { PropsWithChildren } from "react";
import { ReactComponent as AppLogoImg } from "../../../images/coin-dollar.svg";

interface AppLogoProps {
  width: string;
  height: string;
}
const AppLogo: React.FC<AppLogoProps> = ({
  width,
  height,
}: PropsWithChildren<AppLogoProps>) => {
  return <AppLogoImg style={{ width, height }} />;
};

export default AppLogo;
