import { useState, useEffect } from "react";

function useTimelyData(timePeriod, coinId) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "65744594aemsh608ea4b0ebc9750p1f84c5jsn5b64bc01da4e",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };

    fetch(
      `https://coinranking1.p.rapidapi.com/coin/${coinId}/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=${timePeriod}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
  }, [timePeriod]);

  return [data];
}

export default useTimelyData;
