import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  // const [infoBtn, setInfoBtn] = useState("🔽");
  const handleClick = () => {
    // infoBtn == "🔼" ? setInfoBtn("🔽") : setInfoBtn("🔼");
    setShowIndex();
  };

  return (
    <div>
      <div className="w-[70%]  p-4 bg-gray-50 rounded-lg  mx-auto my-3 shadow-xl">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {showItems && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
