import React, { useEffect, useState } from "react";
import { MdOutlineInsertLink } from "react-icons/md";
import { AiFillHome, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import { SiAboutdotme } from "react-icons/si";

import { Link, useLocation } from "react-router-dom";
import Cart from "./Cart";
const sizeMedia = window.matchMedia("(max-width: 720px)");
// console.log(sizeMedia.matches, "media query");

const Navbar = () => {
  const [isMobile, setIsMobile] = useState<boolean>(sizeMedia.matches); //media query
  const [showMenu, setShowMenu] = useState<boolean>(false); //toggle classes to show li list
  const { pathname } = useLocation();

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
        <Cart />
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
