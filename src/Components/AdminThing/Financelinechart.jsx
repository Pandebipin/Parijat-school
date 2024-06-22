import React, { useEffect, useMemo, useRef } from "react";
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
import { useSelector } from "react-redux";
import { selectfinance } from "../../Store/financeSlice";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const FinanceLinechart = () => {
  // const chartRef = useRef(null);
  const finance = useSelector(selectfinance);
  console.log(finance);
  const chartData = useMemo(() => {
    const labels = finance.map((item) => item.year);
    const profitLoss = finance.map((item) => item.income - item.expenses);

    return {
      labels,
      datasets: [
        {
          label: "profit or loss",
          data: profitLoss,
          borderColor: "rgb(75, 192, 192)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
        },
      ],
    };
  }, [finance]);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Profit or loss over time",
      },
    },
  };

  return <Line options={options} data={chartData} />;
};

export default FinanceLinechart;
