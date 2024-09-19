import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assest/star_icon.png";
import star_dull_icon from "../Assest/star_dull_icon.png";
import ShopContext from "../../context/Shopcontext_Assist";

export default function ProductDisplay(props) {
  const { addToCart } = useContext(ShopContext);

  const { product } = props;
  return (
    <div className="product-display">
      <div className="product-left">
        <div className="product-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="product-img">
          <img className="main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="product-right">
        <h1>{product.name}</h1>
        <div className="product-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(130)</p>
        </div>
        <div className="product-right-prices">
          <div className="old-price">${product.old_price}</div>
          <div className="new-price">${product.new_price}</div>
        </div>
        <div className="product-description">
          A lightweight, Usually knitted, Pullover shirt,close-fitting and with
          around nickline and short sleeves .
        </div>
        <div className="product-size">
          <h1>Select Size</h1>
          <div className="product-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}>
          Add to Cart
        </button>
        <p className="product-category">
          <span>Category : </span> Women, T-Shirt, Crop-Top
        </p>
        <p className="product-category">
          <span>Tags : </span> Modern, Latest
        </p>
      </div>
    </div>
  );
}
