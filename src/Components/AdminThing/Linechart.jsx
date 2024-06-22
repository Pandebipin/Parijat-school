import React, { useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Linechart = () => {
  // const chartRef = useRef(null);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Student Growth Rate Since 2019",
      },
    },
  };

  const labels = ["2019", "2020", "2021", "2022", "2023", "2024"];

  const data = {
    labels,
    datasets: [
      {
        label: "Number of Students",
        data: [150, 200, 250, 300, 400, 500],
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default Linechart;
