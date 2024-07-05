import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  //Local state variable-Super Powerful variable for that we use hooks
  const [newResList, setNewResList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=12.9715987&lng=77.5945627"
    );
    const json = await data.json();
    console.log(json);
    setNewResList(
      json.data.success.cards[4].gridWidget.gridElements.infoWithStyle
        .restaurants
    );
  };

  if (newResList.length == 0) {
    return (
      // <div className="loading">
      //   <img src="https://loading.io/assets/mod/spinner/spinner/lg.gif" />
      // </div>
      <Shimmer />
    );
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setNewResList(
              newResList.filter((res) => res.info.avgRating >= 4.5)
            );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {newResList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resdata={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
