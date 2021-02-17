const colors = ["#e94a4a", "#43afee"];

// TODO: Use a CSS lib to make it more maintainable and easy to understand, maybe emoticon
const calculatePiePercentage = (items: number[]): string => {
  let lastPercentage = 0;
  const piePercentageStyle = items
    .map((item, index) => {
      const style = `${colors[index]} ${Math.round(lastPercentage)}%, ${
        colors[index]
      } ${Math.round(item)}%,`;
      lastPercentage = item;
      return style;
    })
    .join(" ")
    .replace(/.$/, "");
  return `conic-gradient(${piePercentageStyle})`;
};
export default calculatePiePercentage;
