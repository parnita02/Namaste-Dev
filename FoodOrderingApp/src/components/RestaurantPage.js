import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import useRestaurantPage from "../utils/useRestaurantPage";
import RestaurantCategory from "./RestaurantCategory.js";
import { useState } from "react";
import { RATING_LOGO } from "../utils/constants";

const RestaurantPage = () => {
  const { resid } = useParams();
  const resMenuInfo = useRestaurantPage(resid);
  const [showIndex, setShowIndex] = useState(0);

  if (resMenuInfo == null) {
    return <Shimmer />;
  }

  console.log(resMenuInfo);
  // destructuring
  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    areaName,
    slaString,
    totalRatingsString,
    aggregatedDiscountInfo,
  } = {
    ...resMenuInfo?.cards[2]?.card?.card?.info,
    ...resMenuInfo?.cards[2]?.card?.card?.info?.sla,
  };

  const { cards } = {
    ...resMenuInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR,
  };
  // console.log(cards);

  const categories = cards.filter(
    (c) =>
      c.card?.card?.["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  // console.log(categories);

  return (
    <div>
      <h2 className="font-bold text-3xl my-10 mx-10 text-center">{name}</h2>
      <div className="flex justify-center gap-x-5">
        {aggregatedDiscountInfo.visible &&
          aggregatedDiscountInfo.descriptionList.map((offer) => (
            <div
              key={offer.meta}
              className=" w-[30%] p-2 rounded-md mb-6 text-xs bg-gradient-to-r from-[rgba(210,210,109,50)] to-[rgba(255,0,0,0)] "
            >
              <h3>{offer.meta}</h3>
            </div>
          ))}
      </div>
      <div className="flex flex-col p-2 w-1/2 h-1/5 my-4 mx-auto border border-gray-300 rounded-lg gap-1 shadow-[1px_1px_30px_rgb(181,181,181)] text-s">
        <div className="flex gap-2 items-center">
          <h4 className="text-red-500 text-xs font-bold">
            <Link className="text-red-600 underline font-bold" to="">
              {cuisines.join(", ")}
            </Link>
          </h4>
          <h1 className="font-bold text-gray-400">.</h1>
          <h6 className="text-sm font-semibold"> {costForTwoMessage} </h6>
        </div>

        <div className="flex">
          <h4>{avgRating} </h4>
          <div className="mt-0.5 ml-1 flex">
            {Array.from({ length: 5 }, (_, index) => (
              <svg
                key={index}
                className={`w-6 h-6  ${
                  index < avgRating ? "text-yellow-400" : "text-gray-300"
                }`}
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.691h4.178c.969 0 1.371 1.24.588 1.81l-3.376 2.455a1 1 0 00-.364 1.118l1.286 3.967c.3.921-.755 1.688-1.54 1.118l-3.376-2.455a1 1 0 00-1.176 0l-3.376 2.455c-.785.57-1.84-.197-1.54-1.118l1.286-3.967a1 1 0 00-.364-1.118L2.366 9.395c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.691L9.049 2.927z" />
              </svg>
            ))}
          </div>
          <h6 className="ml-2 text-sm">({totalRatingsString})</h6>
        </div>
        <h5 className="text-xs font-semibold text-gray-600">{areaName}</h5>
        <h4 className="text-sm ">{slaString}</h4>
      </div>

      <h2 className="text-center font-bold text-2xl">Menu</h2>

      {categories.map((category, index) => (
        // controlled component
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index == showIndex ? true : false} //property for particular index data to be shown only
          setShowIndex={
            () =>
              showIndex == index ? setShowIndex(null) : setShowIndex(index) //altering my show index
          }
        />
      ))}
    </div>
  );
};

export default RestaurantPage;
