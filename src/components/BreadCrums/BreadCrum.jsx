import React from "react";
import "./Breadcrum.css";
import arrow_icon from "../Assest/breadcrum_arrow.png";

export default function BreadCrum(props) {
  const { product } = props;
  return (
    <div className="breadcrum">
      Home <img src={arrow_icon} alt="" /> Shop <img src={arrow_icon} alt="" />
      {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  );
}
