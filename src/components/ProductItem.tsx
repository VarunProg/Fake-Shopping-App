import React from "react";
import { Iproduct } from "./App";

interface Iprops {
  product: Iproduct;
}

// recieved props and destructured props data and set imported data type to props
const ProductItem = ({ product }: Iprops) => {
  return (
    <>
      <div className="item-container">
        <img src={product.image} alt="" />
        <footer>
          <h2>{product.name}</h2>
          <p> €{product.price}</p>
          <p>{product.rating}</p>
        </footer>
      </div>
    </>
  );
};

export default ProductItem;
