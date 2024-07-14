import Shimmer from "./Shimmer.js";
import { useEffect, useState } from "react";

const RestaurantPage = () => {
  const [resMenuInfo, setresMenuInfo] = useState(null);
  useEffect(() => {
    restaurantMenuFetch();
  }, []);

  const restaurantMenuFetch = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=24.5499426&lng=81.3259175&restaurantId=118068&submitAction=ENTER"
    );
    const jsondata = await data.json();
    console.log(jsondata);
    setresMenuInfo(jsondata.data);
  };

  // destructuring
  const { name, cuisines, costForTwoMessage } =
    resMenuInfo?.cards[2]?.card?.card?.info;

  return resMenuInfo == null ? (
    <Shimmer />
  ) : (
    <div>
      <h2>{name}</h2>
      <h3>{cuisines}</h3>
    </div>
  );
};
export default RestaurantPage;
