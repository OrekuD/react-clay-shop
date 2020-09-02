import React from "react";
import "./Footer.scss";
import Logo from "../../assets/icons/logo.png";
import { socialLinks } from "../../data/links";
import { purple } from "../../constants/Colors";

const Footer = () => (
  <footer>
    <div className="logo">
      <img src={Logo} alt="Logo" />
      <p>Clay Shop</p>
    </div>
    <p className="text">Fashion is a popular</p>
    <p className="text">
      aesthetic expression at a particular time, place and in a specific
      context,
    </p>
    <p className="text" style={{ marginBottom: 20 }}>
      especially in clothing, footwear, lifestyle, accessories, makeup.
    </p>
    <div className="separator" />
    <div className="social-links">
      {socialLinks.map(({ Icon, id, size }, index) => (
        <div className="icon" key={index}>
          <Icon color={purple} size={size * 0.8} />
        </div>
      ))}
    </div>
    <div className="separator" />
    <p className="text" style={{ margin: 20 }}>
      &copy; Clay Shop. All rights reserved
    </p>
  </footer>
);

export default Footer;
