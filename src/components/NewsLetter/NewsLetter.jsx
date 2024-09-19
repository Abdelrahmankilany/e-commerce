import React from "react";
import "./NewsLetter.css";

export default function NewsLetter() {
  return (
    <div className="news-letter">
      <h1>Get Exclusive Offers on your Email</h1>
      <p>Subscribe to our new letter and stay updated </p>
      <div>
        <input type="email" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}
