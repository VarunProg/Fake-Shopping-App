import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineInsertLink } from "react-icons/md";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { AiFillHome, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import { SiAboutdotme } from "react-icons/si";

import { Link, NavLink, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../Hooks";
import { removeProduct } from "../Store/cartSlice";
import { Iproduct } from "./App";
const sizeMedia = window.matchMedia("(max-width: 720px)");
// console.log(sizeMedia.matches, "media query");
const getTotalPrice = (items: Iproduct[]) => {
  return items.reduce((acc, item) => (acc += item.price), 0);
};

const Navbar = () => {
  const [isMobile, setIsMobile] = useState<boolean>(sizeMedia.matches); //media query
  const [showMenu, setShowMenu] = useState<boolean>(false); //toggle classes to show li list
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { pathname } = useLocation();
  const cartState = useAppSelector((state) => state.cart); // get cart state
  const dispatch = useAppDispatch(); // updatind state

  //   console.log(sizeMedia);
  //event listener on screen size change
  useEffect(() => {
    sizeMedia.addEventListener("change", (e) => {
      //   console.log(e.matches);
      setIsMobile(e.matches);
    });
  }, []);

  const ListItems = () => {
    return (
      <ul
        //remove li on click
        onClick={() => {
          setShowMenu(false);
        }}
        className={isMobile ? "mobileMenu" : ""}
      >
        {/* to shoow list on large screen */}
        <li className={pathname === "/" ? "active" : ""}>
          <Link to="/">
            <AiFillHome size={23} />
          </Link>
        </li>
        {/* <li>
                <Link to="/About">
                  <SiAboutdotme size={23} />
                </Link>
              </li> */}
        <li className={pathname === "/product/new" ? "active" : ""}>
          <Link to="/product/new">
            <MdOutlineInsertLink size={28} />
          </Link>
        </li>
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
      </ul>
    );
  };
  return (
    <>
      <header>
        <nav>
          <h3>
            <Link to="/">ShoppingApp </Link>
          </h3>
          {/* to show data on small screen isMobile conditonal rendering*/}
          {isMobile ? (
            <div className="hamburger" style={{ zIndex: 1 }}>
              <div
                className="hamburger-image"
                onClick={() => {
                  //if click make it true and click again make it false
                  setShowMenu(!showMenu);
                }}
                style={{ padding: "10px", cursor: "pointer" }}
              >
                {showMenu ? (
                  <AiOutlineClose size={30} />
                ) : (
                  <AiOutlineMenu size={30} />
                )}
              </div>
              {showMenu ? <ListItems /> : null}
            </div>
          ) : (
            <ListItems />
          )}
        </nav>
        <hr />
      </header>
    </>
  );
};

export default Navbar;

//add remove item button
