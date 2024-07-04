import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData"
import { useEffect, useState } from "react";
 
const Body = () => {

  //Local state variable-Super Powerful variable for that we use hooks
  const [newResList, setNewResList] = useState(resList)

  useEffect(() => {console.log("UseEffect");}, [])
  

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => {
          setNewResList(newResList.filter((res) => (res.info.avgRating >= 4.5)))

        
        } }>Top Rated Restaurants</button>
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