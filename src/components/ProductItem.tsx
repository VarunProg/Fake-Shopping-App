import React from "react";
import { useAppDispatch, useAppSelector } from "../Hooks";
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
  const ids = useAppSelector((state) => state.cart.ids);
  const addToCart = () => {
    dispatch(addProduct(product));
  };
  //disable button on click
  // const isAlreadyInCart = () => {
  //   if (ids.includes(product.id)) {
  //     return true;
  //   }
  //   return false;
  // };
  //disabled data on click
  const isAlreadyInCart = ids.includes(product.id);
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
        <button disabled={isAlreadyInCart} onClick={addToCart}>
          {isAlreadyInCart ? "Added to Cart" : "Add to cart"}
        </button>
      </div>
    </>
  );
};

export default ProductItem;
