import { useEffect, useState } from "react";
import useTimelyData from "../hooks/useTimelyData";
import { getTimelyData, prepareData } from "../utils";
import LineGraph from "./LineGraph";
import { useRouter } from "next/router";

function DetailedGraph() {
  const router = useRouter();
  const coinId = router.query.coinId;

  const [timePeriod, setTimePeriod] = useState("24h");
  const [history] = useTimelyData(timePeriod, coinId);

  const handleTimePeriod = (e) => {
    setTimePeriod(e.target.value);
  };

  if (!history) {
    return null;
  }

  const { labels, values } = prepareData(history?.data?.history);
  const data = {
    labels,
    datasets: [
      {
        label: "IN ($)",
        data: values,
        borderColor: "rgba(142, 200, 188, 1)",
        radius: 2,
      },
    ],
  };

  return (
    <div className="p-2 mx-auto bg-white w-4/5 overflow-hidden shadow-lg">
      <div className="flex  border border-gray-200 max-w-fit ">
        <button
          className={`px-3 py-2 hover:bg-blue-100  hover:text-blue-500 cursor-pointer outline-none max-w-fit ${
            timePeriod === "3h" && "text-blue-500 bg-blue-100"
          }`}
          value="3h"
          onClick={handleTimePeriod}
          readOnly
        >
          3h
        </button>
        <button
          className={`px-3 py-2   hover:text-blue-500 cursor-pointer outline-none max-w-fit ${
            timePeriod === "24h" && "text-blue-500 bg-blue-100"
          }`}
          value="24h"
          onClick={handleTimePeriod}
          readOnly
        >
          24h
        </button>
        <button
          className={`px-3 py-2   hover:text-blue-500 cursor-pointer outline-none max-w-fit ${
            timePeriod === "7d" && "text-blue-500 bg-blue-100"
          }`}
          value="7d"
          onClick={handleTimePeriod}
          readOnly
        >
          7d
        </button>
        <button
          className={`px-3 py-2   hover:text-blue-500 cursor-pointer outline-none max-w-fit ${
            timePeriod === "30d" && "text-blue-500 bg-blue-100"
          }`}
          value="30d"
          onClick={handleTimePeriod}
          readOnly
        >
          30d
        </button>
        <button
          className={`px-3 py-2   hover:text-blue-500 cursor-pointer outline-none max-w-fit ${
            timePeriod === "3m" && "text-blue-500 bg-blue-100"
          }`}
          value="3m"
          onClick={handleTimePeriod}
          readOnly
        >
          3m
        </button>
        <button
          className={`px-3 py-2   hover:text-blue-500 cursor-pointer outline-none max-w-fit ${
            timePeriod === "1y" && "text-blue-500 bg-blue-100"
          }`}
          value="1y"
          onClick={handleTimePeriod}
          readOnly
        >
          1y
        </button>
        <button
          className={`px-3 py-2   hover:text-blue-500 cursor-pointer outline-none max-w-fit ${
            timePeriod === "3y" && "text-blue-500 bg-blue-100"
          }`}
          value="3y"
          onClick={handleTimePeriod}
          readOnly
        >
          3y
        </button>
        <button
          className={`px-3 py-2   hover:text-blue-500 cursor-pointer outline-none max-w-fit ${
            timePeriod === "5y" && "text-blue-500 bg-blue-100"
          }`}
          value="5y"
          onClick={handleTimePeriod}
          readOnly
        >
          5y
        </button>
      </div>
      <LineGraph data={data} detailed />
    </div>
  );
}

export default DetailedGraph;
