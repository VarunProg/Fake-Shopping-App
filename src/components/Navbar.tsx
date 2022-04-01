import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
const sizeMedia = window.matchMedia("(max-width: 720px)");
import hamburger from "../images/hamburgerFinal.png";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState<boolean>();

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
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="/product/new">UploadNewItem</Link>
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
