import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

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
      "https://www.swiggy.com/mapi/homepage/getCards?lat=24.5362477&lng=81.30369460000001"
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

  const onlineStatus = useOnlineStatus();

  if (onlineStatus == false) {
    return (
      <div className="internet">
        <div className="internetresponse">
          <h1>Oops!!</h1>
          <h2>Looks Like you're Offline</h2>
          <h3>Check your Internet Connection </h3>
        </div>
      </div>
    );
  }

  return newResList.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex justify-center">
        <div className="my-5 ">
          <input
            className="m-1 py-0.5 px-3 border border-gray-900"
            type="text"
            placeholder="search here"
            value={searchTxt}
            onChange={(e) => {
              setsearchTxt(e.target.value);
            }}
          />
          <button
            className="px-2 py-1 shadow-gray-500 shadow-md rounded-md bg-red-600 text-white  hover:bg-red-800 hover:scale-105"
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
          className=" m-5 px-4 shadow-gray-500 shadow-md rounded-md bg-red-600 text-white font-bold hover:bg-red-800 hover:scale-105"
          onClick={() => {
            setfilteredRestaurant(
              newResList.filter((res) => res.info.avgRating >= 4.3)
            );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(220px,100px))] justify-center w-[80%] m-auto">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <RestaurantCard resdata={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
