import React from "react";
import { useAppDispatch } from "../Hooks";
import { addProduct } from "../Store/cartSlice";
import { Iproduct } from "./App";
import StarRating from "./StarRating";
// imporeted interface Iproduct and implemented to the productItem props
interface Iprops {
  product: Iproduct;
}

// recieved props and destructured props data and set imported data type to props
const ProductItem = ({ product }: Iprops) => {
  const dispatch = useAppDispatch();
  const addToCart = () => {
    dispatch(addProduct(product));
  };
  return (
    <>
      <div className="item-container">
        <img src={product.image} alt="" />
        <footer>
          <h3>{product.name}</h3>
          <p> €{product.price}</p>
          <p> {product.catergory}</p>
          {/* <p> {product.description}</p> */}
          {/* sending props to StarRating currentRating and totalRating */}
          {/* <p>{product.rating}</p> */}
          <p>
            {
              <StarRating
                totalRating={5}
                currentRating={product.rating}
                fill="orange"
              />
            }
          </p>
        </footer>
        <button onClick={addToCart}>Add to cart</button>
      </div>
    </>
  );
};

export default ProductItem;
