import React from "react";
import "./WhiteDress.scss";
import Image from "../../../assets/images/white-dress.png";

const WhiteDress = () => (
  <div className="white-dress">
    <img src={Image} alt="White Dress" />
    <div className="badge">
      <p>-10%</p>
    </div>
    <div className="content">
      <p className="card-title">Women's</p>
      <p className="card-title">white jacket</p>

      <div className="row">
        <p className="card-title">$120</p>
        <button className="button-main">Show Now</button>
      </div>
    </div>
  </div>
);

export default WhiteDress;
