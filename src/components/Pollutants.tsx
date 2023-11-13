type Props = {
  name: string;
  unit: string;
  value: number;
  color: string | undefined;
  average?: { period: string; data: number }[];
  icon: string;
};

function Pollutants(props: Props) {
  return (
    <div className="border-2 border-white cursor-pointer hover:border-[#A3A3C8] min-w-[260px] flex flex-col justify-between rounded-lg overflow-hidden bg-[#F7F7FC] text-[#667580] text-[12px]">
      <div
        className={`flex items-center px-4 h-full py-3 gap-3 border-l-4 leading-none`}
        style={{ borderColor: props.color }}
      >
        <i className="icon">
          <img src={props.icon} alt="" width={34} />
        </i>
        <div className="name uppercase">{props.name}</div>
        <div className="measure flex justify-end items-end grow">
          <span className="font-bold text-[#31343D] text-[18px]">
            {props.value}
          </span>
          <span className="text-[9px] pb-0.5 pl-1">
            {props.unit}
            <sup></sup>
          </span>
        </div>
        <div className="link">
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 11.1523L6.08481 6.06753L1 0.982715"
              stroke="#31343D"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="flex gap-6 items-center px-4 py-2 bg-[#EFEFFF]">
        <span>Avg</span>
        <div className="datas flex items-center gap-7 justify-between grow">
          <div className="data flex flex-col justify-center">
            <div className="time text-[10px]">1hr</div>
            <div className="value text-[#31343D] font-semibold">20</div>
          </div>
          <div className="data flex flex-col justify-center">
            <div className="time">1hr</div>
            <div className="value text-[#31343D] font-semibold">20</div>
          </div>
          <div className="data flex flex-col justify-center">
            <div className="time">1hr</div>
            <div className="value text-[#31343D] font-semibold">20</div>
          </div>
          <div className="data flex flex-col justify-center">
            <div className="time">1hr</div>
            <div className="value text-[#31343D] font-semibold">20</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pollutants;
