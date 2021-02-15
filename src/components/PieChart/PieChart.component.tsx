import React from "react";
import "./PieChart.style.css";
import currencyFormat from "logic/formats";
import calculatePieChart, { PieChartItem } from "./pieChart";

interface PieChartProps {
  items: PieChartItem[];
  title: string;
  value: number;
}

const PieChart: React.FC<PieChartProps> = ({
  items,
  title,
  value,
}: PieChartProps) => {
  const { piePercentageStyle, keys } = calculatePieChart(items);
  return (
    <>
      <div className="pie">
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
