import cartlogo from "../cartlogo.png";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="NavItems-conatiner">
        <ul className="NavItems">
          <li>Home</li>
          <li>About Us</li>
          <li>Conatct Us</li>
          <li>
            <img className="cartlogo" src={cartlogo} />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
