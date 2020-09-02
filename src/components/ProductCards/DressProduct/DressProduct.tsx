import React, { useState } from "react";
import "./DressProduct.scss";
import Image1 from "../../../assets/images/dress-1.jpg";
import Image3 from "../../../assets/images/dress-3.jpg";
import Image4 from "../../../assets/images/dress-4.jpg";
import Image5 from "../../../assets/images/dress-5.jpg";
import HeartIcon from "../../../assets/icons/heart_icn.png";
import { Star, ChevronRight, ChevronLeft } from "../../../svg/Svg";
import { pink, lightgrey, purple } from "../../../constants/Colors";
import { Info, Brand, Delivery } from "./Tabs";

const images = [
  { source: Image1 },
  { source: Image3 },
  { source: Image4 },
  { source: Image5 },
];

const starRatings = [pink, pink, pink, pink, lightgrey];

const tabs = [
  { name: "Info", content: <Info /> },
  { name: "Brand", content: <Brand /> },
  { name: "Delivery", content: <Delivery /> },
];

const DressProduct = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  return (
    <div className="cards-container">
      <div className="dress-product-card">
        <div className="images-section">
          <div className="active-image-container">
            <div
              className="prev-icon"
              onClick={() =>
                setActiveImageIndex(
                  activeImageIndex === 0
                    ? images.length - 1
                    : activeImageIndex - 1
                )
              }
            >
              <ChevronLeft size={12} color="grey" />
            </div>
            <img
              src={images[activeImageIndex].source}
              alt="Product"
              className="active-image"
            />
            <div
              className="next-icon"
              onClick={() =>
                setActiveImageIndex(
                  activeImageIndex === images.length - 1
                    ? 0
                    : activeImageIndex + 1
                )
              }
            >
              <ChevronRight size={12} color="grey" />
            </div>
          </div>
          <div className="all-images">
            {images.map(({ source }, index) => (
              <div
                className="image-container"
                style={{ borderWidth: activeImageIndex === index ? 1 : 0 }}
                key={index}
                onClick={() => setActiveImageIndex(index)}
              >
                <img src={source} alt="Dress" />
              </div>
            ))}
          </div>
        </div>
        <div className="product-content">
          <div className="row">
            <div className="badge">
              <p>Popular</p>
            </div>
            <div className="heart-icon">
              <img src={HeartIcon} alt="heart-icon" />
            </div>
          </div>
          <p className="card-title">Black Valentino</p>
          <p className="card-title">dress with tulle</p>
          <div className="rating-container">
            {starRatings.map((color, index) => (
              <div className="star">
                <Star size={20} color={color} key={index} />
              </div>
            ))}
            <p>132 reviews</p>
          </div>
          <div className="tabs">
            {tabs.map(({ name }, index) => (
              <div
                className="tab"
                style={{
                  color: activeTabIndex === index ? pink : purple,
                  borderBottomColor:
                    activeTabIndex === index ? pink : lightgrey,
                }}
              >
                <p onClick={() => setActiveTabIndex(index)}>{name}</p>
              </div>
            ))}
          </div>
          <div className="tab-content">{tabs[activeTabIndex].content}</div>
          <div className="bottom-row">
            <p className="card-title">$1315</p>
            <button className="button-main">Shop Now</button>
            <button className="button-main">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DressProduct;
