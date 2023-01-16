import React from "react";
import { coins } from "../saved_responses/listOfCoins";
import { sortDataByPrice } from "../utils";

function Graph() {
  const sortedData = sortDataByPrice(coins.data.coins);

  return (
    <div className="h-72 overflow-hidden">
      <table className="border-2 border-gray-200 bg-white w-2/6 ml-2 ">
        <thead className="">
          <tr>
            <th className="py-3 ">Coins</th>
            <th className="py-3 ">Price ($)</th>
            <th className="py-3 ">Change</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {sortedData.map((coin) => (
            <tr className="hover:bg-gray-300 cursor-pointer">
              <td className="py-3 px-6">{coin.name}</td>
              <td className="py-3 px-6">{coin.price}</td>
              <td className="py-3 px-6 text-blue-600">{coin.change}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Graph;
