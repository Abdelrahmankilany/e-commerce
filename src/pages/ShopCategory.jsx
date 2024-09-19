import React, { useContext } from "react";
import "./Css/ShopCategory.css";
import dropDown_icon from "../components/Assest/dropdown_icon.png";
import Item from "../components/Item/Item";
import ShopContext from "../context/Shopcontext_Assist";

export default function ShopCategory(props) {
  const { all_Product } = useContext(ShopContext);
  return (
    <div className="Shop-category">
      <img className="ShopCategory-banner" src={props.banner} alt="" />
      <div className="shopCategory-index">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopCategory-sort">
          sort by <img src={dropDown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_Product.map((item, i) => {
          if (props.category === item.category) {
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
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
}
