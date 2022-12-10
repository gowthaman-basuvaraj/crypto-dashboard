import React from "react";
import "./style.css";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function LineChart({ chartData, options }) {
  return (
    <div className="chart">
      <Line data={chartData} options={options} />
    </div>
  );
}
export default LineChart;
