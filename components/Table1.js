import { useState } from "react";
import { coins } from "../saved_responses/listOfCoins";
import { sortDataByName, sortDataByPrice } from "../utils";

function Table1() {
  const sortedData = sortDataByPrice(coins.data.coins).slice(0, 5);

  return (
    <div className="h-fit max-w-lg shadow-lg">
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
              <td className="py-3 px-6 truncate">{coin.symbol}</td>
              <td className="py-3 px-6">{coin.price}</td>
              <td className="py-3 px-6 text-blue-600">{coin.change}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table1;
