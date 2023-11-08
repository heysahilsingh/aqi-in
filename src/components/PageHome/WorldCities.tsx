import React from "react";
import ChartGauge from "../ChartGauge";
import AQI_STATUSES from "@/constants/AQI_STATUSES";

type Props = {
  data: {
    name: string;
    rank: number;
    aqi: number;
    aqiStatus:
      | "good"
      | "moderate"
      | "poor"
      | "unhealthy"
      | "severe"
      | "hazardous";
    standardValueText: "below" | "above";
    standardValue: number;
    follows: boolean;
    img: string;
  }[];
};

const WorldCities = (props: Props) => {
  //   const gridCols = "grid-cols-[40px_auto_50px_70px_130px_auto]";
  const gridCols = "grid-cols-[70px_1fr_1fr_1fr_1fr_1fr]";

  return (
    <div className="flex flex-col">
      <div
        className={`${gridCols} py-4 px-6 grid text-[#667580] text-[14px] font-semibold text-left`}
      >
        <p>Rank</p>
        <p>Major Cities</p>
        <p className="text-center">AQI</p>
        <p>AQI Status</p>
        <p className="flex items-center gap-2">
          Standard Value
          <span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.80203 13.0513C9.99562 13.0513 12.5845 10.4624 12.5845 7.26883C12.5845 4.07524 9.99562 1.48633 6.80203 1.48633C3.60845 1.48633 1.01953 4.07524 1.01953 7.26883C1.01953 10.4624 3.60845 13.0513 6.80203 13.0513Z"
                stroke="#667580"
                stroke-width="1.1565"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.80078 9.58253V7.26953"
                stroke="#667580"
                stroke-width="1.1565"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.80078 4.95605H6.80723"
                stroke="#667580"
                stroke-width="1.1565"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </p>
        <p className="text-center">Follow</p>
      </div>
      <div className="flex flex-col">
        {props.data.map((city, index) => {
          const color = (
            AQI_STATUSES.find((status) => status.id === city.aqiStatus) || {}
          ).color;

          const isOdd = index % 2 === 1;

          return (
            <div
              key={index}
              className={`${gridCols} ${
                !isOdd ? "bg-[#F7F7FC]" : "bg-white"
              } grid py-0.5 px-6 rounded-[6px]`}
            >
              <div className="flex items-center">
                <p className="text-[13px] text-[#31343D]">{city.rank}.</p>
              </div>
              <div className="flex items-center gap-3">
                <img className="min-w-[22px]" src={city.img} alt="" />
                <span className="text-[#31343D] text-[12px] font-bold">
                  {city.name}
                </span>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-[43px]">
                  <ChartGauge value={city.aqi} color={color} />
                </div>
              </div>
              <div className="flex items-center">
                <p
                  className="text-transparent capitalize font-bold text-[13px] bg-clip-text"
                  style={{ backgroundColor: color }}
                >
                  {city.aqiStatus}
                </p>
              </div>
              <div className="flex items-center font-semibold gap-2 text-[13px]">
                {city.standardValueText === "below" ? (
                  <>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.98142 2.2341L4.3824 3.59004C3.55297 3.90017 2.875 4.88107 2.875 5.76099V11.1198C2.875 11.9709 3.43757 13.0888 4.12275 13.6009L7.22411 15.9161C8.24106 16.6806 9.91435 16.6806 10.9313 15.9161L14.0327 13.6009C14.7178 13.0888 15.2804 11.9709 15.2804 11.1198V5.76099C15.2804 4.87385 14.6024 3.89296 13.773 3.58282L10.174 2.2341C9.56094 2.01051 8.58005 2.01051 7.98142 2.2341Z"
                        fill="#59B61F"
                      />
                      <path
                        d="M6.94141 9.18722L8.10261 10.3484L11.204 7.24707"
                        stroke="white"
                        stroke-width="1.08187"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <div className="text-[#59B61F]">Below Standard</div>
                  </>
                ) : (
                  <>
                    <span
                      style={{
                        color: color,
                        fontSize: "17px",
                        fontWeight: "extrabold",
                      }}
                    >
                      {city.standardValue}x
                    </span>
                    <span>Above Standard</span>
                  </>
                )}
              </div>
              <div className="flex items-center justify-center">
                {city.follows ? (
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="10.9135"
                      cy="11.3793"
                      r="10.4838"
                      fill="#4BA9FF"
                    />
                    <path
                      d="M15.7827 7.73741C15.5082 7.46276 15.1822 7.24489 14.8235 7.09625C14.4647 6.9476 14.0802 6.87109 13.6919 6.87109C13.3036 6.87109 12.9191 6.9476 12.5603 7.09625C12.2016 7.24489 11.8756 7.46276 11.6011 7.73741L11.0314 8.30714L10.4617 7.73741C9.90715 7.1829 9.15507 6.87138 8.37087 6.87138C7.58668 6.87138 6.8346 7.1829 6.28009 7.73741C5.72558 8.29192 5.41406 9.044 5.41406 9.82819C5.41406 10.6124 5.72558 11.3645 6.28009 11.919L6.84982 12.4887L11.0314 16.6703L15.2129 12.4887L15.7827 11.919C16.0573 11.6445 16.2752 11.3185 16.4238 10.9598C16.5725 10.601 16.649 10.2165 16.649 9.82819C16.649 9.43987 16.5725 9.05536 16.4238 8.69662C16.2752 8.33787 16.0573 8.01193 15.7827 7.73741Z"
                      fill="white"
                    />
                  </svg>
                ) : (
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="10.9135"
                      cy="11.1918"
                      r="10.0511"
                      stroke="#4BA9FF"
                      stroke-width="0.865494"
                    />
                    <path
                      d="M15.7827 7.54991C15.5082 7.27526 15.1822 7.05739 14.8235 6.90875C14.4647 6.7601 14.0802 6.68359 13.6919 6.68359C13.3036 6.68359 12.9191 6.7601 12.5603 6.90875C12.2016 7.05739 11.8756 7.27526 11.6011 7.54991L11.0314 8.11964L10.4617 7.54991C9.90715 6.9954 9.15507 6.68388 8.37087 6.68388C7.58668 6.68388 6.8346 6.9954 6.28009 7.54991C5.72558 8.10442 5.41406 8.8565 5.41406 9.64069C5.41406 10.4249 5.72558 11.177 6.28009 11.7315L6.84982 12.3012L11.0314 16.4828L15.2129 12.3012L15.7827 11.7315C16.0573 11.457 16.2752 11.131 16.4238 10.7723C16.5725 10.4135 16.649 10.029 16.649 9.64069C16.649 9.25237 16.5725 8.86786 16.4238 8.50912C16.2752 8.15037 16.0573 7.82443 15.7827 7.54991Z"
                      fill="white"
                      stroke="#4BA9FF"
                      stroke-width="0.865494"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorldCities;
