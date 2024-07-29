import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/Constants";
import { addItems } from "../utils/cartSlice";
const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className=" flex justify-between m-2 p-2 rounded-tl-2xl rounded-bl-2xl shadow-lg "
        >
          <div className="w-9/12 p-3">
            <div className="grid mb-2 font-sans font-semibold">
              <span>{item.card.info.name}</span>
              <span className="text-sm">₹ {item.card.info.price / 100}</span>
            </div>
            <div className="text-xs text-gray-600">
              <p>{item.card.info.description}</p>
            </div>
          </div>
          <div className="w-3/12 py-5 xl:px-14  flex justify-center ">
            {item.card.info.imageId && (
              <img
                className="w-full  rounded-xl h-28"
                src={CDN_URL + item.card.info.imageId}
                alt={item.card.info.name}
              />
            )}
            <div className="absolute">
              <button
                className="px-3 py-0.5 text-green-600 font-bold bg-white rounded-lg shadow-lg hover:scale-105 "
                onClick={() => {
                  // dispath and action
                  dispatch(addItems("pizza"));
                }}
              >
                Add+
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
