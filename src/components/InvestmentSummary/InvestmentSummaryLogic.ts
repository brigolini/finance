import { roundTwoDecimals } from "logic/formats";

const calculatePercentage = (begin: number, current: number): number => {
  return roundTwoDecimals((current / begin - 1) * 100);
};

export default calculatePercentage;
