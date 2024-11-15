import React from "react";

import { NavLink } from "react-router-dom";

import "./Navabar.css";
import { FiShoppingCart } from "react-icons/fi";

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
      </div>
    </nav>
  );
};
export default Navbar;
