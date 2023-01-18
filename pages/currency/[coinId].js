import { useEffect, useState } from "react";
import Head from "next/head";
import Sidebar from "../../components/Sidebar";
import { useRouter } from "next/router";
import CoinInformation from "../../components/CoinInformation";
import { coinInfo } from "../../saved_responses/coinInfo";

function CoinInfo() {
  const router = useRouter();
  const coinId = router.query.coinId;
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
      `https://coinranking1.p.rapidapi.com/coin/${coinId}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`,
      options
    )
      .then((response) => response.json())
      .then((response) => setCoinData(response))
      .catch((err) => console.error(err));
  }, []);

  if (!coinData) return;

  return (
    <>
      <Head>
        <title>CryptoDash</title>
      </Head>
      <div className="flex flex-col sm:flex-row bg-gray-100">
        <Sidebar />
        <CoinInformation coinId={coinId} coinData={coinData?.data?.coin} />
      </div>
    </>
  );
}

export default CoinInfo;
