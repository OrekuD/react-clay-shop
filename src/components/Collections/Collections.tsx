import React from "react";
import "./Collections.scss";
import { WomenCollection, Bestsellers, Dresses, DenimJackets } from "./Cards";

const Collections = () => (
  <div className="wrapper">
    <div className="collections">
      <WomenCollection />
      <div className="right-container">
        <div className="top-section">
          <Bestsellers />
          <Dresses />
        </div>
        <DenimJackets />
      </div>
    </div>
  </div>
);
export default Collections;
