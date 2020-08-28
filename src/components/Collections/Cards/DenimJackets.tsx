import React from "react";
import "./cards.scss";
import Image from "../../../assets/images/image-3.png";

const DenimJackets = () => (
  <div className="denim-jacket">
    <div className="content">
      <button className="card-button">New</button>
      <p className="card-title">Denim Jackets</p>
    </div>
    <img src={Image} alt="Model" />
  </div>
);
export default DenimJackets;
