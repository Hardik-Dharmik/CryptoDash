import numeral from "numeral";
import { useEffect } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import LaunchIcon from "@mui/icons-material/Launch";
import Graph from "./Graph";
import DetailedGraph from "./DetailedGraph";

function CoinInformation({ coinId, coinData }) {
  const moreInformation = [
    {
      term: "Market Cap",
      value: numeral(coinData.marketCap).format("0.000a"),
    },
    {
      term: "All time high",
      value: parseFloat(coinData.allTimeHigh.price).toFixed(3) + "$",
    },
    {
      term: "No. of exchanges",
      value: coinData.numberOfExchanges,
    },
    {
      term: "No. of markets",
      value: coinData.numberOfMarkets,
    },
    {
      term: "Listed at",
      value: new Date(coinData.listedAt * 1000).toLocaleString("en-GB", {
        day: "numeric",
        month: "2-digit",
        year: "numeric",
      }),
    },
    {
      term: "BTC",
      value: coinData.btcPrice,
    },
  ];

  return (
    <div className="flex flex-col p-5 flex-grow">
      <div className="flex  bg-white  p-4 justify-between shadow-lg">
        {/* Info  */}
        <div className="flex  flex-col w-4/6">
          {/* Name  */}
          <div className=" ">
            {/* Name & Price  */}
            <div className="flex w-2/3 justify-between">
              {/* Name, Price, Price at, Change */}
              <h1 className="text-5xl ">{coinData.name}</h1>
              <div className="flex flex-col items-end">
                <p className="text-2xl">
                  $ {parseFloat(coinData.price).toFixed(3)}{" "}
                </p>

                <p
                  className={`
                    ${
                      coinData.change > 0 ? "text-green-500" : "text-red-600"
                    } flex items-center
                  `}
                >
                  {coinData.change > 0 ? (
                    <ArrowUpwardIcon />
                  ) : (
                    <ArrowDownwardIcon />
                  )}
                  {coinData.change}%
                </p>
              </div>
            </div>

            <div className="flex text-xl my-4">
              {/* Website  */}
              <a
                className="mr-5 text-blue-500 flex items-center"
                href={coinData.websiteUrl}
              >
                <LaunchIcon fontSize="small" /> {coinData.websiteUrl}
              </a>

              {/* Symbol  */}
              <p className="text-gray-600">Symbol : {coinData.symbol}</p>
            </div>
          </div>

          {/* More Info  */}
          <div>
            <div className="grid grid-cols-3 gap-4 gap-y-5 border border-gray-300 p-4 rounded-lg">
              {moreInformation.map((info) => (
                <div className="flex justify-between bg-gray-100 p-2">
                  <p className="text-gray-600">{info.term}</p>
                  <p className="font-semibold">{info.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Icon  */}
        <div className="flex flex-col items-center justify-between">
          <img src={coinData.iconUrl} alt="" className="h-20 w-20" />
          <h1 className="font-bold">Reference Links</h1>
          {coinData.links.slice(0, 4).map((link) => (
            <a href={link.url} className="text-blue-500 hover:underline">
              {link.url}
            </a>
          ))}
        </div>
      </div>

      {/* Graph  */}
      <div className="flex p-4 flex-grow mt-5 ">
        <DetailedGraph />
      </div>
    </div>
  );
}

export default CoinInformation;
