import React, { useContext } from "react";
import "./CartItem.css";
import ShopContext from "../../context/Shopcontext_Assist";
import remove_icon from "../Assest/cart_cross_icon.png";

export default function CartItem() {
  const { getTotalCart, all_Product, cartItems, removeFromCart } =
    useContext(ShopContext);

  return (
    <div className="cart-item">
      <div className="cartItem-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_Product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartItem-main cartItem-format">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="quantity-btn">{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  className="cartItem-remove"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartItem-down">
        <div className="cart-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cart-totalItem">
              <p>Subtotal</p>
              <p>${getTotalCart()}</p>
            </div>
            <hr />
            <div className="cart-totalItem">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cart-totalItem">
              <h3>Total</h3>
              <h3>${getTotalCart()}</h3>
            </div>
          </div>
          <button>Proceed To Checkout</button>
        </div>
        <div className="cartItem-promocode">
          <p>If you have a Promo code, Enter it here</p>
          <div className="cartItem-promobox">
            <input type="text" placeholder="Promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
