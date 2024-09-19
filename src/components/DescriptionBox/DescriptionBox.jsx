import React from "react";
import "./DescriptionBox.css";

export default function DescriptionBox() {
  return (
    <div className="description-box">
      <div className="description-nav">
        <div className="description-nav-box">Description</div>
        <div className="description-nav-box fade">Reviews (130)</div>
      </div>
      <div className="description">
        <p>
          (SHOPPING store) is a contemporary clothing store that offers chic and
          stylish clothing for both men, women and Kids. From romantic lace and
          flowy maxi dresses to edgy leather jackets and timeless trench coats,
          this store has something for everyone.
        </p>
      </div>
    </div>
  );
}
