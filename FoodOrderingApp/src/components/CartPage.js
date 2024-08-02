import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart, removeItems } from "../utils/CartSlice";

const CartPage = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  console.log(cartItems);

  return (
    <div>
      <div className="w-[60%] m-auto my-7">
        <div className="text-center">
          <span className="font-bold text-gray-800 text-2xl px-5 py-1 rounded-lg bg-gradient-to-r from-[#d0d03d] to-[#f3f2e39c] ">
            Cart
          </span>
          <br />

          {cartItems.length == 0 && (
            <p className="font-bold mt-14">
              Cart is Empty!! No item yet added to cart
            </p>
          )}

          {cartItems.length > 0 && (
            <button
              className="text-xl text-green-600 shadow-gray-500 shadow-sm hover:scale-105 hover:shadow-lg hover:shadow-gray-400 px-3.5 rounded-full my-7"
              onClick={() => {
                // dispath and action
                dispatch(clearCart());
              }}
            >
              Clear Cart
            </button>
          )}
        </div>

        <ItemList items={cartItems} />
        <div className="flex justify-end">
          {cartItems.length > 0 && (
            <button
              className=" text-l text-green-600 py-0.5 px-3.5 rounded-full  shadow-gray-500 shadow-sm hover:scale-105 hover:shadow-lg hover:shadow-gray-400"
              onClick={() => dispatch(removeItems(cartItems))}
            >
              Remove
            </button>
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="w-full h-[0.1rem] bg-black my-8 ml-2"></div>
        )}
        {cartItems.length > 0 && (
          <div className="flex justify-between">
            <h1 className="font-semibold text-lg ml-8">TOTAL PRICE TO PAY</h1>
            <span className="mr-8 font-bold text-lg">
              &#8377;
              {cartItems.reduce((accumulator, current) => {
                console.log(accumulator);

                return accumulator + current.card.info.price / 100;
              }, 0)}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
export default CartPage;
