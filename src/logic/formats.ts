export const roundTwoDecimals = (value: number): number => {
  return Math.round(value * 100) / 100;
};

const currencyFormat = (value: number): string => {
  return Intl.NumberFormat("us-EN", {
    style: "currency",
    currency: "USD",
  }).format(roundTwoDecimals(value));
};

export default currencyFormat;
