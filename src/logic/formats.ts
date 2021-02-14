const currencyFormat = (value: number) => {
  return Intl.NumberFormat("us-EN", {
    style: "currency",
    currency: "USD",
  }).format(value);
};
export default currencyFormat;
