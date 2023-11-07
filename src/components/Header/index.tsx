import React from "react";
import TopHeader from "./TopHeader";
import BottomHeader from "./BottomHeader";

type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <header className="flex flex-col w-full z-[9999999] relative">
        <TopHeader />
        <BottomHeader />
      </header>
    </>
  );
};

export default Header;
