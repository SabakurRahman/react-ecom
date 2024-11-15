import React from "react";

import { NavLink } from "react-router-dom";

import "./Navbar.css";
import { FiShoppingCart } from "react-icons/fi";

import { CgClose, CgMenu } from "react-icons/cg";

export const Navbar = () => {
  return (
    <nav className="nav">
      <div className="navbar">
        <ul className="navbar-lists">
          <li>
            <NavLink to="/" className="navbar-link home-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="navbar-link ">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/product" className="navbar-link ">
              Product
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="navbar-link ">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="navbar-link cart-trolley--link">
              <FiShoppingCart className="cart-trolley" />
              <span className="cart-total--item">10</span>
            </NavLink>
          </li>
        </ul>
        <div className="mobile-navbar-btn">
          <CgMenu name="menu-outline" className="mobile-nav-icon" />
          <CgClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
          />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
