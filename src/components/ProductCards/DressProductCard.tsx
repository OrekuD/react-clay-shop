import React, { useState } from "react";
import "./ProductCard.scss";
import Image1 from "../../assets/images/dress-1.jpg";
import Image2 from "../../assets/images/dress-2.png";
import Image3 from "../../assets/images/dress-3.png";
import Image4 from "../../assets/images/dress-4.png";
import Image5 from "../../assets/images/dress-5.png";
import HeartIcon from "../../assets/icons/heart_icn.png";
import { Star } from "../../svg/Svg";
import { pink, lightgrey, purple } from "../../constants/Colors";

const images = [
  { source: Image1 },
  { source: Image2 },
  { source: Image3 },
  { source: Image4 },
  { source: Image5 },
];

const starRatings = [pink, pink, pink, pink, lightgrey];

const sizes = ["XS", "S", "M"];

const Info = () => {
  const [activeColorIndex, setActiveColorIndex] = useState<number>(1);
  const [activeSizeIndex, setActiveSizeIndex] = useState<number>(0);

  return (
    <div className="info-container">
      <p>
        Dress with tulle and collar Peter Pan from REDValentino (Red Valentino).
        Peter Pan collar, tulle panels, sleeveless model, concealed back zipper
        and pleated skirt. Black colour.
      </p>
      <div className="specs-container">
        <div className="sizes-container">
          <p>Size</p>
          <div className="sizes">
            {sizes.map((size, index) => (
              <div
                onClick={() => setActiveColorIndex(index)}
                className="size"
                style={{
                  borderWidth: activeColorIndex === index ? 0 : 1,
                  backgroundColor:
                    activeColorIndex === index ? pink : "transparent",
                }}
                key={index}
              >
                <p
                  style={{
                    color: activeColorIndex === index ? "white" : purple,
                  }}
                >
                  {size}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const tabs = [
  { name: "Info", content: <Info /> },
  { name: "Brand", content: <Info /> },
  { name: "Delivery", content: <Info /> },
];

const DressProductCard = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  return (
    <div className="cards-container">
      <div className="dress-product-card">
        <div className="image-section">
          <img
            src={images[activeImageIndex].source}
            alt="Product"
            className="active-image"
          />
        </div>
        <div className="product-content">
          <div className="row-1">
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
        </div>
      </div>
    </div>
  );
};

export default DressProductCard;
