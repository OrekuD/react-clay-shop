import React from "react";
import { ProductProps } from "../../types";

const ProductCard = ({
  product: { image, name, price, description },
}: {
  product: ProductProps;
}) => (
  <div className="product">
    <img src={image} alt={name} />
    <div className="content">
      <div>
        <p className="card-title">{name}</p>
        <p className="description">{description}</p>
      </div>
      <div className="bottom-section">
        <p className="card-title">${price}</p>
        <button className="button-main">Show Now</button>
      </div>
    </div>
  </div>
);

export default ProductCard;
