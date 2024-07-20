import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import useRestaurantPage from "../utils/useRestaurantPage";
import RestaurantCategory from "./REstaurantCategory.js";

const RestaurantPage = () => {
  const { resid } = useParams();
  const resMenuInfo = useRestaurantPage(resid);

  if (resMenuInfo == null) {
    return <Shimmer />;
  }
  // destructuring
  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    totalRatingsString,
    aggregatedDiscountInfoV2,
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
    <div className="restaurantMenuCard">
      <h2>{name}</h2>
      <div className="offer">
        <h3>{aggregatedDiscountInfoV2.header}</h3>
      </div>
      <div className="restaurantMenuCardDetail">
        <h4>
          <Link className="text-red-600 underline font-bold" to="">
            {cuisines.join(", ")}
          </Link>
        </h4>
        <h4>{costForTwoMessage}</h4>
        <h4>{avgRating} star</h4>
        <h6>{totalRatingsString}</h6>
      </div>

      <h2>Menu</h2>
      <div className="accordions">
        {categories.map((category) => (
          <RestaurantCategory data={category?.card?.card} />
        ))}
      </div>
    </div>
  );
};
export default RestaurantPage;
