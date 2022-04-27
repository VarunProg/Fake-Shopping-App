import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../Hooks";
import { removeProduct } from "../Store/cartSlice";
import { Iproduct } from "./App";

const getTotalPrice = (items: Iproduct[]) => {
  return items.reduce((acc, item) => (acc += item.price), 0);
};
const Cart = () => {
  const cartState = useAppSelector((state) => state.cart); // get cart state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { pathname } = useLocation();
  const dispatch = useAppDispatch(); // updatind state
  return (
    <>
      <li
        className={`${pathname === "#" ? "active" : ""} cartIcon`}
        onClick={() => {
          setIsCartOpen(!isCartOpen);
        }}
      >
        <FaShoppingCart size={23} />
        <span>{cartState.totalItems}</span>
        {isCartOpen ? (
          <div className="cartItmes">
            {cartState.totalItems === 0 ? (
              <h3>No items in Cart</h3>
            ) : (
              <div className="cartContent">
                <ul>
                  {[...cartState.items].map((item) => {
                    return (
                      <li>
                        {item.name}{" "}
                        <button
                          onClick={(e) => {
                            e.stopPropagation(); //event prevent bubbled
                            dispatch(removeProduct({ id: item.id }));
                          }}
                        >
                          <IoIosRemoveCircleOutline />
                        </button>
                      </li>
                    );
                  })}
                </ul>
                <p>Total Price {getTotalPrice(cartState.items)}</p>
              </div>
            )}
          </div>
        ) : null}
      </li>
    </>
  );
};

export default Cart;
