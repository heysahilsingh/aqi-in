import React from "react";
import ChartGauge from "../ChartGauge";

type Props = {
  data: {
    name: string;
    aqi: number;
    pm2_5: number;
    pm10: number;
    ozone: number;
    co: number;
    so2: number;
    no2: number;
  }[];
};

const MetroCities = (props: Props) => {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-8 text-[##677580] text-[13px] text-center font-semibold">
        <p>Big Cities</p>
        <p>AQI</p>
        <p>
          PM2.5<span className="text-[#667580] text-[11px]">( μg/m3 )</span>
        </p>
        <p>
          PM10<span className="text-[#667580] text-[11px]">( μg/m3 )</span>
        </p>
        <p>
          Ozone<span className="text-[#667580] text-[11px]">( ppb )</span>
        </p>
        <p>
          CO<span className="text-[#667580] text-[11px]">( ppm )</span>
        </p>
        <p>
          SO2<span className="text-[#667580] text-[11px]">( ppb )</span>
        </p>
        <p>
          NO2<span className="text-[#667580] text-[11px]">( ppb )</span>
        </p>
      </div>
      <div className="flex flex-col gap-[1px] bg-zinc-200">
        {props.data.map((city, index) => (
          <div key={index} className="grid grid-cols-8 bg-white py-2.5">
            <div className="flex items-baseline gap-2">
              <img className="min-w-[32px]" src="/metro-cities.png" alt="" />
              <span className="text-[#31343D] font-bold">{city.name}</span>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-[43px]">
                <ChartGauge value={city.aqi} color="#59B61F" />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-[43px]">
                <ChartGauge hideBg value={city.pm2_5} color="#59B61F" />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-[43px]">
                <ChartGauge hideBg value={city.pm10} color="#59B61F" />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-[43px]">
                <ChartGauge hideBg value={city.ozone} color="#B33FBA" />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-[43px]">
                <ChartGauge hideBg value={city.co} color="#E95478" />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-[43px]">
                <ChartGauge hideBg value={city.so2} color="#59B61F" />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-[43px]">
                <ChartGauge hideBg value={city.no2} color="#C92033" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MetroCities;

21;
