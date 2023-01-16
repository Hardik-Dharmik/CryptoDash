import Currency from "./Currency";
import { top4 } from "../saved_responses/top4";
import Table from "./Table1";
import Graph from "./Graph";

const cardbgColor = ["#b0b0b0", "#1276a8", "#335281", "#f7931b"];
cardbgColor.reverse();
function Dashboard() {
  return (
    <div className="p-4">
      <div className="pt-2">
        <h1 className="text-xl">Top Cryptocurrencies</h1>
        <div className="flex flex-wrap items-center justify-between my-4  ">
          {top4.coins.map((coin, index) => (
            <Currency
              key={coin.uuid}
              name={coin.name}
              change={coin.change}
              price={coin.price}
              iconUrl={coin.iconUrl}
              bgColor={cardbgColor[index]}
            />
          ))}
        </div>
      </div>

      <div className="flex mt-5 flex-col sm:flex-row">
        <Table />
        <Graph />
      </div>
    </div>
  );
}

export default Dashboard;
