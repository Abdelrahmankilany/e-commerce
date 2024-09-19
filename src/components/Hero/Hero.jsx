import React from "react";
import "./Hero.css";
import handIcon from "../Assest/hand_icon.png";
import arrowIcon from "../Assest/arrow.png";
import heroImg from "../Assest/hero_image.png";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New arrivals Only</h2>
        <div>
          <div className="hand-icon">
            <p>NEW</p>
            <img src={handIcon} alt="" />
          </div>
          <p>Collection</p>
          <p>For Everyone</p>
        </div>
        <div className="latest-btn">
          <div>Latest Collection</div>
          <img src={arrowIcon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
}
