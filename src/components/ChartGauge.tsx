"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  cutout: "87%",
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
};

type Props = {
  color?: string;
  value?: number;
  hideBg?: true;
};

function ChartGauge(props: Props) {
  const color = props.color || "#000";
  const bgColor = props.hideBg ? "transparent" : "#E6E6E6";
  const value = props.value || 0;

  const chartText = {
    id: "chartText",
    beforeDatasetsDraw(chart: ChartJS) {
      const { ctx } = chart;

      const x = chart.getDatasetMeta(0).data[0].x;
      const y = chart.getDatasetMeta(0).data[0].y;

      ctx.save();
      ctx.fillStyle = "#31343D";
      ctx.textAlign = "center";
      // @ts-ignore
      ctx.textBaseline = "baseline";
      ctx.font = "bold 13px sans-serif";
      ctx.fillText(String(value), x, y);
    },
  };

  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [value, 100 - value],
        backgroundColor: [color, bgColor],
        borderWidth: 0,
        circumference: 180,
        rotation: 270,
      },
    ],
  };

  return <Doughnut options={options} data={data} plugins={[chartText]} />;
}

export default ChartGauge;
