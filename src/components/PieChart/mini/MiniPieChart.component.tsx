import React from "react";
import "./MiniPieChart.style.css";
import calculatePiePercentage from "./MiniPieChart";

interface PieChartProps {
  items: number[];
  value: string;
  width: string;
  height: string;
}

const MiniPieChart: React.FC<PieChartProps> = ({
  items,
  value,
  height,
  width,
}: PieChartProps) => {
  const piePercentageStyle = calculatePiePercentage(items);
  return (
    <>
      <div className="pie" style={{ height, width, overflow: "hidden" }}>
        <div className="pie__chart">
          <div className="pie__chart-white" />
          <div
            className="pie__chart-color"
            style={{
              background: piePercentageStyle,
            }}
          />
          <div className="pie__chart-title">{value}</div>
        </div>
      </div>
    </>
  );
};

export default MiniPieChart;
