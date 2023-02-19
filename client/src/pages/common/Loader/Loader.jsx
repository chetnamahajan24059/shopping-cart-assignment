import React from "react";
import Image from "../Image";
import "./loader.scss";

const Loader = () => (
  <div className="loader">
    <Image
      src="http://localhost:4001/static/svg/loader.svg"
      srcSet="http://localhost:4001/static/svg/loader-big.svg 480w, http://localhost:4001/static/svg/loader-small.svg 800w"
      className="loader-logo"
      alt="something is loading"
    />
  </div>
);

export default Loader;
