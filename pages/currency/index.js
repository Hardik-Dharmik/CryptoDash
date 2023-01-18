import { useEffect, useState } from "react";
import Head from "next/head";
import { coins } from "../../saved_responses/listOfCoins";
import SearchResult from "../../components/SearchResult";
import Sidebar from "../../components/Sidebar";
import SearchIcon from "@mui/icons-material/Search";

export default function Currency() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

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
      .then((response) => {
        setData(response.data.coins);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Head>
        <title>CryptoDash</title>
      </Head>
      <div className="flex flex-col sm:flex-row bg-gray-100">
        <Sidebar />
        <div className="flex flex-col space-y-4  items-center flex-grow">
          <div className="flex items-center flex-col justify-center w-full max-h-16 flex-grow my-4 space-y-5">
            <h1 className="text-xl font-bold">
              Search your Favourite Crypto here !!
            </h1>
            <div className="flex items-center bg-gray-200 rounded-lg px-2 py-1 w-1/2 mt-3">
              <SearchIcon className="text-gray-400" />
              <input
                type="text"
                className="bg-transparent text-base focus:outline-none ml-1 flex-grow"
                placeholder="Search Crpyto"
                value={input}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="w-full flex flex-col items-center space-y-4">
            {data
              .filter((item) => {
                const searchTerm = input.toLowerCase();
                const name = item.name.toLowerCase();

                if (searchTerm == "") return true;

                return (
                  searchTerm &&
                  name.startsWith(searchTerm) &&
                  name !== searchTerm
                );
              })
              .map((coin) => (
                <SearchResult
                  key={coin.uuid}
                  coinId={coin.uuid}
                  iconUrl={coin.iconUrl}
                  name={coin.name}
                  symbol={coin.symbol}
                  price={parseFloat(coin.price).toFixed(3)}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
