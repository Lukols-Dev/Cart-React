import "./list.product.css";

import React from "react";
import ProductCard from "./card.product.jsx";

const ProductList = ({ data }) => {
  if (!data && data.lenhgt === 0) return;
  return (
    <ul className="productList">
      {data.map((item, index) => (
        <li key={index}>
          <ProductCard
            name={item.name}
            price={item.price}
            disable={item.isBlocked}
            min={item.min}
            max={item.max}
            pid={item.pid}
          />
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
