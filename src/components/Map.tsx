import React from "react";

type Props = {
  className?: string;
};

const Map = (props: Props) => {
  return (
    <div
      className={`${
        props.className && props.className
      } w-full min-h-[300px] bg-red-300`}
    >
      Map
    </div>
  );
};

export default Map;
