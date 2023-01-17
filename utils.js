export const getTimelyData = (timePeriod = "24h") => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "65744594aemsh608ea4b0ebc9750p1f84c5jsn5b64bc01da4e",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };

  fetch(
    `https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`,
    options
  ).then((response) => {
    response.json();
    // resp = response;
    return response;
  });
  //   .then((response) => console.log(response))
  //   .catch((err) => console.error(err));

  // return { resp };
};

export const prepareData = (data) => {
  let labels = [];
  let values = [];

  data.map((object) => {
    let date = timestampToDate(object.timestamp);
    labels.push(date);
    values.push(object.price);
  });

  labels.reverse();
  values.reverse();

  return { labels, values };
};

const timestampToDate = (timestamp) => {
  const unixTime = timestamp * 1000;
  const format = {
    day: "numeric",
    month: "2-digit",
    year: "numeric",
  };

  return new Date(unixTime).toLocaleString("en-US", format);
};

export const sortDataByPrice = (data) => {
  const sortedData = data;

  sortedData.sort((a, b) => {
    if (parseInt(a.price) > parseInt(b.price)) return -1;
    else return 1;
  });

  return sortedData;
};

export const sortDataByName = (data) => {
  const sortedData = data;

  sortedData.sort((a, b) => {
    if (a.name > b.name) return -1;
    else return 1;
  });

  return sortedData;
};
