import React from "react";
import ReactDOM from "react-dom/client";

// Layout
// -> Header
//     -> localStorage
//     -> navItems
// -> Main/bodyParser
//     -> searchBar
//     -> cardContainer
//     -> Restaurant card
// -> footer
//     ->copyright

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="logo.png" />
      </div>
      <div className="NavItems">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Conatct Us</li>
          <li>
            <img src="cartlogo.png" />
          </li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
