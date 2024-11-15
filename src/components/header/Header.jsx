import React from "react";
import { NavLink } from "react-router-dom";
import "../../../public/images/logo.png";
import "./Header.css";
import Navbar from "./Navbar";

export const Header = () => {
  return (
    <div className="main-header">
      <NavLink to="/">
        <img src="./images/logo1.png" alt="my logo img" />
      </NavLink>
      <Navbar /> {/* This is navbar componets  inside heder componet */}
    </div>
  );
};
export default Header;
