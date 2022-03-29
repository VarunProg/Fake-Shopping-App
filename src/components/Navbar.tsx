import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
const sizeMedia = window.matchMedia("(max-width: 720px)");

const Navbar = () => {
  const [isMobile, setIsMobile] = useState();

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
            "hamburger"
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
                <Link to="/product/new">UploadNewItems</Link>
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
