import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const [infobtn, setInfobtn] = useState("🔽");
  const handleClick = () => {
    infobtn == "🔽" ? setInfobtn("🔼") : setInfobtn("🔽");
  };

  return (
    <div>
      <div className="w-[70%]  p-4 bg-gray-50 rounded-lg  mx-auto my-3 shadow-xl">
        <div
          className="flex justify-between"
          // onClick={() => {
          //   handleClick;
          // }}
        >
          <span className="font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <div className="px-1 w-3/12">
            <button className="w-full flex justify-end" onClick={handleClick}>
              {infobtn}
            </button>
          </div>
        </div>
        {infobtn == "🔼" && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
