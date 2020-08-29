import React from "react";
import "./Products.scss";
import { products } from "../../data/products";

const Products = () => (
  <div className="products">
    <p className="card-title">You may like</p>
    <div className="items">
      {products.map(({ image, name, price, description }, index) => (
        <div className="product" key={index}>
          <img src={image} alt={name} />
          <div className="content">
            <div>
              <p className="card-title">{name}</p>
              <p className="description">{description}</p>
            </div>
            <div className="bottom-section">
              <p className="card-title">${price}</p>
              <button>Show Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Products;
