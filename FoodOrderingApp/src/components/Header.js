import { Link } from "react-router-dom";
import cartlogo from "../cartlogo.png";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [navBtn, setnavBtn] = useState("login");

  return (
    <div className="flex justify-between shadow-lg mb-3 bg-gradient-to-r from-white to-yellow-100 w-screen p-1">
      <div className="logo-container">
        <img className="w-20 hover:scale-105" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex px-1 m-1 gap-x-2.5 items-center sm:gap-x-4">
          <li className="hover:bg-yellow-200 px-1 py-0.5 rounded-lg hover:scale-105 sm:px-3 sm:py-1">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:bg-yellow-200 px-1 py-0.5 rounded-lg hover:scale-105 sm:px-3 sm:py-1">
            <Link to="/about">AboutUs</Link>
          </li>
          <li className="hover:bg-yellow-200 px-1 py-0.5 rounded-lg hover:scale-105 sm:px-3 sm:py-1">
            <Link to="/contact">ContactUs</Link>
          </li>
          <li>
            <img className="w-7 hover:w-8" src={cartlogo} />
          </li>
          <li className="px-3 py-2">
            <button
              className="bg-yellow-500 px-3 py-1 shadow-gray-700 shadow-md rounded-md text-white hover:bg-yellow-600 hover:scale-105"
              onClick={() =>
                navBtn == "login" ? setnavBtn("logout") : setnavBtn("login")
              }
            >
              {navBtn}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
