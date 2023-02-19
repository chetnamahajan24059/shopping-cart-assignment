import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./nav.scss";

const Nav = () => {
  const location = useLocation();

  return (
    <nav aria-label="Main" className="main-nav">
      <ul>
        <li>
          <Link
            to="/"
            aria-current={location.pathname === "/" ? "page" : "false"}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            aria-current={location.pathname === "/products" ? "page" : "false"}
          >
            Products
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
