import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Currency({ name, price, change, iconUrl, bgColor, coinId }) {
  const router = useRouter();
  // console.log(coinId);

  const goToCoinInfo = () => {
    router.push(`/currency/${coinId}`);
  };

  return (
    <div
      className="flex my-2 mx-auto border p-5 w-64 justify-between rounded-lg sm:my-2 sm:mx-auto md:mx-2 hover:shadow-xl cursor-pointer text-white"
      style={{ backgroundColor: bgColor }}
      onClick={goToCoinInfo}
    >
      <Link href="/currency" className="flex-grow">
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
            <img
              src={iconUrl}
              alt={name}
              className="h-16 w-16 fill-slate-900"
            />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Currency;
