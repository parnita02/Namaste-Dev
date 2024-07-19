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
    <div className=" pb-1 border border-gray-300 shadow-lg w-[220px] h-[280px] flex flex-col rounded-2xl hover:scale-105 ">
      <img
        className="p-0.1 w-[99%] h-[50%] mx-auto rounded-2xl"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="px-2 py-2 ">
        <h4 className="font-bold truncate ;	">{name}</h4>
        <h4 className="font-light text-sm ">
          {cuisines[0] + ", " + cuisines[1]}
        </h4>
        <h4 className="font-light text-sm ">{costForTwo}</h4>
        <h5 className="font-light text-sm ">{avgRating}</h5>
        <h5 className="font-light text-sm ">{areaName}</h5>
        <h4 className="font-light text-sm ">{slaString}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
