import React from "react";
import "./Banner.scss";
import BannerImg from "../../assets/images/op.png";

const Banner = () => {
  return (
    <div className="banner">
      <div className="line" style={{ top: 100, height: 260 }} />
      <div className="line" style={{ right: 200 }} />
      <div className="line" style={{ top: 200, height: 140, right: 300 }} />
      <div className="line" style={{ right: 600, height: 420 }} />
      <div className="line" style={{ right: 700, height: 80 }} />
      <div className="content">
        <p className="title">Admire Stylish</p>
        <p className="title">Dresses & Looks</p>
        <p className="subtitle">
          If we wanted to build a human-level tool to offer automated outfit
          advice, we needed to understand people’s fashion taste.
        </p>
        <button>Show More</button>
      </div>
      <div className="image-container">
        <img src={BannerImg} alt="Model" />
      </div>
    </div>
  );
};

export default Banner;
