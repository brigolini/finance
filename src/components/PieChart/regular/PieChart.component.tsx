import React from "react";
import "./PieChart.style.css";
import currencyFormat from "logic/formats";
import calculateChartPercentages, { PieChartItem } from "./PieChart";

interface PieChartProps {
  items: PieChartItem[];
  title: string;
  value: number;
  width: string;
  height: string;
}

const PieChart: React.FC<PieChartProps> = ({
  items,
  title,
  value,
  height,
  width,
}: PieChartProps) => {
  const { piePercentageStyle, keys } = calculateChartPercentages(items);
  return (
    <>
      <div className="pie" style={{ height, width }}>
        <div>
          <div className="pie__chart">
            <div className="pie__chart-white" />
            <div
              className="pie__chart-color"
              style={{
                background: piePercentageStyle,
              }}
            />
            <div className="pie__chart-title">
              <div className="heading__primary pie__chart-title__text">
                {title}
              </div>
              <div className="heading__secondary pie__chart-title__text">
                {currencyFormat(value)}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="pie__key">
            <ul>
              {keys.map((item) => (
                <li key={item.name}>
                  <div style={{ backgroundColor: item.color }} />
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PieChart;
