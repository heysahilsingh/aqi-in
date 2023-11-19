import React from "react";
import ChartHistoricData from "./ChartHistoricData";

type Props = {
  areaName: string;
};

async function HistoricData(props: Props) {
  const data = await fetch(
    "https://api.aqi.in/api/v1/getLocationHistory24Hourinterview",
    {
      cache: "no-store",
      headers: {
        locationid: "PLLODA000004",
        searchtype: "locationId",
        sendevid: "AQI-IN",
      },
    }
  );

  const response = await data.json();

  const saData = response.Table;

  const min = saData.Data[0].minValue;
  const max = saData.Data[0].maxValue;

  return (
    <div className="historic-data flex flex-col w-full">
      <div className="data flex flex-col gap-6 px-10 pt-8 pb-8 w-full">
        <div className="heading text-lg flex items-center">
          <h2 className="font-bold">Historic Data in</h2>
          <span className=" text-[#667580]">&nbsp;{props.areaName}</span>
        </div>
        <div className="filters gap-4 flex items-center w-full">
          <div className="w-fit cursor-pointer leading-none text-[12px] flex items-center px-4 py-2 gap-2 border-2 bg-[#F7F7FC] border-[#A3A3C8] rounded-md">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="6.85" cy="6.85" r="6.85" fill="#667580" />
              <path
                d="M13.3008 6.65051L-0.000188351 6.65051"
                stroke="white"
                stroke-width="2.66023"
              />
              <path
                d="M6.65039 0L6.65039 13.301"
                stroke="white"
                stroke-width="2.66023"
              />
            </svg>
            {props.areaName}
          </div>
          <div className="w-fit cursor-pointer leading-none text-[12px] flex items-center px-4 py-2 gap-2 border-2 bg-[#F7F7FC] border-white rounded-md">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.432149"
                y="0.432149"
                width="14.6931"
                height="14.6931"
                rx="4.75364"
                stroke="#667580"
                stroke-width="0.864298"
              />
              <path
                d="M7.78125 4.32129V11.2357"
                stroke="#667580"
                stroke-width="1.03716"
                stroke-linecap="round"
              />
              <path
                d="M4.32422 7.77838L11.2386 7.77838"
                stroke="#667580"
                stroke-width="1.03716"
                stroke-linecap="round"
              />
            </svg>
            Add to compare
          </div>
          <div className="w-fit cursor-pointer leading-none text-[12px] flex items-center px-4 py-2 gap-2 border-2 bg-[#F7F7FC] border-white rounded-md">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.432149"
                y="0.432149"
                width="14.6931"
                height="14.6931"
                rx="4.75364"
                stroke="#667580"
                stroke-width="0.864298"
              />
              <path
                d="M7.78125 4.32129V11.2357"
                stroke="#667580"
                stroke-width="1.03716"
                stroke-linecap="round"
              />
              <path
                d="M4.32422 7.77838L11.2386 7.77838"
                stroke="#667580"
                stroke-width="1.03716"
                stroke-linecap="round"
              />
            </svg>
            Add to compare
          </div>

          <div className="flex gap-4 grow justify-center items-center pl-16">
            <svg
              width="26"
              height="27"
              viewBox="0 0 26 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.297852"
                y="0.985352"
                width="25.6201"
                height="25.644"
                rx="5.69867"
                fill="#C4C6CF"
              />
              <path
                d="M5.98828 6.68408V19.5061H21.3603"
                stroke="#2D3140"
                stroke-width="1.2822"
                stroke-linecap="round"
              />
              <path
                d="M8.54883 10.5936C8.54883 11.4484 9.06123 13.2863 11.1108 13.7991C13.6728 14.4402 14.9538 9.95254 17.5159 10.5936C19.5655 11.1065 19.6509 14.2266 19.4374 15.7225"
                stroke="#2D3140"
                stroke-width="1.2822"
                stroke-linecap="round"
              />
            </svg>
            <svg
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1.15765"
                y="1.69768"
                width="24.1954"
                height="24.2193"
                rx="4.98633"
                stroke="#C4C6CF"
                stroke-width="1.42467"
              />
              <path
                d="M7.56348 6.68359V20.9303"
                stroke="#2D3140"
                stroke-width="1.42467"
                stroke-linecap="round"
              />
              <path
                d="M13.2578 9.53271V20.93"
                stroke="#2D3140"
                stroke-width="1.42467"
                stroke-linecap="round"
              />
              <path
                d="M18.9513 13.8066V20.93"
                stroke="#2D3140"
                stroke-width="1.42467"
                stroke-linecap="round"
              />
            </svg>
          </div>

          <div className="w-fit cursor-pointer leading-none text-[12px] flex items-center px-4 py-2 gap-2 border-2 border-zinc-300 rounded-md">
            PM10 (μg/m3)
            <svg
              width="14"
              height="8"
              viewBox="0 0 14 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.33679 1.62695L6.87675 6.94975L12.4167 1.62695"
                stroke="#667580"
                stroke-width="1.7286"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="w-fit cursor-pointer leading-none text-[12px] flex items-center px-4 py-2 gap-2 border-2 border-zinc-300 rounded-md">
            24 hours
            <svg
              width="14"
              height="8"
              viewBox="0 0 14 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.33679 1.62695L6.87675 6.94975L12.4167 1.62695"
                stroke="#667580"
                stroke-width="1.7286"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="chart">
          <ChartHistoricData
            labels={saData.Data[0].timeArray2}
            data={saData.Data[0].averageArray}
          />
        </div>
        <div className="who flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 leading-none">
            <div className="w-[10px] h-[10px] rounded-full bg-[#3988FF]"></div>
            <p className="text-[#677580] text-[13px]">WHO Guidlines</p>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.66699 11.5001C7.66699 9.9966 7.66699 7.65012 7.66699 7.65012M7.66699 15.0001C11.517 15.0001 14.667 11.8501 14.667 8.00012C14.667 4.15012 11.517 1.00012 7.66699 1.00012C3.81699 1.00012 0.666992 4.15012 0.666992 8.00012C0.666992 11.8501 3.81699 15.0001 7.66699 15.0001Z"
                stroke="#667580"
                stroke-width="1.05"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.66711 5.54834V5.19834"
                stroke="#667580"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="flex items-center gap-2 leading-none text-[11px] font-semibold">
            <div className="min flex items-center gap-2">
              <div className="w-[7px] h-[7px] rounded-full bg-[#3DBE34]"></div>
              <p className="text-[#3DBE34]">Min</p>
            </div>
            <span>{min} μg/m3</span>
            <div className="max ml-4 flex items-center gap-2">
              <div className="w-[7px] h-[7px] rounded-full bg-[#C92033]"></div>
              <p className="text-[#C92033]">Max</p>
            </div>
            <span>{max} μg/m3</span>
          </div>
        </div>
      </div>
      <div className="advice w-full flex gap-4 justify-center items-center bg-[#F7F7FC] px-6 py-4">
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_1_54095" fill="white">
            <path d="M60 30.0001C60 46.5687 46.5685 60.0001 30 60.0001C13.4315 60.0001 0 46.5687 0 30.0001C0 13.4316 13.4315 0.00012207 30 0.00012207C46.5685 0.00012207 60 13.4316 60 30.0001ZM1.75078 30.0001C1.75078 45.6017 14.3984 58.2493 30 58.2493C45.6016 58.2493 58.2492 45.6017 58.2492 30.0001C58.2492 14.3985 45.6016 1.7509 30 1.7509C14.3984 1.7509 1.75078 14.3985 1.75078 30.0001Z" />
          </mask>
          <path
            d="M60 30.0001C60 46.5687 46.5685 60.0001 30 60.0001C13.4315 60.0001 0 46.5687 0 30.0001C0 13.4316 13.4315 0.00012207 30 0.00012207C46.5685 0.00012207 60 13.4316 60 30.0001ZM1.75078 30.0001C1.75078 45.6017 14.3984 58.2493 30 58.2493C45.6016 58.2493 58.2492 45.6017 58.2492 30.0001C58.2492 14.3985 45.6016 1.7509 30 1.7509C14.3984 1.7509 1.75078 14.3985 1.75078 30.0001Z"
            stroke="#1F3F70"
            stroke-width="4"
            mask="url(#path-1-inside-1_1_54095)"
          />
          <path
            d="M13.2976 30.9064V29.3655L16.9956 25.4242C17.493 24.8835 17.8498 24.4078 18.0661 23.9969C18.2824 23.5752 18.3905 23.148 18.3905 22.7155C18.3905 21.6126 17.7255 21.0611 16.3955 21.0611C15.3574 21.0611 14.4005 21.4504 13.5246 22.2289L12.8272 20.6719C13.2813 20.261 13.849 19.9312 14.5302 19.6825C15.2115 19.4338 15.9197 19.3094 16.655 19.3094C17.8769 19.3094 18.8122 19.5852 19.461 20.1366C20.1206 20.6881 20.4504 21.4774 20.4504 22.5047C20.4504 23.1967 20.2828 23.8617 19.9476 24.4997C19.6232 25.1376 19.1096 25.8243 18.4067 26.5595L15.8927 29.1871H20.8883V30.9064H13.2976ZM27.386 30.9064V28.733H22.4066V27.2083L27.7428 19.4716H29.4621V27.0137H31.0678V28.733H29.4621V30.9064H27.386ZM27.386 27.0137V22.6506L24.4016 27.0137H27.386Z"
            fill="#1F3F70"
          />
          <path
            d="M32.272 31.6943L31.2288 31.3836L34.1031 22.4722L35.1462 22.783L32.272 31.6943ZM35.6808 30.9064V30.0143L37.8218 27.7325C38.1097 27.4195 38.3163 27.144 38.4415 26.9061C38.5667 26.662 38.6293 26.4147 38.6293 26.1643C38.6293 25.5258 38.2443 25.2065 37.4743 25.2065C36.8734 25.2065 36.3193 25.4319 35.8123 25.8826L35.4085 24.9811C35.6714 24.7432 36.0001 24.5523 36.3944 24.4083C36.7888 24.2643 37.1989 24.1923 37.6246 24.1923C38.332 24.1923 38.8735 24.352 39.2491 24.6712C39.631 24.9905 39.8219 25.4475 39.8219 26.0422C39.8219 26.4429 39.7249 26.8279 39.5308 27.1972C39.343 27.5666 39.0456 27.9641 38.6387 28.3898L37.1832 29.911H40.0754V30.9064H35.6808ZM43.8372 30.9064V29.6481H40.9544V28.7654L44.0438 24.2862H45.0392V28.6527H45.9688V29.6481H45.0392V30.9064H43.8372ZM43.8372 28.6527V26.1267L42.1094 28.6527H43.8372Z"
            fill="#667580"
          />
          <path
            d="M16.82 44.0001V36.9501H17.86V39.9901H21.81V36.9501H22.84V44.0001H21.81V40.8601H17.86V44.0001H16.82ZM26.496 44.0901C26.0027 44.0901 25.576 43.9868 25.216 43.7801C24.856 43.5735 24.576 43.2835 24.376 42.9101C24.1827 42.5301 24.086 42.0801 24.086 41.5601C24.086 41.0401 24.1827 40.5935 24.376 40.2201C24.576 39.8401 24.856 39.5468 25.216 39.3401C25.576 39.1335 26.0027 39.0301 26.496 39.0301C26.976 39.0301 27.396 39.1335 27.756 39.3401C28.116 39.5468 28.396 39.8401 28.596 40.2201C28.796 40.5935 28.896 41.0401 28.896 41.5601C28.896 42.0801 28.796 42.5301 28.596 42.9101C28.396 43.2835 28.116 43.5735 27.756 43.7801C27.396 43.9868 26.976 44.0901 26.496 44.0901ZM26.496 43.3101C26.9093 43.3101 27.2427 43.1601 27.496 42.8601C27.7493 42.5601 27.876 42.1268 27.876 41.5601C27.876 40.9935 27.7493 40.5635 27.496 40.2701C27.2427 39.9701 26.9093 39.8201 26.496 39.8201C26.076 39.8201 25.7393 39.9701 25.486 40.2701C25.2327 40.5635 25.106 40.9935 25.106 41.5601C25.106 42.1268 25.2327 42.5601 25.486 42.8601C25.7393 43.1601 26.076 43.3101 26.496 43.3101ZM31.7703 44.0901C30.5903 44.0901 30.0003 43.4335 30.0003 42.1201V39.1201H31.0103V42.1301C31.0103 42.5235 31.0903 42.8135 31.2503 43.0001C31.4103 43.1868 31.6636 43.2801 32.0103 43.2801C32.3903 43.2801 32.697 43.1535 32.9303 42.9001C33.1703 42.6468 33.2903 42.3068 33.2903 41.8801V39.1201H34.3003V44.0001H33.3203V43.2201C33.1603 43.5068 32.947 43.7235 32.6803 43.8701C32.4136 44.0168 32.1103 44.0901 31.7703 44.0901ZM35.7237 44.0001V39.1201H36.7037V39.9901C36.957 39.4101 37.4837 39.0868 38.2837 39.0201L38.6137 39.0001L38.6837 39.8601L38.0737 39.9201C37.187 40.0068 36.7437 40.4635 36.7437 41.2901V44.0001H35.7237ZM41.1153 44.0901C40.7153 44.0901 40.342 44.0401 39.9953 43.9401C39.6486 43.8335 39.3586 43.6868 39.1253 43.5001L39.4153 42.8201C39.662 42.9935 39.932 43.1268 40.2253 43.2201C40.5253 43.3135 40.8253 43.3601 41.1253 43.3601C41.4786 43.3601 41.7453 43.2968 41.9253 43.1701C42.1053 43.0435 42.1953 42.8735 42.1953 42.6601C42.1953 42.4868 42.1353 42.3535 42.0153 42.2601C41.8953 42.1601 41.7153 42.0835 41.4753 42.0301L40.5253 41.8401C39.6853 41.6668 39.2653 41.2335 39.2653 40.5401C39.2653 40.0801 39.4486 39.7135 39.8153 39.4401C40.182 39.1668 40.662 39.0301 41.2553 39.0301C41.5953 39.0301 41.9186 39.0801 42.2253 39.1801C42.5386 39.2801 42.7986 39.4301 43.0053 39.6301L42.7153 40.3101C42.5153 40.1368 42.2853 40.0035 42.0253 39.9101C41.7653 39.8168 41.5086 39.7701 41.2553 39.7701C40.9086 39.7701 40.6453 39.8368 40.4653 39.9701C40.2853 40.0968 40.1953 40.2701 40.1953 40.4901C40.1953 40.8235 40.4153 41.0368 40.8553 41.1301L41.8053 41.3201C42.2386 41.4068 42.5653 41.5535 42.7853 41.7601C43.012 41.9668 43.1253 42.2468 43.1253 42.6001C43.1253 43.0668 42.942 43.4335 42.5753 43.7001C42.2086 43.9601 41.722 44.0901 41.1153 44.0901Z"
            fill="#667580"
          />
        </svg>

        <p className="text-[14px] text-[#677580]">
          Hours in which the exposure is above the recommended WHO daily
          guideline <span className="text-[#4BA9FF]">(15μg/m3)</span>.
        </p>
      </div>
    </div>
  );
}

export default HistoricData;
