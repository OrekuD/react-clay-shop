import React from "react";
import "./Banner.scss";
import BannerImg from "../../assets/images/banner.png";

const Banner = () => {
  return (
    <div className="banner">
      <div className="content">
        <p className="title">Admire Stylish</p>
        <p className="title">Dresses & Looks</p>
        <button>Show More</button>
      </div>
      <div className="image-container">
        <img src={BannerImg} alt="Model" />
      </div>
    </div>
  );
};

export default Banner;
