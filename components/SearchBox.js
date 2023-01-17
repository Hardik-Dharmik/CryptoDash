import SearchIcon from "@mui/icons-material/Search";

function SearchBox() {
  return (
    <div className="flex items-center flex-col justify-center w-full max-h-16 flex-grow my-4">
      <h1>SearchBox</h1>
      <div className="flex items-center bg-gray-200 rounded-lg px-2 py-1 w-1/2 mt-3">
        <SearchIcon className="text-gray-400" />
        <input
          type="text"
          className="bg-transparent text-base focus:outline-none ml-1"
          placeholder="Search Crpyto "
        />
      </div>
    </div>
  );
}

export default SearchBox;
