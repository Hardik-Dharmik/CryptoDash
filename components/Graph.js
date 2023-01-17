import { history } from "../saved_responses/history";
import { prepareData } from "../utils";
import LineGraph from "./LineGraph";

function Graph() {
  const { labels, values } = prepareData(history.data.history);
  const data = {
    labels,
    datasets: [
      {
        label: "In USD",
        data: values,
        borderColor: "rgba(142, 200, 188, 1)",
        // backgroundColor: "rgba(142, 200, 188, 1)",
        pointColor: "rgba(151,187,205,1)",
        // fill: true,
        radius: 2,
      },
    ],
  };
  return (
    <div className="shadow-md sm:h-1/2 sm:w-1/2 bg-white mx-auto h-full w-full">
      <LineGraph data={data} />
    </div>
  );
}

export default Graph;
