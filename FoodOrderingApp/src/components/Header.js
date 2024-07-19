import { Link } from "react-router-dom";
import cartlogo from "../cartlogo.png";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [navBtn, setnavBtn] = useState("login");

  return (
    <div className="flex justify-between shadow-lg mb-5 bg-gradient-to-r from-white to-yellow-200 w-screen">
      <div className="logo-container">
        <img className="w-20 m-1" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex px-1 m-3 gap-4 items-center">
          <li className="hover:bg-yellow-300 px-3 py-2 rounded-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:bg-yellow-300 px-3 py-2 rounded-lg">
            <Link to="/about">AboutUs</Link>
          </li>
          <li className="hover:bg-yellow-300 px-3 py-2 rounded-lg">
            <Link to="/contact">ConatctUs</Link>
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
