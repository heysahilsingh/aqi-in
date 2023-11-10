"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  cutout: "90%",
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

const AqiMeter = (props: Props) => {
  const color = props.color || "#000";
  const bgColor = props.hideBg ? "transparent" : "#E6E6E6";
  const value = props.value || 0;

  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [value, 500 - value],
        backgroundColor: [color, bgColor],
        borderWidth: 0,
        circumference: 250,
        rotation: 235,
      },
    ],
  };

  return (
    <div className="relative">
      <Doughnut options={options} data={data} />
      <div
        className="absolute top-0 left-2/4 -translate-x-2/4 translate-y-[28%] flex flex-col items-center justify-center leading-none w-[105px] text-white aspect-square rounded-full border-4 border-white shadow-[0px_7px_20px_0_rgba(0,0,0,0.2)]"
        style={{ backgroundColor: color }}
      >
        <span className="text-[38px] font-bold">{value}</span>
        <span className="text-[12px]">AQI</span>
      </div>
    </div>
  );
};

export default AqiMeter;
