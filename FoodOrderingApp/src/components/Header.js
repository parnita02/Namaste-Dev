import cartlogo from "../cartlogo.png";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [navBtn, setnavBtn] = useState("login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="NavItems-conatiner">
        <ul className="NavItems">
          <li>
            <a />
          </li>
          <li>About Us</li>
          <li>Conatct Us</li>
          <li>
            <img className="cartlogo" src={cartlogo} />
          </li>
          <li>
            <button
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
