import React from "react";
import { Doughnut, Line } from "react-chartjs-2";
import { Chart as Chartjs } from "chart.js";
import {
  ArcElement,
  CategoryScale,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import { orange, purple } from "@mui/material/colors";
import { purpleLight } from "../constant/color";
import { getLast7Days } from "../../Lib/Features";

Chartjs.register(
  CategoryScale,
  Tooltip,
  LinearScale,
  LineElement,
  PointElement,
  Filler,
  ArcElement,
  Legend
);

const labels = getLast7Days();

const lineChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        display: false,
      },
    },
  },
};

const LineChart = ({ value = [] }) => {
  const data = {
    labels,
    datasets: [
      {
        label: "Revenue",
        data: Array.isArray(value) ? value : [1, 2, 3], // Ensure value is an array
        fill: false,
        backgroundColor: purpleLight,
        borderColor: purple,
      },
    ],
  };

  return <Line data={data} options={lineChartOptions} />;
};

const doughnutChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
};

const DoughnutChart = ({ value = [], labels = [] }) => {
  const data = {
    labels: Array.isArray(labels) ? labels : ["Label 1", "Label 2"], // Ensure labels is an array
    datasets: [
      {
        data: Array.isArray(value) ? value : [60, 40], // Ensure value is an array
        label: "Total Chats vs Group Chats",
        backgroundColor: [purpleLight, orange],
        borderColor: [purple, orange],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={data} options={doughnutChartOptions} />;
};

export { DoughnutChart, LineChart };
