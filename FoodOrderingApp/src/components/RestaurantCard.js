import { CDN_URL, RATING_LOGO } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resdata } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    costForTwo,
    avgRating,
    // areaName,
    slaString,
    header,
    subHeader,
  } = {
    ...resdata?.info,
    ...resdata?.info?.sla,
    ...resdata?.info?.aggregatedDiscountInfoV3,
  };
  // console.log(resdata);

  return (
    <div className="w-[230px] h-[250px] flex flex-col rounded-2xl hover:scale-105 hover:border-gray-400">
      <img
        className="p-0.1 w-[100%] h-[62%] rounded-2xl"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="absolute mt-[7.9rem] ml-1">
        <h1 className="text-white font-extrabold text-xl drop-shadow-xl">
          {header} {subHeader}
        </h1>
      </div>

      <div className="px-2 py-2 mx-1">
        <h4 className="font-bold truncate">{name}</h4>
        <h4 className="text-xs font-bold truncate text-gray-700">
          {cuisines?.join(", ")}
        </h4>
        <h5 className="text-sm mt-0.5">{costForTwo}</h5>
        <div className="flex items-center">
          <h1 className="font-light text-sm">{avgRating}</h1>
          <img className="w-6" src={RATING_LOGO} alt="Rating Logo" />
          <h1 className="mr-1 pb-1 text-gray-500 font-bold">.</h1>
          <h4 className="text-xs font-semibold text-black ">{slaString}</h4>
        </div>

        {/* <h5 className="text-xs font-semibold text-gray-600">{areaName}</h5> */}
      </div>
    </div>
  );
};

// higher order function
export const withPromotedLabel = (RestaurantCard) => {
  //returning a component which will have a promoted label at top of it
  return (props) => {
    return (
      <div className="absolute">
        <label className="absolute bg-blue-600  my-1 px-2 text-white rounded-tr-lg rounded-br-lg font-extralight">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
