import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resdata } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    costForTwo,
    avgRating,
    areaName,
    slaString,
  } = { ...resdata.info, ...resdata.info.sla };
  return (
    <div className="res-card">
      <img className="foodImage" src={CDN_URL + cloudinaryImageId} />
      <div className="card-data">
        <h3>{name}</h3>
        <h4>{cuisines[0] + ", " + cuisines[1]}</h4>
        <h4>{costForTwo}</h4>
        <h5>{avgRating}</h5>
        <h5>{areaName}</h5>
        <h4>{slaString}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
