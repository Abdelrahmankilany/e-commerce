import React, { useContext, useRef, useState } from "react";
import "./navebar.css";
import logo from "../Assest/logo.png";
import cart_icon from "../Assest/cart_icon.png";
import { Link } from "react-router-dom";
import ShopContext from "../../context/Shopcontext_Assist";
import nav_dropdown from "../Assest/nave_dropdown.png";

export default function Navebar() {
  const { getTotalCartItems } = useContext(ShopContext);
  const [menu, setMenu] = useState("shop");
  const menuRef = useRef();
  const dropdown_toggel = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <div className="navebar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPING</p>
      </div>
      <img
        className="nav-dropdown"
        onClick={dropdown_toggel}
        src={nav_dropdown}
        alt=""
      />
      <ul ref={menuRef} className="nav-menu ">
        <li
          onClick={() => {
            setMenu("shop");
          }}>
          <Link to={"/"}>Shop</Link> {menu === "shop" ? <hr /> : ""}
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}>
          <Link to={"/men"}>Men</Link> {menu === "men" ? <hr /> : ""}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}>
          <Link to={"/women"}>Women</Link> {menu === "women" ? <hr /> : ""}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}>
          <Link to={"/kids"}>Kids</Link> {menu === "kids" ? <hr /> : ""}
        </li>
      </ul>
      <div className="login-cart">
        {localStorage.getItem("userData") ? (
          <button
            onClick={() => {
              localStorage.removeItem("userData");
              window.location.replace("/");
            }}>
            Log out
          </button>
        ) : (
          <Link to={"/login"}>
            <button
              onClick={() => {
                setMenu("");
              }}>
              Login
            </button>
          </Link>
        )}

        <Link to={"/cart"}>
          <img
            src={cart_icon}
            alt=""
            onClick={() => {
              setMenu("");
            }}
          />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
}
