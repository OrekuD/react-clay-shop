import React from "react";
import "./RedDress.scss";
import Image from "../../../assets/images/red-dress.jpg";

const RedDress = () => (
  <div className="red-dress">
    <div className="content">
      <div className="badge">
        <p>Popular</p>
      </div>
      <div className="name">
        <p className="card-title">Red dress</p>
        <p className="card-title">Valentino</p>
      </div>
      <p className="card-title">$1610</p>
      <button className="button-main">Shop Now</button>
    </div>
    <img src={Image} alt="Red dress" />
  </div>
);

export default RedDress;
