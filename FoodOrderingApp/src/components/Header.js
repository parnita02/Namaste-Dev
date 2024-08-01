import { Link } from "react-router-dom";
import cartlogo from "../cartlogo.png";
import { LOGO_URL } from "../utils/Constants";
import { useState, useContext } from "react";
import UserContext from "../utils/UserContext";
import useOnlineStatus from "../utils/UseOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [navBtn, setnavBtn] = useState("login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const [isNavOpen, setIsNavOpen] = useState(false);

  //subscribing to the store using a selector, which is a hook of react
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="flex justify-between shadow-lg mb-3 bg-gradient-to-r from-white to-yellow-100 w-screen p-1">
      <div className="logo-container">
        <img className="w-20 hover:scale-105" src={LOGO_URL} />
      </div>

      <div className="flex items-center">
        {/* Toggle Button for Mobile */}
        <button className="block sm:hidden mx-2" onClick={handleNavToggle}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Navbar */}
        <ul
          className={`${
            isNavOpen ? "block" : "hidden"
          } flex-col sm:flex-row sm:flex pl-10 py-3 rounded-xl m-1 items-center sm:gap-x-4 absolute sm:static right-0 top-12 bg-white sm:bg-transparent sm:w-auto w-40 shadow-md sm:shadow-none`}
        >
          <li className="hover:bg-yellow-200 px-1 py-0.5 rounded-lg hover:scale-105 sm:px-3 sm:py-1">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:bg-yellow-200 px-1 py-0.5 rounded-lg hover:scale-105 sm:px-3 sm:py-1">
            <Link to="/about">AboutUs</Link>
          </li>
          <li className="hover:bg-yellow-200 px-1 py-0.5 rounded-lg hover:scale-105 sm:px-3 sm:py-1">
            <Link to="/contact">ContactUs</Link>
          </li>
          <li className="hover:scale-125">
            <Link to="/cart" className="flex justify-center">
              <img className="w-7 " src={cartlogo} />
              {cartItems.length > 0 && (
                <div className="flex items-center justify-center absolute ml-5">
                  {" "}
                  <div className="text-xs rounded-full bg-red-500 text-white px-1">
                    {cartItems.length}
                  </div>
                </div>
              )}
            </Link>
          </li>
          <li className="px-3 py-2 flex ">
            <button
              className="bg-yellow-500 px-3 py-1 shadow-gray-700 shadow-md rounded-md text-white hover:bg-yellow-600 hover:scale-105"
              onClick={() =>
                navBtn == "login" ? setnavBtn("logout") : setnavBtn("login")
              }
            >
              {navBtn}
            </button>

            <span className="absolute [text-shadow:1px_1px_20px_var(--tw-shadow-color)] shadow-white ml-12 mt-4 ">
              {onlineStatus ? "🟢" : "🔴"}
            </span>
          </li>
          <li className="font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
