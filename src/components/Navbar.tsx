import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineInsertLink } from "react-icons/md";
import { AiFillHome, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import { SiAboutdotme } from "react-icons/si";

import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../Hooks";
const sizeMedia = window.matchMedia("(max-width: 720px)");
console.log(sizeMedia.matches, "media query");
import hamburger from "../images/hamburgerFinal.png";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState<boolean>(sizeMedia.matches);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const cartState = useAppSelector((state) => state.cart);

  //   console.log(sizeMedia);
  useEffect(() => {
    sizeMedia.addEventListener("change", (e) => {
      //   console.log(e.matches);
      setIsMobile(e.matches);
    });
  }, []);

  const ListItems = () => {
    return (
      <ul
        onClick={() => {
          setShowMenu(false);
        }}
        className={isMobile ? "mobileMenu" : ""}
      >
        {/* to shoow list on large screen */}
        <li>
          <Link to="/">
            <AiFillHome size={23} />
          </Link>
        </li>
        {/* <li>
                <Link to="/About">
                  <SiAboutdotme size={23} />
                </Link>
              </li> */}
        <li>
          <Link to="/product/new">
            <MdOutlineInsertLink size={28} />
          </Link>
        </li>
        <li>
          <FaShoppingCart size={23} />
          <span>{cartState.totalItems}</span>
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
                onClick={() => {
                  setShowMenu(!showMenu);
                }}
                className="hamburger-image"
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
