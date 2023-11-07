import AQI_STATUSES from "@/constants/AQI_STATUSES";
import React from "react";

type Props = {
  status: "good" | "moderate" | "poor" | "unhealthy" | "severe" | "hazardous";
  className?: string;
};

function AqiScale(props: Props) {
  return (
    <div
      className={`flex flex-col min-w-fit w-full ${
        props.className && props.className
      }`}
    >
      <div className="active flex gap-[3px] items-center justify-center">
        {AQI_STATUSES.map((bar) => (
          <div
            key={bar.id}
            className={`${
              props.status === bar.id ? "" : "opacity-0"
            } grow min-w-[83px] flex items-center justify-center`}
          >
            <div
              className={`border-b-[${bar.color}] w-0 h-0  border-l-[6px] border-l-transparent rotate-180 border-b-[8px] border-r-[6px] border-r-transparent`}
            ></div>
          </div>
        ))}
      </div>
      <div className="scale w-full flex gap-[3px] text-[12px] text-[#677580]">
        {AQI_STATUSES.map((bar) => (
          <div
            key={bar.id}
            className="r flex items-center justify-center flex-col grow min-w-[83px]"
          >
            <span>{bar.title}</span>
            <div className={`bg-[${bar.color}] w-full h-[4px]`}></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AqiScale;
