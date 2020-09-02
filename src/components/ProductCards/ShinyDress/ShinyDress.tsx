import React from "react";
import "./ShinyDress.scss";
import Image from "../../../assets/images/shiny-dress.jpg";

const ShinyDress = () => (
  <div className="shiny-dress">
    <img src={Image} alt="Shiny dress" />
    <div className="content">
      <div className="badge">
        <p>New</p>
      </div>
      <div className="name">
        <p className="card-title">Shiny dress</p>
        <p className="card-title">Givenchy</p>
      </div>
      <p className="card-title">$640</p>
      <button className="button-main">Shop Now</button>
    </div>
  </div>
);

export default ShinyDress;
