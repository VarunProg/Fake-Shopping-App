import React from "react";
import { Iproduct } from "./App";
import StarRating from "./StarRating";

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
          <h3>{product.name}</h3>
          <p> €{product.price}</p>
          {/* sending props to StarRating currentRating and totalRating */}
          {/* <p>{product.rating}</p> */}
          <p>{<StarRating totalRating={5} currentRating={product.rating} />}</p>
        </footer>
      </div>
    </>
  );
};

export default ProductItem;
