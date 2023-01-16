import React from "react";
import Link from "next/link";

function SideBarOption({ Icon, option }) {
  return (
    <div className="flex items-center cursor-pointer hover:text-emerald-300">
      <Icon fontSize="small" />
      <a href="" className="ml-2 tracking-widest">
        {option}
      </a>
    </div>
  );
}

export default SideBarOption;
