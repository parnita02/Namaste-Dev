import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  //Local state variable-Super Powerful variable for that we use hooks
  const [newResList, setNewResList] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState(newResList);

  const [searchTxt, setsearchTxt] = useState("");
  console.log("body render");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=24.5385627&lng=81.326189"
    );
    const json = await data.json();
    console.log(json);

    setNewResList(
      json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setfilteredRestaurant(
      json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return newResList.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-btn"
            placeholder="search here"
            value={searchTxt}
            onChange={(e) => {
              setsearchTxt(e.target.value);
            }}
          />
          <button
            onClick={() => {
              setfilteredRestaurant(
                newResList.filter((res) =>
                  res.info.name.toLowerCase().includes(searchTxt.toLowerCase())
                )
              );
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            setfilteredRestaurant(
              newResList.filter((res) => res.info.avgRating >= 4.3)
            );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resdata={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
