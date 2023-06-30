import "./card.product.css";

import React from "react";
import Input from "../common/input.common.jsx";
import { formatCurrency } from "../../ulits/formatPrice.util.js";

const ProductCard = ({ name, pid, price, disable, min, max }) => {
  return (
    <div className="productCard">
      <p>{name}</p>
      <div className="productCard__pricing">
        <p>{formatCurrency(price)}</p>
        <Input pid={pid} disable={disable} min={min} max={max} />
      </div>
    </div>
  );
};

export default ProductCard;
