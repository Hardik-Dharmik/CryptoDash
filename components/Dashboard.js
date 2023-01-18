import { useEffect, useState } from "react";
import Currency from "./Currency";
import { top4 } from "../saved_responses/top4";
import Table from "./Table1";
import Graph from "./Graph";

const cardbgColor = ["#b0b0b0", "#1276a8", "#335281", "#f7931b"];
cardbgColor.reverse();

const coinIds = [
  "Qwsogvtv82FCd",
  "razxDUgYGNAdQ",
  "HIVsRcGKkPFtW",
  "aKzUVe4Hh_CON",
];

// var coinData = [];

function Dashboard() {
  const [coinData, setCoinData] = useState(null);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "65744594aemsh608ea4b0ebc9750p1f84c5jsn5b64bc01da4e",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };

    fetch(
      "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0",
      options
    )
      .then((response) => response.json())
      // .then((response) => console.log(response))
      .then((response) => {
        // console.log(response);
        setCoinData(response);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-4">
      <div className="pt-2">
        <h1 className="text-xl ml-2">Top Cryptocurrencies</h1>
        <div className="flex flex-wrap items-center justify-between my-4  ">
          {coinData?.data.coins.slice(0, 4).map((coin, index) => (
            <Currency
              key={coin.uuid}
              name={coin.name}
              change={coin.change}
              price={parseFloat(coin.price).toFixed(3)}
              iconUrl={coin.iconUrl}
              bgColor={cardbgColor[index]}
              coinId={coin.uuid}
            />
          ))}
        </div>
      </div>

      <div className="flex mt-5 flex-col sm:flex-row">
        <Table coinData={coinData} />
        <Graph />
      </div>
    </div>
  );
}

export default Dashboard;
