import React from "react";
import logo from "./assets/logo.png";

const Header = () => {
  return (
    <nav className="navbar bg-black mb-4 p-3">
      <div className="container">
        <a href="/" className="navbar-brand">
          <div className="d-flex">
            <img src={logo} alt="logo" className="mr-2" />
            <div>Project Management S/M</div>
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Header;
