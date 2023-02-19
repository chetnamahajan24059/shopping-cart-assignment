import React from "react";
import { Link } from "react-router-dom";
import Image from "../../Image";
import "./logo.scss";

const Logo = () => {
  return (
    <Link to="/" className="logo">
      <Image
        src="http://localhost:4001/static/images/logo.png"
        srcSet="http://localhost:4001/static/images/logo.png 480w, http://localhost:4001/static/images/logo_2x.png 800w"
        alt="sabka bazar logo image"
        className=""
      />
    </Link>
  );
};

export default Logo;
