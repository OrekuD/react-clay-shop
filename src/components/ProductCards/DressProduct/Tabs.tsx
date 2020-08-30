import React, { useState } from "react";
import { pink, purple } from "../../../constants/Colors";

const sizes = ["XS", "S", "M"];
const colors = ["#1C2437", "#117680", "#32E1C4"];

const Info = () => {
  const [activeColorIndex, setActiveColorIndex] = useState<number>(0);
  const [activeSizeIndex, setActiveSizeIndex] = useState<number>(1);

  return (
    <div className="info-container">
      <p>
        Dress with tulle and collar Peter Pan from REDValentino (Red Valentino).
        Peter Pan collar, tulle panels, sleeveless model, concealed back zipper
        and pleated skirt. Black colour.
      </p>
      <div className="specs-container">
        <div>
          <p>Size</p>
          <div className="sizes">
            {sizes.map((size, index) => (
              <div
                onClick={() => setActiveSizeIndex(index)}
                className="size"
                style={{
                  borderWidth: activeSizeIndex === index ? 0 : 1,
                  backgroundColor:
                    activeSizeIndex === index ? pink : "transparent",
                }}
                key={index}
              >
                <p
                  style={{
                    color: activeSizeIndex === index ? "white" : purple,
                  }}
                >
                  {size}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="colors-container">
          <p>Color</p>
          <div className="colors">
            {colors.map((color, index) => (
              <div
                className="active-color"
                onClick={() => setActiveColorIndex(index)}
                style={{
                  borderColor:
                    activeColorIndex === index ? color : "transparent",
                }}
              >
                <div
                  className="color"
                  key={index}
                  style={{ backgroundColor: color }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Brand = () => (
  <div className="brand-container">
    <p>Brand</p>
  </div>
);

const Delivery = () => (
  <div className="brand-container">
    <p>Delivery</p>
  </div>
);

export { Info, Brand, Delivery };
