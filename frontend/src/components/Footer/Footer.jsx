import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import brand_logo from "../Assets/brand_logo.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pinterst_icon from "../Assets/pinterest_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={brand_logo} alt="" />
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/about">
            About
          </Link>
        </li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-container">
          <img src={pinterst_icon} alt="" />
        </div>
        <div className="footer-container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024- All Right Resevered.</p>
      </div>
    </div>
  );
};

export default Footer;
