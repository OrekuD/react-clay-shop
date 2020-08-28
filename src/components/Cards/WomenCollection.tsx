import React from "react";
import "./cards.scss";
import Image from "../../assets/images/image-1.png";

const WomenCollection = () => (
  <div className="women-collection">
    <img src={Image} alt="Lady" />
    <div className="content">
      <p className="card-title">Women</p>
      <p className="card-title">Collection</p>
      <p className="sub-title">Spring 2020</p>
      <button className="card-button">Popular</button>
    </div>
  </div>
);
export default WomenCollection;
