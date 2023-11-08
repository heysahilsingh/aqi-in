"use client";

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

const options = {
  responsive: true,
  maintainAspectRatio: false,
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
      title: {
        display: true,
        text: "Time",
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        color: "#E4E4E4",
      },
      border: {
        dash: [5, 10],
      },
      title: {
        display: true,
        text: "PM10 ( in μg/m3 )",
      },
    },
  },
};

type Props = {};

function ChartHistoricData({}: Props) {
  const labels = [
    "2pm",
    "4pm",
    "6pm",
    "8pm",
    "10pm",
    "12am",
    "2am",
    "4am",
    "6am",
    "8am",
    "10am",
    "12pm",
  ];

  // @ts-ignore
  let width, height, gradient;
  // @ts-ignore
  const getGradient = (ctx, chartArea) => {
    const chartWidth = chartArea.right - chartArea.left;
    const chartHeight = chartArea.bottom - chartArea.top;
    // @ts-ignore
    if (!gradient || width !== chartWidth || height !== chartHeight) {
      // Create the gradient because this is either the first render
      // or the size of the chart has changed
      width = chartWidth;
      height = chartHeight;
      gradient = ctx.createLinearGradient(
        0,
        chartArea.bottom,
        0,
        chartArea.top
      );
      gradient.addColorStop(0.2, "#59B61F"); // 20%
      gradient.addColorStop(0.4, "#EEC732"); // 40%
      gradient.addColorStop(0.6, "#EA8C34"); // 60%
      gradient.addColorStop(0.8, "#E95478"); // 80%
      gradient.addColorStop(1, "#B33FBA"); // 100%
    }

    return gradient;
  };

  const data = {
    labels,
    datasets: [
      {
        label: "AQI",
        data: labels.map(() => Math.floor(Math.random() * 500) + 100),
        tension: 0.5,
        pointRadius: 5,
        borderWidth: 2.5,
        // borderColor: "rgba(255, 99, 132, 1)",
        // backgroundColor: "rgba(255, 99, 132, 1)",
        fill: true,
        // @ts-ignore
        borderColor: function (context) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            // This case happens on initial chart load
            return;
          }
          return getGradient(ctx, chartArea);
        },
        // @ts-ignore
        backgroundColor: function (context) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            // This case happens on initial chart load
            return;
          }
          return getGradient(ctx, chartArea);
        },
      },
    ],
  };

  return (
    <div className="h-[325px] w-full">
      <Line options={options} data={data} />
    </div>
  );
}

export default ChartHistoricData;
