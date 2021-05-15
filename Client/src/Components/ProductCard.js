import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard(props) {
  return (
    <Link to='viewproduct' className="productCard_container">
      <div
        className="productImage"
        style={{ background: `url(${props.ProductImage})`}}
      ></div>
      <p>{props.ProductLocation}</p>
      <h3>{props.ProductName}</h3>
      <h2>${props.ProductPrice}/{props.ProductMeasure}</h2>
    </Link>
  );
}

export default ProductCard;
