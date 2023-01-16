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
