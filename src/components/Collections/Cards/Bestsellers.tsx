import React from "react";
import "./cards.scss";
import { purple } from "../../../constants/Colors";

const Bestsellers = () => (
  <div className="bestsellers">
    <p className="sub-title">24 items</p>
    <p className="card-title" style={{ color: purple }}>
      Bestsellers
    </p>
  </div>
);

export default Bestsellers;
