import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LineController,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Bid History",

      font: {
        size: 20,
      },
      color: "black",
      align: "start" as const,
      padding: 20,
    },
  },
  scales: {
    x: {
      display: false,
    },
  },
};

const labels = [
  "2024-01-01",
  "2024-02-01",
  "2024-03-01",
  "2024-04-01",
  "2024-05-01",
  "2024-06-01",
  "2024-07-01",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Bid",
      data: [10, 11, 11, 16, 15, 13, 12, 11],
      borderColor: "rgb(0, 0, 0)",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      pointRadius: 0,
      pointHoverRadius: 10,
      cubicInterpolationMode: "monotone" as const,
    },
    {
      label: "Your bid",
      data: [null, null, null, null, 15, null, null, null],
      borderColor: "rgb(0, 0, 0)",
      backgroundColor: "rgba(250, 250, 250, 0.5)",
      pointRadius: 5,
    },
  ],
};
ChartJS.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title
);

export default function Bid_Chart() {
  return (
    <div className="w-full md:w-auto">
      <Line
        options={options}
        data={data}
        width={600}
        height={350}
        style={{ backgroundColor: "#fff", padding: "20px" }}
      />
    </div>
  );
}
