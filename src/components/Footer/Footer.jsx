import React from "react";
import "./Footer.css";
import footer_logo from "../Assest/logo_big.png";
import instgram from "../Assest/instagram_icon.png";
import whatsapp from "../Assest/whatsapp_icon.png";
import pintester from "../Assest/pintester_icon.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOPPING</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
          <img src={instgram} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={whatsapp} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={pintester} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved </p>
      </div>
    </div>
  );
}
