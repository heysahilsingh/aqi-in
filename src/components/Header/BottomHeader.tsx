type Props = {};

const bottomHeaderData = [
  {
    area: "Rohini Sector 15",
    wind: "0.8 Km",
    aqi: {
      range: "55",
      status: "#EEC732",
    },
  },
  {
    area: "Rohini Sector 10",
    wind: "0.8 Km",
    aqi: {
      range: "40",
      status: "#59B61F",
    },
  },
  {
    area: "Rohini Sector 7",
    wind: "0.8 Km",
    aqi: {
      range: "43",
      status: "#59B61F",
    },
  },
  {
    area: "Saraswati Marg",
    wind: "0.8 Km",
    aqi: {
      range: "132",
      status: "#EA8C34",
    },
  },
];

const BottomHeader = (props: Props) => {
  return (
    <div className="w-full px-10">
      <div className="px-10 py-3 flex items-center justify-between bg-white rounded-b-lg">
        {bottomHeaderData.map((data, index) => (
          <>
            <div className="flex gap-2 items-center text-[12px] font-semibold text-[#4C4F57]">
              <span className="">{data.area}</span>
              <span className="text-[9px] text-[#667580]">{data.wind}</span>
              <span
                className={`pl-8 text-[16px] font-extrabold text-transparent bg-clip-text`}
                style={{ backgroundColor: data.aqi.status }}
              >
                {data.aqi.range}
              </span>
              <span className="-mx-1 text-[9px] text-[#667580]">AQI</span>
            </div>
            {index != bottomHeaderData.length - 1 && (
              <span className="h-4 w-[1px] bg-[#BEBEBE]"></span>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default BottomHeader;
