import Image from "next/image";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import ArticleIcon from "@mui/icons-material/Article";
import SideBarOption from "./SideBarOption";

function Sidebar() {
  return (
    <div>
      <div className="hidden sm:flex flex-col min-h-screen bg-[#3a4352] max-w-[300px] md:min-w-[170px] h-full">
        <div className="flex items-center justify-evenly py-2 bg-[#2d3645]">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png"
            alt="Logo"
            height="25"
            width="25"
          />

          <h2 className="hidden md:inline-flex text-xl -ml-2 text-white">
            CryptoDash
          </h2>
        </div>

        <div className="flex flex-col text-sm items-start  space-y-7 p-3 pt-5 !text-white">
          <SideBarOption Icon={DashboardIcon} option="Dashboard" />
          <SideBarOption Icon={CurrencyBitcoinIcon} option="Currencies" />
          <SideBarOption Icon={ArticleIcon} option="News" />
        </div>
      </div>

      <div className="flex sm:hidden justify-evenly bg-red-400 p-2">
        <a href="">Dashboard</a>
        <a href="">Currencies</a>
        <a href="">News</a>
      </div>
    </div>
  );
}

export default Sidebar;
