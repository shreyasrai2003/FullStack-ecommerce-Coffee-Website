import React, { useState, useContext } from "react";
import "./Navbar.css";
import brand_logo from "../Assets/brand_logo.png";
import cart from "../Assets/cart.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartItems } = useContext(ShopContext);
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={brand_logo} alt="brand-logo" />
        <p>Third Wave</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("home");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Home
          </Link>
          {menu === "home" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/shop">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("about");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/about">
            About
          </Link>
          {menu === "about" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem("auth-token") ? (
          <button className="btn btn-danger"
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
          >
            Logout
          </button>
        ) : (
          <Link style={{ textDecoration: "none" }} to="/login">
            <button className="btn btn-danger">Login</button>
          </Link>
        )}

        <Link style={{ textDecoration: "none" }} to="/cart">
          <img src={cart} alt="cart-icon" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
