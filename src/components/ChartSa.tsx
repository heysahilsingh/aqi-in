import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { aqiColors } from "@/constants/AQI_STATUSES";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

// @ts-ignore
let width, height, gradient;
// @ts-ignore
const getGradient = (ctx, chartArea) => {
  console.log("Sssssssssssssssssssssss");
  const chartWidth = chartArea.right - chartArea.left;
  const chartHeight = chartArea.bottom - chartArea.top;
  // @ts-ignore
  if (!gradient || width !== chartWidth || height !== chartHeight) {
    // Create the gradient because this is either the first render
    // or the size of the chart has changed
    width = chartWidth;
    height = chartHeight;
    gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    // gradient.addColorStop(0.2, "#59B61F"); // 20%
    // gradient.addColorStop(0.4, "#EEC732"); // 40%
    // gradient.addColorStop(0.6, "#EA8C34"); // 60%
    // gradient.addColorStop(0.8, "#E95478"); // 80%
    // gradient.addColorStop(1, "#B33FBA"); // 100%

    for (let i = 0; i < aqiColors.length; i++) {
      const count = i / aqiColors.length;
      gradient.addColorStop(count, aqiColors[i]);
    }
  }

  return gradient;
};

export const data = {
  labels: aqiColors || [
    5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95,
    100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240,
    250, 260, 270, 280, 290, 300, 310, 320, 330, 340, 350, 360, 370, 380, 390,
    400, 410, 420, 430, 440, 450, 460, 470, 480, 490, 500,
  ],
  datasets: [
    {
      label: "Dataset 1",
      data: [
        5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90,
        95, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220,
        230, 240, 250, 260, 270, 280, 290, 300, 310, 320, 330, 340, 350, 360,
        370, 380, 390, 400, 410, 420, 430, 440, 450, 460, 470, 480, 490, 500,
      ],
      //   backgroundColor: aqiColors,
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

export function ChartSa() {
  return <Bar options={options} data={data} />;
}
