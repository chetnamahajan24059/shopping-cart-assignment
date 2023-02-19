import React from "react";
import { Link } from "react-router-dom";
import Image from "../../Image";
import "./cart.scss";

const Cart = () => {
  return (
    <Link to="/cart" className="cart">
      <Image
        src="http://localhost:4001/static/images/cart.svg"
        srcSet=""
        sizes=""
        alt="shopping cart"
        className=""
      />
      <b>0 items</b>
    </Link>
  );
};

export default Cart;
