import React from "react";
import AqiScale from "./AqiScale";
import AqiMeter from "../AqiMeter";

type Props = {
  areaName: string;
  nearestMonitorDIstance: string;
  likes: string;
  windSpeed: string;
  weatherMsg: string;
  aqiMsg: string;
  aqiModelImgUrl: string;
  temprature: string;
  humidity: string;
  grow: string;
  lastUpdated: string;
  aqiStatus:
    | "good"
    | "moderate"
    | "poor"
    | "unhealthy"
    | "severe"
    | "hazardous";
};

const RealtimeAqi = (props: Props) => {
  return (
    <div className="flex flex-col w-[1070px] -mt-28">
      <div className="tab-switcher flex items-center font-bold rounded-t-lg bg-[#F1F1F1] w-fit">
        <div className="flex items-center gap-2 px-10 py-2 bg-white border-t-2 border-[#4BA9FF] rounded-t-lg">
          <img src="./icons/wind.png" alt="s" />
          <span className="text-[#4BA9FF]">AQI</span>
        </div>
        <div className="flex items-center gap-2 px-10 py-2 rounded-t-lg">
          <img src="./icons/weather.png" alt="s" />
          <span className="text-[#3B3C3F] opacity-50">Weather</span>
        </div>
      </div>

      <div className="tab aqi-tab px-12 pt-8 pb-8 bg-white rounded-xl rounded-tl-none">
        <div className="tab-header flex items-center pb-12">
          <div className="col1 flex flex-col">
            <div className="flex items-center gap-2 rounded-t-lg pb-1">
              <div className="icon">
                <svg
                  width="20"
                  height="13"
                  viewBox="0 0 20 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.54688 6.03221C5.54688 6.03221 14.1209 6.11439 15.9772 5.57526C17.8336 5.03614 17.8312 2.23807 15.9772 1.54834C14.1233 0.858614 13.4896 3.32401 13.4896 3.32401"
                    stroke="#667580"
                    stroke-width="1.25087"
                    stroke-linecap="round"
                  />
                  <path
                    d="M8.36328 9.28521C8.36328 9.28521 14.6556 8.71669 17.4296 9.28521C20.2036 9.85373 19.3203 11.4847 18.0057 11.5592C16.691 11.6338 15.4778 10.7699 15.4778 10.7699"
                    stroke="#667580"
                    stroke-width="1.25087"
                    stroke-linecap="round"
                  />
                  <path
                    d="M0.867188 2.52641C0.867188 2.52641 2.77595 2.68465 5.03771 2.68465C7.29947 2.68465 10.3652 2.38782 10.3652 2.38782"
                    stroke="#667580"
                    stroke-width="1.25087"
                    stroke-linecap="round"
                  />
                  <path
                    d="M1.16595 6.11623C1.32252 5.78775 1.65399 5.57855 2.01787 5.57855H2.57301C3.09518 5.57855 3.4043 6.16304 3.11038 6.59464L2.85543 6.96904C2.67426 7.23508 2.86077 7.59596 3.18258 7.60205C3.52367 7.6085 3.70451 8.0079 3.48435 8.26849L2.24432 9.73618C1.87026 10.1789 1.15582 9.80522 1.30612 9.24545L1.31515 9.21181C1.40312 8.88421 1.15629 8.56237 0.817096 8.56237C0.437971 8.56237 0.188446 8.16702 0.351573 7.82478L1.16595 6.11623Z"
                    fill="url(#paint0_linear_1_2569)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_2569"
                      x1="1.64579"
                      y1="8.58555"
                      x2="-0.238424"
                      y2="7.89479"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FFD100" />
                      <stop offset="1" stop-color="#FFF0AA" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="text-[#667580] font-semibold">
                Air Quality in
              </span>
            </div>
            <div className="area-name flex items-center gap-2">
              <h2 className="text-[20px] text-[#31343D] font-bold">
                {props.areaName}
              </h2>
              <div className="">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="9.83198"
                    cy="9.62718"
                    rx="9.16804"
                    ry="8.97704"
                    fill="#31343D"
                  />
                  <path
                    d="M13.0519 6.63886C13.0519 6.36053 12.8215 6.13491 12.5372 6.13491L7.90522 6.13491C7.62097 6.13491 7.39055 6.36053 7.39055 6.63885C7.39055 6.91718 7.62097 7.1428 7.90522 7.1428L12.0226 7.1428L12.0226 11.1744C12.0226 11.4527 12.253 11.6783 12.5372 11.6783C12.8215 11.6783 13.0519 11.4527 13.0519 11.1744L13.0519 6.63886ZM6.41083 11.9249C6.20984 12.1217 6.20984 12.4408 6.41083 12.6376C6.61182 12.8344 6.93769 12.8344 7.13868 12.6376L6.41083 11.9249ZM12.1733 6.28251L6.41083 11.9249L7.13868 12.6376L12.9012 6.9952L12.1733 6.28251Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <span className="text-[#677580] text-[12px]">
              Nearest monitor is {props.nearestMonitorDIstance} far
            </span>
          </div>
          <div className="col2 flex gap-4 items-center justify-end grow text-[13px]">
            <div className="mr-4 locate-me flex items-center px-3.5 py-1.5 gap-2 border-2 border-[#4BA9FF] text-[#4BA9FF] rounded-lg">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.67252 4.77722C7.95795 4.77722 9 5.81927 9 7.1047C9 8.39015 7.95795 9.43218 6.67252 9.43218C5.38707 9.43218 4.34504 8.39015 4.34504 7.1047C4.34504 5.81927 5.38707 4.77722 6.67252 4.77722Z"
                  fill="#4BA9FF"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.67164 0.432617C6.41457 0.432617 6.20615 0.641029 6.20615 0.898113V1.69361C3.57814 1.9167 1.4836 4.01123 1.26053 6.63923H0.465033C0.207954 6.63923 -0.000463486 6.84765 -0.000463486 7.10472C-0.000463486 7.3618 0.207954 7.57022 0.465033 7.57022H1.26053C1.4836 10.1982 3.57814 12.2928 6.20615 12.5158V13.3113C6.20615 13.5684 6.41457 13.7768 6.67164 13.7768C6.92872 13.7768 7.13714 13.5684 7.13714 13.3113V12.5158C9.76514 12.2928 11.8597 10.1982 12.0828 7.57022H12.8783C13.1353 7.57022 13.3438 7.3618 13.3438 7.10472C13.3438 6.84765 13.1353 6.63923 12.8783 6.63923H12.0828C11.8597 4.01123 9.76514 1.9167 7.13714 1.69361V0.898113C7.13714 0.641029 6.92872 0.432617 6.67164 0.432617ZM11.1714 7.10472C11.1714 9.58991 9.15681 11.6045 6.67164 11.6045C4.18645 11.6045 2.17185 9.58991 2.17185 7.10472C2.17185 4.61956 4.18645 2.60493 6.67164 2.60493C9.15681 2.60493 11.1714 4.61956 11.1714 7.10472Z"
                  fill="#4BA9FF"
                />
              </svg>
              Locate me
            </div>
            <div className="likes flex items-center gap-1">
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12.5264" cy="12.5264" r="12.5264" fill="#4BA9FF" />
                <path
                  d="M18.3419 8.17475C18.0139 7.8466 17.6244 7.58628 17.1958 7.40867C16.7672 7.23106 16.3077 7.13965 15.8438 7.13965C15.3798 7.13965 14.9203 7.23106 14.4917 7.40867C14.0631 7.58628 13.6736 7.8466 13.3456 8.17475L12.6649 8.85548L11.9842 8.17475C11.3216 7.51221 10.423 7.13999 9.48603 7.13999C8.54904 7.13999 7.65044 7.51221 6.98789 8.17475C6.32534 8.8373 5.95313 9.73591 5.95312 10.6729C5.95312 11.6099 6.32534 12.5085 6.98789 13.171L7.66861 13.8518L12.6649 18.848L17.6612 13.8518L18.3419 13.171C18.6701 12.843 18.9304 12.4536 19.108 12.0249C19.2856 11.5963 19.377 11.1369 19.377 10.6729C19.377 10.2089 19.2856 9.74948 19.108 9.32084C18.9304 8.89221 18.6701 8.50276 18.3419 8.17475Z"
                  fill="white"
                />
              </svg>
              <span className="text-[#31343D] text-[12px] font-semibold">
                {props.likes}
              </span>
            </div>
            <div className="share">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12.4736"
                  cy="12.4736"
                  r="12.0107"
                  stroke="#31343D"
                  stroke-width="0.925774"
                />
                <path
                  d="M12.7513 9.90208C7.34572 11.005 6.80243 14.7992 7.22014 16.5894C8.76164 13.8495 11.1944 13.1628 12.705 13.1232C12.9004 13.1181 13.0539 13.2799 13.0539 13.4753V15.2949C13.0539 15.5987 13.4036 15.7693 13.643 15.5823L18.5124 11.7781C18.7016 11.6303 18.6987 11.3431 18.5067 11.1991L13.6373 7.54703C13.397 7.36676 13.0539 7.53827 13.0539 7.83872V9.53909C13.0539 9.71561 12.9242 9.86679 12.7513 9.90208Z"
                  stroke="#31343D"
                  stroke-width="0.925774"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="tab-data flex flex-col gap-1">
          <div className="flex gap-6">
            <div className="col1 aqi grow flex gap-4 items-center bg-[#F7F7FC] rounded-lg p-4">
              <AqiMeter />
              <div className="live flex flex-col gap-2.5 leading-none min-w-fit">
                <div className="flex gap-2 items-center">
                  <svg
                    width="6"
                    height="6"
                    viewBox="0 0 6 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="3" cy="3" r="3" fill="#E75835" />
                  </svg>
                  <span className="text-[#667580] text-[12px]">Live AQI</span>
                </div>
                <div className="status font-bold text-[24px] text-[#59B61F] capitalize">
                  {props.aqiStatus}
                </div>
                <span className="pt-2 text-[12px] text-[#859199]">
                  Last Updated:{" "}
                  <span className="font-semibold">{props.lastUpdated} ago</span>
                </span>
              </div>
              <div className="opacity-50 bg-[#BEBEBE] w-[1px] mx-4 h-[80px]"></div>
              <div className="message text-[#677580] text-[14px] text-right grow">
                {props.aqiMsg}
              </div>
              <div className="model -mt-[40px]">
                <img
                  className="min-w-[60px]"
                  src={props.aqiModelImgUrl}
                  alt="s"
                />
              </div>
            </div>
            <div className="col2 weather relative min-w-fit items-center flex gap-3 border border-[#677580]/10 rounded-lg py-4 px-5">
              <div className="img -mt-8 -ml-5 h-full">
                <img
                  className="object-contain"
                  src="/status/sunny.png"
                  alt="ds"
                />
              </div>
              <div className="temp flex flex-col leading-none">
                <span className="font-bold text-[30px] text-[#31343D]">
                  {props.temprature}
                  <span className="font-medium text-[16px]">c</span>
                </span>
                <span className="pt-2 pb-5 text-[13px] text-[#677580]">
                  {props.weatherMsg}
                </span>
                <div className="flex gap-2 items-center">
                  <div className="icon">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.2337 1.26291L9.41092 12.7313C9.29161 13.0893 8.78506 13.0893 8.66567 12.7313L6.94066 7.55598C6.86241 7.32148 6.67833 7.13739 6.44383 7.05914L1.26858 5.33414C0.910474 5.21474 0.910474 4.70822 1.26858 4.58885L12.7369 0.766074C13.044 0.663722 13.3361 0.955854 13.2337 1.26291Z"
                        stroke="#677580"
                        stroke-width="1.25747"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="font-semibold text-[15px] text-[#31343D]">
                    {props.windSpeed}
                  </span>
                </div>
              </div>
              <div className="w-[1px] h-full opacity-30 bg-[#BEBEBE] mx-10"></div>
              <div className="wind flex flex-col justify-between py-1 h-full">
                <div className="flex gap-2 items-center">
                  <div className="icon">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.2841 10.9987C15.2841 13.3653 13.3655 15.2839 10.9989 15.2839C8.63228 15.2839 6.71375 13.3653 6.71375 10.9987C6.71375 7.91789 10.9989 1 10.9989 1C10.9989 1 15.2841 7.91789 15.2841 10.9987Z"
                        stroke="#677580"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.28516 5.99935C5.28516 7.1827 4.32589 8.14193 3.14258 8.14193C1.95927 8.14193 1 7.1827 1 5.99935C1 4.45895 3.14258 1 3.14258 1C3.14258 1 5.28516 4.45895 5.28516 5.99935Z"
                        stroke="#677580"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="font-semibold text-[15px] text-[#31343D]">
                    {props.humidity}
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="icon">
                    <svg
                      width="21"
                      height="10"
                      viewBox="0 0 21 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.1187 2.27273C20.1738 2.00215 19.9992 1.73808 19.7287 1.6829L15.3194 0.783692C15.0488 0.728512 14.7848 0.903123 14.7296 1.1737C14.6744 1.44427 14.849 1.70834 15.1196 1.76352L19.0389 2.56282L18.2396 6.48214C18.1844 6.75272 18.3591 7.01679 18.6296 7.07197C18.9002 7.12715 19.1643 6.95254 19.2195 6.68197L20.1187 2.27273ZM10.4165 8.86351L19.9045 2.58988L19.353 1.75574L9.86497 8.02937L10.4165 8.86351Z"
                        fill="#677580"
                      />
                      <path
                        d="M10.2516 8.40206L1.11829 2.17276"
                        stroke="#677580"
                        stroke-linecap="round"
                      />
                      <path d="M1 8.99997H20" stroke="#677580" />
                    </svg>
                  </div>
                  <span className="font-semibold text-[15px] text-[#31343D]">
                    {props.grow}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <AqiScale className="w-[60%]" status={props.aqiStatus} />
        </div>
      </div>
    </div>
  );
};

export default RealtimeAqi;
