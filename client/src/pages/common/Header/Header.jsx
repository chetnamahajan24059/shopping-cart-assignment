import React from "react";
import Logo from "./Logo";
import MainNav from "./Nav";
import Cart from "./Cart";
import Login from "./Login";
import "./header.scss";

const Header = () => {
  return (
    <header>
      <div className="left-nav">
        <Logo />
        <MainNav />
      </div>
      <div className="right-nav">
        <Login />
        <Cart />
      </div>
    </header>
  );
};

export default Header;
