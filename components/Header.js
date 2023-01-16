import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import { Avatar } from "@mui/material";
function Header() {
  return (
    <div className="flex items-center justify-between bg-white">
      <div className="flex items-center">
        <MenuIcon
          className="mx-2 hover:bg-gray-200 rounded-full h-8 w-8 p-2 cursor-pointer "
          fontSize="small"
        />
        <div className="flex items-center bg-gray-300 rounded-lg text-sm">
          <SearchIcon fontSize="small" className=" text-gray-500 mx-2" />
          <input
            type="text"
            className="bg-transparent focus:outline-none p-1"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="py-2 flex items-center space-x-1 mr-3">
        <EmailIcon className="mx-2 text-gray-600 hover:bg-gray-200 rounded-full h-9 w-9 p-2 cursor-pointer" />

        <NotificationsIcon className="mx-2 text-gray-600 hover:bg-gray-200 rounded-full h-9 w-9 p-2 cursor-pointer" />

        <SettingsIcon className="mx-2 text-gray-600 hover:bg-gray-200 rounded-full h-9 w-9 p-2 cursor-pointer" />
      </div>
    </div>
  );
}

export default Header;
