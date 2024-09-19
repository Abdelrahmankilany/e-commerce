import React, { useContext } from "react";
import ShopContext from "../context/Shopcontext_Assist";
import { useParams } from "react-router-dom";
import BreadCrum from "../components/BreadCrums/BreadCrum";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../components/RelatedProduct/RelatedProduct";

export default function Product() {
  window.scrollTo(0, 0);
  const { all_Product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_Product.find((e) => e.id === Number(productId));
  return (
    <div>
      <BreadCrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
}
