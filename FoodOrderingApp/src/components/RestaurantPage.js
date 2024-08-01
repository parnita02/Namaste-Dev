import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import useRestaurantPage from "../utils/useRestaurantPage";
import RestaurantCategory from "./RestaurantCategory.js";
import { useState } from "react";

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
    totalRatingsString,
    aggregatedDiscountInfo,
  } = {
    ...resMenuInfo?.cards[2]?.card?.card?.info,
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
        <h4 className="text-red-500 text-xs font-bold">
          <Link className="text-red-600 underline font-bold" to="">
            {cuisines.join(", ")}
          </Link>
        </h4>
        <h4>{costForTwoMessage}</h4>
        <h4>{avgRating} star</h4>
        <h6>{totalRatingsString}</h6>
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
