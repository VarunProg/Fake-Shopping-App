import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineInsertLink } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
// import { SiAboutdotme } from "react-icons/si";

import { Link } from "react-router-dom";
import { useAppSelector } from "../Hooks";
const sizeMedia = window.matchMedia("(max-width: 720px)");
import hamburger from "../images/hamburgerFinal.png";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState<boolean>();
  const cartState = useAppSelector((state) => state.cart);

  //   console.log(sizeMedia);
  useEffect(() => {
    sizeMedia.addEventListener("change", (e) => {
      //   console.log(e.matches);
      setIsMobile(e.matches);
    });
  }, []);

  return (
    <>
      <header>
        <nav>
          <h3>
            <Link to="/">ShoppingApp </Link>
          </h3>
          {/* to show data on small screen isMobile conditonal rendering*/}
          {isMobile ? (
            <img
              style={{ height: "50px" }}
              src={hamburger}
              alt="HamburgerMenu"
            />
          ) : (
            <ul>
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
          )}
        </nav>
        <hr />
      </header>
    </>
  );
};

export default Navbar;
