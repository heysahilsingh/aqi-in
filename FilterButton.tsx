import React from "react";

type Props = {
  name: string;
  icon: React.ReactNode;
  className?: string;
};

const FilterButton = (props: Props) => {
  return (
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
      {props.name}
    </div>
  );
};

export default FilterButton;
