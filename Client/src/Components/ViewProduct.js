import React from "react";
import "./ViewProduct.css";
import ProductCard from "./ProductCard";
function ViewProduct() {
  return (
    <div className="viewProduct_container">
      <ProductCard
        ProductLocation="Pookiparamb,Rishad’s  brother’s house"
        ProductName="Fresh Tomato "
        ProductPrice="12"
        ProductImage="https://image.shutterstock.com/image-photo/still-life-tomatoes-dark-background-260nw-1153878625.jpg"
      />
      <div className="product_detail">
        <h1>Description</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like). There
          are many variations of passages of Lorem Ipsum available, but the
          majority have suffered alteration in some form, by injected humour, or
          randomised words which don't look even slightly believable. If you are
          going to use a passage of Lorem Ipsum, you need to be sure there isn't
          anything embarrassing hidden in the middle of text. All the Lorem
          Ipsum generators on the Internet tend to repeat predefined chunks as
   
        </p>
        <div className="button_combination">
          <h3 className="addtocart">Add To Cart</h3>
          <h3 className="buynow">Buy Now!</h3>
        </div>
      </div>
    </div>
  );
}

export default ViewProduct;
