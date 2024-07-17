import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import useRestaurantPage from "../utils/useRestaurantPage";

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

  return (
    <div className="restaurantMenuCard">
      <h2>{name}</h2>
      <div className="offer">
        <h3>{aggregatedDiscountInfoV2.header}</h3>
      </div>
      <div className="restaurantMenuCardDetail">
        <h4>
          <Link to="">{cuisines[0]}</Link>, <Link to=""> {cuisines[1]}</Link>
        </h4>
        <h4>{costForTwoMessage}</h4>
        <h4>{avgRating} star</h4>
        <h6>{totalRatingsString}</h6>
      </div>

      <h2>Menu</h2>
      <div className="menu">
        {cards.map((val) =>
          val?.card?.card?.itemCards?.map((item) => (
            <div className="menucard">
              <h3>{item?.card?.info?.name}</h3>
              <h4>{item?.card?.info?.description}</h4>
              <h4>Rs. {item?.card?.info?.price / 100}</h4>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default RestaurantPage;
