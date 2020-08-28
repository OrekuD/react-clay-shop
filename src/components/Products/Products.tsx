import React from "react";
import "./Products.scss";
import { products } from "../../data/products";
import { purple, pink } from "../../constants/Colors";

const Products = () => (
  <div className="products">
    {products.map(({ image, name, price, description }, index) => (
      <div className="product" key={index}>
        <img src={image} alt={name} />
        <div className="content">
          <p className="card-title" style={{ color: purple }}>
            {name}
          </p>
          <p className="" style={{ color: purple }}>
            {description}
          </p>
          <div className="bottom-section">
            <p className="card-title" style={{ color: purple }}>
              ${price}
            </p>
            <button>Show Now</button>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default Products;
