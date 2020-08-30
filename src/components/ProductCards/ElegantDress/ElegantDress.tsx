import React from "react";
import "./ElegantDress.scss";
import Image from "../../../assets/images/elegant-dress.png";
import HeartIcon from "../../../assets/icons/heart_icn.png";

const ElegantDress = () => {
  return (
    <div className="elegant-dress">
      <img src={Image} alt="Elegant Dress" />
      <div className="heart-icon">
        <img src={HeartIcon} alt="Heart Icon" />
      </div>
      <div className="content">
        <p className="title">Elegant dress Dries van Noten</p>
        <p className="sub-title">
          The fedora hat is reimagined for Pre-Fall 2020 with a maxi embroidered
          label de...
        </p>
        <div className="row">
          <p className="price">$54</p>
          <button className="button-main">Show Now</button>
        </div>
      </div>
    </div>
  );
};

export default ElegantDress;
