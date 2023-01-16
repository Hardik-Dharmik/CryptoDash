import React from "react";

function Currency({ name, price, change, iconUrl, bgColor }) {
  return (
    <div
      className="flex my-2 mx-auto border p-5 w-64 justify-between rounded-lg sm:my-2 sm:mx-auto md:mx-2 hover:shadow-xl cursor-pointer text-white"
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex flex-row items-center flex-grow justify-between">
        <div className="">
          {/* Text */}
          {/* Name */}
          <p>{name}</p>
          {/* Prices  */}
          <p className="text-2xl">{price}$</p>
          {/* Change  */}
          <p>Change : {change}</p>
        </div>

        <div className="justify-center">
          {/* Image */}
          <img src={iconUrl} alt={name} className="h-16 w-16 fill-slate-900" />
        </div>
      </div>
    </div>
  );
}

export default Currency;
