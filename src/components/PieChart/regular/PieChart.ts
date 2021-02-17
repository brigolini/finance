const colors = [
  "#43afee",
  "#1fec9c",
  "#e69232",
  "#e94a4a",
  "#357703",
  "#e5317b",
  "#d8ba24",
  "#ae11de",
];

interface KeyItem {
  name: string;
  value: number;
  color: string;
}
interface PieChartData {
  keys: KeyItem[];
  piePercentageStyle: string;
}

export interface PieChartItem {
  description: string;
  value: number;
}
// TODO: Use a CSS lib to make it more maintainable and easy to understand, maybe emoticon
const calculateChartPercentages = (items: PieChartItem[]): PieChartData => {
  let lastPercentage = 0;
  const piePercentageStyle = items
    .map((item, index) => {
      const style = `${colors[index]} ${Math.round(lastPercentage)}%, ${
        colors[index]
      } ${Math.round(item.value)}%,`;
      lastPercentage = item.value;
      return style;
    })
    .join(" ")
    .replace(/.$/, "");
  const keys = items.map((item, index) => {
    return {
      name: item.description,
      value: item.value,
      color: colors[index],
    };
  });
  return { piePercentageStyle: `conic-gradient(${piePercentageStyle})`, keys };
};
export default calculateChartPercentages;
