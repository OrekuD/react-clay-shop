import React from "react";
import "./Header.scss";
import Logo from "../../assets/icons/logo.png";
import { socialLinks, menulinks, links } from "../../data/links";
import { purple } from "../../constants/Colors";

const Header = () => {
  return (
    <header className="header">
      <div className="top-section">
        <div className="logo">
          <img src={Logo} alt="Logo" />
          <p>Clay Shop</p>
        </div>
        <div className="social-links">
          {socialLinks.map(({ Icon, id, size }, index) => (
            <div className="icon" key={index}>
              <Icon color={purple} size={size} />
            </div>
          ))}
        </div>
        <div className="extra-links">
          {menulinks.map(({ image, id }, index) => (
            <img src={image} alt={id} key={index} />
          ))}
        </div>
      </div>
      <div className="bottom-section">
        {links.map(({ name, path }, index) => (
          <p className="link" key={index}>
            {name}
          </p>
        ))}
      </div>
    </header>
  );
};

export default Header;
