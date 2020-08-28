import React from "react";
import "./cards.scss";
import Image from "../../../assets/images/image-2.png";

const Dresses = () => (
  <div className="dresses">
    <div className="content">
      <button className="card-button">New</button>
      <p className="card-title">Dresses</p>
    </div>
    <img src={Image} alt="Model" />
  </div>
);

export default Dresses;
