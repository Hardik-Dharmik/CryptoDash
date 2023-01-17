import { useRouter } from "next/router";

function SearchResult({ coinId, iconUrl, name, symbol, price }) {
  const router = useRouter();
  const goToCoinInfo = () => {
    router.push(`/currency/${coinId}`);
  };
  return (
    <div
      className="flex w-4/6 border-2 hover:border-blue-400 rounded-lg p-2 items-center justify-between px-5 mt-1 cursor-pointer hover:bg-gray-200"
      onClick={goToCoinInfo}
    >
      <div className="flex items-center space-x-7">
        <img src={iconUrl} alt={name} className="h-9 w-9" />

        <p>
          {name} ({symbol})
        </p>
      </div>

      <p className="">{price}$</p>
    </div>
  );
}

export default SearchResult;
