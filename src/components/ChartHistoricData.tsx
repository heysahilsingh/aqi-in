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
import { Line, Bar } from "react-chartjs-2";
import { ChartSa } from "./ChartSa";
import { aqiColors } from "@/constants/AQI_STATUSES";
import aqiStatus from "@/utils/aqiStatus";

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
      ticks: {
        maxRotation: 0,
        minRotation: 0,
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

type Props = {
  labels?: string[];
  data?: number[];
};

function ChartHistoricData(props: Props) {
  const chartLabels = props.labels || [
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

  const chartData =
    props.data || chartLabels.map(() => Math.floor(Math.random() * 500) + 100);

  // @ts-ignore
  let width, height, gradient;
  // @ts-ignore
  const getGradient = (ctx, chartArea, maxAqi) => {
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

      // Array to store the colors
      let colorsArray = [];

      // Run the function 600 times and store the results in the array
      for (let i = 0; i < maxAqi; i++) {
        let color = aqiStatus(i, "color");
        colorsArray.push(color);
      }

      for (let i = 0; i < colorsArray.length; i++) {
        const count = i / colorsArray.length;
        gradient.addColorStop(count, colorsArray[i]);
      }
    }

    return gradient;
  };

  const data = {
    labels: chartLabels,
    datasets: [
      {
        label: "AQI",
        data: chartData,
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
          return getGradient(ctx, chartArea, Math.max(...chartData));
        },
        // @ts-ignore
        backgroundColor: function (context) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            // This case happens on initial chart load
            return;
          }
          return getGradient(ctx, chartArea, Math.max(...chartData));
        },
      },
    ],
  };

  return (
    <div className="h-[325px] w-full">
      <Line options={options} data={data} />
      {/* <ChartSa /> */}
    </div>
  );
}

export default ChartHistoricData;
