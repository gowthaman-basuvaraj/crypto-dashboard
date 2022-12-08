import React from "react";
import "./style.css";
import { line } from "react-chartjs-2";

function LineChart({ chartData, options }) {
  return (
    <div>
      <Line data={chartData} options={options} />
    </div>
  );
}

export default LineChart;
