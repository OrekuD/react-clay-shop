import React from "react";
import "./Products.scss";
import { products } from "../../data/products";
import ProductCard from "./ProductCard";

const Products = () => (
  <div className="wrapper">
    <div className="products">
      <p className="card-title">You may like</p>
      <div className="items">
        {products.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    </div>
  </div>
);

export default Products;
