import React from "react";
import "./RelatedProduct.css";
import data_product from "../Assest/data";
import Item from "../Item/Item";

export default function RelatedProducts() {
  return (
    <div className="related-products">
      <h1>Related Products </h1>
      <hr />
      <div className="related-item">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
}
