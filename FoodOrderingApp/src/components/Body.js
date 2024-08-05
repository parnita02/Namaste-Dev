import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  //Local state variable-Super Powerful variable for that we use hooks
  const [newResList, setNewResList] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState(newResList);

  const [searchTxt, setsearchTxt] = useState("");
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  // console.log("body render", newResList);

  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=24.5362477&lng=81.30369460000001"
    );
    const json = await data.json();
    // console.log(json);

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
      <div className=" m-auto w-[90%] gap-x-10 flex-wrap gap-y-4 mt-6 mb-8">
        <div className="flex gap-x-1 mb-5">
          <input
            className="rounded-md py-0.5 px-3 w-11/12 border border-gray-400"
            type="text"
            placeholder="search here"
            value={searchTxt}
            onChange={(e) => {
              setsearchTxt(e.target.value);
            }}
          />
          <button
            className="px-2 py-0.5 shadow-gray-500 shadow-md rounded-md bg-[#b03f3f] text-white  hover:bg-red-800 hover:scale-105"
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

        <div className="flex justify-between items-center mx-5 mb-4">
          <p className="ml-2 font-semibold ">Welcome to your food villa!!</p>

          <div className="flex flex-col text-xs">
            <span>username : </span>
            <input
              className="border border-black p-1"
              type="text"
              value={loggedInUser}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        </div>
        <div>
          <button
            className="font-semibold mx-10 px-3 py-2 text-sm shadow-gray-500 shadow-md rounded-md bg-[#c54141] text-white hover:bg-red-800 hover:scale-105"
            onClick={() => {
              setfilteredRestaurant(
                newResList.filter((res) => res.info.avgRating >= 4.3)
              );
            }}
          >
            Top Rated
          </button>
        </div>
      </div>
      <div className="grid gap-x-14 gap-y-5 grid-cols-[repeat(auto-fit,minmax(220px,100px))] justify-center w-[85%] mx-auto">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted resdata={restaurant} />
            ) : (
              <RestaurantCard resdata={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
